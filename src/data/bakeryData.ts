export type DropCategory = 'all' | 'cookies' | 'loaves' | 'tarts' | 'gift-cards';

export type VisualVariant =
  | 'hero'
  | 'cookies'
  | 'sable'
  | 'loaf'
  | 'sourdough'
  | 'tart'
  | 'lemon-tart'
  | 'cake'
  | 'workshop'
  | 'market'
  | 'corporate'
  | 'gift-card';

export interface BakeryProduct {
  id: string;
  name: string;
  category: Exclude<DropCategory, 'all'>;
  categoryLabel: string;
  price: number;
  unit: string;
  tastingNote: string;
  batchRemaining: number;
  visual: VisualVariant;
  isGiftCard?: boolean;
}

export interface CakeSizeOption {
  id: string;
  label: string;
  servings: string;
  basePrice: number;
}

export interface CakeFlavorOption {
  id: string;
  name: string;
  note: string;
  priceDelta: number;
}

export interface WorkshopSession {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  seatsLeft: number;
  totalSeats: number;
  description: string;
  takeHome: string;
}

export interface MarketStop {
  id: string;
  marketName: string;
  neighborhood: string;
  date: string;
  hours: string;
  booth: string;
  featuredBoxName: string;
  featuredBoxPrice: number;
  contents: string;
}

export interface CorporateBoxTier {
  id: string;
  name: string;
  pieceCount: number;
  serves: string;
  price: number;
  contents: string;
  leadTime: string;
}

export interface RevenueStreamItem {
  id: string;
  name: string;
  monthlyTarget: number;
  category: string;
  targetSectionId: string;
  targetTab?: 'cakes' | 'workshops' | 'markets';
  note: string;
}

export const WEEKLY_DROP_PRODUCTS: BakeryProduct[] = [
  {
    id: 'drop-brown-butter-cookies',
    name: 'Brown Butter Miso Chocolate Chunk',
    category: 'cookies',
    categoryLabel: 'Cookies · Box of 6',
    price: 28,
    unit: '6 cookies',
    tastingNote: 'Cultured browned butter, 70% Valrhona feves, white miso, flaky Maldon salt.',
    batchRemaining: 14,
    visual: 'cookies',
  },
  {
    id: 'drop-pistachio-sable',
    name: 'Roasted Pistachio & Halva Sablé',
    category: 'cookies',
    categoryLabel: 'Cookies · Tin of 10',
    price: 32,
    unit: '10 cookies',
    tastingNote: 'Bronte pistachio flour shortbread, sesame halva crumble, orange blossom.',
    batchRemaining: 9,
    visual: 'sable',
  },
  {
    id: 'drop-cardamom-loaf',
    name: 'Braided Cardamom Morning Loaf',
    category: 'loaves',
    categoryLabel: 'Loaves · Whole 750g',
    price: 24,
    unit: '1 loaf',
    tastingNote: '24-hour cold-fermented brioche laminated with freshly mortar-ground green cardamom.',
    batchRemaining: 11,
    visual: 'loaf',
  },
  {
    id: 'drop-fig-country-loaf',
    name: 'Black Mission Fig & Walnut Country Loaf',
    category: 'loaves',
    categoryLabel: 'Loaves · 900g Boule',
    price: 18,
    unit: '1 boule',
    tastingNote: 'Stone-milled red fife sourdough studded with toasted Chandler walnuts and figs.',
    batchRemaining: 16,
    visual: 'sourdough',
  },
  {
    id: 'drop-pistachio-tart',
    name: 'Sicilian Pistachio & Raspberry Tart',
    category: 'tarts',
    categoryLabel: 'Tarts · 8-inch Whole',
    price: 46,
    unit: 'serves 8',
    tastingNote: 'Crisp pâte sucrée, toasted pistachio frangipane, tart raspberry compote.',
    batchRemaining: 6,
    visual: 'tart',
  },
  {
    id: 'drop-meyer-lemon-tart',
    name: 'Charred Meyer Lemon & Olive Oil Tart',
    category: 'tarts',
    categoryLabel: 'Tarts · 8-inch Whole',
    price: 42,
    unit: 'serves 8',
    tastingNote: 'Single-estate olive oil curd, torched honey meringue, crisp almond shell.',
    batchRemaining: 8,
    visual: 'lemon-tart',
  },
  {
    id: 'drop-gift-card',
    name: 'Farine & Fig Atelier Gift Card',
    category: 'gift-cards',
    categoryLabel: 'Gift Cards · Digital or Linen',
    price: 50,
    unit: 'Redeemable online & markets',
    tastingNote: 'Valid toward weekly pre-order drops, custom celebration cakes, and baking classes.',
    batchRemaining: 99,
    visual: 'gift-card',
    isGiftCard: true,
  },
];

export const GIFT_CARD_AMOUNTS = [25, 50, 100, 150];

