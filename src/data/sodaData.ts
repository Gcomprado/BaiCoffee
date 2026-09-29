export interface Flavor {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  glowColor: string;
  bgGradient: string;
  badge: string;
  calories: number;
  sugar: string;
  fiber: string;
  rating: number;
  reviewsCount: number;
  tastingNotes: string[];
  botanicals: string[];
  metrics: {
    fizziness: number; // 0 - 100
    sweetness: number;
    tartness: number;
    aroma: number;
  };
  nutrition: {
    servingSize: string;
    totalFat: string;
    sodium: string;
    totalCarb: string;
    dietaryFiber: string;
    totalSugars: string;
    addedSugars: string;
    protein: string;
    vitaminC: string;
    potassium: string;
  };
  prices: {
    pack4: number;
    pack12: number;
    pack24: number;
  };
}

export const FLAVORS: Flavor[] = [
  {
    id: "yuzu-sunshine",
    name: "Yuzu Sunshine & Mandarin",
    subtitle: "Bright Citrus • Cold-Pressed Yuzu • Meyer Lemon",
    tagline: "Liquid Golden Hour with an Electric Citrus Kick",
    description:
      "Crafted with rare Japanese Yuzu and sun-ripened Sicilian Mandarins, balanced with a whisper of crushed lemongrass and organic blue agave.",
    primaryColor: "#f59e0b",
    secondaryColor: "#ea580c",
    accentColor: "#fbbf24",
    glowColor: "rgba(245, 158, 11, 0.45)",
    bgGradient: "from-amber-950/40 via-orange-950/20 to-black",
    badge: "Bestseller",
    calories: 30,
    sugar: "3g",
    fiber: "5g",
    rating: 4.95,
    reviewsCount: 4820,
    tastingNotes: ["Tart Japanese Yuzu", "Juicy Sicilian Mandarin", "Meyer Lemon Zest", "Crushed Lemongrass"],
    botanicals: ["Organic Agave Inulin", "Yuzu Peel Extract", "Lemongrass Distillate", "Pink Himalayan Salt"],
    metrics: {
      fizziness: 90,
      sweetness: 45,
      tartness: 85,
      aroma: 95,
    },
    nutrition: {
      servingSize: "1 Can (355ml / 12 fl oz)",
      totalFat: "0g",
      sodium: "15mg",
      totalCarb: "8g",
      dietaryFiber: "5g (18% DV)",
      totalSugars: "3g (From real fruit)",
      addedSugars: "0g (0% DV)",
      protein: "0g",
      vitaminC: "45mg (50% DV)",
      potassium: "80mg (2% DV)",
    },
    prices: {
      pack4: 14,
      pack12: 36,
      pack24: 64,
    },
  },
  {
    id: "wild-raspberry",
    name: "Wild Raspberry & Hibiscus",
    subtitle: "Velvet Berry • Tart Hibiscus • Rose Petal",
    tagline: "Floral Elegance Meets Jammy Forest Berries",
    description:
      "Hand-picked mountain raspberries steeped with ruby-red Egyptian hibiscus calyces and Moroccan rose water for a sublime, decadent refresher.",
    primaryColor: "#ec4899",
    secondaryColor: "#9333ea",
    accentColor: "#f472b6",
    glowColor: "rgba(236, 72, 153, 0.45)",
    bgGradient: "from-pink-950/40 via-purple-950/20 to-black",
    badge: "Award Winner",
    calories: 32,
    sugar: "3g",
    fiber: "5g",
    rating: 4.92,
    reviewsCount: 3740,
    tastingNotes: ["Ripe Forest Raspberry", "Tangy Red Hibiscus", "Subtle Damask Rose", "Blackberry Bramble"],
    botanicals: ["Organic Agave Inulin", "Wild Hibiscus Brew", "Organic Raspberry Puree", "Elderberry Extract"],
    metrics: {
      fizziness: 82,
      sweetness: 55,
      tartness: 75,
      aroma: 90,
    },
    nutrition: {
      servingSize: "1 Can (355ml / 12 fl oz)",
      totalFat: "0g",
      sodium: "10mg",
      totalCarb: "8g",
      dietaryFiber: "5g (18% DV)",
      totalSugars: "3g (From real fruit)",
      addedSugars: "0g (0% DV)",
      protein: "0g",
      vitaminC: "35mg (40% DV)",
      potassium: "65mg (2% DV)",
    },
    prices: {
      pack4: 14,
      pack12: 36,
      pack24: 64,
    },
  },
  {
    id: "cucumber-mint",
    name: "Crisp Cucumber, Lime & Mint",
    subtitle: "Persian Cucumber • Key Lime • Garden Spearmint",
    tagline: "The Ultimate Spa-Grade Botanical Refreshment",
    description:
      "Crisp Persian cucumber juice blended with cold-pressed Key lime and garden-fresh crushed spearmint. Exceptionally hydrating and ultra-clean.",
    primaryColor: "#10b981",
    secondaryColor: "#06b6d4",
    accentColor: "#34d399",
    glowColor: "rgba(16, 185, 129, 0.45)",
    bgGradient: "from-emerald-950/40 via-teal-950/20 to-black",
    badge: "Fan Favorite",
    calories: 25,
    sugar: "2g",
    fiber: "5g",
    rating: 4.88,
    reviewsCount: 2980,
    tastingNotes: ["Cool Persian Cucumber", "Zesty Key Lime", "Fresh Spearmint Leaf", "Sea Salt Mineral Finish"],
    botanicals: ["Organic Agave Inulin", "Cucumber Hydrosol", "Lime Juice Extract", "Organic Spearmint Oil"],
    metrics: {
      fizziness: 88,
      sweetness: 35,
      tartness: 80,
      aroma: 85,
    },
    nutrition: {
      servingSize: "1 Can (355ml / 12 fl oz)",
      totalFat: "0g",
      sodium: "20mg",
      totalCarb: "7g",
      dietaryFiber: "5g (18% DV)",
      totalSugars: "2g (From real fruit)",
      addedSugars: "0g (0% DV)",
      protein: "0g",
      vitaminC: "50mg (55% DV)",
      potassium: "90mg (2% DV)",
    },
    prices: {
      pack4: 14,
      pack12: 36,
      pack24: 64,
    },
  },
  {
    id: "dark-plum-ginger",
    name: "Smoked Plum & Dark Ginger",
    subtitle: "Damson Plum • Spicy Ginger Root • Cardamom Pod",
    tagline: "Deep, Moody & Intensely Complex with a Warm Bite",
    description:
      "A rich tapestry of tart Damson plums, cold-pressed Jamaican ginger root, and roasted green cardamom pods. Sophisticated and fiery.",
    primaryColor: "#8b5cf6",
    secondaryColor: "#d97706",
    accentColor: "#a78bfa",
    glowColor: "rgba(139, 92, 246, 0.45)",
    bgGradient: "from-violet-950/40 via-amber-950/20 to-black",
    badge: "Limited Edition",
    calories: 35,
    sugar: "3g",
    fiber: "5g",
    rating: 4.96,
    reviewsCount: 2150,
    tastingNotes: ["Damson Plum Velvet", "Spicy Jamaican Ginger", "Crushed Green Cardamom", "Bourbon Vanilla"],
    botanicals: ["Organic Agave Inulin", "Wild Plum Puree", "Ginger Root Oleoresin", "Cardamom Seed Distillate"],
    metrics: {
      fizziness: 92,
      sweetness: 40,
      tartness: 70,
      aroma: 98,
    },
    nutrition: {
      servingSize: "1 Can (355ml / 12 fl oz)",
      totalFat: "0g",
      sodium: "15mg",
      totalCarb: "8g",
      dietaryFiber: "5g (18% DV)",
      totalSugars: "3g (From real fruit)",
      addedSugars: "0g (0% DV)",
      protein: "0g",
      vitaminC: "30mg (35% DV)",
      potassium: "75mg (2% DV)",
    },
    prices: {
      pack4: 14,
      pack12: 36,
      pack24: 64,
    },
  },
];

