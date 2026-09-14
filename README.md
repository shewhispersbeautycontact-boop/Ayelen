# Ayelen — Product Pricing List Website

A simple, no-build website that shows your products with pricing per unit,
half dozen, and dozen. Works by just opening `index.html` in a browser —
no server or installation required.

## How to view it

Double-click `index.html`, or open it in any web browser.

## How to edit your products and prices

Open `data/products.js` in any text editor. Each product looks like this:

```js
{
  id: "lash-classic-mink",
  name: "Classic Mink Lashes",
  category: "Lashes",
  description: "Soft, lightweight, reusable up to 20 times.",
  image: "",
  pricing: { each: 8.00, halfDozen: 42.00, dozen: 78.00 }
}
```

- `name` — the product name shown on the site
- `category` — must match a name in the `categories` list at the top of the file
- `description` — a short one-line blurb
- `image` — filename of a photo placed in the `images/` folder (leave `""` for none)
- `pricing.each` / `halfDozen` / `dozen` — your prices for 1 / 6 / 12 units

To add a new product, copy an existing entry inside the `products: [ ... ]`
list, paste it as a new item, and edit the values. Don't forget a comma
between items.

To add a new category, add its name to the `categories` list near the top
of `data/products.js`, then use that same name on any product.

## Adding product photos

1. Put the image file (e.g. `lashes1.jpg`) inside the `images/` folder.
2. Set that product's `image` field to the filename, e.g. `image: "lashes1.jpg"`.

## Publishing it online (optional)

This is a static site, so it can be hosted for free in a few ways:

- **GitHub Pages**: push this repo to GitHub, then enable Pages in the
  repository settings (Settings → Pages → deploy from the branch/root).
- **Netlify / Vercel**: drag-and-drop the project folder onto their
  dashboard, or connect the GitHub repo.

## Editing the sample data

The current products, categories, and prices are placeholder examples so
you can see how the site looks. Replace them in `data/products.js` with
your real products whenever you're ready.
