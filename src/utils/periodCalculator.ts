import type { PeriodPrediction, CyclePhase } from '@/types';

/**
 * Calculate period predictions based on last period date and cycle length
 */
export function calculatePeriodPrediction(
  lastPeriodStart: string | undefined,
  cycleLength: number,
  periodDuration: number
): PeriodPrediction | null {
  if (!lastPeriodStart) return null;

  const lastStart = new Date(lastPeriodStart);
  const today = new Date();
  
  // Calculate next period start
  const nextPeriodStart = new Date(lastStart);
  nextPeriodStart.setDate(lastStart.getDate() + cycleLength);
  
  // Calculate next period end
  const nextPeriodEnd = new Date(nextPeriodStart);
  nextPeriodEnd.setDate(nextPeriodStart.getDate() + periodDuration - 1);
  
  // Calculate ovulation date (typically 14 days before next period)
  const ovulationDate = new Date(nextPeriodStart);
  ovulationDate.setDate(nextPeriodStart.getDate() - 14);
  
  // Fertile window (5 days before ovulation + ovulation day)
  const fertileWindowStart = new Date(ovulationDate);
  fertileWindowStart.setDate(ovulationDate.getDate() - 5);
  const fertileWindowEnd = new Date(ovulationDate);
  
  // Calculate days until next period
  const diffTime = nextPeriodStart.getTime() - today.getTime();
  const daysUntilNextPeriod = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Calculate current cycle day
  const cycleDiffTime = today.getTime() - lastStart.getTime();
  const currentCycleDay = Math.floor(cycleDiffTime / (1000 * 60 * 60 * 24)) + 1;
  
  return {
    nextPeriodStart,
    nextPeriodEnd,
    ovulationDate,
    fertileWindowStart,
    fertileWindowEnd,
    daysUntilNextPeriod,
    currentCycleDay: Math.max(1, currentCycleDay),
  };
}

/**
 * Determine cycle phase based on cycle day
 */
export function getPhaseFromCycleDay(cycleDay: number, cycleLength: number): CyclePhase {
  // Menstrual: Days 1-5
  if (cycleDay <= 5) return 'menstrual';
  
  // Follicular: Days 6-14 (or until ovulation)
  const ovulationDay = cycleLength - 14;
  if (cycleDay <= ovulationDay) return 'follicular';
  
  // Ovulation: 1 day around ovulation
  if (cycleDay === ovulationDay + 1) return 'ovulation';
  
  // Luteal: After ovulation until next period
  return 'luteal';
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format date to ISO string for input
 */
export function formatDateForInput(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Get days in current month for calendar view
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get calendar data for period view
 */
export function getCalendarData(
  year: number,
  month: number,
  predictions: PeriodPrediction | null,
  lastPeriodStart?: string,
  periodDuration: number = 5
): Array<{
  date: number;
  isPeriod: boolean;
  isPredictedPeriod: boolean;
  isOvulation: boolean;
  isFertile: boolean;
  isToday: boolean;
}> {
  const daysInMonth = getDaysInMonth(year, month);
  const today = new Date();
  const calendar: ReturnType<typeof getCalendarData> = [];
  
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const dateString = formatDateForInput(currentDate);
    
    let isPeriod = false;
    let isPredictedPeriod = false;
    let isOvulation = false;
    let isFertile = false;
    
    // Check if date is in last period
    if (lastPeriodStart) {
      const lastStart = new Date(lastPeriodStart);
      const lastEnd = new Date(lastStart);
      lastEnd.setDate(lastStart.getDate() + periodDuration - 1);
      
      if (currentDate >= lastStart && currentDate <= lastEnd) {
        isPeriod = true;
      }
    }
    
    // Check predictions
    if (predictions) {
      // Predicted period
      if (currentDate >= predictions.nextPeriodStart && currentDate <= predictions.nextPeriodEnd) {
        isPredictedPeriod = true;
      }
      
      // Ovulation
      if (dateString === formatDateForInput(predictions.ovulationDate)) {
        isOvulation = true;
      }
      
      // Fertile window
      if (currentDate >= predictions.fertileWindowStart && currentDate <= predictions.fertileWindowEnd) {
        isFertile = true;
      }
    }
    
    // Check if today
    const isToday = dateString === formatDateForInput(today);
    
    calendar.push({
      date: day,
      isPeriod,
      isPredictedPeriod,
      isOvulation,
      isFertile,
      isToday,
    });
  }
  
  return calendar;
}
