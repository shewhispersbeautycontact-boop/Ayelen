/*
  Edit this file to update your product list and prices.
  No coding knowledge needed — just follow the pattern below.

  For each product, fill in:
    id          - unique short code, no spaces (e.g. "lash-classic-mink")
    name        - product name shown on the site
    category    - must match one of the categories listed below
    description - short one-line description
    image       - filename of a photo placed in the images/ folder (or leave "" for none)
    pricing.each      - price for a single unit
    pricing.halfDozen - price for 6 units
    pricing.dozen     - price for 12 units

  To add a new category, add it to the "categories" list below,
  then use that exact name in a product's "category" field.
*/

window.AYELEN_DATA = {
  business: {
    name: "Ayelen",
    tagline: "Beauty Products Price List",
    currency: "$",
    footerNote: "Prices subject to change without notice. Contact us for bulk/wholesale orders beyond a dozen."
  },

  categories: [
    "Lashes",
    "Skincare",
    "Lip Products",
    "Fragrance"
  ],

  products: [
    {
      id: "lash-classic-mink",
      name: "Classic Mink Lashes",
      category: "Lashes",
      description: "Soft, lightweight, reusable up to 20 times.",
      image: "",
      pricing: { each: 8.00, halfDozen: 42.00, dozen: 78.00 }
    },
    {
      id: "lash-volume-dd",
      name: "Volume DD Curl Lashes",
      category: "Lashes",
      description: "Dramatic full volume look for special occasions.",
      image: "",
      pricing: { each: 10.00, halfDozen: 54.00, dozen: 100.00 }
    },
    {
      id: "skincare-vitc-serum",
      name: "Vitamin C Brightening Serum",
      category: "Skincare",
      description: "30ml bottle, brightens and evens skin tone.",
      image: "",
      pricing: { each: 15.00, halfDozen: 80.00, dozen: 150.00 }
    },
    {
      id: "skincare-hydra-mask",
      name: "Hydrating Sheet Mask",
      category: "Skincare",
      description: "Single-use sheet mask, deep hydration.",
      image: "",
      pricing: { each: 3.50, halfDozen: 18.00, dozen: 33.00 }
    },
    {
      id: "lip-matte-gloss",
      name: "Matte Lip Gloss",
      category: "Lip Products",
      description: "Long-lasting, non-sticky matte finish.",
      image: "",
      pricing: { each: 6.00, halfDozen: 32.00, dozen: 60.00 }
    },
    {
      id: "lip-liner-set",
      name: "Lip Liner (assorted shades)",
      category: "Lip Products",
      description: "Smooth, creamy formula, assorted colors available.",
      image: "",
      pricing: { each: 4.00, halfDozen: 21.00, dozen: 40.00 }
    },
    {
      id: "fragrance-mini-perfume",
      name: "Mini Perfume Spray (15ml)",
      category: "Fragrance",
      description: "Travel-size, long-lasting scent.",
      image: "",
      pricing: { each: 12.00, halfDozen: 65.00, dozen: 120.00 }
    }
  ]
};
