export type DropCategory = 'all' | 'cakes' | 'cookies' | 'loaves' | 'tarts' | 'gift-cards';

export type LeadTimeFilter = 'all' | 'next-day' | 'two-day' | 'friday-drop';

export type VisualVariant =
  | 'hero'
  | 'cookies'
  | 'sable'
  | 'loaf'
  | 'sourdough'
  | 'tart'
  | 'lemon-tart'
  | 'cake'
  | 'mango-yuzu'
  | 'lychee-rose'
  | 'workshop'
  | 'market'
  | 'corporate'
  | 'gift-card';

export interface BakeryProduct {
  id: string;
  name: string;
  category: Exclude<DropCategory, 'all'>;
  categoryLabel: string;
  leadTimeTag: Exclude<LeadTimeFilter, 'all'>;
  leadTimeLabel: string;
  price: number;
  unit: string;
  tastingNote: string;
  batchRemaining: number;
  visual: VisualVariant;
  isGiftCard?: boolean;
}

export interface CategoryTile {
  id: Exclude<DropCategory, 'all'>;
  title: string;
  subtitle: string;
  visual: VisualVariant;
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

export const CATEGORY_TILES: CategoryTile[] = [
  {
    id: 'cakes',
    title: 'Signature & Custom Cakes',
    subtitle: 'Botanical sponges & light chantilly',
    visual: 'lychee-rose',
  },
  {
    id: 'tarts',
    title: 'Whole Tarts & Boxes',
    subtitle: 'Pistachio, Meyer lemon & yuzu',
    visual: 'tart',
  },
  {
    id: 'cookies',
    title: 'Artisan Cookie Tins',
    subtitle: 'Brown butter miso & halva sablés',
    visual: 'cookies',
  },
  {
    id: 'loaves',
    title: 'Tea Loaves & Sourdough',
    subtitle: 'Cardamom brioche & fig country loaves',
    visual: 'loaf',
  },
];

export const WEEKLY_DROP_PRODUCTS: BakeryProduct[] = [
  {
    id: 'sig-lychee-rose',
    name: 'Lychee Strawberry Rose Cake (6")',
    category: 'cakes',
    categoryLabel: 'Signature Cake',
    leadTimeTag: 'next-day',
    leadTimeLabel: 'Next-Day Notice',
    price: 78,
    unit: '6" · serves 8–10',
    tastingNote: 'Cotton-soft strawberry sponge layered with rose Chantilly cream, sweet lychee, and fresh berries.',
    batchRemaining: 7,
    visual: 'lychee-rose',
  },
  {
    id: 'sig-mango-yuzu',
    name: 'Mango Yuzu Botanical Cake (6")',
    category: 'cakes',
    categoryLabel: 'Signature Cake',
    leadTimeTag: 'next-day',
    leadTimeLabel: 'Next-Day Notice',
    price: 76,
    unit: '6" · serves 8–10',
    tastingNote: 'Fragrant Japanese yuzu sponge folded with tart Alfonso mango cream and chamomile glaze.',
    batchRemaining: 9,
    visual: 'mango-yuzu',
  },
  {
    id: 'drop-pistachio-tart',
    name: 'Sicilian Pistachio & Raspberry Tart',
    category: 'tarts',
    categoryLabel: 'Whole Tart · 8-inch',
    leadTimeTag: 'two-day',
    leadTimeLabel: '2-Day Advance',
    price: 46,
    unit: 'serves 8',
    tastingNote: 'Crisp pâte sucrée, toasted pistachio frangipane, and bright raspberry compote.',
    batchRemaining: 6,
    visual: 'tart',
  },
  {
    id: 'drop-meyer-lemon-tart',
    name: 'Charred Meyer Lemon & Olive Oil Tart',
    category: 'tarts',
    categoryLabel: 'Whole Tart · 8-inch',
    leadTimeTag: 'friday-drop',
    leadTimeLabel: 'Friday Pre-Order',
    price: 42,
    unit: 'serves 8',
    tastingNote: 'Single-estate olive oil lemon curd topped with lightly torched honey meringue.',
    batchRemaining: 8,
    visual: 'lemon-tart',
  },
  {
    id: 'drop-brown-butter-cookies',
    name: 'Brown Butter Miso Chocolate Chunk',
    category: 'cookies',
    categoryLabel: 'Cookie Box · 6 pcs',
    leadTimeTag: 'friday-drop',
    leadTimeLabel: 'Friday Pre-Order',
    price: 28,
    unit: '6 cookies',
    tastingNote: 'Cultured browned butter, 70% dark chocolate feves, white miso, flaky sea salt.',
    batchRemaining: 14,
    visual: 'cookies',
  },
  {
    id: 'drop-pistachio-sable',
    name: 'Earl Grey & Pistachio Halva Sablé Tin',
    category: 'cookies',
    categoryLabel: 'Cookie Tin · 10 pcs',
    leadTimeTag: 'next-day',
    leadTimeLabel: 'Next-Day Notice',
    price: 32,
    unit: '10 cookies',
    tastingNote: 'Bergamot tea shortbread with roasted pistachio flour and sesame halva crumble.',
    batchRemaining: 9,
    visual: 'sable',
  },
  {
    id: 'drop-cardamom-loaf',
    name: 'Braided Cardamom Morning Loaf',
    category: 'loaves',
    categoryLabel: 'Tea Loaf · 750g',
    leadTimeTag: 'friday-drop',
    leadTimeLabel: 'Friday Pre-Order',
    price: 24,
    unit: '1 whole loaf',
    tastingNote: '24-hour cold-fermented brioche braided with freshly ground green cardamom.',
    batchRemaining: 11,
    visual: 'loaf',
  },
  {
    id: 'drop-fig-country-loaf',
    name: 'Black Mission Fig & Walnut Country Loaf',
    category: 'loaves',
    categoryLabel: 'Sourdough · 900g',
    leadTimeTag: 'friday-drop',
    leadTimeLabel: 'Friday Pre-Order',
    price: 18,
    unit: '1 boule',
    tastingNote: 'Stone-milled red fife sourdough studded with toasted walnuts and black figs.',
    batchRemaining: 16,
    visual: 'sourdough',
  },
  {
    id: 'drop-gift-card',
    name: 'Farine & Fig Digital & Linen Gift Card',
    category: 'gift-cards',
    categoryLabel: 'Gift Card',
    leadTimeTag: 'next-day',
    leadTimeLabel: 'Instant Email / Pickup',
    price: 50,
    unit: 'No expiry',
    tastingNote: 'Redeemable toward signature cakes, weekly pastry drops, workshops, and market boxes.',
    batchRemaining: 99,
    visual: 'gift-card',
    isGiftCard: true,
  },
];

export const GIFT_CARD_AMOUNTS = [25, 50, 100, 150];

export const CAKE_SIZES: CakeSizeOption[] = [
  { id: '10cm-mini', label: '10cm Petite Bento', servings: 'Serves 2–4', basePrice: 48 },
  { id: '6-single', label: '6" Classic Single Tier', servings: 'Serves 8–12', basePrice: 88 },
  { id: '8-single', label: '8" Gathering Tier', servings: 'Serves 16–22', basePrice: 138 },
  { id: '2-tier', label: '6" + 8" Two-Tier', servings: 'Serves 32–42', basePrice: 258 },
];

export const CAKE_SPONGES: CakeFlavorOption[] = [
  {
    id: 'lychee-rose',
    name: 'Strawberry & Rose Cotton Sponge',
    note: 'Airy chiffon sponge brushed with organic rosewater syrup',
    priceDelta: 0,
  },
  {
    id: 'mango-yuzu',
    name: 'Yuzu Citrus & Chamomile',
    note: 'Bright yuzu zest sponge balanced with dried chamomile infusion',
    priceDelta: 8,
  },
  {
    id: 'earl-grey',
    name: 'Tie Guan Yin & Bergamot Tea',
    note: 'Steeped roasted oolong and Earl Grey leaves with honey glaze',
    priceDelta: 12,
  },
  {
    id: 'pistachio-sponge',
    name: 'Roasted Pistachio & Olive Oil',
    note: 'Nutty green pistachio crumb with delicate citrus finish',
    priceDelta: 18,
  },
];

export const CAKE_FILLINGS: CakeFlavorOption[] = [
  {
    id: 'chantilly-lychee',
    name: 'Fresh Lychee & Chantilly Cream',
    note: 'Featherlight whipped cream with diced lychee and strawberries',
    priceDelta: 0,
  },
  {
    id: 'fig-mascarpone',
    name: 'Roasted Fig & Mascarpone Whip',
    note: 'Balsamic-macerated black figs and vanilla bean cream',
    priceDelta: 10,
  },
  {
    id: 'hazelnut-praline',
    name: 'Pistachio Praline & Feuilletine',
    note: 'Caramelized nut crunch layered with silky diplomat cream',
    priceDelta: 16,
  },
];

export const CAKE_FINISHES: CakeFlavorOption[] = [
  {
    id: 'swiss-ivory',
    name: 'Soft Cloud Chantilly',
    note: 'Minimalist swoops finished with seasonal fruit & herbs',
    priceDelta: 0,
  },
  {
    id: 'sage-botanical',
    name: 'Pressed Botanicals & Pistachio',
    note: 'Muted eucalyptus tones with edible pressed florals',
    priceDelta: 18,
  },
  {
    id: 'naked-rustic',
    name: 'Semi-Naked & Dried Citrus',
    note: 'Delicate veiled sponge layers with dehydrated citrus wheels',
    priceDelta: 12,
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
    title: 'Botanical Tart Shells & Frangipane',
    date: 'Sunday, Nov 29',
    time: '10:00 AM – 1:00 PM',
    duration: '3 hours',
    price: 125,
    seatsLeft: 5,
    totalSeats: 10,
    description:
      'Learn crisp pâte sucrée lining techniques, blind baking, pistachio frangipane, and seasonal fruit arrangement.',
    takeHome: '1 whole 8-inch tart + illustrated recipe booklet',
  },
  {
    id: 'ws-cakes',
    title: 'Chiffon Cake Layering & Floral Styling',
    date: 'Saturday, Dec 5',
    time: '1:30 PM – 4:30 PM',
    duration: '3 hours',
    price: 145,
    seatsLeft: 4,
    totalSeats: 8,
    description:
      'Build, fill, and finish a 6-inch celebration cake with light Chantilly cream and organic pressed botanicals.',
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
    featuredBoxName: 'Evening Tea Cake & Espresso Box',
    featuredBoxPrice: 34,
    contents: '4 Earl Grey Sablés, 2 Yuzu Financiers, 2 Mini Fruit Tarts.',
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
    contents: '8 Laminated Pastries, 8 Earl Grey & Pistachio Cookies, 8 Mini Tarts.',
    leadTime: '72-hour notice',
  },
  {
    id: 'corp-50',
    name: 'Town Hall & Client Gifting Spread',
    pieceCount: 50,
    serves: '45–55 guests',
    price: 295,
    contents: 'Custom ribbon colour matching, printed tasting cards, and sweet & savory mix.',
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
    note: 'High-margin celebration tiers, bento cakes, and add-on candles/cards configured online.',
  },
  {
    id: 'rev-weekly-drops',
    name: 'Weekly Pre-Order Drops',
    monthlyTarget: 3600,
    category: 'Direct-to-Consumer',
    targetSectionId: 'weekly-drop',
    note: 'Curated signature cakes, cookie tins, tea loaves, and tarts ordered by lead-time cutoff.',
  },
  {
    id: 'rev-corporate',
    name: 'Corporate Gifting & Event Boxes',
    monthlyTarget: 2400,
    category: 'B2B Events',
    targetSectionId: 'gifting-wholesale',
    note: '12-, 24-, and 50-piece brand-matched pastry assortments for teams and client events.',
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
    note: 'Intimate 8–10 seat hands-on lamination, tart, and floral cake assembly sessions.',
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
