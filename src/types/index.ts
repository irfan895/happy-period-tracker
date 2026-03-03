export type CyclePhase = 'menstrual' | 'follicular' | 'ovulation' | 'luteal';

export type Mood = 'calm' | 'anxious' | 'irritable' | 'sad' | 'energetic' | 'tired' | 'happy';

export interface UserData {
  name: string;
  age: number;
  phase: CyclePhase;
  painLevel: number;
  mood: Mood;
  // Period tracking
  lastPeriodStart?: string; // ISO date string
  lastPeriodEnd?: string; // ISO date string
  cycleLength: number; // Average days between periods (default 28)
  periodDuration: number; // Average days of bleeding (default 5)
}

export interface PeriodPrediction {
  nextPeriodStart: Date;
  nextPeriodEnd: Date;
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  daysUntilNextPeriod: number;
  currentCycleDay: number;
}

export interface PhaseInfo {
  name: string;
  description: string;
  bodyChanges: string[];
  hormoneChanges: string;
  moodChanges: string[];
  energyLevel: string;
  emotionalSensitivity: string;
  focusLevel: string;
  socialEnergy: string;
}

export interface Exercise {
  name: string;
  image: string;
  benefits: string;
  description: string;
}

export interface Book {
  title: string;
  author: string;
  description: string;
  whyHelpful: string;
  cover: string;
}

export interface PainReliefTip {
  title: string;
  description: string;
  icon: string;
}

export interface DailyQuote {
  text: string;
  author: string;
}
