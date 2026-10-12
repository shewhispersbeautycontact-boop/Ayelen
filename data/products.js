/*
  Edit this file to update your products, prices, wholesale tiers and gift sets.
  No coding knowledge needed — just follow the patterns below.
  Remember: text goes in "quotes", and put a comma between items.

  ─── PRODUCTS ───────────────────────────────────────────────
  For each product, fill in:
    id          - unique short code, no spaces (e.g. "satin-xl")
    name        - product name shown on the site
    category    - must match one of the categories listed below
    description - short one-line description
    shades      - list of colorways available (or [] for none)
    image       - filename of a photo placed in the images/ folder (or "" for none)
    pricing.each      - retail price for a single unit
    pricing.halfDozen - retail price for 6 units
    pricing.dozen     - retail price for 12 units
    wholesale   - OPTIONAL. Leave it out and the wholesale price is worked
                  out from the "wholesaleTiers" discounts below. To set your
                  own per-unit wholesale price for a tier, add e.g.
                    wholesale: { starter: 9.00, studio: 8.50, boutique: 8.00 }

  To add a new category, add it to the "categories" list below,
  then use that exact name in a product's "category" field.

  ─── WHOLESALE TIERS ────────────────────────────────────────
    id       - short code (used in a product's "wholesale" overrides)
    label    - name shown on the site
    units    - how many units are in one case
    discount - % off the single-unit retail price (40 = 40% off)

  ─── GIFT SETS ──────────────────────────────────────────────
    audience - must match one of the "setAudiences" names
    contents - list of what's inside, one line each
    retail   - price for one set at retail
    tiers    - quantity pricing for businesses: { min: <qty>, price: <per set> }
*/

