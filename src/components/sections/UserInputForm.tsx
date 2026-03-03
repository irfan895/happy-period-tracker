import { useState } from 'react';
import { User, Calendar, Frown, Smile, Activity, Heart, ChevronRight, Clock, Droplets } from 'lucide-react';
import type { UserData, CyclePhase, Mood } from '@/types';

interface UserInputFormProps {
  onSubmit: (data: UserData) => void;
}

const moods: { value: Mood; label: string; emoji: string }[] = [
  { value: 'calm', label: 'Calm', emoji: '😌' },
  { value: 'happy', label: 'Happy', emoji: '😊' },
  { value: 'energetic', label: 'Energetic', emoji: '⚡' },
  { value: 'tired', label: 'Tired', emoji: '😴' },
  { value: 'anxious', label: 'Anxious', emoji: '😰' },
  { value: 'irritable', label: 'Irritable', emoji: '😤' },
  { value: 'sad', label: 'Sad', emoji: '😢' },
];

const phases: { value: CyclePhase; label: string; description: string }[] = [
  { value: 'menstrual', label: 'Menstrual', description: 'Days 1-5' },
  { value: 'follicular', label: 'Follicular', description: 'Days 6-14' },
  { value: 'ovulation', label: 'Ovulation', description: 'Days 15-17' },
  { value: 'luteal', label: 'Luteal', description: 'Days 18-28' },
];

export function UserInputForm({ onSubmit }: UserInputFormProps) {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    age: 25,
    phase: 'menstrual',
    painLevel: 3,
    mood: 'calm',
    lastPeriodStart: '',
    lastPeriodEnd: '',
    cycleLength: 28,
    periodDuration: 5,
  });

  const [showPeriodTracking, setShowPeriodTracking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onSubmit(formData);
    }
  };

  const getPainLabel = (level: number): string => {
    if (level <= 2) return 'Very Mild';
    if (level <= 4) return 'Mild';
    if (level <= 6) return 'Moderate';
    if (level <= 8) return 'Strong';
    return 'Severe';
  };

  const getPainColor = (level: number): string => {
    if (level <= 3) return 'text-green-500';
    if (level <= 5) return 'text-yellow-500';
    if (level <= 7) return 'text-orange-500';
    return 'text-red-500';
  };

  // Get today's date in YYYY-MM-DD format for max date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-pink-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Tell us how you are feeling today
          </h2>
          <p className="text-gray-500">
            We will create a personalized wellness guide just for you
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
              <User className="w-5 h-5 text-pink-500" />
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              required
            />
          </div>

          {/* Age Input */}
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-3">
              <Calendar className="w-5 h-5 text-pink-500" />
              Your Age
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="13"
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                className="flex-1"
              />
              <span className="text-2xl font-semibold text-pink-500 w-16 text-center">
                {formData.age}
              </span>
            </div>
          </div>

          {/* Period Tracking Toggle */}
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <button
              type="button"
              onClick={() => setShowPeriodTracking(!showPeriodTracking)}
              className="w-full flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Period Tracking</h3>
                  <p className="text-sm text-gray-500">Add dates to predict your next period</p>
                </div>
              </div>
              <ChevronRight 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showPeriodTracking ? 'rotate-90' : ''}`} 
              />
            </button>

            {showPeriodTracking && (
              <div className="mt-6 pt-6 border-t border-pink-100 space-y-5 animate-slide-up">
                {/* Last Period Start Date */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    When did your last period start? <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.lastPeriodStart}
                    max={today}
                    onChange={(e) => setFormData({ ...formData, lastPeriodStart: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  />
                </div>

                {/* Last Period End Date */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Calendar className="w-4 h-4 text-pink-500" />
                    When did it end? <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.lastPeriodEnd}
                    min={formData.lastPeriodStart}
                    max={today}
                    onChange={(e) => setFormData({ ...formData, lastPeriodEnd: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  />
                </div>

                {/* Cycle Length */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Clock className="w-4 h-4 text-pink-500" />
                    Average cycle length
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="21"
                      max="35"
                      value={formData.cycleLength}
                      onChange={(e) => setFormData({ ...formData, cycleLength: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <div className="text-center w-20">
                      <span className="text-2xl font-semibold text-pink-500">{formData.cycleLength}</span>
                      <span className="text-sm text-gray-400 block">days</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Most women have cycles between 21-35 days (28 is average)</p>
                </div>

                {/* Period Duration */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <Droplets className="w-4 h-4 text-pink-500" />
                    Average period duration
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="2"
                      max="8"
                      value={formData.periodDuration}
                      onChange={(e) => setFormData({ ...formData, periodDuration: parseInt(e.target.value) })}
                      className="flex-1"
                    />
                    <div className="text-center w-20">
                      <span className="text-2xl font-semibold text-pink-500">{formData.periodDuration}</span>
                      <span className="text-sm text-gray-400 block">days</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Most periods last 3-7 days</p>
                </div>
              </div>
            )}
          </div>

          {/* Cycle Phase */}
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-4">
              <Activity className="w-5 h-5 text-pink-500" />
              Current Cycle Phase
            </label>
            <div className="grid grid-cols-2 gap-3">
              {phases.map((phase) => (
                <button
                  key={phase.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, phase: phase.value })}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.phase === phase.value
                      ? 'border-pink-400 bg-pink-50'
                      : 'border-gray-100 hover:border-pink-200 hover:bg-pink-50/50'
                  }`}
                >
                  <div className="font-medium text-gray-800">{phase.label}</div>
                  <div className="text-sm text-gray-400">{phase.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Pain Level */}
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-4">
              <Frown className="w-5 h-5 text-pink-500" />
              Pain Level (1-10)
            </label>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">1</span>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.painLevel}
                  onChange={(e) => setFormData({ ...formData, painLevel: parseInt(e.target.value) })}
                  className="flex-1"
                />
                <span className="text-sm text-gray-400">10</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-pink-500">{formData.painLevel}</span>
                  <span className={`font-medium ${getPainColor(formData.painLevel)}`}>
                    {getPainLabel(formData.painLevel)}
                  </span>
                </div>
                {formData.painLevel >= 8 && (
                  <span className="text-sm text-red-500 bg-red-50 px-3 py-1 rounded-full">
                    Consider consulting a healthcare provider
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mood */}
          <div className="glass-card rounded-2xl p-6 hover-lift">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-4">
              <Smile className="w-5 h-5 text-pink-500" />
              How are you feeling emotionally?
            </label>
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <button
                  key={mood.value}
                  type="button"
                  onClick={() => setFormData({ ...formData, mood: mood.value })}
                  className={`px-4 py-2 rounded-full border-2 transition-all duration-300 flex items-center gap-2 ${
                    formData.mood === mood.value
                      ? 'border-pink-400 bg-pink-50 text-pink-700'
                      : 'border-gray-100 hover:border-pink-200 hover:bg-pink-50/50'
                  }`}
                >
                  <span>{mood.emoji}</span>
                  <span>{mood.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.name.trim()}
            className="w-full py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
          >
            Get Your Wellness Guide
            <ChevronRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
