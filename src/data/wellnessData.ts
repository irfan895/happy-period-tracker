import type { PhaseInfo, Exercise, Book, PainReliefTip, DailyQuote, Mood, CyclePhase } from '@/types';

export const phaseData: Record<CyclePhase, PhaseInfo> = {
  menstrual: {
    name: 'Menstrual Phase',
    description: 'This is the beginning of your cycle, when your body releases the uterine lining. It is a time of rest, reflection, and renewal.',
    bodyChanges: [
      'Uterine lining is shedding',
      'Cramps may occur as the uterus contracts',
      'Energy levels are typically lower',
      'You may experience bloating or breast tenderness'
    ],
    hormoneChanges: 'Estrogen and progesterone levels are at their lowest, which signals your body to begin a new cycle.',
    moodChanges: [
      'You may feel more introspective and reflective',
      'Emotional sensitivity is heightened',
      'A desire for solitude and quiet time',
      'Dreams may be more vivid'
    ],
    energyLevel: 'Low - Your body is doing important work. Rest is essential.',
    emotionalSensitivity: 'High - Be gentle with yourself and honor your feelings.',
    focusLevel: 'Inward - Good for reflection, journaling, and creative thinking.',
    socialEnergy: 'Low - You may prefer small, intimate gatherings or alone time.'
  },
  follicular: {
    name: 'Follicular Phase',
    description: 'A time of new beginnings and growing energy. Your body is preparing an egg for ovulation, and you may feel a renewed sense of vitality.',
    bodyChanges: [
      'Follicles in the ovaries are maturing',
      'Uterine lining begins to thicken',
      'Energy levels start to rise',
      'Skin may appear brighter and clearer'
    ],
    hormoneChanges: 'Estrogen begins to rise, boosting your mood, energy, and cognitive function.',
    moodChanges: [
      'Increasing optimism and motivation',
      'Mental clarity improves',
      'More social and communicative',
      'Open to new ideas and experiences'
    ],
    energyLevel: 'Rising - You will feel more energetic and ready to take on challenges.',
    emotionalSensitivity: 'Moderate - You feel more balanced and emotionally resilient.',
    focusLevel: 'High - Great for planning, learning, and starting new projects.',
    socialEnergy: 'Growing - You may feel more outgoing and sociable.'
  },
  ovulation: {
    name: 'Ovulation Phase',
    description: 'Your peak fertility time and often your peak energy. This is when your body releases a mature egg, and you may feel your most vibrant and confident.',
    bodyChanges: [
      'A mature egg is released from the ovary',
      'Cervical mucus becomes thinner and clearer',
      'Basal body temperature may rise slightly',
      'Some women feel a mild twinge (mittelschmerz)'
    ],
    hormoneChanges: 'Estrogen peaks and testosterone surges, creating a powerful boost in confidence and libido.',
    moodChanges: [
      'High confidence and self-assurance',
      'Magnetic and charismatic energy',
      'Enhanced communication skills',
      'Feeling attractive and powerful'
    ],
    energyLevel: 'Peak - This is your highest energy phase.',
    emotionalSensitivity: 'Low - You feel emotionally stable and confident.',
    focusLevel: 'Peak - Excellent for presentations, negotiations, and social events.',
    socialEnergy: 'High - You are in your element socially and professionally.'
  },
  luteal: {
    name: 'Luteal Phase',
    description: 'A time of winding down and preparing for rest. After ovulation, your body prepares either for pregnancy or the next cycle, and you may feel the urge to slow down.',
    bodyChanges: [
      'The corpus luteum produces progesterone',
      'Uterine lining continues to thicken',
      'You may experience PMS symptoms',
      'Breasts may feel tender or swollen'
    ],
    hormoneChanges: 'Progesterone rises and then falls. If no pregnancy occurs, both progesterone and estrogen drop, triggering menstruation.',
    moodChanges: [
      'May feel more introspective or moody',
      'Anxiety or irritability can increase',
      'Cravings for comfort foods',
      'Need for more rest and self-care'
    ],
    energyLevel: 'Declining - Your body is preparing to rest and renew.',
    emotionalSensitivity: 'High - Be patient with yourself and practice self-compassion.',
    focusLevel: 'Moderate - Good for completing tasks and organizing.',
    socialEnergy: 'Decreasing - You may prefer quieter, more familiar company.'
  }
};

