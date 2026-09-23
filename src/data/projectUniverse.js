// Supplied project descriptions. Papers and publication results live in projects.js.
export const projectUniverse = [
  {
    id: "computer-festival",
    chapter: "01",
    theme: "Show",
    emoji: "🎪",
    name: "Computer Festival",
    headline: "Three projects for Computer Festival.",
    mission: "Build demos and explain the results.",
    projects: [
      {
        id: "civic-eye",
        video: "/videos/civiceye-commercial.mp4",
        poster: "/videos/civiceye-poster.jpg",
        emoji: "🏙️",
        name: "CivicEye",
        tagline: "Report local problems.",
        flow: ["Report", "Staff action", "Proof", "Reward"],
        description:
          "Residents report problems, staff handle cleanups, and participants earn rewards.",
        href: "https://civic-eye-azure.vercel.app/",
      },
      {
        id: "sentiment-market",
        video: "/videos/sentiment-analysis.mp4",
        poster: "/videos/sentiment-analysis-poster.jpg",
        emoji: "📈",
        name: "Sentiment Market Analysis",
        tagline: "Analyze financial tweets.",
        flow: ["Financial text", "DistilBERT", "Sentiment"],
        description:
          "Classifies financial tweets as Bullish, Bearish, or Neutral, with confidence scores and single or batch analysis.",
        href: "https://twitter-sentiment-nlp-tfidf.streamlit.app/",
      },
      {
        id: "bone-fracture",
        video: "/videos/bone-fracture.mp4",
        poster: "/videos/bone-fracture-poster.jpg",
        emoji: "🦴",
        name: "Bone Fracture",
        tagline: "Predict fractures from X-rays.",
        flow: ["X-ray", "Visual features", "Random Forest prediction"],
        description:
          "Extracts 42 image features and uses Random Forest to predict fractures. Shows each processing step and the prediction.",
        href: "https://bone-fracture-detection4.streamlit.app/",
      },
    ],
  },
  {
    id: "course-projects",
    chapter: "02",
    theme: "Learn",
    emoji: "🎓",
    name: "Course Projects",
    headline: "Projects from my courses.",
    mission: "Use what I learn in class.",
    projects: [
      {
        id: "ai-corti",
        emoji: "🧠",
        name: "AI Corti",
        tagline: "Classify stress from body signals.",
        flow: ["Heartbeat & skin sweat", "Stress classification"],
        description: "Detecting stress from heartbeat and skin sweat signals.",
        href: "https://stress-classifier.streamlit.app/",
      },
      {
        id: "emotion-recognition",
        emoji: "🎙️",
        name: "Emotion Recognition",
        tagline: "Recognize emotions in speech.",
        flow: ["Speech", "Model", "Emotion"],
        description:
          "Classifies emotions in speech and shows the results with animations.",
      },
      {
        id: "superhoop",
        emoji: "🏀",
        name: "Superhoop",
        tagline: "Track basketball scores.",
        flow: ["Sense", "Score", "Display"],
        description:
          "Uses Arduino sensors to track scores on a website, with sounds and animations.",
      },
    ],
  },
  {
    id: "dream-projects",
    chapter: "03",
    theme: "Dream",
    emoji: "🚀",
    name: "Dream Projects",
    headline: "Personal ideas I’m developing.",
    mission: "Try ideas and improve them over time.",
    projects: [
      {
        id: "before",
        emoji: "📸",
        name: "Before",
        tagline: "Compare before and after photos.",
        flow: ["Before capture", "After capture", "Reveal", "Share"],
        description:
          "An Android app for before-and-after photos, with drafts, swipe comparisons, reminders, and video exports.",
      },
      {
        id: "owi-detector",
        emoji: "🔎",
        name: "Owi Detector",
        tagline: "Study social media comments.",
        flow: ["Collect", "Label", "Investigate"],
        description:
          "Studies opinions and behavior using social media comments, their context, and labels reviewed by people.",
        foundation: "Comment collection and labeling.",
        outlook:
          "Test and validate detection. An opinion alone does not prove buzzer activity.",
        href: "https://owi-seven.vercel.app/",
      },
    ],
  },
];
