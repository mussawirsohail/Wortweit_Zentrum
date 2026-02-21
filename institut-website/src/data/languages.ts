// Define types for our language data
export interface Language {
  id: string;
  name: string;
  code: string; // Language code (e.g., "en", "de", "ja")
  flagEmoji: string;
  description: string;
  levels: Level[];
}

export interface Level {
  id: string;
  name: string;
  description: string;
  duration: string; // e.g., "3 months", "6 weeks"
  fees: {
    online: number;
    physical: number;
    hybrid: number;
  };
  registration: number;
  discount?: number; // Optional early bird discount
}

// Define all available languages with their levels
// Fees structure (in USD):
// - Online: Most affordable (learn from home)
// - Physical: Premium (in-person classes)
// - Hybrid: Mid-range (flexible learning)
export const languagesData: Language[] = [
  {
    id: "english",
    name: "English",
    code: "en",
    flagEmoji: "🇬🇧",
    description: "Master the global language of business, science, and communication.",
    levels: [
      {
        id: "english-a1",
        name: "Beginner (A1)",
        description: "Learn basic phrases and expressions for everyday situations.",
        duration: "2 months",
        fees: { online: 40, physical: 60, hybrid: 50 },
        registration: 10,
        discount: 5
      },
      {
        id: "english-a2",
        name: "Elementary (A2)",
        description: "Communicate in simple and routine tasks using everyday expressions.",
        duration: "3 months",
        fees: { online: 45, physical: 65, hybrid: 55 },
        registration: 10,
        discount: 5
      },
      {
        id: "english-b1",
        name: "Intermediate (B1)",
        description: "Handle most situations while traveling and express opinions clearly.",
        duration: "4 months",
        fees: { online: 50, physical: 70, hybrid: 60 },
        registration: 10,
        discount: 5
      },
      {
        id: "english-b2",
        name: "Upper Intermediate (B2)",
        description: "Interact with native speakers with confidence and fluency.",
        duration: "5 months",
        fees: { online: 55, physical: 75, hybrid: 65 },
        registration: 10,
        discount: 5
      },
      {
        id: "english-c1",
        name: "Advanced (C1)",
        description: "Express ideas fluently and spontaneously without searching for expressions.",
        duration: "6 months",
        fees: { online: 60, physical: 80, hybrid: 70 },
        registration: 10,
        discount: 5
      }
    ]
  },
  {
    id: "german",
    name: "German",
    code: "de",
    flagEmoji: "🇩🇪",
    description: "Unlock opportunities in one of Europe's strongest economies.",
    levels: [
      {
        id: "german-a1",
        name: "A1",
        description: "Introduce yourself and ask basic questions about personal details.",
        duration: "2 months",
        fees: { online: 45, physical: 65, hybrid: 55 },
        registration: 10,
        discount: 5
      },
      {
        id: "german-a2",
        name: "A2",
        description: "Communicate in simple and routine tasks requiring a direct exchange of information.",
        duration: "3 months",
        fees: { online: 50, physical: 70, hybrid: 60 },
        registration: 10,
        discount: 5
      },
      {
        id: "german-b1",
        name: "B1",
        description: "Deal with most situations likely to arise while traveling in German-speaking areas.",
        duration: "4 months",
        fees: { online: 55, physical: 75, hybrid: 65 },
        registration: 10,
        discount: 5
      },
      {
        id: "german-b2",
        name: "B2",
        description: "Understand the main ideas of complex text on both concrete and abstract topics.",
        duration: "5 months",
        fees: { online: 60, physical: 80, hybrid: 70 },
        registration: 10,
        discount: 5
      }
    ]
  },
  {
    id: "japanese",
    name: "Japanese",
    code: "ja",
    flagEmoji: "🇯🇵",
    description: "Explore the fascinating culture and language of Japan.",
    levels: [
      {
        id: "japanese-n5",
        name: "N5",
        description: "Learn basic Japanese including Hiragana and Katakana.",
        duration: "3 months",
        fees: { online: 50, physical: 70, hybrid: 60 },
        registration: 10,
        discount: 5
      },
      {
        id: "japanese-n4",
        name: "N4",
        description: "Understand basic Japanese used in everyday situations.",
        duration: "4 months",
        fees: { online: 55, physical: 75, hybrid: 65 },
        registration: 10,
        discount: 5
      },
      {
        id: "japanese-n3",
        name: "N3",
        description: "Understand Japanese used in everyday situations at a normal pace.",
        duration: "5 months",
        fees: { online: 60, physical: 80, hybrid: 70 },
        registration: 10,
        discount: 5
      },
      {
        id: "japanese-n2",
        name: "N2",
        description: "Understand Japanese used in everyday life and comprehend roughly 1,000 characters.",
        duration: "6 months",
        fees: { online: 65, physical: 85, hybrid: 75 },
        registration: 10,
        discount: 5
      }
    ]
  },
  {
    id: "korean",
    name: "Korean",
    code: "ko",
    flagEmoji: "🇰🇷",
    description: "Discover the language of K-pop, Korean dramas, and technology.",
    levels: [
      {
        id: "korean-topik1",
        name: "TOPIK 1",
        description: "Learn basic Korean for everyday conversations.",
        duration: "3 months",
        fees: { online: 45, physical: 65, hybrid: 55 },
        registration: 10,
        discount: 5
      },
      {
        id: "korean-topik2",
        name: "TOPIK 2",
        description: "Communicate in Korean about familiar topics using basic vocabulary.",
        duration: "4 months",
        fees: { online: 50, physical: 70, hybrid: 60 },
        registration: 10,
        discount: 5
      },
      {
        id: "korean-topik3",
        name: "TOPIK 3",
        description: "Express ideas and opinions on familiar topics with some accuracy.",
        duration: "5 months",
        fees: { online: 55, physical: 75, hybrid: 65 },
        registration: 10,
        discount: 5
      },
      {
        id: "korean-topik4",
        name: "TOPIK 4",
        description: "Comprehend Korean in various social contexts and express ideas clearly.",
        duration: "6 months",
        fees: { online: 60, physical: 80, hybrid: 70 },
        registration: 10,
        discount: 5
      }
    ]
  },
  {
    id: "turkish",
    name: "Turkish",
    code: "tr",
    flagEmoji: "🇹🇷",
    description: "Connect with Turkish culture and business opportunities.",
    levels: [
      {
        id: "turkish-a1",
        name: "A1",
        description: "Introduce yourself and others, and ask and answer simple questions.",
        duration: "2 months",
        fees: { online: 35, physical: 55, hybrid: 45 },
        registration: 10,
        discount: 5
      },
      {
        id: "turkish-a2",
        name: "A2",
        description: "Communicate in simple and routine tasks requiring a direct exchange of information.",
        duration: "3 months",
        fees: { online: 40, physical: 60, hybrid: 50 },
        registration: 10,
        discount: 5
      },
      {
        id: "turkish-b1",
        name: "B1",
        description: "Deal with most situations while traveling in Turkish-speaking areas.",
        duration: "4 months",
        fees: { online: 45, physical: 65, hybrid: 55 },
        registration: 10,
        discount: 5
      },
      {
        id: "turkish-b2",
        name: "B2",
        description: "Understand the main ideas of complex text on both concrete and abstract topics.",
        duration: "5 months",
        fees: { online: 50, physical: 70, hybrid: 60 },
        registration: 10,
        discount: 5
      }
    ]
  },
  {
    id: "sindhi",
    name: "Sindhi",
    code: "sd",
    flagEmoji: "🇵🇰",
    description: "Preserve and learn the rich Sindhi language and heritage.",
    levels: [
      {
        id: "sindhi-beginner",
        name: "Beginner",
        description: "Learn basic Sindhi script and pronunciation.",
        duration: "2 months",
        fees: { online: 30, physical: 50, hybrid: 40 },
        registration: 10,
        discount: 5
      },
      {
        id: "sindhi-intermediate",
        name: "Intermediate",
        description: "Communicate in everyday situations using common vocabulary.",
        duration: "3 months",
        fees: { online: 35, physical: 55, hybrid: 45 },
        registration: 10,
        discount: 5
      },
      {
        id: "sindhi-advanced",
        name: "Advanced",
        description: "Express complex ideas and engage in detailed conversations.",
        duration: "4 months",
        fees: { online: 40, physical: 60, hybrid: 50 },
        registration: 10,
        discount: 5
      }
    ]
  }
];
