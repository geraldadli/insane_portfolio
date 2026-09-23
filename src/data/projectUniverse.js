// Supplied project descriptions. Papers and publication results live in projects.js.
export const projectUniverse = [
  {
    id: "computer-festival",
    chapter: "01",
    theme: "Show",
    emoji: "🎪",
    name: "Computer Festival",
    headline: "Three projects taking the stage.",
    mission: "Reliable demos, clear stories, honest results.",
    projects: [
      {
        id: "civic-eye",
        emoji: "🏙️",
        name: "CivicEye",
        tagline: "Spot a problem. Spark a cleanup.",
        flow: ["Report", "Staff action", "Proof", "Reward"],
        description:
          "A community platform connecting residents’ reports with staff cleanup and rewards for participation.",
        href: "https://civic-eye-azure.vercel.app/",
      },
      {
        id: "sentiment-market",
        emoji: "📈",
        name: "Sentiment Market Analysis",
        tagline: "Give financial chatter a read.",
        flow: ["Financial text", "DistilBERT", "Sentiment"],
        description:
          "Classifies financial tweets as Bullish, Bearish, or Neutral, with confidence scores and single or batch analysis.",
        href: "https://twitter-sentiment-nlp-tfidf.streamlit.app/",
      },
      {
        id: "bone-fracture",
        emoji: "🦴",
        name: "Bone Fracture",
        tagline: "Follow the clues inside an X-ray.",
        flow: ["X-ray", "Visual features", "Random Forest prediction"],
        description:
          "Uses classical computer vision to extract 42 features, with an interactive processing pipeline and prediction display.",
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
    headline: "The Learning Playground — theory meets practice.",
    mission: "Apply concepts, build working systems, explain results.",
    projects: [
      {
        id: "ai-corti",
        emoji: "🧠",
        name: "AI Corti",
        tagline: "Reading the body’s stress signals.",
        flow: ["Heartbeat & skin sweat", "Stress classification"],
        description: "Detecting stress from heartbeat and skin sweat signals.",
        href: "https://stress-classifier.streamlit.app/",
      },
      {
        id: "emotion-recognition",
        emoji: "🎙️",
        name: "Emotion Recognition",
        tagline: "Listen for the feeling behind the voice.",
        flow: ["Speech", "Model", "Emotion"],
        description:
          "Speech emotion classification with expressive animations that bring predicted emotions to life.",
      },
      {
        id: "superhoop",
        emoji: "🏀",
        name: "Superhoop",
        tagline: "Make every basket count.",
        flow: ["Sense", "Score", "Display"],
        description:
          "Connects Arduino sensing to a scoring engine and website display, with sound and animation feedback.",
      },
    ],
  },
  {
    id: "dream-projects",
    chapter: "03",
    theme: "Dream",
    emoji: "🚀",
    name: "Dream Projects",
    headline: "The Dream Lab — ideas growing toward the future.",
    mission: "Explore ideas, test assumptions, build over time.",
    projects: [
      {
        id: "before",
        emoji: "📸",
        name: "Before",
        tagline: "Small moments. Visible change.",
        flow: ["Before capture", "After capture", "Reveal", "Share"],
        description:
          "An Android paired-photo app for capturing and sharing change, with drafts, swipe comparisons, reminders, and video exports.",
      },
      {
        id: "owi-detector",
        emoji: "🔎",
        name: "Owi Detector",
        tagline: "Explore the patterns behind the noise.",
        flow: ["Collect", "Label", "Investigate"],
        description:
          "Research into online stance and behavior using social-media comments, context, and human-reviewed labels.",
        foundation: "Comment collection and labeling.",
        outlook:
          "Validated detection. Stance alone does not establish buzzer activity.",
        href: "https://owi-seven.vercel.app/",
      },
    ],
  },
];
