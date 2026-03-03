import { useState, useRef } from 'react';
import { Heart } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { UserInputForm } from '@/components/sections/UserInputForm';
import { WellnessDashboard } from '@/components/sections/WellnessDashboard';
import type { UserData } from '@/types';

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleStartClick = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleFormSubmit = (data: UserData) => {
    setUserData(data);
  };

  const handleReset = () => {
    setUserData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-pink-500" />
            </div>
            <span className="font-bold text-xl text-gradient">Happy</span>
          </div>
          <div className="text-sm text-gray-500">
            Your Wellness Companion
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-14">
        {!userData ? (
          <>
            <Hero onStartClick={handleStartClick} />
            <div ref={formRef}>
              <UserInputForm onSubmit={handleFormSubmit} />
            </div>
          </>
        ) : (
          <WellnessDashboard userData={userData} onReset={handleReset} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-pink-400" />
            <span className="font-bold text-lg text-gradient">Happy</span>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            Your compassionate companion for menstrual wellness
          </p>
          <p className="text-gray-400 text-xs">
            © 2026 Happy Period Tracker. Made with love for every woman.
          </p>
          <div className="mt-4 text-xs text-gray-400 max-w-md mx-auto">
            <p>
              This app provides general wellness information and is not a substitute for professional medical advice. 
              Always consult with a healthcare provider for personal medical concerns.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
