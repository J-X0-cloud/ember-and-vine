import type { DietaryTag, MenuSection } from "@/types/menu";

export const dietaryLegend: { tag: DietaryTag; label: string }[] = [
  { tag: "V", label: "Vegetarian" },
  { tag: "GF", label: "Gluten-free" },
  { tag: "VG", label: "Vegan" },
];

export const menuSections: MenuSection[] = [
  {
    id: "small-plates",
    title: "Small plates",
    navLabel: "Small plates",
    intro:
      "Built for the middle of the table. We suggest two or three per couple before something from the hearth.",
    note: "Served all evening in the dining room and wine bar",
    items: [
      {
        name: "Wood-oven focaccia",
        description: "Rosemary, sea salt, whipped cultured butter, smoked honey",
        price: 9,
        tags: ["V"],
      },
      {
        name: "Short rib empanadas",
        description: "Hand-crimped, braised short rib, smoked chili crema",
        price: 16,
      },
      {
        name: "Blistered shishitos",
        description: "Meyer lemon, flaky salt, a little ember heat",
        price: 12,
        tags: ["VG", "GF"],
      },
      {
        name: "Hamachi crudo",
        description: "Charred citrus, Fresno chili, fried shallot, olive oil",
        price: 21,
        tags: ["GF"],
      },
      {
        name: "Ember-roasted beets",
        description: "Whipped feta, pistachio dukkah, orange blossom",
        price: 15,
        tags: ["V", "GF"],
      },
      {
        name: "Burrata & stone fruit",
        description: "Grilled peaches, basil oil, aged balsamic, grilled bread",
        price: 19,
        tags: ["V"],
      },
      {
        name: "Grilled Monterey squid",
        description: "Chickpea purée, preserved lemon, green harissa",
        price: 18,
        tags: ["GF"],
      },
      {
        name: "Chicken liver mousse",
        description: "Port gelée, pickled cherries, charred toast",
        price: 14,
      },
    ],
  },
  {
    id: "hearth",
    title: "From the hearth",
    navLabel: "From the hearth",
    intro:
      "Cooked over California live oak and almond wood. Steaks are dry-aged in house for a minimum of 28 days.",
    note: "Large-format cuts serve two to three guests",
    image: {
      src: "/images/cocktails.webp",
      alt: "Two cocktails on an oak bar top",
      width: 1280,
      height: 960,
    },
    items: [
      {
        name: "Live-oak hanger steak",
        description: "Charred spring onion, salsa verde, bone-marrow butter",
        price: 42,
        tags: ["GF"],
      },
      {
        name: "The Hearth Board, for two",
        description: "Dry-aged ribeye, lamb chops, house chorizo, ember-roasted potatoes",
        price: 118,
        tags: ["GF"],
      },
      {
        name: "Whole branzino",
        description: "Fennel, salsa verde, grilled lemon, herb salad",
        price: 46,
        tags: ["GF"],
      },
      {
        name: "Half chicken al mattone",
        description: "Brick-pressed, garlic confit jus, charred greens",
        price: 34,
        tags: ["GF"],
      },
      {
        name: "Lamb shoulder, slow smoked",
        description: "Twelve hours over the embers, mint chimichurri, flatbread",
        price: 52,
      },
      {
        name: "Hearth-roasted cauliflower",
        description: "Tahini, pomegranate, golden raisins, green chili",
        price: 28,
        tags: ["VG", "GF"],
      },
      {
        name: "Dry-aged ribeye, 20 oz",
        description: "Bone-in, sea salt, beef-fat chimichurri",
        price: 78,
        tags: ["GF"],
      },
      {
        name: "Pork chop & stone fruit",
        description: "Heritage pork, grilled plum mostarda, sage",
        price: 44,
        tags: ["GF"],
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    navLabel: "Sides",
    intro: "For the table. Everything from the vegetable bench is grilled or roasted to order.",
    note: "Most sides can be made vegan on request",
    items: [
      {
        name: "Ember-roasted potatoes",
        description: "Beef fat, rosemary, aioli",
        price: 11,
        tags: ["GF"],
      },
      {
        name: "Charred broccolini",
        description: "Calabrian chili, garlic, lemon",
        price: 12,
        tags: ["VG", "GF"],
      },
      {
        name: "Little gem salad",
        description: "Green goddess, pickled shallot, breadcrumbs",
        price: 13,
        tags: ["V"],
      },
      {
        name: "Grilled corn",
        description: "Chili butter, cotija, lime",
        price: 10,
        tags: ["V", "GF"],
      },
    ],
  },
  {
    id: "dessert",
    title: "Dessert",
    navLabel: "Dessert",
    intro: "Our pastry team works the dying embers at the end of the night.",
    note: "Pair with a glass of late-harvest or an amaro",
    items: [
      {
        name: "Burnt Basque cheesecake",
        description: "Wood-oven cheesecake, macerated berries",
        price: 13,
        tags: ["V", "GF"],
      },
      {
        name: "Chocolate olive oil cake",
        description: "Smoked sea salt, crème fraîche",
        price: 12,
        tags: ["V"],
      },
      {
        name: "Ember s’more",
        description: "Toasted meringue, dark chocolate, graham crumble",
        price: 11,
        tags: ["V"],
      },
      {
        name: "Grilled stone fruit",
        description: "Brown-butter crumble, vanilla bean ice cream",
        price: 12,
        tags: ["V"],
      },
    ],
  },
  {
    id: "wine",
    title: "Wine",
    navLabel: "Wine",
    intro:
      "Around three hundred bottles, most from small California producers, with Old World favorites that love a little smoke.",
    note: "22 wines by the glass · corkage $30, two bottles max",
    image: {
      src: "/images/glass-pour.webp",
      alt: "A glass of red wine",
      width: 1280,
      height: 960,
    },
    items: [
      {
        name: "Sparkling, Anderson Valley",
        description: "Brut rosé, bright strawberry and brioche",
        price: { glass: 16, bottle: 64 },
      },
      {
        name: "Albariño, Edna Valley",
        description: "Salty, citrus peel, made for crudo",
        price: { glass: 15, bottle: 60 },
      },
      {
        name: "Chenin Blanc, Clarksburg",
        description: "Orchard fruit, honeycomb, lively acid",
        price: { glass: 14, bottle: 56 },
      },
      {
        name: "Grenache Rosé, Santa Ynez",
        description: "Watermelon, dried herbs, dry finish",
        price: { glass: 14, bottle: 56 },
      },
      {
        name: "Pinot Noir, Sta. Rita Hills",
        description: "Red cherry, forest floor, silky",
        price: { glass: 19, bottle: 76 },
      },
      {
        name: "Syrah, Ballard Canyon",
        description: "Black olive, smoked meat, violets — the steak wine",
        price: { glass: 18, bottle: 72 },
      },
      {
        name: "Zinfandel, Amador County",
        description: "Old vines, brambly fruit, black pepper",
        price: { glass: 16, bottle: 64 },
      },
      {
        name: "Tempranillo, Rioja Reserva",
        description: "Leather, dried plum, sweet spice",
        price: { glass: 20, bottle: 80 },
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    navLabel: "Cocktails",
    intro:
      "Built on California spirits and whatever is ripe at the market, with a few smoke-kissed ideas from the hearth.",
    note: "Zero-proof versions of every cocktail are available",
    items: [
      {
        name: "Green Street Old Fashioned",
        description: "Bourbon, smoked demerara, orange oils",
        price: 17,
      },
      {
        name: "Ember Margarita",
        description: "Reposado, charred pineapple, lime, chili salt",
        price: 16,
      },
      { name: "The Arroyo", description: "Gin, grilled grapefruit, rosemary, tonic", price: 16 },
      {
        name: "Vine Spritz",
        description: "Sparkling wine, Meyer lemon cordial, bitter orange",
        price: 15,
      },
      {
        name: "Oak & Fig Negroni",
        description: "Fig-infused gin, sweet vermouth, bitter aperitivo",
        price: 17,
      },
      { name: "Garden Sour", description: "Zero proof: verjus, basil, cucumber, lime", price: 11 },
    ],
  },
];

/** Vine Hour is a promotion rather than a priced list, so it lives outside `menuSections`. */
export const vineHour = {
  id: "vine-hour",
  navLabel: "Vine Hour",
  schedule: "Tuesday – Friday · 4 – 6 pm",
  title: "Vine Hour at the bar",
  body: "Two hours, first come, first served — the bar and patio only. $9 wines by the glass from the sommelier’s pick list, $12 house cocktails, half-price empanadas and $6 focaccia.",
} as const;

export const menuNav = [
  ...menuSections.map((section) => ({ id: section.id, label: section.navLabel })),
  { id: vineHour.id, label: vineHour.navLabel },
];

/** Plates featured on the home page. Copy is written for the home page, not the menu card. */
export const hearthHighlights = [
  {
    name: "Live-oak hanger steak",
    description: "Charred spring onion, salsa verde, bone-marrow butter",
    price: 42,
  },
  {
    name: "The Hearth Board, for two",
    description: "Dry-aged ribeye, lamb chops, house chorizo, ember-roasted potatoes",
    price: 118,
  },
  {
    name: "Short rib empanadas",
    description: "Hand-crimped, baked in the wood oven, smoked chili crema",
    price: 16,
  },
  {
    name: "Blistered shishitos",
    description: "Meyer lemon, flaky salt, a little ember heat",
    price: 12,
  },
] as const;
