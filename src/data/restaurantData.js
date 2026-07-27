export const RESTAURANT_INFO = {
  name: "BURGER & CRUNCH CO.",
  tagline: "Sizzle, Crunch & Supreme Artisanal Pizzas",
  motto: "Freshly Grilled Smash Burgers, 11-Spice Crispy Chicken & Hand-Tossed Pizzas",
  phone: "+1 (800) 555-CRAVE",
  email: "orders@burgerandcrunch.com",
  address: "450 Broadway, Times Square, New York, NY 10036",
  hours: {
    delivery: "Mon - Sun: 10:00 AM - 2:00 AM",
    dineIn: "Mon - Sun: 10:30 AM - 12:00 AM",
    driveThru: "24/7 Express Drive-Thru Available"
  },
  stats: [
    { label: "Stores Nationwide", value: "250+" },
    { label: "Avg Delivery Time", value: "19 Min" },
    { label: "Crunchy Chicken Buckets Sold", value: "5M+" },
    { label: "Customer Satisfaction", value: "99.4%" }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'All Craves', icon: 'Flame' },
  { id: 'burgers', name: 'Smash Burgers', icon: 'Beef' },
  { id: 'chicken', name: 'Crispy Chicken & Buckets', icon: 'Drumstick' },
  { id: 'pizzas', name: 'Hand-Tossed Pizzas', icon: 'Pizza' },
  { id: 'sides', name: 'Loaded Sides & Fries', icon: 'Fries' },
  { id: 'shakes', name: 'Thick Shakes & Drinks', icon: 'Cup' }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "The Monster Double Smash Burger",
    category: "burgers",
    price: 12.99,
    rating: 4.9,
    reviewsCount: 480,
    prepTime: "8 min",
    calories: "780 kcal",
    description: "Two 100% Angus beef smashed patties, triple melted American cheddar, caramelized onions, crispy bacon strips, and house secret Crave Sauce on toasted brioche.",
    dietary: ["Bestseller", "Double Beef"],
    videoUrl: "https://videos.pexels.com/video-files/8879803/8879803-sd_640_338_25fps.mp4",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Angus Smash Beef", "Triple Cheddar", "Smoked Bacon", "Caramelized Onions", "Brioche Bun", "Secret Crave Sauce"]
  },
  {
    id: 2,
    name: "Fiery Nashville Spicy Crispy Chicken Burger",
    category: "burgers",
    price: 11.49,
    rating: 4.9,
    reviewsCount: 390,
    prepTime: "7 min",
    calories: "690 kcal",
    description: "Jumbo crispy chicken breast dipped in Nashville hot oil, topped with cool creamy coleslaw, tangy dill pickles, and honey habanero mayo.",
    dietary: ["Spicy Crave", "Crispy Chicken"],
    videoUrl: "https://videos.pexels.com/video-files/19537505/19537505-sd_960_540_24fps.mp4",
    image: "https://images.pexels.com/photos/33254639/pexels-photo-33254639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["11-Spice Crispy Chicken Breast", "Nashville Hot Glaze", "Creamy Coleslaw", "Dill Pickles", "Honey Habanero Mayo"]
  },
  {
    id: 3,
    name: "Mega Crunch Chicken Bucket (12 Pcs)",
    category: "chicken",
    price: 24.99,
    rating: 5.0,
    reviewsCount: 620,
    prepTime: "12 min",
    calories: "1450 kcal",
    description: "12 pieces of ultra-crispy, golden fried chicken marinated in 11 secret herbs & spices. Served with 2 large sides of garlic dip & honey mustard.",
    dietary: ["Family Bucket", "Super Crunch"],
    videoUrl: "https://videos.pexels.com/video-files/20416794/20416794-hd_720_1280_24fps.mp4",
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Fresh Chicken Drumsticks & Thighs", "11 Secret Spice Breading", "Garlic Crave Dip", "Honey Mustard"]
  },
  {
    id: 4,
    name: "Supreme Loaded Pepperoni & Cheese Crust Pizza",
    category: "pizzas",
    price: 18.99,
    rating: 4.9,
    reviewsCount: 510,
    prepTime: "15 min",
    calories: "1100 kcal",
    description: "Fresh dough hand-tossed with mozzarella stuffed crust, rich San Marzano tomato sauce, double smoked pepperoni slices, Italian herbs, and garlic butter drizzle.",
    dietary: ["Stuffed Crust", "Chef Recommendation"],
    videoUrl: "https://videos.pexels.com/video-files/4929488/4929488-hd_1280_720_30fps.mp4",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Mozzarella Stuffed Crust", "Double Pepperoni", "San Marzano Tomato Sauce", "Oregano & Garlic Butter"]
  },
  {
    id: 5,
    name: "Truffle Mushroom & 4-Cheese Pizza",
    category: "pizzas",
    price: 19.99,
    rating: 4.8,
    reviewsCount: 230,
    prepTime: "14 min",
    calories: "980 kcal",
    description: "Creamy white garlic base, fresh mozzarella, gorgonzola, parmesan, roasted wild porcini mushrooms, finished with black truffle oil drizzle.",
    dietary: ["Vegetarian", "Gourmet Pizza"],
    videoUrl: "https://videos.pexels.com/video-files/30627970/13111089_1440_2560_25fps.mp4",
    image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Mozzarella", "Gorgonzola", "Parmesan", "Porcini Mushrooms", "Black Truffle Oil"]
  },
  {
    id: 6,
    name: "Loaded Animal Fries & Melted Cheese",
    category: "sides",
    price: 6.99,
    rating: 4.9,
    reviewsCount: 410,
    prepTime: "5 min",
    calories: "520 kcal",
    description: "Crispy skin-on french fries smothered in warm liquid cheddar cheese, caramelized grilled onions, smoky bacon bits, and signature Crave drizzle.",
    dietary: ["Loaded Sides"],
    videoUrl: "https://videos.pexels.com/video-files/7653233/7653233-uhd_4096_2160_25fps.mp4",
    image: "https://images.pexels.com/photos/5779487/pexels-photo-5779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Golden Seasoned Fries", "Warm Cheddar Sauce", "Smoky Bacon Bits", "Caramelized Onions"]
  },
  {
    id: 7,
    name: "Salted Caramel Oreo Monster Shake",
    category: "shakes",
    price: 6.49,
    rating: 5.0,
    reviewsCount: 380,
    prepTime: "4 min",
    calories: "610 kcal",
    description: "Thick vanilla bean gelato blended with crushed Oreo cookies, salted caramel swirl, topped with whipped cream, Oreo crumbles, and caramel drizzle.",
    dietary: ["Sweet Crave"],
    videoUrl: "https://videos.pexels.com/video-files/7334409/7334409-hd_1280_720_25fps.mp4",
    image: "https://images.pexels.com/photos/34711204/pexels-photo-34711204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients: ["Vanilla Gelato", "Oreo Cookie Crumbles", "Salted Caramel Swirl", "Whipped Cream"]
  }
];

