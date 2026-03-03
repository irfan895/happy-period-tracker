import { useEffect, useRef, useMemo } from 'react';
import { 
  Heart, 
  Activity, 
  Brain, 
  Battery, 
  Users, 
  Target, 
  Flame,
  Droplets,
  Leaf,
  Wind,
  BookOpen,
  Quote,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import type { UserData } from '@/types';
import { 
  phaseData, 
  exercises, 
  books, 
  painReliefTips, 
  getDailyQuote, 
  getPainExplanation 
} from '@/data/wellnessData';
import { calculatePeriodPrediction } from '@/utils/periodCalculator';
import { PeriodCalendar } from './PeriodCalendar';

interface WellnessDashboardProps {
  userData: UserData;
  onReset: () => void;
}

export function WellnessDashboard({ userData, onReset }: WellnessDashboardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phaseInfo = phaseData[userData.phase];
  const phaseExercises = exercises[userData.phase];
  const dailyQuote = getDailyQuote(userData.mood, userData.phase);
  const painExplanation = getPainExplanation(userData.painLevel);

  // Calculate period prediction
  const periodPrediction = useMemo(() => {
    return calculatePeriodPrediction(
      userData.lastPeriodStart,
      userData.cycleLength,
      userData.periodDuration
    );
  }, [userData.lastPeriodStart, userData.cycleLength, userData.periodDuration]);

  useEffect(() => {
    // Scroll to dashboard when mounted
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const getMoodEmoji = (mood: string): string => {
    const emojis: Record<string, string> = {
      calm: '😌',
      happy: '😊',
      energetic: '⚡',
      tired: '😴',
      anxious: '😰',
      irritable: '😤',
      sad: '😢',
    };
    return emojis[mood] || '😊';
  };

  return (
    <section ref={sectionRef} className="py-12 px-4 bg-gradient-warm min-h-screen">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Card */}
        <div className="glass-card rounded-3xl p-8 text-center animate-bloom">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 rounded-full mb-4 animate-heartbeat">
            <Heart className="w-10 h-10 text-pink-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Hello {userData.name} {getMoodEmoji(userData.mood)}
          </h2>
          <p className="text-gray-500">
            Here is your personalized wellness guide for today
          </p>
        </div>

        {/* Period Calendar - Show if user provided period data */}
        {userData.lastPeriodStart && (
          <PeriodCalendar userData={userData} prediction={periodPrediction} />
        )}

        {/* Phase Information */}
        <div className="glass-card rounded-3xl p-8 animate-slide-up stagger-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Phase: {phaseInfo.name}</h3>
              <p className="text-pink-500 font-medium">Understanding Your Cycle</p>
            </div>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{phaseInfo.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-pink-50/50 rounded-2xl p-5">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-500" />
                Body Changes
              </h4>
              <ul className="space-y-2">
                {phaseInfo.bodyChanges.map((change, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-lavender/30 rounded-2xl p-5">
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4 text-purple-500" />
                Hormone Changes
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">{phaseInfo.hormoneChanges}</p>
            </div>
          </div>

          <div className="mt-6 bg-mint/50 rounded-2xl p-5">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-green-500" />
              Mood & Mindset
            </h4>
            <ul className="grid md:grid-cols-2 gap-2">
              {phaseInfo.moodChanges.map((mood, index) => (
                <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  {mood}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* How Your Body May Feel Today */}
        <div className="glass-card rounded-3xl p-8 animate-slide-up stagger-2">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <Battery className="w-5 h-5 text-pink-500" />
            </div>
            How Your Body May Feel Today
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 bg-pink-50/50 rounded-xl">
              <div className="w-10 h-10 bg-pink-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Energy Level</h4>
                <p className="text-gray-600 text-sm">{phaseInfo.energyLevel}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-lavender/30 rounded-xl">
              <div className="w-10 h-10 bg-purple-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Emotional Sensitivity</h4>
                <p className="text-gray-600 text-sm">{phaseInfo.emotionalSensitivity}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-mint/50 rounded-xl">
              <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Focus Level</h4>
                <p className="text-gray-600 text-sm">{phaseInfo.focusLevel}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-peach/50 rounded-xl">
              <div className="w-10 h-10 bg-orange-200 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Social Energy</h4>
                <p className="text-gray-600 text-sm">{phaseInfo.socialEnergy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Information (if pain level > 0) */}
        {userData.painLevel > 0 && (
          <div className="glass-card rounded-3xl p-8 animate-slide-up stagger-3">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-pink-500" />
              </div>
              Why Pain Happens
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">{painExplanation}</p>

            {userData.painLevel > 3 && (
              <div className="bg-pink-50/70 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  Pain Relief Tips
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {painReliefTips.map((tip, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 hover-lift">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          {tip.icon === 'flame' && <Flame className="w-4 h-4 text-pink-500" />}
                          {tip.icon === 'droplets' && <Droplets className="w-4 h-4 text-pink-500" />}
                          {tip.icon === 'leaf' && <Leaf className="w-4 h-4 text-pink-500" />}
                          {tip.icon === 'activity' && <Activity className="w-4 h-4 text-pink-500" />}
                          {tip.icon === 'wind' && <Wind className="w-4 h-4 text-pink-500" />}
                        </div>
                        <h5 className="font-medium text-gray-800">{tip.title}</h5>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {userData.painLevel >= 8 && (
              <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-700 mb-1">A Gentle Recommendation</h4>
                  <p className="text-red-600 text-sm">
                    Pain at this level can be difficult to manage alone. We gently encourage you to 
                    consult with a healthcare professional who can provide personalized guidance and support. 
                    You deserve to feel comfortable and cared for.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Recommended Exercises */}
        <div className="glass-card rounded-3xl p-8 animate-slide-up stagger-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-pink-500" />
            </div>
            Recommended Gentle Exercises
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {phaseExercises.map((exercise, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover-lift">
                <div className="h-40 bg-gradient-to-br from-pink-100 to-lavender flex items-center justify-center">
                  <img 
                    src={exercise.image} 
                    alt={exercise.name}
                    className="h-full w-full object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-gray-800 mb-2">{exercise.name}</h4>
                  <p className="text-pink-500 text-sm font-medium mb-2">{exercise.benefits}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{exercise.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Book Recommendations */}
        <div className="glass-card rounded-3xl p-8 animate-slide-up stagger-5">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-pink-500" />
            </div>
            Recommended Books
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden hover-lift group">
                <div className="h-48 bg-gradient-to-br from-pink-50 to-lavender flex items-center justify-center p-4">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="h-full w-auto object-contain rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-gray-800 mb-1">{book.title}</h4>
                  <p className="text-pink-500 text-sm mb-3">by {book.author}</p>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{book.description}</p>
                  <div className="bg-pink-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium text-pink-600">Why read: </span>
                      {book.whyHelpful}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Encouragement */}
        <div className="glass-card rounded-3xl p-8 animate-fade-in">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4">
              <Quote className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Daily Encouragement</h3>
            <blockquote className="text-xl text-gray-600 italic leading-relaxed max-w-2xl mx-auto mb-4">
              &ldquo;{dailyQuote.text}&rdquo;
            </blockquote>
            <p className="text-pink-500 font-medium">— {dailyQuote.author}</p>
          </div>
        </div>

        {/* Closing Message */}
        <div className="text-center py-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 text-gray-500 mb-4">
            <Heart className="w-5 h-5 text-pink-400" />
            <span>Remember</span>
            <Heart className="w-5 h-5 text-pink-400" />
          </div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Your body is strong, intelligent, and wise. It knows exactly what it needs. 
            Listen to it with love, care for it with kindness, and trust in its natural rhythm.
          </p>
          <p className="text-pink-500 font-medium mt-4">
            You are doing beautifully. 💗
          </p>
        </div>

        {/* Reset Button */}
        <div className="text-center pb-8">
          <button
            onClick={onReset}
            className="px-6 py-3 text-gray-500 hover:text-pink-500 transition-colors flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4" />
            Start a New Session
          </button>
        </div>
      </div>
    </section>
  );
}
