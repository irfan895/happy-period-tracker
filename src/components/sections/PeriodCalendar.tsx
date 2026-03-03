import { useState, useMemo } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Droplets, Sparkles, Heart } from 'lucide-react';
import type { PeriodPrediction, UserData } from '@/types';
import { formatDate, getCalendarData } from '@/utils/periodCalculator';

interface PeriodCalendarProps {
  userData: UserData;
  prediction: PeriodPrediction | null;
}

export function PeriodCalendar({ userData, prediction }: PeriodCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const calendarDays = useMemo(() => {
    return getCalendarData(
      currentYear,
      currentMonth,
      prediction,
      userData.lastPeriodStart,
      userData.periodDuration
    );
  }, [currentYear, currentMonth, prediction, userData.lastPeriodStart, userData.periodDuration]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
  };

  // Get first day of month for offset
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="glass-card rounded-3xl p-8 animate-slide-up">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
            <CalendarIcon className="w-5 h-5 text-pink-500" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Your Cycle Calendar</h3>
            {prediction && (
              <p className="text-sm text-pink-500">
                Day {prediction.currentCycleDay} of your cycle
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <span className="font-medium text-gray-700 min-w-[120px] text-center">
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-pink-50 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={goToToday}
            className="ml-2 px-3 py-1 text-sm bg-pink-100 text-pink-600 rounded-full hover:bg-pink-200 transition-colors"
          >
            Today
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="mb-6">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-400 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty days for offset */}
          {emptyDays.map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}

          {/* Actual days */}
          {calendarDays.map((day) => (
            <div
              key={day.date}
              className={`
                aspect-square flex items-center justify-center relative rounded-lg text-sm font-medium
                transition-all duration-200
                ${day.isToday ? 'ring-2 ring-pink-400 ring-offset-2' : ''}
                ${day.isPeriod ? 'bg-pink-400 text-white' : ''}
                ${day.isPredictedPeriod ? 'bg-pink-200 text-pink-700 border-2 border-dashed border-pink-400' : ''}
                ${day.isOvulation ? 'bg-purple-400 text-white' : ''}
                ${day.isFertile && !day.isOvulation ? 'bg-purple-100 text-purple-700' : ''}
                ${!day.isPeriod && !day.isPredictedPeriod && !day.isOvulation && !day.isFertile ? 'hover:bg-gray-50 text-gray-700' : ''}
              `}
            >
              {day.date}
              
              {/* Indicators */}
              {day.isPeriod && (
                <div className="absolute bottom-1">
                  <Droplets className="w-3 h-3 text-white/70" />
                </div>
              )}
              {day.isOvulation && (
                <div className="absolute bottom-1">
                  <Sparkles className="w-3 h-3 text-white/70" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-pink-400 rounded" />
          <span className="text-gray-600">Period</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-pink-200 border-2 border-dashed border-pink-400 rounded" />
          <span className="text-gray-600">Predicted Period</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-400 rounded" />
          <span className="text-gray-600">Ovulation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-100 rounded" />
          <span className="text-gray-600">Fertile Window</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 ring-2 ring-pink-400 ring-offset-1 rounded" />
          <span className="text-gray-600">Today</span>
        </div>
      </div>

      {/* Next Period Prediction */}
      {prediction && (
        <div className="mt-6 pt-6 border-t border-pink-100">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-pink-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Droplets className="w-4 h-4 text-pink-500" />
              </div>
              <p className="text-xs text-gray-500 mb-1">Next Period</p>
              <p className="font-semibold text-gray-800">{formatDate(prediction.nextPeriodStart)}</p>
              <p className="text-xs text-pink-500 mt-1">
                {prediction.daysUntilNextPeriod > 0 
                  ? `in ${prediction.daysUntilNextPeriod} days`
                  : prediction.daysUntilNextPeriod === 0
                  ? 'Today!'
                  : `${Math.abs(prediction.daysUntilNextPeriod)} days ago`
                }
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
              </div>
              <p className="text-xs text-gray-500 mb-1">Ovulation</p>
              <p className="font-semibold text-gray-800">{formatDate(prediction.ovulationDate)}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-4 h-4 text-green-500" />
              </div>
              <p className="text-xs text-gray-500 mb-1">Cycle Length</p>
              <p className="font-semibold text-gray-800">{userData.cycleLength} days</p>
              <p className="text-xs text-gray-400 mt-1">Currently day {prediction.currentCycleDay}</p>
            </div>
          </div>
        </div>
      )}

      {!prediction && userData.lastPeriodStart && (
        <div className="mt-6 pt-6 border-t border-pink-100 text-center">
          <p className="text-gray-500 text-sm">
            Add your last period start date to see predictions
          </p>
        </div>
      )}
    </div>
  );
}
