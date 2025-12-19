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
  // Appetizers
  {
    id: "appetizer-1",
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with garlic aioli dip",
    price: 4.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcranecuisine.de%2Fwp-content%2Fuploads%2F2021%2F04%2FKnusprige-Suesskartoffelpommes.jpg&f=1&nofb=1&ipt=0f6aed07af0ebc8ae83255b73937d3aa892eaa4a59115c3dd065c5c8aa46fb15",
    category: "appetizers",
  },
  {
    id: "appetizer-2",
    name: "Classic Fries",
    description: "Golden crispy fries with your choice of ketchup or mayo",
    price: 3.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecipeimages.migros.ch%2Fcrop%2Fv-w-2000-h-2000-a-center_center%2F0a68b65344e44f1da5e88dc973187373183e25c0%2Fpommes-frites-0-1-1.jpg&f=1&nofb=1&ipt=d01831ef01a3559e3df2d4d67010810102d4e175833e71f9b15d393d041f4c3a",
    category: "appetizers",
  },
  {
    id: "appetizer-3",
    name: "Onion Rings",
    description: "Crispy battered onion rings with BBQ sauce",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
    category: "appetizers",
  },
  {
    id: "appetizer-4",
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip (6 pieces)",
    price: 7.90,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop",
    category: "appetizers",
    isBestseller: true,
  },
  {
    id: "appetizer-5",
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella sticks with marinara sauce",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&h=300&fit=crop",
    category: "appetizers",
  },
  // Döner
  {
    id: "doner-1",
    name: "Classic Döner Kebab",
    description: "Tender rotating meat, fresh salad, tomatoes, onions, and signature sauce in warm pita bread",
    price: 7.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkim-foods.com%2Fwp-content%2Fuploads%2F2018%2F07%2FKebab-scaled.jpg&f=1&nofb=1&ipt=0ca71b31f83144c158191dc39654f3005c117d96696125d067be0706c0fb0619",
    category: "doner",
  },
  {
    id: "doner-2",
    name: "Döner Box",
    description: "Döner meat served with crispy fries, fresh salad, and your choice of sauce",
    price: 8.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmeliz-palast.de%2Fwp-content%2Fuploads%2F2017%2F02%2F2017-01-19_Meliz_0180.jpg&f=1&nofb=1&ipt=f6ffbb3c7c69ab3c5ffb8000560087099a19912c595430ec630fdfc050bbe1fb",
    category: "doner",
  },
  {
    id: "doner-3",
    name: "Döner Plate",
    description: "Generous portion of döner meat with rice, salad, hummus, and warm bread",
    price: 12.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmeliz-palast.de%2Fwp-content%2Fuploads%2F2017%2F02%2F2017-01-19_Meliz_0124.jpg&f=1&nofb=1&ipt=7babd7c8bae749461edb6e71d8c58d7a30572449151de4a183e092a31042a424",
    category: "doner",
    isBestseller: true,
  },
  {
    id: "doner-4",
    name: "Dürüm",
    description: "Gegrilltes Dönerfleisch, frischer Salat und Sauce in warmes Fladenbrot gerollt.",
    price: 9.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.yemek.com%2Fuploads%2F2016%2F08%2Ftavuk-durum-son-yemekcom.jpg&f=1&nofb=1&ipt=f1657ca2deebf92412edb91443845d15637251dd2c583bc51386ed90955a48d3",
    category: "doner",
  },
  // Burger
  {
    id: "burger-1",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty, melted cheddar, lettuce, tomato, pickles, and special sauce",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "burger",
  },
  {
    id: "burger-2",
    name: "BBQ Bacon Burger",
    description: "Beef patty, crispy bacon, BBQ sauce, caramelized onions, and jalapeños",
    price: 11.50,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
    category: "burger",
  },
  {
    id: "burger-3",
    name: "Double Smash Burger",
    description: "Two smashed beef patties, double cheese, pickles, and mustard",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    category: "burger",
    isBestseller: true,
  },
  {
    id: "burger-4",
    name: "Crispy Chicken Burger",
    description: "Crispy fried chicken breast, coleslaw, and honey mustard sauce",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
    category: "burger",
  },
  // Pizza
  {
    id: "pizza-1",
    name: "Margherita",
    description: "Classic tomato sauce, fresh mozzarella, basil, and olive oil",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    category: "pizza",
  },
  {
    id: "pizza-2",
    name: "Pepperoni Lovers",
    description: "Tomato sauce, mozzarella, and generous pepperoni slices",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: "pizza",
  },
  {
    id: "pizza-3",
    name: "Döner Pizza",
    description: "Our signature döner meat on pizza with garlic sauce and fresh vegetables",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    category: "pizza",
    isBestseller: true,
  },
  {
    id: "pizza-4",
    name: "Four Cheese",
    description: "Mozzarella, gorgonzola, parmesan, and goat cheese on creamy base",
    price: 13.90,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    category: "pizza",
  },
  // Schnitzel
  {
    id: "schnitzel-1",
    name: "Wiener Schnitzel",
    description: "Classic breaded veal cutlet served with lemon and potato salad",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&h=300&fit=crop",
    category: "schnitzel",
  },
  {
    id: "schnitzel-2",
    name: "Jäger Schnitzel",
    description: "Breaded pork cutlet with creamy mushroom sauce and spätzle",
    price: 15.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frezepte.recipebyme.com%2Fassets%2Fimages%2F1748299573380-cs80q6zz.webp&f=1&nofb=1&ipt=a8cbd02758db0c7ed7fd8aeda6fdf22def6307f3c9f1acf149fe057556cfc1da",
    category: "schnitzel",
    isBestseller: true,
  },
  {
    id: "schnitzel-3",
    name: "Chicken Schnitzel",
    description: "Crispy breaded chicken breast with fries and coleslaw",
    price: 12.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.grouponcdn.com%2Fdeal%2F2dQc8QihTDj3LJdP45C9uDyjMVCU%2F2d-1404x842%2Fv1%2Fc870x524.jpg&f=1&nofb=1&ipt=46b4568d00b9fcaa0859a010860c99f87a56c9ec6d8508a78e4319140767f8cc",
    category: "schnitzel",
  },
  // Vegetarian
  {
    id: "veg-1",
    name: "Falafel Wrap",
    description: "Crispy falafel, hummus, tabbouleh, and tahini in warm flatbread",
    price: 7.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthehoneypotbakery.com%2Fwp-content%2Fuploads%2F2025%2F12%2Fa-high-quality-food-photography-shot-of-_8flxy36ZQcCORhHgxbJs0A_QyyWv-UVSSeh0FC4xs3e7A.jpeg&f=1&nofb=1&ipt=3e27b5ceb5f122d0acd3b081cc891cb1b98079cf47128150037c9eafdfae76e8",
    category: "vegetarian",
  },
  {
    id: "veg-2",
    name: "Veggie Burger",
    description: "Grilled plant-based patty with avocado, sprouts, and chipotle mayo",
    price: 10.50,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
    category: "vegetarian",
  },
  {
    id: "veg-3",
    name: "Halloumi Plate",
    description: "Grilled halloumi cheese with Mediterranean salad, olives, and pita",
    price: 11.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wellplated.com%2Fwp-content%2Fuploads%2F2021%2F06%2FGrilled-Halloumi-Salad.jpg&f=1&nofb=1&ipt=0edaddf586f004c3c68942a25d56170fac9e5ed2d117206477b1aa8c9d5c6ced",
    category: "vegetarian",
  },
  {
    id: "veg-4",
    name: "Mezze Platter",
    description: "Hummus, baba ganoush, falafel, tabbouleh, and warm pita bread",
    price: 13.90,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=300&fit=crop",
    category: "vegetarian",
    isBestseller: true,
  },
  {
    id: "veg-5",
    name: "Börek mit Spinat",
    description: "Knuspriger Teig gefüllt mit würzigem Spinat und feinen Gewürzen, goldbraun gebacken.",
    price: 8.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.leckerschmecker.me%2Fwp-content%2Fuploads%2Fsites%2F6%2F2024%2F03%2Fspinat-boerek-mit-feta.jpeg&f=1&nofb=1&ipt=dcc22a25baa07e8487f7348cfa20bb3c98b1702ff6a6cc0c18bc6f556af9445e",
    category: "vegetarian",
  },
  // Soups
  {
    id: "soup-1",
    name: "Lentil Soup",
    description: "Traditional red lentil soup with cumin and fresh lemon",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    category: "soups",
  },
  {
    id: "soup-2",
    name: "Chicken Noodle Soup",
    description: "Hearty chicken broth with tender chicken, vegetables, and noodles",
    price: 6.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffixegerichte.de%2Fwp-content%2Fuploads%2F2025%2F02%2Fnumber00004_58940_Spicy_Thai_Chicken_Noodle_Soup_Amateur_photo__87f28b92-bac9-40c7-a744-836aef479b4f.png&f=1&nofb=1&ipt=bd2d32789b34a4ae64d368825b3b0b5e689d4f582313ca764c891e51f296e975",
    category: "soups",
    isBestseller: true,
  },
  {
    id: "soup-3",
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil and garlic croutons",
    price: 5.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Feat.de%2Fwp-content%2Fuploads%2F2023%2F05%2Ftomatensuppe-mit-passierten-tomaten-014-2.jpg&f=1&nofb=1&ipt=850950563697951c262c1836ba27ecf4c5af5a3b19967ac2e04fa67df830ae05",
    category: "soups",
  },
  // Desserts
  {
    id: "dessert-1",
    name: "Baklava",
    description: "Traditional Turkish pastry with pistachios and honey",
    price: 4.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1259%2F6441%2Ffiles%2Ffistikli-baklava_291e5aa5-ebec-4729-975c-a85b7e8a5b3e.jpg%3Fv%3D1667565480&f=1&nofb=1&ipt=ae5d201af4dca8dbd98ff1e0739c57cd545ce1a29281f89f3b0756a9599f46d2",
    category: "desserts",
  },
  {
    id: "dessert-2",
    name: "Künefe",
    description: "Warm cheese dessert with syrup and pistachios",
    price: 5.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.ticimax.cloud%2F9247%2FUploads%2FBlog%2FEvde-Kunefe-Tarifi-0abd.jpg&f=1&nofb=1&ipt=794fa756f18445943d88ce468a3d6b66ea35ac6bb450e0ef3c1400406e4301cc",
    category: "desserts",
  },
  {
    id: "dessert-3",
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso and mascarpone",
    price: 5.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftanyarecipes.com%2Fwp-content%2Fuploads%2F2024%2F10%2FTiramisus-Italian-Ethnicity-2-1024x819.jpeg.webp&f=1&nofb=1&ipt=78a1caa577da7b4193752d0d1bb49d62118d1b202087d08f20c6046d72e1aaf6",
    category: "desserts",
  },
  {
    id: "dessert-4",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 6.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cookingclassy.com%2Fwp-content%2Fuploads%2F2022%2F02%2Fmolten-lava-cake-17.jpg&f=1&nofb=1&ipt=826139bf945b1b8f6b83c9bc3c38e1302134c8355afb97dc2ae9e2e92ada3aa5",
    category: "desserts",
    isBestseller: true,
  },
  {
    id: "dessert-5",
    name: "Ice Cream Selection",
    description: "3 scoops of your choice: Vanilla, Chocolate, Strawberry or Pistachio",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
    category: "desserts",
  },
  {
    id: "dessert-6",
    name: "Sütlaç",
    description: "Turkish rice pudding with cinnamon and rosewater",
    price: 3.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Freisehappen.de%2Fwp-content%2Fuploads%2F2021%2F06%2FSuetlac-6.jpg&f=1&nofb=1&ipt=77b9300aa37511eee3b2930f0fa76be104e6f91a3e8dacdee33c2e934f99d31d",
    category: "desserts",
  },
  // Drinks
  {
    id: "drink-1",
    name: "Ayran",
    description: "Traditional Turkish yogurt drink, refreshing and cold",
    price: 2.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Felmundoenrecetas.s3.amazonaws.com%2Fuploads%2Frecipe%2Fmain_image%2F1457%2Fayran.webp&f=1&nofb=1&ipt=3fdb85d251c24788bd240e57f0eba8b98a99b13794925b0489f1e66e7fb8afc",
    category: "drinks",
  },
  {
    id: "drink-2",
    name: "Fresh Lemonade",
    description: "Homemade lemonade with fresh mint leaves",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-3",
    name: "Turkish Tea",
    description: "Traditional black tea served in a classic tulip glass",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-4",
    name: "Soft Drinks",
    description: "Coca-Cola, Fanta, Sprite, or sparkling water",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-5",
    name: "Mango Lassi",
    description: "Creamy mango yogurt drink from India",
    price: 3.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsmithakalluraya.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fmango-lassi-recipe-1080x1259.jpg&f=1&nofb=1&ipt=4b365ea8334182b22750aa0304cae52fe052dab3639d5145747296930d497321",
    category: "drinks",
  },
  {
    id: "drink-6",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 4.50,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ndr.de%2Ffernsehen%2Fsendungen%2Fmarkt%2Fsaft146_v-fullhd.jpg&f=1&nofb=1&ipt=1c04cc207eae4f61499c0ff70486e18114cafb47a3f758d90168f52e8b7d3a6b",
    category: "drinks",
  },
  {
    id: "drink-7",
    name: "Turkish Coffee",
    description: "Traditionally prepared Turkish mocha",
    price: 2.90,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-8",
    name: "Peach Iced Tea",
    description: "Refreshing homemade iced tea",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-9",
    name: "Mineral Water",
    description: "Still or sparkling (0.5L)",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-10",
    name: "Apple Spritzer",
    description: "Refreshing apple juice with sparkling water",
    price: 2.90,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpekis.net%2Fsites%2Fdefault%2Ffiles%2F2025-07%2FApfelschorle_Homemade_Spritzer.webp&f=1&nofb=1&ipt=1726787cc6d34c6084338344f0f4c418cc6f305a9060fc434a1c529720acf655",
    category: "drinks",
  },
  {
    id: "drink-11",
    name: "Energy Drink",
    description: "Red Bull or Monster (250ml)",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-12",
    name: "Milkshake",
    description: "Vanilla, Chocolate or Strawberry with whipped cream",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
    category: "drinks",
    isBestseller: true,
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
                    Testen Sie es jetzt für 0,00€.
                    Danach 4,99€ pro Monat! Jederzeit kündbar. 
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
                            <span class="extra-option-title">Ja, ich möchte gegen kaltes Essen und eventuelle Schäde versichert sein</span>
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
                <div class="cart-summary-row">
                  <span>Liefergebühr</span>
                  <span>${totals.deliveryFee.toFixed(2)}€</span>
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
                <span class="cart-total-value">${(totals.subtotal + totals.extras + totals.deliveryFee).toFixed(2)}€</span>
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
        // Google Analytics Tracking
        if (typeof gtag === 'function') {
          gtag('event', 'purchase', {
            transaction_id: 'ORDER_' + Date.now(),
            value: parseFloat(totals.total.toFixed(2)),
            currency: 'EUR',
            shipping: parseFloat(totals.deliveryFee.toFixed(2)),
            items: cart.map(item => ({
              item_id: item.id,
              item_name: item.name,
              price: item.price,
              quantity: item.quantity,
              item_category: item.category
            })),
            // Custom dimensions/metrics
            has_insurance: cartState.hasInsurance,
            is_co2_neutral: cartState.isCO2Neutral,
            has_subscription: cartState.hasSubscription,
            tip_percentage: cartState.selectedTipPercent * 100, // Send as percentage (e.g., 5, 10, 15)
            total_cart_value: parseFloat(totals.total.toFixed(2)) // Custom explicit total value
          });
        }

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