export const CAKE_SIZES: CakeSizeOption[] = [
  { id: '6-single', label: '6" Single Tier', servings: 'Serves 8–12', basePrice: 95 },
  { id: '8-single', label: '8" Classic Tier', servings: 'Serves 16–22', basePrice: 145 },
  { id: '2-tier', label: '6" + 8" Two-Tier', servings: 'Serves 32–42', basePrice: 265 },
  { id: '3-tier', label: 'Celebration Three-Tier', servings: 'Serves 60–75', basePrice: 440 },
];

export const CAKE_SPONGES: CakeFlavorOption[] = [
  {
    id: 'olive-oil-almond',
    name: 'Almond Olive Oil & Citrus',
    note: 'Tender crumb infused with Meyer lemon zest',
    priceDelta: 0,
  },
  {
    id: 'earl-grey',
    name: 'Bergamot Earl Grey Velvet',
    note: 'Steeped loose-leaf tea sponge with honey soak',
    priceDelta: 12,
  },
  {
    id: 'valrhona-dark',
    name: '70% Guanaja Dark Cocoa',
    note: 'Espresso-enriched bittersweet chocolate sponge',
    priceDelta: 15,
  },
  {
    id: 'pistachio-sponge',
    name: 'Roasted Bronte Pistachio',
    note: 'Nut-forward sponge with brown butter finish',
    priceDelta: 22,
  },
];

export const CAKE_FILLINGS: CakeFlavorOption[] = [
  {
    id: 'fig-mascarpone',
    name: 'Roasted Fig & Mascarpone Whip',
    note: 'Balsamic-macerated black figs and vanilla bean cream',
    priceDelta: 0,
  },
  {
    id: 'raspberry-rose',
    name: 'Raspberry Compote & Crème Diplomat',
    note: 'Bright berry preserve balanced with silky custard',
    priceDelta: 10,
  },
  {
    id: 'hazelnut-praline',
    name: 'Piedmont Hazelnut Praline Crunch',
    note: 'Caramelized nut feuilletine and milk chocolate mousse',
    priceDelta: 18,
  },
];

export const CAKE_FINISHES: CakeFlavorOption[] = [
  {
    id: 'swiss-ivory',
    name: 'Ivory Swiss Meringue Buttercream',
    note: 'Smooth palette-knife finish with fresh herbs & figs',
    priceDelta: 0,
  },
  {
    id: 'sage-botanical',
    name: 'Pistachio & Pressed Botanicals',
    note: 'Crushed roasted pistachios and seasonal edible blooms',
    priceDelta: 20,
  },
  {
    id: 'naked-rustic',
    name: 'Semi-Naked & Burnished Caramel',
    note: 'Lightly veiled layers with spun sugar detail',
    priceDelta: 14,
  },
];

export const WORKSHOP_SESSIONS: WorkshopSession[] = [
  {
    id: 'ws-lamination',
    title: 'Croissant Lamination & Viennoiserie',
    date: 'Saturday, Nov 21',
    time: '9:00 AM – 1:00 PM',
    duration: '4 hours',
    price: 150,
    seatsLeft: 3,
    totalSeats: 8,
    description:
      'Master cold-butter lock-in, three-fold turns, and steam-baking for honeycomb-crumb croissants and pain au chocolat.',
    takeHome: '6 baked pastries + 6 proof-at-home laminated croissants',
  },
  {
    id: 'ws-tarts',
    title: 'French Tart Shells & Seasonal Frangipane',
    date: 'Sunday, Nov 29',
    time: '10:00 AM – 1:00 PM',
    duration: '3 hours',
    price: 125,
    seatsLeft: 5,
    totalSeats: 10,
    description:
      'Learn crisp pâte sucrée lining techniques, blind baking, pistachio frangipane, and poached fruit arrangement.',
    takeHome: '1 whole 8-inch tart + illustrated recipe booklet',
  },
  {
    id: 'ws-cakes',
    title: 'Layer Cake Architecture & Swiss Meringue',
    date: 'Saturday, Dec 5',
    time: '1:30 PM – 4:30 PM',
    duration: '3 hours',
    price: 145,
    seatsLeft: 4,
    totalSeats: 8,
    description:
      'Build, fill, crumb-coat, and finish a tall 6-inch celebration cake with silky Swiss meringue buttercream and botanical garnish.',
    takeHome: 'Your completed 6-inch two-layer cake in a carry box',
  },
];

