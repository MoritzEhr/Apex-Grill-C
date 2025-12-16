// Menüdaten
const categories = [
    { id: "appetizers", name: "Vorspeisen", icon: "fa-plate-wheat" },
    { id: "doner", name: "Döner", icon: "fa-utensils" },
    { id: "burger", name: "Burger", icon: "fa-burger" },
    { id: "pizza", name: "Pizza", icon: "fa-pizza-slice" },
    { id: "schnitzel", name: "Schnitzel", icon: "fa-drumstick-bite" },
    { id: "vegetarian", name: "Vegetarisch", icon: "fa-leaf" },
    { id: "soups", name: "Suppen", icon: "fa-bowl-food" },
    { id: "desserts", name: "Desserts", icon: "fa-ice-cream" },
    { id: "drinks", name: "Getränke", icon: "fa-glass-water" },
  ];
  
  const menuItems = [
    // Vorspeisen
    {
      id: "appetizer-1",
      name: "Süßkartoffel-Pommes",
      description: "Knusprige Süßkartoffel-Pommes mit Knoblauch-Aioli-Dip",
      price: 4.90,
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop",
      category: "appetizers",
    },
    {
      id: "appetizer-2",
      name: "Klassische Pommes",
      description: "Goldbraune, knusprige Pommes mit Ketchup oder Mayo nach Wahl",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
      category: "appetizers",
    },
    {
      id: "appetizer-3",
      name: "Zwiebelringe",
      description: "Knusprige Zwiebelringe im Teigmantel mit BBQ-Sauce",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
      category: "appetizers",
    },
    {
      id: "appetizer-4",
      name: "Chicken Wings",
      description: "Scharfe Buffalo Wings mit Blauschimmelkäse-Dip (6 Stück)",
      price: 7.90,
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop",
      category: "appetizers",
    },
    {
      id: "appetizer-5",
      name: "Mozzarella-Sticks",
      description: "Panierte Mozzarella-Sticks mit Marinara-Sauce",
      price: 5.90,
      image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&h=300&fit=crop",
      category: "appetizers",
    },
    // Döner
    {
      id: "doner-1",
      name: "Klassischer Döner Kebab",
      description: "Zartes Drehfleisch, frischer Salat, Tomaten, Zwiebeln und unsere Haussauce im warmen Fladenbrot",
      price: 7.90,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
      category: "doner",
    },
    {
      id: "doner-2",
      name: "Döner Box",
      description: "Dönerfleisch mit knusprigen Pommes, frischem Salat und Sauce nach Wahl",
      price: 9.50,
      image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&h=300&fit=crop",
      category: "doner",
    },
    {
      id: "doner-3",
      name: "Döner Teller",
      description: "Großzügige Portion Dönerfleisch mit Reis, Salat, Hummus und warmem Brot",
      price: 12.90,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
      category: "doner",
    },
    {
      id: "doner-4",
      name: "Hähnchen-Döner",
      description: "Marinierter Hähnchen-Döner mit Knoblauchsauce, Salat und Tomaten",
      price: 8.50,
      image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
      category: "doner",
    },
    // Burger
    {
      id: "burger-1",
      name: "Klassischer Cheeseburger",
      description: "Saftiges Rindfleisch-Patty, geschmolzener Cheddar, Salat, Tomate, Gurken und Spezialsauce",
      price: 8.90,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      category: "burger",
    },
    {
      id: "burger-2",
      name: "BBQ Bacon Burger",
      description: "Rindfleisch-Patty, knuspriger Speck, BBQ-Sauce, karamellisierte Zwiebeln und Jalapeños",
      price: 11.50,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
      category: "burger",
    },
    {
      id: "burger-3",
      name: "Double Smash Burger",
      description: "Zwei zerdrückte Rindfleisch-Patties, doppelter Käse, Gurken und Senf",
      price: 12.90,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
      category: "burger",
    },
    {
      id: "burger-4",
      name: "Crispy Chicken Burger",
      description: "Knuspriges Hähnchenbrustfilet, Krautsalat und Honig-Senf-Sauce",
      price: 9.90,
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
      category: "burger",
    },
    // Pizza
    {
      id: "pizza-1",
      name: "Margherita",
      description: "Klassische Tomatensauce, frischer Mozzarella, Basilikum und Olivenöl",
      price: 10.90,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
      category: "pizza",
    },
    {
      id: "pizza-2",
      name: "Pepperoni-Liebhaber",
      description: "Tomatensauce, Mozzarella und großzügige Peperoni-Scheiben",
      price: 12.90,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
      category: "pizza",
    },
    {
      id: "pizza-3",
      name: "Döner Pizza",
      description: "Unser unverkennbares Dönerfleisch auf Pizza mit Knoblauchsauce und frischem Gemüse",
      price: 14.50,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      category: "pizza",
    },
    {
      id: "pizza-4",
      name: "Vier Käse",
      description: "Mozzarella, Gorgonzola, Parmesan und Ziegenkäse auf cremiger Basis",
      price: 13.90,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
      category: "pizza",
    },
    // Schnitzel
    {
      id: "schnitzel-1",
      name: "Wiener Schnitzel",
      description: "Klassisches paniertes Kalbsschnitzel serviert mit Zitrone und Kartoffelsalat",
      price: 14.90,
      image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&h=300&fit=crop",
      category: "schnitzel",
    },
    {
      id: "schnitzel-2",
      name: "Jägerschnitzel",
      description: "Paniertes Schweineschnitzel mit cremiger Pilzsauce und Spätzle",
      price: 15.90,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
      category: "schnitzel",
    },
    {
      id: "schnitzel-3",
      name: "Hähnchenschnitzel",
      description: "Knuspriges paniertes Hähnchenbrustfilet mit Pommes und Krautsalat",
      price: 12.90,
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop",
      category: "schnitzel",
    },
    // Vegetarisch
    {
      id: "veg-1",
      name: "Falafel-Wrap",
      description: "Knusprige Falafel, Hummus, Taboulé und Tahini im warmen Fladenbrot",
      price: 7.90,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
      category: "vegetarian",
    },
    {
      id: "veg-2",
      name: "Veggie-Burger",
      description: "Gegrilltes pflanzliches Patty mit Avocado, Sprossen und Chipotle-Mayo",
      price: 10.50,
      image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
      category: "vegetarian",
    },
    {
      id: "veg-3",
      name: "Halloumi-Teller",
      description: "Gegrillter Halloumi-Käse mit mediterranem Salat, Oliven und Pita",
      price: 11.90,
      image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop",
      category: "vegetarian",
    },
    {
      id: "veg-4",
      name: "Mezze-Platte",
      description: "Hummus, Baba Ganoush, Falafel, Taboulé und warmes Fladenbrot",
      price: 13.90,
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=300&fit=crop",
      category: "vegetarian",
    },
    // Suppen
    {
      id: "soup-1",
      name: "Linsensuppe",
      description: "Traditionelle rote Linsensuppe mit Kreuzkümmel und frischer Zitrone",
      price: 5.50,
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
      category: "soups",
    },
    {
      id: "soup-2",
      name: "Hühnernudelsuppe",
      description: "Herzhafte Hühnerbrühe mit zartem Hühnchen, Gemüse und Nudeln",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop",
      category: "soups",
    },
    {
      id: "soup-3",
      name: "Tomaten-Basilikum-Suppe",
      description: "Cremige Tomatensuppe mit frischem Basilikum und Knoblauch-Croutons",
      price: 5.90,
      image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop",
      category: "soups",
    },
    // Desserts
    {
      id: "dessert-1",
      name: "Baklava",
      description: "Traditionelles türkisches Gebäck mit Pistazien und Honig",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop",
      category: "desserts",
    },
    {
      id: "dessert-2",
      name: "Künefe",
      description: "Warmes Käsedessert mit Sirup und Pistazien",
      price: 5.90,
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop",
      category: "desserts",
    },
    {
      id: "dessert-3",
      name: "Tiramisu",
      description: "Klassisches italienisches Dessert mit Espresso und Mascarpone",
      price: 5.50,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
      category: "desserts",
    },
    {
      id: "dessert-4",
      name: "Schokoladen-Lava-Kuchen",
      description: "Warmer Schokoladenkuchen mit flüssigem Kern und Vanilleeis",
      price: 6.50,
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
      category: "desserts",
    },
    {
      id: "dessert-5",
      name: "Eis-Auswahl",
      description: "3 Kugeln nach Wahl: Vanille, Schokolade, Erdbeere oder Pistazie",
      price: 4.00,
      image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
      category: "desserts",
    },
    {
      id: "dessert-6",
      name: "Sütlaç",
      description: "Türkischer Milchreis mit Zimt und Rosenwasser",
      price: 3.90,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
      category: "desserts",
    },
    // Getränke
    {
      id: "drink-1",
      name: "Ayran",
      description: "Traditionelles türkisches Joghurtgetränk, erfrischend und kalt",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-2",
      name: "Frische Limonade",
      description: "Hausgemachte Limonade mit frischen Minzblättern",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-3",
      name: "Türkischer Tee",
      description: "Traditioneller schwarzer Tee, serviert im klassischen Tulpenglas",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-4",
      name: "Softdrinks",
      description: "Coca-Cola, Fanta, Sprite oder Mineralwasser",
      price: 2.50,
      image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-5",
      name: "Mango Lassi",
      description: "Cremiges Mango-Joghurt-Getränk aus Indien",
      price: 3.90,
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-6",
      name: "Frischer Orangensaft",
      description: "Frisch gepresster Orangensaft",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-7",
      name: "Türkischer Kaffee",
      description: "Traditionell zubereiteter türkischer Mokka",
      price: 2.90,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-8",
      name: "Pfirsich-Eistee",
      description: "Erfrischender hausgemachter Eistee",
      price: 3.00,
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-9",
      name: "Mineralwasser",
      description: "Still oder spritzig (0,5L)",
      price: 2.00,
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-10",
      name: "Apfelschorle",
      description: "Erfrischender Apfelsaft mit Mineralwasser",
      price: 2.90,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-11",
      name: "Energy Drink",
      description: "Red Bull oder Monster (250ml)",
      price: 3.50,
      image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=300&fit=crop",
      category: "drinks",
    },
    {
      id: "drink-12",
      name: "Milchshake",
      description: "Vanille, Schokolade oder Erdbeere mit Schlagsahne",
      price: 4.50,
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
      category: "drinks",
    },
  ];
  
  // State Management
  let cart = [];
  let activeCategory = null;
  let searchQuery = "";
  // Toggle variable to show/hide price breakdown details
  const SHOW_PRICE_BREAKDOWN = true; // Set to true to show subtotal, extras, delivery; false to show only total
  
  // Toggle variable to increase total by 5%
  const INCREASE_TOTAL_BY_5_PERCENT = false; // Set to true to increase total by 5%
  
  // Toggle variable to show/hide trash icon and style minus button
  const SHOW_TRASH_ICON = true; // Set to true to show trash icon and white minus; false to hide trash and blend minus
  
  let cartState = {
    selectedTipPercent: 0,
    hasInsurance: false,
    isCO2Neutral: false,
    hasSubscription: false,
    showOrderSummary: false,
  };
  
  // Cart Management
  function addToCart(item) {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    updateCartUI();
  }
  
  function removeFromCart(itemId) {
    cart = cart.filter((item) => item.id !== itemId);
    updateCartUI();
  }
  
  function updateQuantity(itemId, quantity) {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      const item = cart.find((i) => i.id === itemId);
      if (item) {
        item.quantity = quantity;
        updateCartUI();
      }
    }
  }
  
  function clearCart() {
    cart = [];
    cartState.showOrderSummary = false;
    updateCartUI();
  }
  
  function getTotalItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  function getTotalPrice() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
  
  const MINIMUM_ORDER_VALUE = 2; // Mindestbestellwert in Euro
  
  function getCartTotals() {
    const subtotal = getTotalPrice();
    const tipAmount = subtotal * cartState.selectedTipPercent;
    const insuranceCost = cartState.hasInsurance ? 0.99 : 0;
    const co2Cost = cartState.isCO2Neutral ? 0.99 : 0;
    const deliveryFee = 2.99;
    const extras = tipAmount + insuranceCost + co2Cost;
    let total = subtotal + extras + deliveryFee;
    if (INCREASE_TOTAL_BY_5_PERCENT) {
      total = total * 1.05;
    }
    return { subtotal, tipAmount, insuranceCost, co2Cost, deliveryFee, extras, total };
  }
  
  function updateCartUI() {
    const badge = document.getElementById("cartBadge");
    const totalItems = getTotalItems();
    if (badge) {
      if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = "flex";
      } else {
        badge.style.display = "none";
      }
    }
    renderCart();
  }
  
  // Render Menu
  function renderCategories() {
    const container = document.querySelector(".category-scroll");
    if (!container) return;
  
    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.className = "category-btn";
      btn.dataset.category = category.id;
      btn.innerHTML = `
        <i class="fa-solid ${category.icon}"></i>
        ${category.name}
      `;
      btn.addEventListener("click", () => {
        activeCategory = category.id;
        updateCategoryButtons();
        renderMenu();
      });
      container.appendChild(btn);
    });
  }
  
  function updateCategoryButtons() {
    document.querySelectorAll(".category-btn").forEach((btn) => {
      if (btn.dataset.category === "all" && activeCategory === null) {
        btn.classList.add("active");
      } else if (btn.dataset.category === activeCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
  
  function getCategoryName(categoryId) {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : categoryId;
  }
  
  function renderMenu() {
    const menuGrid = document.getElementById("menuGrid");
    const searchResults = document.getElementById("searchResults");
    const emptyState = document.getElementById("emptyState");
    if (!menuGrid) return;
  
    // Filter items
    let filteredItems = menuItems;
    
    if (searchQuery.trim()) {
      filteredItems = filteredItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  
    if (activeCategory) {
      filteredItems = filteredItems.filter((item) => item.category === activeCategory);
    }
  
    // Show/hide search results
    if (searchQuery.trim()) {
      if (searchResults) {
        searchResults.style.display = "block";
        const title = searchResults.querySelector(".search-results-title");
        const count = searchResults.querySelector(".search-results-count");
        if (title) title.textContent = `Suchergebnisse für "${searchQuery}"`;
        if (count) count.textContent = `${filteredItems.length} ${filteredItems.length === 1 ? "Artikel" : "Artikel"} gefunden`;
      }
    } else {
      if (searchResults) searchResults.style.display = "none";
    }
  
    // Clear menu
    menuGrid.innerHTML = "";


    // Show empty state
    if (filteredItems.length === 0) {
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    // Group by category if not searching and no active category
    if (!searchQuery.trim() && !activeCategory) {
      // Add class to indicate grouped mode
      menuGrid.classList.add("menu-grid-grouped");
      
      const groupedItems = {};
      categories.forEach((category) => {
        const items = filteredItems.filter((item) => item.category === category.id);
        if (items.length > 0) {
          groupedItems[category.id] = items;
        }
      });

      Object.entries(groupedItems).forEach(([categoryId, items]) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "menu-category";
        categoryDiv.id = categoryId;

        const header = document.createElement("div");
        header.className = "category-header";
        header.innerHTML = `
          <h2 class="category-title">${getCategoryName(categoryId)}</h2>
          <span class="category-count">${items.length} Artikel</span>
        `;

        const grid = document.createElement("div");
        grid.className = "menu-grid";

        items.forEach((item, index) => {
          grid.appendChild(createMenuCard(item, index));
        });

        categoryDiv.appendChild(header);
        categoryDiv.appendChild(grid);
        menuGrid.appendChild(categoryDiv);
      });
    } else {
      // Flat grid for specific category or search results
      menuGrid.classList.remove("menu-grid-grouped");
      
      filteredItems.forEach((item, index) => {
        menuGrid.appendChild(createMenuCard(item, index));
      });
    }
  }
  
  function createMenuCard(item, index) {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.style.animationDelay = `${index * 50}ms`;
  
    card.innerHTML = `
      <div class="menu-card-image-wrapper">
        <img src="${item.image}" alt="${item.name}" class="menu-card-image" loading="lazy">
        <div class="menu-card-overlay"></div>
        ${item.isBestseller ? `
          <div class="menu-card-badge">
            <i class="fa-solid fa-fire"></i>
            <span>Bestseller</span>
          </div>
        ` : ""}
        <div class="menu-card-price">
          <span class="menu-card-price-value">${item.price.toFixed(2)}€</span>
        </div>
      </div>
      <div class="menu-card-content">
        <h3 class="menu-card-title">${item.name}</h3>
        <p class="menu-card-description">${item.description}</p>
        <button class="menu-card-btn" data-item-id="${item.id}">
          <i class="fa-solid fa-plus"></i>
          Zum Warenkorb
        </button>
      </div>
    `;
  
    const btn = card.querySelector(".menu-card-btn");
    btn.addEventListener("click", () => {
      addToCart(item);
      btn.classList.add("added");
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Hinzugefügt!';
      setTimeout(() => {
        btn.classList.remove("added");
        btn.innerHTML = '<i class="fa-solid fa-plus"></i> Zum Warenkorb';
      }, 300);
    });
  
    return card;
  }
  
  // Cart Sidebar
  function openCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar) sidebar.classList.add("open");
    if (overlay) overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  }
  
  function closeCart() {
    const sidebar = document.getElementById("cartSidebar");
    const overlay = document.getElementById("cartOverlay");
    if (sidebar) {
      sidebar.classList.remove("open");
      cartState.showOrderSummary = false;
    }
    if (overlay) overlay.style.display = "none";
    document.body.style.overflow = "";
    renderCart();
  }
  
  function renderCart() {
    const sidebar = document.getElementById("cartSidebar");
    if (!sidebar) return;

    // Preserve accordion state
    const extrasAccordion = document.getElementById("extrasAccordion");
    const isAccordionOpen = extrasAccordion && extrasAccordion.classList.contains("open");

    const totals = getCartTotals();
    const totalItems = getTotalItems();
    const meetsMinimumOrder = totals.subtotal >= MINIMUM_ORDER_VALUE;
    const remainingAmount = Math.max(0, MINIMUM_ORDER_VALUE - totals.subtotal);
  
    if (cartState.showOrderSummary) {
      sidebar.innerHTML = `
        <div class="order-summary-view active">
          <div class="cart-header">
            <div class="cart-header-left">
              <button class="cart-close-btn" id="backToCart">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <div>
                <h2 class="cart-header-title">Bestellübersicht</h2>
              </div>
            </div>
            <button class="cart-close-btn" id="closeCart">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="order-summary-content">
            <div class="order-items-summary">
              <h3>
                <i class="fa-solid fa-receipt"></i>
                Ihre Bestellung (${totalItems} Artikel)
              </h3>
              <div>
                ${cart.map(item => `
                  <div class="order-item-summary">
                    <span>${item.quantity}x ${item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}€</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="price-breakdown">
              ${SHOW_PRICE_BREAKDOWN ? `
              <div class="price-row">
                <span>Zwischensumme</span>
                <span>${totals.subtotal.toFixed(2)}€</span>
              </div>
              ` : ""}
              <div class="price-row">
                <span>Liefergebühr</span>
                <span>${totals.deliveryFee.toFixed(2)}€</span>
              </div>
              ${totals.extras > 0 ? `
                <div class="price-row">
                  <span>Extras</span>
                  <span>${totals.extras.toFixed(2)}€</span>
                </div>
              ` : ""}
              <div class="price-row-total">
                <span>Gesamt</span>
                <span>${totals.total.toFixed(2)}€</span>
              </div>
            </div>
            <div class="subscription-option">
              <label>
                <input type="checkbox" id="orderSubscription" ${cartState.hasSubscription ? "checked" : ""}>
                <div class="subscription-option-content">
                  <div class="subscription-option-header">
                    <i class="fa-solid fa-crown"></i>
                    <span class="subscription-option-title">Kostenloses Abonnement</span>
                  </div>
                  <p class="subscription-option-text">
                    Immer die schnellste Lieferung und exklusive Angebote erhalten!<br>
                    Erste Woche 0,00€, dann 4,99€/Monat. 
                    Jederzeit kündbar. 
                  </p>
                </div>
              </label>
            </div>
          </div>
          <div class="cart-footer">
            ${!meetsMinimumOrder ? `
              <div class="minimum-order-warning" style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.2); border-radius: 0.5rem; padding: 0.75rem; margin-bottom: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; color: rgb(234, 179, 8);">
                  <i class="fa-solid fa-exclamation-triangle"></i>
                  <span style="font-size: 0.875rem; font-weight: 500;">Mindestbestellwert: ${MINIMUM_ORDER_VALUE}€</span>
                </div>
                <p style="font-size: 0.75rem; color: rgb(115, 115, 115); margin-top: 0.25rem;">
                  ${remainingAmount.toFixed(2)}€ mehr, um den Mindestbestellwert zu erreichen!
                </p>
              </div>
            ` : ""}
            <button class="cart-checkout-btn" id="confirmOrder" ${!meetsMinimumOrder ? "disabled style='opacity: 0.5; cursor: not-allowed;'" : ""}>
              <i class="fa-solid fa-check"></i>
              Bestellung bestätigen - ${totals.total.toFixed(2)}€
            </button>
          </div>
        </div>
      `;
    } else {
      sidebar.innerHTML = `
          <div class="cart-header">
            <div class="cart-header-left">
              <div class="cart-header-icon">
                <i class="fa-solid fa-shopping-bag"></i>
              </div>
              <div>
                <h2 class="cart-header-title">Warenkorb</h2>
                <p class="cart-header-subtitle">${totalItems} Artikel</p>
              </div>
            </div>
            <button class="cart-close-btn" id="closeCart">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div class="cart-content">
            ${totalItems === 0 ? `
              <div class="cart-empty">
                <div class="cart-empty-icon">
                  <i class="fa-solid fa-basket-shopping"></i>
                </div>
                <h3>Ihr Warenkorb ist leer</h3>
                <p>Fügen Sie einige leckere Gerichte hinzu!</p>
              </div>
            ` : `
              <div class="cart-items">
                ${cart.map(item => `
                  <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-content">
                      <h4 class="cart-item-title">${item.name}</h4>
                      <p class="cart-item-price">${item.price.toFixed(2)}€</p>
                      <div class="cart-item-controls">
                        <div class="quantity-controls">
                          <button class="quantity-btn ${SHOW_TRASH_ICON ? '' : 'blended-minus'}" data-action="decrease" data-id="${item.id}">
                            <i class="fa-solid fa-minus" ${SHOW_TRASH_ICON ? 'style="color: white;"' : ''}></i>
                          </button>
                          <span class="quantity-value">${item.quantity}</span>
                          <button class="quantity-btn primary" data-action="increase" data-id="${item.id}">
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                        ${SHOW_TRASH_ICON ? `
                        <button class="cart-item-remove" data-id="${item.id}">
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                `).join("")}
              </div>
              <div class="cart-extras">
                <div class="cart-extras-accordion" id="extrasAccordion">
                  <div class="cart-extras-header" id="extrasHeader">
                    <div class="cart-extras-header-left">
                      <i class="fa-solid fa-sliders"></i>
                      <span class="cart-extras-title">Extras & Optionen</span>
                      ${SHOW_PRICE_BREAKDOWN && totals.extras > 0 ? `
                        <span class="cart-extras-badge">+${totals.extras.toFixed(2)}€</span>
                      ` : ""}
                    </div>
                    <i class="fa-solid fa-chevron-down cart-extras-icon"></i>
                  </div>
                  <div class="cart-extras-content">
                    <div class="cart-extras-section">
                      <div class="cart-extras-section-title">
                        <i class="fa-solid fa-heart"></i>
                        <span>Trinkgeld für den Fahrer</span>
                      </div>
                      <div class="tip-buttons">
                        ${[0, 0.05, 0.10, 0.15, 0.20].map(percent => `
                          <button class="tip-btn ${cartState.selectedTipPercent === percent ? "active" : ""}" 
                                  data-tip="${percent}">
                            ${percent === 0 ? "Kein" : `${percent * 100}%`}
                          </button>
                        `).join("")}
                      </div>
                      ${cartState.selectedTipPercent > 0 ? `
                        <p class="tip-amount">Trinkgeld: ${totals.tipAmount.toFixed(2)}€</p>
                      ` : ""}
                    </div>
                    <div class="cart-extras-section">
                      <div class="cart-extras-section-title">
                        <i class="fa-solid fa-shield-halved" style="color: #3b82f6;"></i>
                        <span>Lieferversicherung</span>
                      </div>
                      <label class="extra-option">
                        <input type="checkbox" id="insuranceYes" ${cartState.hasInsurance ? "checked" : ""}>
                        <div class="extra-option-content">
                          <div class="extra-option-header">
                            <span class="extra-option-title">Ja, ich möchte gegen Schäden und für den Fall von kaltem Essen versichert sein!</span>
                          </div>
                        </div>
                        <span class="extra-option-price">+0.99€</span>
                      </label>
                      <label class="extra-option">
                        <input type="checkbox" id="insuranceNo" ${!cartState.hasInsurance ? "checked" : ""}>
                        <div class="extra-option-content">
                          <div class="extra-option-header">
                            <span class="extra-option-title">Nein, ich möchte keine Lieferversicherung</span>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="cart-extras-section">
                      <div class="cart-extras-section-title">
                        <i class="fa-solid fa-leaf" style="color: #22c55e;"></i>
                        <span>CO2-neutrale Lieferung</span>
                      </div>
                      <label class="extra-option">
                        <input type="checkbox" id="co2Yes" ${cartState.isCO2Neutral ? "checked" : ""}>
                        <div class="extra-option-content">
                          <div class="extra-option-header">
                            <span class="extra-option-title">Ja, ich möchte CO2-neutral sein!</span>
                          </div>
                        </div>
                        <span class="extra-option-price">+0.99€</span>
                      </label>
                      <label class="extra-option">
                        <input type="checkbox" id="co2No" ${!cartState.isCO2Neutral ? "checked" : ""}>
                        <div class="extra-option-content">
                          <div class="extra-option-header">
                            <span class="extra-option-title">Nein, das möchte ich nicht.</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            `}
          </div>
          ${totalItems > 0 ? `
            <div class="cart-footer">
              <div class="cart-summary">
                <div class="cart-summary-row">
                  <span>Zwischensumme</span>
                  <span>${totals.subtotal.toFixed(2)}€</span>
                </div>
                ${totals.extras > 0 ? `
                  <div class="cart-summary-row">
                    <span>Extras</span>
                    <span>${totals.extras.toFixed(2)}€</span>
                  </div>
                ` : ""}
              </div>
              <div class="cart-total">
                <span class="cart-total-label">Gesamt</span>
                <span class="cart-total-value">${(totals.subtotal + totals.extras).toFixed(2)}€</span>
              </div>
              ${!meetsMinimumOrder ? `
                <div class="minimum-order-warning" style="background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.2); border-radius: 0.5rem; padding: 0.75rem; margin-bottom: 0.75rem;">
                  <div style="display: flex; align-items: center; gap: 0.5rem; color: rgb(234, 179, 8);">
                    <i class="fa-solid fa-exclamation-triangle"></i>
                    <span style="font-size: 0.875rem; font-weight: 500;">Mindestbestellwert: ${MINIMUM_ORDER_VALUE}€</span>
                  </div>
                  <p style="font-size: 0.75rem; color: rgb(115, 115, 115); margin-top: 0.25rem;">
                    ${remainingAmount.toFixed(2)}€ mehr, um den Mindestbestellwert zu erreichen!
                  </p>
                </div>
              ` : ""}
              <button class="cart-checkout-btn" id="proceedCheckout" ${!meetsMinimumOrder ? "disabled style='opacity: 0.5; cursor: not-allowed;'" : ""}>
                <i class="fa-solid fa-bag-shopping"></i>
                Weiter zur Kasse
              </button>
            </div>
          ` : ""}
      `;
    }
  
    // Attach event listeners
    attachCartListeners();
    
    // Restore accordion state if it was open
    if (isAccordionOpen) {
      const restoredAccordion = document.getElementById("extrasAccordion");
      if (restoredAccordion) {
        restoredAccordion.classList.add("open");
      }
    }
  }
  
  function attachCartListeners() {
    // Close cart
    const closeBtns = document.querySelectorAll("#closeCart");
    closeBtns.forEach(btn => {
      btn.addEventListener("click", closeCart);
    });
  
    // Quantity controls
    document.querySelectorAll("[data-action]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const action = e.currentTarget.dataset.action;
        const itemId = e.currentTarget.dataset.id;
        const item = cart.find(i => i.id === itemId);
        if (item) {
          if (action === "increase") {
            updateQuantity(itemId, item.quantity + 1);
          } else if (action === "decrease") {
            updateQuantity(itemId, item.quantity - 1);
          }
        }
      });
    });
  
    // Remove item
    document.querySelectorAll(".cart-item-remove").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const itemId = e.currentTarget.dataset.id;
        removeFromCart(itemId);
      });
    });
  
    // Extras accordion
    const extrasHeader = document.getElementById("extrasHeader");
    const extrasAccordion = document.getElementById("extrasAccordion");
    if (extrasHeader && extrasAccordion) {
      extrasHeader.addEventListener("click", () => {
        extrasAccordion.classList.toggle("open");
      });
    }
  
    // Tip buttons
    document.querySelectorAll(".tip-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const tipPercent = parseFloat(btn.dataset.tip);
        cartState.selectedTipPercent = tipPercent;
        renderCart();
      });
    });
  
    // Insurance checkboxes (mutually exclusive)
    const insuranceYesCheckbox = document.getElementById("insuranceYes");
    const insuranceNoCheckbox = document.getElementById("insuranceNo");
    
    if (insuranceYesCheckbox) {
      insuranceYesCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          cartState.hasInsurance = true;
          if (insuranceNoCheckbox) insuranceNoCheckbox.checked = false;
          renderCart();
        } else {
          // If unchecking "Yes", automatically check "No"
          cartState.hasInsurance = false;
          if (insuranceNoCheckbox) {
            insuranceNoCheckbox.checked = true;
            renderCart();
          }
        }
      });
    }
    
    if (insuranceNoCheckbox) {
      insuranceNoCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          cartState.hasInsurance = false;
          if (insuranceYesCheckbox) insuranceYesCheckbox.checked = false;
          renderCart();
        } else {
          // If unchecking "No", automatically check "Yes"
          cartState.hasInsurance = true;
          if (insuranceYesCheckbox) {
            insuranceYesCheckbox.checked = true;
            renderCart();
          }
        }
      });
    }
  
    // CO2 checkboxes (mutually exclusive)
    const co2YesCheckbox = document.getElementById("co2Yes");
    const co2NoCheckbox = document.getElementById("co2No");
    
    if (co2YesCheckbox) {
      co2YesCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          cartState.isCO2Neutral = true;
          if (co2NoCheckbox) co2NoCheckbox.checked = false;
          renderCart();
        } else {
          // If unchecking "Yes", automatically check "No"
          cartState.isCO2Neutral = false;
          if (co2NoCheckbox) {
            co2NoCheckbox.checked = true;
            renderCart();
          }
        }
      });
    }
    
    if (co2NoCheckbox) {
      co2NoCheckbox.addEventListener("change", (e) => {
        if (e.target.checked) {
          cartState.isCO2Neutral = false;
          if (co2YesCheckbox) co2YesCheckbox.checked = false;
          renderCart();
        } else {
          // If unchecking "No", automatically check "Yes"
          cartState.isCO2Neutral = true;
          if (co2YesCheckbox) {
            co2YesCheckbox.checked = true;
            renderCart();
          }
        }
      });
    }
  
    // Proceed to checkout
    const proceedBtn = document.getElementById("proceedCheckout");
    if (proceedBtn) {
      proceedBtn.addEventListener("click", () => {
        const totals = getCartTotals();
        if (totals.subtotal >= MINIMUM_ORDER_VALUE) {
          cartState.showOrderSummary = true;
          renderCart();
        }
      });
    }
  
    // Back to cart
    const backBtn = document.getElementById("backToCart");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        cartState.showOrderSummary = false;
        renderCart();
      });
    }
  
    // Subscription checkbox
    const subscriptionCheckbox = document.getElementById("orderSubscription");
    if (subscriptionCheckbox) {
      subscriptionCheckbox.addEventListener("change", (e) => {
        cartState.hasSubscription = e.target.checked;
      });
    }
  
    // Confirm order
    const confirmBtn = document.getElementById("confirmOrder");
    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        const totals = getCartTotals();
        if (totals.subtotal >= MINIMUM_ORDER_VALUE) {
          clearCart();
          closeCart();
          showOrderConfirmation();
        }
      });
    }
  }
  
  // Order Confirmation Modal
  function showOrderConfirmation() {
    const modal = document.getElementById("orderModal");
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    }
  }
  
  function hideOrderConfirmation() {
    const modal = document.getElementById("orderModal");
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  }
  
  // Search Functionality
  function handleSearch(query) {
    searchQuery = query;
    const clearBtns = document.querySelectorAll("#clearSearch, #clearMobileSearch");
    clearBtns.forEach(btn => {
      btn.style.display = query ? "block" : "none";
    });
    
    // If searching, reset category
    if (query.trim()) {
      activeCategory = null;
      updateCategoryButtons();
    }
    
    renderMenu();
  }
  
  // Mobile Search Toggle
  function toggleMobileSearch() {
    const mobileSearch = document.getElementById("mobileSearch");
    const searchToggle = document.getElementById("searchToggle");
    if (mobileSearch) {
      const isOpen = mobileSearch.style.display !== "none";
      mobileSearch.style.display = isOpen ? "none" : "block";
      if (searchToggle) {
        const icon = searchToggle.querySelector("i");
        if (icon) {
          icon.className = isOpen ? "fa-solid fa-search" : "fa-solid fa-xmark";
        }
      }
      if (!isOpen) {
        const input = document.getElementById("mobileSearchInput");
        if (input) input.focus();
      }
    }
  }
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
  
    // Categories
    document.querySelectorAll(".category-btn[data-category='all']").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = null;
        updateCategoryButtons();
        renderMenu();
      });
    });
  
    renderCategories();
    updateCategoryButtons();
  
    // Search
    const searchInput = document.getElementById("searchInput");
    const mobileSearchInput = document.getElementById("mobileSearchInput");
    
    [searchInput, mobileSearchInput].forEach(input => {
      if (input) {
        input.addEventListener("input", (e) => {
          handleSearch(e.target.value);
          // Sync search inputs
          if (input === searchInput && mobileSearchInput) {
            mobileSearchInput.value = e.target.value;
          } else if (input === mobileSearchInput && searchInput) {
            searchInput.value = e.target.value;
          }
        });
      }
    });
  
    const clearSearch = document.getElementById("clearSearch");
    const clearMobileSearch = document.getElementById("clearMobileSearch");
    
    if (clearSearch) {
      clearSearch.addEventListener("click", () => {
        searchInput.value = "";
        if (mobileSearchInput) mobileSearchInput.value = "";
        handleSearch("");
      });
    }
  
    if (clearMobileSearch) {
      clearMobileSearch.addEventListener("click", () => {
        mobileSearchInput.value = "";
        if (searchInput) searchInput.value = "";
        handleSearch("");
      });
    }
  
    // Mobile search toggle - removed (button no longer exists)
  
    // Cart
    const cartToggle = document.getElementById("cartToggle");
    if (cartToggle) {
      cartToggle.addEventListener("click", openCart);
    }
  
    const cartOverlay = document.getElementById("cartOverlay");
    if (cartOverlay) {
      cartOverlay.addEventListener("click", closeCart);
    }
  
    // Order modal
    const closeOrderModal = document.getElementById("closeOrderModal");
    if (closeOrderModal) {
      closeOrderModal.addEventListener("click", hideOrderConfirmation);
    }
  
    const orderModal = document.getElementById("orderModal");
    if (orderModal) {
      const overlay = orderModal.querySelector(".order-modal-overlay");
      if (overlay) {
        overlay.addEventListener("click", hideOrderConfirmation);
      }
    }
  
    // Initial render
    renderMenu();
    updateCartUI();

    // Terms and Conditions Popup
    const termsPopup = document.getElementById("termsPopup");
    const termsLink = document.getElementById("termsLink");
    const closeTermsPopup = document.getElementById("closeTermsPopup");

    if (termsLink && termsPopup && closeTermsPopup) {
      termsLink.addEventListener("click", (e) => {
        e.preventDefault();
        termsPopup.style.display = "flex";
      });

      closeTermsPopup.addEventListener("click", () => {
        termsPopup.style.display = "none";
      });

      termsPopup.addEventListener("click", (e) => {
        if (e.target === termsPopup) {
          termsPopup.style.display = "none";
        }
      });
    }

    // Privacy Policy Popup
    const privacyPopup = document.getElementById("privacyPopup");
    const privacyLink = document.getElementById("privacyLink");
    const closePrivacyPopup = document.getElementById("closePrivacyPopup");

    if (privacyLink && privacyPopup && closePrivacyPopup) {
      privacyLink.addEventListener("click", (e) => {
        e.preventDefault();
        privacyPopup.style.display = "flex";
      });

      closePrivacyPopup.addEventListener("click", () => {
        privacyPopup.style.display = "none";
      });

      privacyPopup.addEventListener("click", (e) => {
        if (e.target === privacyPopup) {
          privacyPopup.style.display = "none";
        }
      });
    }

    // Imprint Popup
    const imprintPopup = document.getElementById("imprintPopup");
    const imprintLink = document.getElementById("imprintLink");
    const closeImprintPopup = document.getElementById("closeImprintPopup");

    if (imprintLink && imprintPopup && closeImprintPopup) {
      imprintLink.addEventListener("click", (e) => {
        e.preventDefault();
        imprintPopup.style.display = "flex";
      });

      closeImprintPopup.addEventListener("click", () => {
        imprintPopup.style.display = "none";
      });

      imprintPopup.addEventListener("click", (e) => {
        if (e.target === imprintPopup) {
          imprintPopup.style.display = "none";
        }
      });
    }
  });