export const exercises: Record<CyclePhase, Exercise[]> = {
  menstrual: [
    {
      name: 'Gentle Yoga',
      image: '/exercise-yoga.png',
      benefits: 'Relieves cramps and promotes relaxation',
      description: 'Soft, restorative poses that honor your body need for rest. Child pose and gentle twists can ease discomfort.'
    },
    {
      name: 'Peaceful Walking',
      image: '/exercise-walking.png',
      benefits: 'Boosts circulation and elevates mood',
      description: 'A slow, mindful walk in nature helps release endorphins without exhausting your body.'
    },
    {
      name: 'Deep Stretching',
      image: '/exercise-stretching.png',
      benefits: 'Releases tension in lower back and hips',
      description: 'Gentle stretches targeting the areas that hold stress during your period.'
    },
    {
      name: 'Warm Water Swimming',
      image: '/exercise-swimming.png',
      benefits: 'Soothes muscles and reduces cramping',
      description: 'The buoyancy of water supports your body while gentle movement eases discomfort.'
    }
  ],
  follicular: [
    {
      name: 'Flow Yoga',
      image: '/exercise-yoga.png',
      benefits: 'Builds strength and flexibility',
      description: 'A more dynamic practice that matches your rising energy levels.'
    },
    {
      name: 'Energetic Walking',
      image: '/exercise-walking.png',
      benefits: 'Cardiovascular health and mental clarity',
      description: 'Pick up the pace and enjoy the fresh air as your energy builds.'
    },
    {
      name: 'Dynamic Stretching',
      image: '/exercise-stretching.png',
      benefits: 'Increases range of motion and vitality',
      description: 'Active stretches that wake up your muscles and prepare you for the day.'
    },
    {
      name: 'Light Swimming',
      image: '/exercise-swimming.png',
      benefits: 'Full-body workout without impact',
      description: 'Enjoy longer sessions as your stamina naturally increases.'
    }
  ],
  ovulation: [
    {
      name: 'Power Yoga',
      image: '/exercise-yoga.png',
      benefits: 'Builds strength and confidence',
      description: 'Challenge yourself with more advanced poses and longer holds.'
    },
    {
      name: 'Brisk Walking or Jogging',
      image: '/exercise-walking.png',
      benefits: 'Maximizes cardiovascular benefits',
      description: 'Your peak energy makes this the perfect time for more intense cardio.'
    },
    {
      name: 'Strength Training',
      image: '/exercise-stretching.png',
      benefits: 'Builds muscle and boosts metabolism',
      description: 'Your body is primed for building strength during this phase.'
    },
    {
      name: 'Lap Swimming',
      image: '/exercise-swimming.png',
      benefits: 'Endurance building and full-body conditioning',
      description: 'Push yourself with longer, more challenging swim sessions.'
    }
  ],
  luteal: [
    {
      name: 'Restorative Yoga',
      image: '/exercise-yoga.png',
      benefits: 'Calms the nervous system',
      description: 'Gentle, supported poses that prepare your body for the menstrual phase.'
    },
    {
      name: 'Leisurely Walking',
      image: '/exercise-walking.png',
      benefits: 'Maintains activity without strain',
      description: 'Easy-paced walks that keep you moving without depleting energy.'
    },
    {
      name: 'Gentle Mobility',
      image: '/exercise-stretching.png',
      benefits: 'Maintains flexibility and reduces stiffness',
      description: 'Light movement to keep joints mobile as energy decreases.'
    },
    {
      name: 'Relaxing Float',
      image: '/exercise-swimming.png',
      benefits: 'Water therapy for PMS relief',
      description: 'Easy, floating movements that soothe both body and mind.'
    }
  ]
};

export const books: Book[] = [
  {
    title: 'Period Power',
    author: 'Maisie Hill',
    description: 'A comprehensive guide to understanding and harnessing the power of your menstrual cycle.',
    whyHelpful: 'This book helps you understand the unique strengths of each phase, empowering you to work with your body rather than against it.',
    cover: '/book-1.jpg'
  },
  {
    title: 'The Hormone Cure',
    author: 'Dr. Sara Gottfried',
    description: 'A holistic approach to balancing hormones naturally for better health and wellbeing.',
    whyHelpful: 'Offers practical, natural solutions for common hormonal imbalances with compassion and scientific backing.',
    cover: '/book-2.jpg'
  },
  {
    title: 'Wild Power',
    author: 'Alexandra Pope & Sjanie Hugo Wurlitzer',
    description: 'Discover the transformative power of your menstrual cycle and embrace your feminine wisdom.',
    whyHelpful: 'A deeply nurturing read that reframes the menstrual cycle as a source of power and spiritual insight.',
    cover: '/book-3.jpg'
  }
];