export interface CartItem {
  id: string;
  flavorId: string;
  flavorName: string;
  packSize: "4-pack" | "12-pack" | "24-pack" | "custom-crate";
  quantity: number;
  price: number;
  customDetails?: { [flavorId: string]: number };
  color: string;
}

export const PRESS_MENTIONS = [
  { name: "VOGUE", quote: "The chicest drink in our fridge. Refreshingly complex and gut-loving." },
  { name: "BON APPÉTIT", quote: "Finally, a low-sugar soda that tastes like real luxury botanicals." },
  { name: "GQ", quote: "A masterclass in modern beverage design and clean formulation." },
  { name: "WIRECUTTER", quote: "Our #1 pick for sparkling craft prebiotic soda." },
  { name: "FAST COMPANY", quote: "Disrupting big soda with plant fiber and champagne fizz." },
];

export const REVIEWS_DATA = [
  {
    author: "Elena Rostova",
    role: "Verified Sipper • New York, NY",
    rating: 5,
    title: "Goodbye traditional soda forever!",
    text: "The Yuzu Sunshine is unbelievable. The balance between the tart citrus and the natural sweetness is perfection. Plus my digestion feels amazing after lunch.",
    flavorId: "yuzu-sunshine",
    flavorName: "Yuzu Sunshine & Mandarin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    date: "2 days ago",
  },
  {
    author: "Marcus Chen",
    role: "Sommelier & Mixologist • San Francisco, CA",
    rating: 5,
    title: "Astonishing flavor complexity",
    text: "As a beverage director, I'm blown away by the Smoked Plum & Dark Ginger. The warm spice and floral depth makes it incredible on its own over a giant clear ice cube or as a mixer.",
    flavorId: "dark-plum-ginger",
    flavorName: "Smoked Plum & Dark Ginger",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    date: "1 week ago",
  },
  {
    author: "Sophie Dubois",
    role: "Holistic Nutritionist • Austin, TX",
    rating: 5,
    title: "5g of prebiotic fiber with zero fake stevia aftertaste",
    text: "Most healthy sodas leave that strange chemical stevia lingering taste. Lumina uses real botanical extracts and gentle organic agave inulin. Raspberry Hibiscus is my daily ritual.",
    flavorId: "wild-raspberry",
    flavorName: "Wild Raspberry & Hibiscus",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
    date: "2 weeks ago",
  },
  {
    author: "Liam Vance",
    role: "CrossFit Athlete • Miami, FL",
    rating: 5,
    title: "Crisp Cucumber Mint is a game changer",
    text: "Post-workout hydration that actually tastes like an upscale spa retreat. 25 calories, ultra crisp fizz, and zero artificial junk.",
    flavorId: "cucumber-mint",
    flavorName: "Crisp Cucumber, Lime & Mint",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    date: "3 weeks ago",
  },
];