export const HOT_DEALS = [
  {
    id: 'deal1',
    title: "THE ULTIMATE CRAVE BOX",
    items: "1 Double Smash Burger + 2 Crispy Wings + Loaded Fries + Thick Shake",
    price: "$16.99",
    originalPrice: "$24.50",
    discount: "SAVE 30%",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 'deal2',
    title: "FAMILY PIZZA & CHICKEN FEAST",
    items: "1 Supreme Pepperoni Stuffed Crust + 8 Pcs Crispy Chicken + 2 Shakes",
    price: "$34.99",
    originalPrice: "$48.00",
    discount: "SAVE $13",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const BROLL_VIDEOS = [
  {
    id: 1,
    title: "Flame-Broiling 100% Angus Double Smash Patties",
    category: "Burgers",
    videoUrl: "https://videos.pexels.com/video-files/4929488/4929488-hd_1280_720_30fps.mp4",
    poster: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 2,
    title: "Mozzarella Cheese Stretch Hand-Tossed Pizza",
    category: "Pizzas",
    videoUrl: "https://videos.pexels.com/video-files/30627970/13111089_1440_2560_25fps.mp4",
    poster: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 3,
    title: "11-Spice Golden Crispy Fried Chicken",
    category: "Chicken",
    videoUrl: "https://videos.pexels.com/video-files/19537505/19537505-hd_1920_1080_24fps.mp4",
    poster: "https://images.pexels.com/photos/33254639/pexels-photo-33254639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 4,
    title: "Sizzling Golden French Fries & Cheese Drizzle",
    category: "Sides",
    videoUrl: "https://videos.pexels.com/video-files/7653233/7653233-uhd_4096_2160_25fps.mp4",
    poster: "https://images.pexels.com/photos/5779487/pexels-photo-5779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

export const FAQS = [
  {
    question: "What is your average delivery time?",
    answer: "Our average express delivery time is 19 minutes! We use insulated hot-bags to keep your burgers sizzling and pizzas piping hot."
  },
  {
    question: "How are your Smash Burgers prepared?",
    answer: "We use 100% Angus beef smashed onto 500°F cast iron grills to lock in natural juices with crispy caramelized edges."
  },
  {
    question: "Do you have Halal, Vegetarian, or Gluten-Free options?",
    answer: "Yes! All chicken items are 100% Halal certified, and we offer Beyond Meat burgers, vegetarian pizzas, and gluten-free buns."
  }
];
