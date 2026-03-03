# Happy - Period Tracker & Wellness Assistant

A compassionate, personalized wellness companion for menstrual health. Happy provides cycle tracking, phase-based wellness guidance, natural pain relief tips, gentle exercise recommendations, and empowering book suggestions.

![Happy Period Tracker](https://your-screenshot-url.com)

## ✨ Features

### 🌸 Period Tracking
- Track your last period start and end dates
- Customizable cycle length (21-35 days)
- Customizable period duration (2-8 days)
- Visual calendar with period, ovulation, and fertile window predictions
- Next period countdown

### 💗 Wellness Dashboard
- **Cycle Phase Education**: Detailed explanations of what's happening in your body
- **Body & Mood Insights**: Understand hormonal changes and emotional shifts
- **"How You May Feel Today"**: Energy, emotional sensitivity, focus, and social energy levels
- **Pain Relief Tips**: Natural remedies for menstrual discomfort
- **Gentle Exercises**: Phase-appropriate workout recommendations
- **Book Recommendations**: Empowering reads for your wellness journey
- **Daily Encouragement**: Personalized quotes based on your mood and phase

### 🎨 Beautiful Design
- Soft, nurturing color palette (pinks, lavenders, mints)
- Smooth animations and transitions
- Fully responsive for all devices
- Warm, compassionate tone throughout

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Download and extract the project files**
   ```bash
   # If you received a zip file, extract it first
   unzip happy-period-tracker.zip
   cd happy-period-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` folder. You can deploy these files to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📁 Project Structure

```
happy-period-tracker/
├── public/                 # Static assets (images, etc.)
│   ├── heart-3d.png
│   ├── exercise-*.png
│   └── book-*.jpg
├── src/
│   ├── components/
│   │   ├── sections/       # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── UserInputForm.tsx
│   │   │   ├── WellnessDashboard.tsx
│   │   │   └── PeriodCalendar.tsx
│   │   └── ui/            # shadcn/ui components
│   ├── data/
│   │   └── wellnessData.ts # Wellness content data
│   ├── types/
│   │   └── index.ts       # TypeScript type definitions
│   ├── utils/
│   │   └── periodCalculator.ts # Period prediction logic
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.tsx           # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Technologies Used

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful UI components
- **Lucide React** - Icon library

## 📝 How to Use

1. **Enter your information**: Name, age, current cycle phase, pain level, and mood
2. **Add period tracking** (optional): Click "Period Tracking" to expand and add your last period dates
3. **Get your wellness guide**: Click "Get Your Wellness Guide" to see your personalized dashboard
4. **Explore your dashboard**:
   - View your cycle calendar with predictions
   - Read about your current phase
   - Check how your body may feel today
   - Get pain relief tips if needed
   - See recommended exercises and books
   - Read your daily encouragement

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --pink-primary: #f8a5c2;
  --pink-secondary: #f7d6e0;
  --pink-dark: #f78fb3;
  --pink-light: #fff0f5;
  --lavender: #e6e6fa;
  --mint: #f0fff4;
  --peach: #fff5ee;
}
```

### Adding New Exercises
Edit `src/data/wellnessData.ts` and add exercises to the `exercises` object:

```typescript
export const exercises: Record<CyclePhase, Exercise[]> = {
  menstrual: [
    // Add new exercise here
    {
      name: 'Your Exercise Name',
      image: '/your-image.png',
      benefits: 'What it helps with',
      description: 'Detailed description'
    },
    // ... existing exercises
  ],
  // ... other phases
};
```

### Adding New Books
Edit `src/data/wellnessData.ts` and add to the `books` array:

```typescript
export const books: Book[] = [
  // Add new book here
  {
    title: 'Book Title',
    author: 'Author Name',
    description: 'Brief description',
    whyHelpful: 'Why this book is helpful',
    cover: '/book-cover.jpg'
  },
  // ... existing books
];
```

## ⚕️ Medical Disclaimer

This application provides general wellness information and is **not a substitute for professional medical advice, diagnosis, or treatment**. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

If you experience severe pain (level 8 or higher), we gently encourage you to consult with a healthcare professional.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💝 Acknowledgments

Made with love for every woman on her wellness journey. Remember: your body is strong, intelligent, and wise. Listen to it with love.

---

**Happy Tracking!** 💗
