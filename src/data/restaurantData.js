export const RESTAURANT_INFO = {
  name: "FLAMEBOX KITCHEN",
  tagline: "Freshly Grilled. Boldly Delicious.",
  motto: "Experience the Fire! Street-Food Taste, Urban Vibe.",
  phone: "+1 (800) 555-FLAME",
  email: "hello@flameboxkitchen.com",
  address: "450 Broadway, Times Square, New York, NY 10036",
  hours: {
    delivery: "Mon - Sun: 10:00 AM - 2:00 AM",
    dineIn: "Mon - Sun: 10:30 AM - 12:00 AM"
  },
  stats: [
    { label: "Stores Nationwide", value: "250+" },
    { label: "Avg Delivery Time", value: "25-30 Mins" },
    { label: "Rating", value: "4.9 ★ (12K+)" }
  ]
};

export const POPULAR_CATEGORIES = [
  { id: 'burgers', name: 'Burgers', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', ringColor: '#ff6b00' },
  { id: 'wraps', name: 'Wraps', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', ringColor: '#2eb872' },
  { id: 'fried-chicken', name: 'Fried Chicken', image: 'https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', ringColor: '#ff6b00' },
  { id: 'pasta', name: 'Pasta', image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', ringColor: '#ff6b00' },
  { id: 'bbq-platters', name: 'BBQ Platters', image: 'https://images.pexels.com/photos/27497770/pexels-photo-27497770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', ringColor: '#ff6b00' },
  { id: 'healthy-bowls', name: 'Healthy Bowls', image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', ringColor: '#2eb872' }
];

export const CHEFS_SPECIALS = [
  {
    id: 'grand-combo',
    title: 'FLAMEBOX GRAND COMBO',
    subtitle: 'Burger | Fries | Drink',
    price: 19.99,
    badge: 'HOT DEAL',
    badgeBg: '#e63946',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Double flame-broiled beef burger, crispy golden french fries, and cold soda drink.'
  },
  {
    id: 'spicy-wrap',
    title: 'SPICY WRAP PACK',
    subtitle: 'Crispy Chicken Wrap + Sauce',
    price: 16.50,
    badge: 'BEST SELLER',
    badgeBg: '#ff6b00',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Crispy fried chicken strips wrapped with lettuce, cheddar cheese, and spicy chipotle Mayo.'
  },
  {
    id: 'grill-mix',
    title: 'GRILL MIX PLATTER',
    subtitle: 'Flame Grilled Skewers & Wings',
    price: 22.99,
    badge: 'COMBO PACK',
    badgeBg: '#ff6b00',
    image: 'https://images.pexels.com/photos/27497770/pexels-photo-27497770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Assorted flame-broiled beef skewers, spicy chicken wings, roasted veggies, and garlic bread.'
  }
];

export const HOT_DEALS = [
  {
    id: 'deal1',
    title: "FLAMEBOX GRAND COMBO",
    items: "1 Double Smash Burger + 2 Crispy Wings + Loaded Fries + Cold Drink",
    price: "$19.99",
    originalPrice: "$26.50",
    discount: "SAVE 25%",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 'deal2',
    title: "GRILL MIX FAMILY FEAST",
    items: "1 BBQ Skewer Platter + 8 Pcs Crispy Chicken + Loaded Fries + 2 Shakes",
    price: "$34.99",
    originalPrice: "$48.00",
    discount: "SAVE $13",
    image: "https://images.pexels.com/photos/27497770/pexels-photo-27497770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Menu' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'wraps', name: 'Wraps' },
  { id: 'fried-chicken', name: 'Fried Chicken' },
  { id: 'pizzas', name: 'Pizzas & Paninis' },
  { id: 'sides', name: 'Fries & Sides' }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Flamebox Double Smash Burger",
    category: "burgers",
    price: 12.99,
    rating: 4.9,
    reviewsCount: 480,
    prepTime: "8 min",
    calories: "780 kcal",
    description: "Two 100% Angus flame-broiled beef patties, melted American cheddar, caramelized onions, and signature secret Flamebox sauce.",
    dietary: ["Bestseller", "Flame Grilled"],
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Angus Beef", "Cheddar", "Caramelized Onions", "Brioche Bun", "Flamebox Sauce"]
  },
  {
    id: 2,
    name: "Nashville Spicy Chicken Wrap",
    category: "wraps",
    price: 11.49,
    rating: 4.9,
    reviewsCount: 390,
    prepTime: "7 min",
    calories: "690 kcal",
    description: "Crispy fried chicken tenders tossed in spicy Nashville oil with shredded lettuce, pickles, and garlic chipotle wrap.",
    dietary: ["Spicy Crave"],
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Crispy Chicken", "Nashville Spice", "Shredded Lettuce", "Dill Pickles", "Chipotle Mayo"]
  },
  {
    id: 3,
    name: "Golden Fried Chicken Basket (8 Pcs)",
    category: "fried-chicken",
    price: 19.99,
    rating: 5.0,
    reviewsCount: 620,
    prepTime: "12 min",
    calories: "1250 kcal",
    description: "8 pieces of golden crispy fried chicken marinated in 11 secret herbs and spices. Served with dipping sauce.",
    dietary: ["Family Bucket"],
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Chicken Drumsticks & Thighs", "11-Spice Batter", "Garlic Crave Dip"]
  },
  {
    id: 4,
    name: "Panini Grilled Cheese Sandwich",
    category: "pizzas",
    price: 9.99,
    rating: 4.8,
    reviewsCount: 310,
    prepTime: "6 min",
    calories: "580 kcal",
    description: "Toasted artisan sourdough loaded with melted sharp cheddar, mozzarella, sliced ham, and fresh basil.",
    dietary: ["Toasted Panini"],
    image: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Sourdough Bread", "Cheddar", "Mozzarella", "Smoked Ham"]
  },
  {
    id: 5,
    name: "Seasoned Loaded French Fries",
    category: "sides",
    price: 6.49,
    rating: 4.9,
    reviewsCount: 410,
    prepTime: "5 min",
    calories: "510 kcal",
    description: "Crispy skin-on french fries tossed in cajun seasoning and smothered in warm cheddar cheese sauce.",
    dietary: ["Crispy Side"],
    image: "https://images.pexels.com/photos/5779487/pexels-photo-5779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Golden Potatoes", "Cajun Seasoning", "Cheddar Cheese Sauce"]
  }
];

export const BROLL_VIDEOS = [
  {
    id: 1,
    title: "Flame-Broiling Double Smash Patties",
    category: "Burgers",
    videoUrl: "https://videos.pexels.com/video-files/4929488/4929488-hd_1280_720_30fps.mp4",
    poster: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    title: "Hand-Tossed Cheese Stretch Pizza",
    category: "Pizzas",
    videoUrl: "https://videos.pexels.com/video-files/30627970/13111089_1440_2560_25fps.mp4",
    poster: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    title: "11-Spice Golden Crispy Fried Chicken",
    category: "Chicken",
    videoUrl: "https://videos.pexels.com/video-files/19537505/19537505-hd_1920_1080_24fps.mp4",
    poster: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const FAQS = [
  {
    question: "What is your average delivery time?",
    answer: "Our average express delivery time is 25-30 minutes! We use insulated hot-bags to keep your food piping hot."
  },
  {
    question: "Are all meats fresh and freshly grilled?",
    answer: "Yes! 100% fresh Angus beef and chicken prepared fresh to order on our high-heat grills."
  }
];