export const painReliefTips: PainReliefTip[] = [
  {
    title: 'Warm Compress',
    description: 'Apply a heating pad or warm water bottle to your lower abdomen. The warmth helps relax uterine muscles and increase blood flow, naturally easing cramps.',
    icon: 'flame'
  },
  {
    title: 'Gentle Hydration',
    description: 'Drink warm herbal teas like chamomile, ginger, or raspberry leaf. Staying hydrated helps reduce bloating and supports your body natural healing processes.',
    icon: 'droplets'
  },
  {
    title: 'Magnesium-Rich Foods',
    description: 'Include dark leafy greens, nuts, seeds, and dark chocolate in your diet. Magnesium helps relax muscles and can reduce cramping intensity.',
    icon: 'leaf'
  },
  {
    title: 'Light Stretching',
    description: 'Gentle yoga poses like child pose, cat-cow, and knees-to-chest can release tension in your lower back and pelvis, providing natural relief.',
    icon: 'activity'
  },
  {
    title: 'Deep Breathing',
    description: 'Practice slow, deep belly breathing. Inhale for 4 counts, hold for 4, exhale for 6. This activates your parasympathetic nervous system, reducing pain perception.',
    icon: 'wind'
  }
];

export const getDailyQuote = (mood: Mood, phase: CyclePhase): DailyQuote => {
  const quotes: Record<Mood, string[]> = {
    calm: [
      'Peace comes from within. Do not seek it without.',
      'In the midst of movement and chaos, keep stillness inside of you.',
      'Your calm mind is the ultimate weapon against your challenges.'
    ],
    anxious: [
      'This too shall pass. You have survived 100% of your bad days.',
      'Breathe. It is just a bad day, not a bad life.',
      'You are stronger than you know, and this feeling is temporary.'
    ],
    irritable: [
      'Be patient with yourself. Nothing in nature blooms all year.',
      'It is okay to not be okay. Your feelings are valid.',
      'Take a deep breath. You are doing the best you can.'
    ],
    sad: [
      'Tears are words that need to be written. Let them flow.',
      'You are allowed to feel. You are human, and your emotions matter.',
      'After every storm, there is a rainbow. This will pass.'
    ],
    energetic: [
      'Your energy is contagious. Share your light with the world.',
      'Channel this vitality into something beautiful today.',
      'You are unstoppable when you embrace your natural power.'
    ],
    tired: [
      'Rest is not idleness. It is the foundation of wellness.',
      'Listen to your body. It whispers before it screams.',
      'You deserve rest. It is productive to recharge.'
    ],
    happy: [
      'Your joy is a gift. Savor this beautiful moment.',
      'Happiness looks gorgeous on you. Shine on!',
      'Embrace this feeling. You have created this joy.'
    ]
  };

  const phaseQuotes: Record<CyclePhase, string> = {
    menstrual: 'Honor this time of rest. Your body is wise and knows exactly what it needs.',
    follicular: 'New beginnings are blooming within you. Embrace the fresh energy.',
    ovulation: 'You are radiant and powerful. Let your light shine brightly today.',
    luteal: 'Be gentle with yourself. Slowing down is not giving up—it is wisdom.'
  };

  const moodQuote = quotes[mood][Math.floor(Math.random() * quotes[mood].length)];
  
  return {
    text: `${moodQuote} ${phaseQuotes[phase]}`,
    author: 'Happy Wellness'
  };
};

export const getPainExplanation = (painLevel: number): string => {
  if (painLevel <= 3) {
    return 'Mild discomfort during your cycle is completely normal. It is usually caused by your uterus gently contracting to release its lining. This is a sign that your body is functioning as it should.';
  } else if (painLevel <= 6) {
    return 'Moderate cramping is common and happens when your uterus contracts more strongly to shed its lining. Prostaglandins, natural chemicals in your body, trigger these contractions. The good news is that this is temporary and there are many natural ways to find relief.';
  } else if (painLevel <= 7) {
    return 'Strong cramps can be challenging to manage. They occur when your uterus contracts intensely, sometimes reducing blood flow and oxygen to the area. While this level of pain is still within the range of normal for some women, it is important to prioritize self-care and consider speaking with a healthcare provider if this is new or worsening.';
  } else {
    return 'Severe pain can significantly impact your daily life. While some women do experience intense cramps, pain at this level warrants attention. If you have not already, please consider consulting a healthcare professional to rule out conditions like endometriosis or fibroids. You deserve to feel comfortable and supported.';
  }
};
