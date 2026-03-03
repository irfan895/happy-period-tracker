import { useEffect, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
}

export function Hero({ onStartClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heartRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !heartRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / 50;
      const y = (e.clientY - rect.top - rect.height / 2) / 50;
      
      heartRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-3xl animate-drift" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-lavender/30 rounded-full blur-3xl animate-drift" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-100/40 rounded-full blur-3xl animate-drift" style={{ animationDelay: '4s' }} />
        
        {/* Sparkle decorations */}
        <Sparkles className="absolute top-32 left-20 w-6 h-6 text-pink-300 animate-gentle-pulse" />
        <Sparkles className="absolute top-48 right-32 w-5 h-5 text-lavender-400 animate-gentle-pulse" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-48 left-32 w-4 h-4 text-pink-400 animate-gentle-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 3D Heart */}
        <div className="mb-8 relative">
          <img
            ref={heartRef}
            src="/heart-3d.png"
            alt="Happy Heart"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto animate-heartbeat transition-transform duration-300"
          />
          <div className="absolute -inset-4 bg-pink-200/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-4 animate-slide-up">
          Happy
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-2 font-light animate-slide-up stagger-1">
          Your compassionate companion for
        </p>
        <p className="text-xl md:text-2xl text-pink-500 mb-8 font-medium animate-slide-up stagger-2">
          menstrual wellness
        </p>

        {/* Description */}
        <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed animate-slide-up stagger-3">
          Understand your body, embrace your cycle, and discover personalized 
          wellness guidance tailored to your unique journey.
        </p>

        {/* CTA Button */}
        <button
          onClick={onStartClick}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-4"
        >
          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Begin Your Journey
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        {/* Trust indicators */}
        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-400 animate-fade-in stagger-5">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            Private & Secure
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full" />
            Science-Backed
          </span>
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-lavender-400 rounded-full" />
            Compassionate
          </span>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
