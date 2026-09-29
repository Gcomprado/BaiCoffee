export interface ProductFlavor {
  id: string;
  name: string;
  botanicalSubtitle: string;
  provenance: string;
  tasteSummary: string;
  fullNotes: string;
  color: {
    accent: string;
    bgTint: string;
    borderTint: string;
    textTint: string;
  };
  metrics: {
    calories: number;
    sugar: string;
    agave: string;
    carbonation: string;
    acidity: string;
  };
  ingredients: string[];
  harvestNotes: string;
  price12Pack: number;
  price24Pack: number;
}

export const FLAVORS_DATA: ProductFlavor[] = [
  {
    id: "seville-bergamot",
    name: "Seville Orange & Smoked Bergamot",
    botanicalSubtitle: "Bitter peel, Calabrian bergamot oil, roasted coriander",
    provenance: "Citrus orchards of Andalusia & Reggio Calabria",
    tasteSummary: "Dry, bracing citrus with aromatic cedar and a lingering pine-smoke finish.",
    fullNotes:
      "We steep cold-pressed Seville orange peels with sun-dried bergamot rinds for forty-eight hours before infusing with toasted coriander seed. The finish is brisk and bitter like an Italian aperitivo.",
    color: {
      accent: "#C86927",
      bgTint: "#FAF2EB",
      borderTint: "#EBD0BD",
      textTint: "#783B10",
    },
    metrics: {
      calories: 28,
      sugar: "3.2g",
      agave: "1.5g",
      carbonation: "Fine pin-point bubble",
      acidity: "pH 3.4 (Crisp)",
    },
    ingredients: [
      "Carbonated mountain spring water",
      "Cold-extracted Seville orange peel",
      "Calabrian bergamot essence",
      "Toasted coriander distillate",
      "Organic Mexican blue agave nectar",
      "Citric acid",
    ],
    harvestNotes: "Winter harvest, Seville batch #04",
    price12Pack: 38,
    price24Pack: 68,
  },
  {
    id: "spruce-cucumber",
    name: "Coastal Spruce & Milled Cucumber",
    botanicalSubtitle: "Wild spruce tip, crisp Persian cucumber, coastal thyme",
    provenance: "Foraged along coastal Maine & Vermont valleys",
    tasteSummary: "Deeply restorative, botanical green with cool cucumber flesh and resinous evergreen aroma.",
    fullNotes:
      "Hand-clipped young spruce tips gathered during a two-week spring window in the White Mountains. Milled with crisp whole cucumber and organic thyme leaves for a clean forest tonic.",
    color: {
      accent: "#3D5A45",
      bgTint: "#EEF3EF",
      borderTint: "#C8D9CD",
      textTint: "#223828",
    },
    metrics: {
      calories: 22,
      sugar: "2.4g",
      agave: "1.0g",
      carbonation: "Medium champagne bubble",
      acidity: "pH 3.8 (Smooth)",
    },
    ingredients: [
      "Carbonated mountain spring water",
      "Cold-pressed Persian cucumber juice",
      "Foraged young spruce tip extract",
      "Wild thyme infusion",
      "Organic agave nectar",
      "Himalayan mineral salt",
    ],
    harvestNotes: "Spring tip harvest, batch #09",
    price12Pack: 38,
    price24Pack: 68,
  },
  {
    id: "montmorency-sumac",
    name: "Montmorency Cherry & Wild Sumac",
    botanicalSubtitle: "Sour tart cherry, wild crimson sumac, crushed green cardamom",
    provenance: "Orchards of Door County & wild sumac groves of Appalachia",
    tasteSummary: "Deep crimson tartness with wild berry tannins and warm cardamom spice.",
    fullNotes:
      "Cold-pressed sour Montmorency cherries blended with coarse-ground wild staghorn sumac. The sumac provides an earthy, citrus-like tang that cuts through the rich stone-fruit body.",
    color: {
      accent: "#943331",
      bgTint: "#F8EEEE",
      borderTint: "#E5C2C2",
      textTint: "#5E1D1C",
    },
    metrics: {
      calories: 32,
      sugar: "3.8g",
      agave: "1.8g",
      carbonation: "Fine pin-point bubble",
      acidity: "pH 3.2 (Tart)",
    },
    ingredients: [
      "Carbonated mountain spring water",
      "Sour Montmorency cherry juice",
      "Wild staghorn sumac tea",
      "Crushed green cardamom seed",
      "Organic agave nectar",
      "Organic tartaric acid",
    ],
    harvestNotes: "Late summer harvest, batch #03",
    price12Pack: 38,
    price24Pack: 68,
  },
];

export interface CartItem {
  id: string;
  flavorId: string;
  name: string;
  size: "12-pack" | "24-pack" | "tasting-set";
  price: number;
  quantity: number;
}
