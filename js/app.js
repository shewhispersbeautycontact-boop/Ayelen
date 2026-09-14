(function () {
  const data = window.AYELEN_DATA;
  const currency = data.business.currency || "$";

  document.getElementById("business-name").textContent = data.business.name;
  document.getElementById("business-tagline").textContent = data.business.tagline;
  document.getElementById("footer-note").textContent = data.business.footerNote || "";

  const searchInput = document.getElementById("search-input");
  const tabsContainer = document.getElementById("category-tabs");
  const main = document.getElementById("product-container");

  let activeCategory = "All";

  function formatPrice(n) {
    return currency + Number(n).toFixed(2);
  }

  function renderTabs() {
    const cats = ["All", ...data.categories];
    tabsContainer.innerHTML = "";
    cats.forEach((cat) => {
      const btn = document.createElement("button");
      btn.textContent = cat;
      btn.className = cat === activeCategory ? "active" : "";
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderTabs();
        renderProducts();
      });
      tabsContainer.appendChild(btn);
    });
  }

  function productCard(p) {
    const card = document.createElement("div");
    card.className = "product-card";

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    if (p.image) {
      const img = document.createElement("img");
      img.src = "images/" + p.image;
      img.alt = p.name;
      thumb.appendChild(img);
    } else {
      thumb.textContent = "No photo";
    }

    const body = document.createElement("div");
    body.className = "body";

    const h3 = document.createElement("h3");
    h3.textContent = p.name;

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = p.description || "";

    const priceTable = document.createElement("div");
    priceTable.className = "price-table";

    const rows = [
      ["Each", p.pricing.each],
      ["Half Dozen (6)", p.pricing.halfDozen],
      ["Dozen (12)", p.pricing.dozen]
    ];

    rows.forEach(([label, value]) => {
      if (value === undefined || value === null) return;
      const l = document.createElement("div");
      l.className = "label";
      l.textContent = label;
      const v = document.createElement("div");
      v.className = "value";
      v.textContent = formatPrice(value);
      priceTable.appendChild(l);
      priceTable.appendChild(v);
    });

    body.appendChild(h3);
    body.appendChild(desc);
    body.appendChild(priceTable);
    card.appendChild(thumb);
    card.appendChild(body);
    return card;
  }

  function renderProducts() {
    const query = searchInput.value.trim().toLowerCase();
    main.innerHTML = "";

    const categoriesToShow =
      activeCategory === "All" ? data.categories : [activeCategory];

    let anyResults = false;

    categoriesToShow.forEach((cat) => {
      const items = data.products.filter((p) => {
        const matchesCategory = p.category === cat;
        const matchesQuery =
          !query ||
          p.name.toLowerCase().includes(query) ||
          (p.description || "").toLowerCase().includes(query);
        return matchesCategory && matchesQuery;
      });

      if (items.length === 0) return;
      anyResults = true;

      const section = document.createElement("section");
      section.className = "category-section";

      const heading = document.createElement("h2");
      heading.textContent = cat;
      section.appendChild(heading);

      const grid = document.createElement("div");
      grid.className = "product-grid";
      items.forEach((p) => grid.appendChild(productCard(p)));
      section.appendChild(grid);

      main.appendChild(section);
    });

    if (!anyResults) {
      const empty = document.createElement("div");
      empty.className = "no-results";
      empty.textContent = "No products match your search.";
      main.appendChild(empty);
    }
  }

  searchInput.addEventListener("input", renderProducts);

  renderTabs();
  renderProducts();
})();
