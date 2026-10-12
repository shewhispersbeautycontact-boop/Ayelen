(function () {
  const data = window.AYELEN_DATA;
  const currency = data.business.currency || "$";
  const tiers = data.wholesaleTiers || [];
  const giftSets = data.giftSets || [];
  const audiences = data.setAudiences || [];

  document.getElementById("business-name").textContent = data.business.name;
  document.getElementById("business-tagline").textContent = data.business.tagline;
  document.getElementById("business-subtitle").textContent = data.business.subtitle || "";
  document.getElementById("footer-note").textContent = data.business.footerNote || "";
  document.title = data.business.name + " — Price List";

  const contact = document.getElementById("footer-contact");
  if (data.business.contactEmail) {
    const a = document.createElement("a");
    a.href = "mailto:" + data.business.contactEmail;
    a.textContent = data.business.contactEmail;
    contact.append("Wholesale & gifting inquiries: ", a);
  } else if (data.business.website) {
    const a = document.createElement("a");
    a.href = data.business.website;
    a.textContent = data.business.website.replace(/^https?:\/\/(www\.)?/, "");
    contact.appendChild(a);
  }

  const searchInput = document.getElementById("search-input");
  const tabsContainer = document.getElementById("category-tabs");
  const viewSwitch = document.getElementById("view-switch");
  const terms = document.getElementById("terms");
  const main = document.getElementById("product-container");

  const VIEWS = ["retail", "wholesale", "sets"];
  let activeView = viewFromHash();
  let activeCategory = "All";

  function viewFromHash() {
    const v = location.hash.replace("#", "");
    return VIEWS.includes(v) ? v : "retail";
  }

  function formatPrice(n) {
    return currency + Number(n).toFixed(2);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function wholesaleUnitPrice(p, tier) {
    if (p.wholesale && p.wholesale[tier.id] != null) return p.wholesale[tier.id];
    return Math.round(p.pricing.each * (1 - tier.discount / 100) * 100) / 100;
  }

  function matchesQuery(query, ...fields) {
    if (!query) return true;
    return fields.some((f) =>
      (Array.isArray(f) ? f.join(" ") : f || "").toLowerCase().includes(query)
    );
  }

  /* ---------- view + tabs ---------- */

  function renderViewSwitch() {
    viewSwitch.querySelectorAll("a").forEach((a) => {
      const on = a.dataset.view === activeView;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function renderTabs() {
    const cats = ["All", ...(activeView === "sets" ? audiences : data.categories)];
    tabsContainer.innerHTML = "";
    cats.forEach((cat) => {
      const btn = el("button", cat === activeCategory ? "active" : "", cat);
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderTabs();
        renderMain();
      });
      tabsContainer.appendChild(btn);
    });
  }

  function renderTerms() {
    const list = activeView === "wholesale" ? data.wholesaleTerms : null;
    terms.innerHTML = "";
    terms.hidden = !list || list.length === 0;
    if (terms.hidden) return;
    terms.appendChild(el("h2", "", "Wholesale terms"));
    const ul = el("ul");
    list.forEach((t) => ul.appendChild(el("li", "", t)));
    terms.appendChild(ul);
  }

  /* ---------- cards ---------- */

  function thumb(item) {
    const t = el("div", "thumb");
    if (item.image) {
      const img = document.createElement("img");
      img.src = "images/" + item.image;
      img.alt = item.name;
      t.appendChild(img);
    } else {
      t.textContent = "No photo";
    }
    return t;
  }

  function priceRows(table, rows) {
    rows.forEach(([label, value, extra]) => {
      if (value === undefined || value === null) return;
      table.appendChild(el("div", "label", label));
      const v = el("div", "value", formatPrice(value));
      if (extra) v.appendChild(el("span", "extra", extra));
      table.appendChild(v);
    });
  }

  function cardShell(item) {
    const card = el("div", "product-card");
    const body = el("div", "body");
    body.appendChild(el("h3", "", item.name));
    body.appendChild(el("p", "desc", item.description || ""));
    card.appendChild(thumb(item));
    card.appendChild(body);
    return { card, body };
  }

  function shadeList(p) {
    if (!p.shades || p.shades.length === 0) return null;
    return el("p", "shades", "Shades: " + p.shades.join(", "));
  }

  function retailCard(p) {
    const { card, body } = cardShell(p);
    const shades = shadeList(p);
    if (shades) body.appendChild(shades);
    const table = el("div", "price-table");
    priceRows(table, [
      ["Each", p.pricing.each],
      ["Half Dozen (6)", p.pricing.halfDozen],
      ["Dozen (12)", p.pricing.dozen]
    ]);
    body.appendChild(table);
    return card;
  }

  function wholesaleCard(p) {
    const { card, body } = cardShell(p);
    const shades = shadeList(p);
    if (shades) body.appendChild(shades);
    const table = el("div", "price-table tiers");
    table.appendChild(el("div", "label head", "Case pack"));
    table.appendChild(el("div", "value head", "Per unit · case"));
    tiers.forEach((tier) => {
      const unit = wholesaleUnitPrice(p, tier);
      table.appendChild(el("div", "label", tier.label + " (" + tier.units + ")"));
      const v = el("div", "value", formatPrice(unit));
      v.appendChild(el("span", "extra", formatPrice(unit * tier.units)));
      table.appendChild(v);
    });
    body.appendChild(table);
    body.appendChild(el("p", "msrp", "Suggested retail " + formatPrice(p.pricing.each)));
    return card;
  }

  function setCard(s) {
    const { card, body } = cardShell(s);
    card.classList.add("set-card");
    const badge = el("span", "badge", s.audience);
    body.insertBefore(badge, body.firstChild);
    if (s.contents && s.contents.length) {
      const ul = el("ul", "contents");
      s.contents.forEach((c) => ul.appendChild(el("li", "", c)));
      body.appendChild(ul);
    }
    const table = el("div", "price-table tiers");
    table.appendChild(el("div", "label head", "Quantity"));
    table.appendChild(el("div", "value head", "Per set"));
    (s.tiers || []).forEach((t) => {
      table.appendChild(el("div", "label", t.min + "+ sets"));
      table.appendChild(el("div", "value", formatPrice(t.price)));
    });
    body.appendChild(table);
    if (s.retail != null) {
      body.appendChild(el("p", "msrp", "Retail value " + formatPrice(s.retail)));
    }
    return card;
  }

  /* ---------- sections ---------- */

  function section(title, cards) {
    const sec = el("section", "category-section");
    sec.appendChild(el("h2", "", title));
    const grid = el("div", "product-grid");
    cards.forEach((c) => grid.appendChild(c));
    sec.appendChild(grid);
    return sec;
  }

  function renderMain() {
    const query = searchInput.value.trim().toLowerCase();
    main.innerHTML = "";
    let anyResults = false;

    if (activeView === "sets") {
      const groups = activeCategory === "All" ? audiences : [activeCategory];
      groups.forEach((aud) => {
        const items = giftSets.filter(
          (s) =>
            s.audience === aud &&
            matchesQuery(query, s.name, s.description, s.contents)
        );
        if (items.length === 0) return;
        anyResults = true;
        main.appendChild(section(aud + " Sets", items.map(setCard)));
      });
    } else {
      const makeCard = activeView === "wholesale" ? wholesaleCard : retailCard;
      const cats = activeCategory === "All" ? data.categories : [activeCategory];
      cats.forEach((cat) => {
        const items = data.products.filter(
          (p) =>
            p.category === cat &&
            matchesQuery(query, p.name, p.description, p.shades)
        );
        if (items.length === 0) return;
        anyResults = true;
        main.appendChild(section(cat, items.map(makeCard)));
      });
    }

    if (!anyResults) {
      main.appendChild(el("div", "no-results", "Nothing matches your search."));
    }
  }

  function renderAll() {
    renderViewSwitch();
    renderTabs();
    renderTerms();
    renderMain();
  }

  window.addEventListener("hashchange", () => {
    const next = viewFromHash();
    if (next === activeView) return;
    // Category tabs differ between products and gift sets, so reset the filter.
    activeView = next;
    activeCategory = "All";
    renderAll();
  });

  searchInput.addEventListener("input", renderMain);

  renderAll();
})();