export const MARKET_STOPS: MarketStop[] = [
  {
    id: 'mkt-ferry',
    marketName: 'Saturday Pier Morning Market',
    neighborhood: 'Waterfront Pavilion · Stall 14',
    date: 'Every Saturday',
    hours: '8:00 AM – 1:00 PM',
    booth: 'North Arcade Row B',
    featuredBoxName: 'Market Morning Tasting Box (4 Pastries)',
    featuredBoxPrice: 26,
    contents: '1 Cardamom Knot, 1 Pistachio Tartlet, 2 Brown Butter Miso Cookies.',
  },
  {
    id: 'mkt-courtyard',
    marketName: 'Sunday Conservatory Pop-Up',
    neighborhood: 'Botanical Courtyard · Greenhouse Annex',
    date: 'Sunday, Nov 22',
    hours: '9:30 AM – 2:00 PM',
    booth: 'Glasshouse Terrace',
    featuredBoxName: 'Sunday Loaf & Tart Market Bundle',
    featuredBoxPrice: 40,
    contents: '1 Fig & Walnut Sourdough Boule + 2 individual Meyer Lemon Tarts.',
  },
  {
    id: 'mkt-night',
    marketName: 'Winter Solstice Night Bazaar',
    neighborhood: 'Foundry Hall · Arts District',
    date: 'Friday, Dec 4',
    hours: '5:00 PM – 9:30 PM',
    booth: 'Table 08 near Espresso Bar',
    featuredBoxName: 'Evening Sweet & Espresso Pairing Box',
    featuredBoxPrice: 34,
    contents: '4 Dark Cocoa Sablés, 2 Roasted Hazelnut Financiers, 2 Mini Tarts.',
  },
];

export const CORPORATE_BOX_TIERS: CorporateBoxTier[] = [
  {
    id: 'corp-12',
    name: 'Studio Briefing Box',
    pieceCount: 12,
    serves: '10–12 guests',
    price: 78,
    contents: '4 Cardamom Brioche Knots, 4 Brown Butter Cookies, 4 Seasonal Tartlets.',
    leadTime: '48-hour notice',
  },
  {
    id: 'corp-24',
    name: 'Executive Tasting Assortment',
    pieceCount: 24,
    serves: '20–24 guests',
    price: 148,
    contents: '8 Laminated Pastries, 8 Pistachio & Miso Cookies, 8 Mini Frangipane Tarts.',
    leadTime: '72-hour notice',
  },
  {
    id: 'corp-50',
    name: 'Town Hall & Client Gifting Spread',
    pieceCount: 50,
    serves: '45–55 guests',
    price: 295,
    contents: 'Custom ribbon branding, printed tasting cards, and curated sweet & savory pastry mix.',
    leadTime: '5-day notice',
  },
];

export const REVENUE_STREAMS_BLUEPRINT: RevenueStreamItem[] = [
  {
    id: 'rev-custom-cakes',
    name: 'Custom Cakes & Celebration Orders',
    monthlyTarget: 4800,
    category: 'Bespoke Commissions',
    targetSectionId: 'atelier-studio',
    targetTab: 'cakes',
    note: 'High-margin celebration tiers configured directly via the Custom Cake Studio.',
  },
  {
    id: 'rev-weekly-drops',
    name: 'Weekly Pre-Order Drops',
    monthlyTarget: 3600,
    category: 'Direct-to-Consumer',
    targetSectionId: 'weekly-drop',
    note: 'Limited Friday batches of cookies, loaves, and tarts sold out via pre-order.',
  },
  {
    id: 'rev-corporate',
    name: 'Corporate Gifting & Event Boxes',
    monthlyTarget: 2400,
    category: 'B2B Events',
    targetSectionId: 'gifting-wholesale',
    note: '12-, 24-, and 50-piece branded studio pastry assortments for teams and clients.',
  },
  {
    id: 'rev-wholesale',
    name: 'Wholesale Cafes',
    monthlyTarget: 2000,
    category: 'Recurring B2B',
    targetSectionId: 'gifting-wholesale',
    note: 'Morning pastry supply delivered daily to partner specialty coffee bars.',
  },
  {
    id: 'rev-collab',
    name: 'First Collab / Wholesale Pilot (Mo. 4–6)',
    monthlyTarget: 1800,
    category: 'Partner Pilot',
    targetSectionId: 'gifting-wholesale',
    note: 'Co-branded seasonal pastry runs and 6-week coffee roastery tasting pilots.',
  },
  {
    id: 'rev-popups',
    name: 'Pop-Ups & Markets',
    monthlyTarget: 1500,
    category: 'Community Retail',
    targetSectionId: 'atelier-studio',
    targetTab: 'markets',
    note: 'Weekend farmers markets and courtyard pop-ups with pre-reserved market boxes.',
  },
  {
    id: 'rev-workshops',
    name: 'Workshops (Baking Classes)',
    monthlyTarget: 900,
    category: 'Experiential',
    targetSectionId: 'atelier-studio',
    targetTab: 'workshops',
    note: 'Intimate 8–10 seat hands-on lamination, tart, and cake assembly sessions.',
  },
  {
    id: 'rev-gift-cards',
    name: 'Gift Cards',
    monthlyTarget: 200,
    category: 'Prepaid Credit',
    targetSectionId: 'weekly-drop',
    note: 'Digital and linen-sleeved studio gift cards in $25–$150 denominations.',
  },
];

export const FINANCIAL_SUMMARY = {
  listedGrossRevenue: 17200,
  monthlyTargetRevenue: 15000,
  estimatedCosts: 10320,
  estimatedSurplus: 6880,
};