window.AYELEN_DATA = {
  business: {
    name: "SheWhispers Beauty",
    tagline: "Your invitation to the front row.",
    subtitle: "Retail, wholesale & gifting price list",
    website: "https://www.shewhispersbeauty.com",
    contactEmail: "",
    currency: "$",
    footerNote: "Prices subject to change. All pieces are handmade, so please allow lead time on large orders."
  },

  categories: [
    "Satin Scrunchies",
    "Silk Scrunchies",
    "Sets"
  ],

  products: [
    {
      id: "satin-xxs",
      name: "Premium Satin Scrunchie — XXS",
      category: "Satin Scrunchies",
      description: "Petite hold for buns, braids and fine hair.",
      shades: ["Majesty", "Edelweiss", "Rose", "Latte", "Matcha", "Amber", "Azalea", "Raven"],
      image: "",
      pricing: { each: 12.00, halfDozen: 68.00, dozen: 130.00 }
    },
    {
      id: "satin-xs",
      name: "Premium Satin Scrunchie — XS",
      category: "Satin Scrunchies",
      description: "Everyday size, gentle on hair with no pulling.",
      shades: ["Majesty", "Edelweiss", "Rose", "Latte", "Matcha", "Amber", "Azalea", "Raven"],
      image: "",
      pricing: { each: 14.00, halfDozen: 80.00, dozen: 151.00 }
    },
    {
      id: "satin-xl",
      name: "Premium Satin Scrunchie — XL",
      category: "Satin Scrunchies",
      description: "Full, voluminous statement piece.",
      shades: ["Majesty", "Edelweiss", "Rose", "Latte", "Matcha", "Amber", "Azalea", "Raven"],
      image: "",
      pricing: { each: 16.00, halfDozen: 91.00, dozen: 173.00 }
    },
    {
      id: "satin-xxl",
      name: "Premium Satin Scrunchie — XXL",
      category: "Satin Scrunchies",
      description: "High-volume style and zero damage.",
      shades: ["Majesty", "Edelweiss", "Rose", "Latte", "Matcha", "Amber", "Azalea", "Raven"],
      image: "",
      pricing: { each: 18.00, halfDozen: 103.00, dozen: 194.00 }
    },
    {
      id: "nectar-xl",
      name: "Nectar Satin Scrunchie — XL",
      category: "Satin Scrunchies",
      description: "The Nectar colorway in XL.",
      shades: ["Nectar"],
      image: "",
      pricing: { each: 12.00, halfDozen: 68.00, dozen: 130.00 }
    },
    {
      id: "nectar-xxl",
      name: "Nectar Satin Scrunchie — XXL",
      category: "Satin Scrunchies",
      description: "The Nectar colorway in XXL.",
      shades: ["Nectar"],
      image: "",
      pricing: { each: 18.00, halfDozen: 103.00, dozen: 194.00 }
    },
    {
      id: "silk-xxl",
      name: "Premium Silk Scrunchie — XXL",
      category: "Silk Scrunchies",
      description: "The Silk Standard: elegance and hair health. One size, XXL.",
      shades: ["Edelweiss"],
      image: "",
      pricing: { each: 40.00, halfDozen: 228.00, dozen: 432.00 }
    },
    {
      id: "after-hours-xl",
      name: "The XL After Hours Set",
      category: "Sets",
      description: "Three XL satin pieces: Majesty, Edelweiss and Rose.",
      shades: [],
      image: "",
      pricing: { each: 43.00, halfDozen: 245.00, dozen: 464.00 }
    },
    {
      id: "after-hours-xxl",
      name: "The XXL After Hours Set",
      category: "Sets",
      description: "Three XXL satin pieces: Majesty, Edelweiss and Rose.",
      shades: [],
      image: "",
      pricing: { each: 48.00, halfDozen: 274.00, dozen: 518.00 }
    }
  ],

  /* Wholesale case packs. Prices per unit = retail "each" price minus the discount,
     unless a product sets its own "wholesale" prices. Mixed shades are fine within a case. */
  wholesaleTiers: [
    { id: "starter",  label: "Starter Case",  units: 24, discount: 40 },
    { id: "studio",   label: "Studio Case",   units: 48, discount: 45 },
    { id: "boutique", label: "Boutique Case", units: 96, discount: 50 }
  ],

  wholesaleTerms: [
    "Opening order minimum: one Starter Case (24 units of one product). Shades can be mixed within a case.",
    "Reorders: from 12 units at your current tier price.",
    "Suggested retail price is shown on every product so your shelf stays consistent.",
    "Handmade to order: please allow 2–3 weeks for cases, longer for 96+ units.",
    "Countertop display and shade card included free with Studio and Boutique cases."
  ],

  /* Curated gift sets for salons, dance studios and corporate gifting.
     These are starting suggestions: rename, re-price or remove freely. */
  setAudiences: [
    "Salon",
    "Dance Studio",
    "Corporate"
  ],

  giftSets: [
    {
      id: "salon-chairside",
      name: "The Chair-Side Edit",
      audience: "Salon",
      description: "A finishing touch to sell at the styling chair after a blowout.",
      contents: [
        "3 XL satin scrunchies (Edelweiss, Latte, Raven)",
        "Satin pouch and scrunchie care card"
      ],
      image: "",
      retail: 44.00,
      tiers: [
        { min: 12, price: 26.00 },
        { min: 24, price: 24.00 },
        { min: 48, price: 22.00 }
      ]
    },
    {
      id: "salon-counter",
      name: "Salon Counter Display",
      audience: "Salon",
      description: "Ready-to-sell countertop assortment for the front desk.",
      contents: [
        "24 satin scrunchies across XXS, XS, XL and XXL",
        "Mixed shades from the full collection",
        "Countertop display, shade card and price tags"
      ],
      image: "",
      retail: 360.00,
      tiers: [
        { min: 1, price: 205.00 },
        { min: 3, price: 190.00 }
      ]
    },
    {
      id: "dance-front-row",
      name: "The Front Row Set",
      audience: "Dance Studio",
      description: "Bun-friendly trio for class, rehearsal and recital.",
      contents: [
        "3 XXS satin scrunchies (Edelweiss, Rose, Raven)",
        "Hold tight on buns without pulling or creasing"
      ],
      image: "",
      retail: 36.00,
      tiers: [
        { min: 12, price: 21.00 },
        { min: 24, price: 19.50 },
        { min: 48, price: 18.00 }
      ]
    },
    {
      id: "dance-recital-favor",
      name: "Recital Favor",
      audience: "Dance Studio",
      description: "An end-of-season gift for every dancer in the company.",
      contents: [
        "1 XS satin scrunchie in your studio color",
        "Ribbon-tied with a \"bravo\" card (studio name printed on request)"
      ],
      image: "",
      retail: 16.00,
      tiers: [
        { min: 25, price: 9.50 },
        { min: 50, price: 8.75 },
        { min: 100, price: 8.00 }
      ]
    },
    {
      id: "corp-after-hours",
      name: "After Hours Gift Box",
      audience: "Corporate",
      description: "Our signature XXL trio, gift-boxed for clients and teams.",
      contents: [
        "3 XXL satin scrunchies (Majesty, Edelweiss, Rose)",
        "Gift box with ribbon and custom message card"
      ],
      image: "",
      retail: 54.00,
      tiers: [
        { min: 10, price: 40.00 },
        { min: 25, price: 37.00 },
        { min: 50, price: 34.00 },
        { min: 100, price: 31.00 }
      ]
    },
    {
      id: "corp-silk-executive",
      name: "The Silk Executive",
      audience: "Corporate",
      description: "A single statement silk piece for VIP clients and executives.",
      contents: [
        "1 Edelweiss XXL silk scrunchie",
        "Gift box, tissue and custom message card"
      ],
      image: "",
      retail: 46.00,
      tiers: [
        { min: 10, price: 33.00 },
        { min: 25, price: 30.00 },
        { min: 50, price: 28.00 }
      ]
    },
    {
      id: "corp-thank-you",
      name: "Thank-You Mini",
      audience: "Corporate",
      description: "An easy add-on for event bags, onboarding kits and client thank-yous.",
      contents: [
        "2 XS satin scrunchies in coordinated shades",
        "Satin pouch with logo or message tag"
      ],
      image: "",
      retail: 28.00,
      tiers: [
        { min: 25, price: 17.00 },
        { min: 50, price: 15.50 },
        { min: 100, price: 14.00 }
      ]
    }
  ]
};
