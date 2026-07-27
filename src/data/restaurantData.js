export const RESTAURANT_INFO = {
  name: "L'Étoile D'Or",
  tagline: "Where Haute Cuisine Meets Culinary Artistry",
  motto: "Michelin 3-Star Dining Experience & Modern Gastronomy",
  phone: "+1 (555) 839-2041",
  email: "concierge@letoiledor.com",
  address: "742 Evergreen Avenue, Manhattan, NY 10021",
  hours: {
    dinner: "Mon - Sun: 5:00 PM - 11:30 PM",
    lunch: "Fri - Sun: 12:00 PM - 3:00 PM",
    bar: "Mon - Sun: 4:30 PM - 1:00 AM"
  },
  stats: [
    { label: "Michelin Stars", value: "3" },
    { label: "Years of Excellence", value: "18" },
    { label: "Sommelier Selections", value: "1,200+" },
    { label: "Satisfied Guests", value: "50k+" }
  ]
};

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Menu', icon: 'Utensils' },
  { id: 'starters', name: 'Amuse & Starters', icon: 'Soup' },
  { id: 'mains', name: 'Signature Mains', icon: 'Beef' },
  { id: 'steaks', name: 'Dry-Aged Cuts', icon: 'Flame' },
  { id: 'seafood', name: 'Ocean Treasures', icon: 'Fish' },
  { id: 'desserts', name: 'Artisan Desserts', icon: 'Cake' },
  { id: 'wines', name: 'Sommelier Wines', icon: 'Wine' }
];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Truffled Wagyu A5 Carpaccio",
    category: "starters",
    price: 48,
    rating: 4.9,
    reviewsCount: 124,
    prepTime: "15 min",
    calories: "380 kcal",
    description: "Miyazaki A5 Wagyu beef thinly sliced, shaved black Périgord truffle, aged balsamic pearls, 36-month Parmigiano-Reggiano foam, micro greens.",
    dietary: ["Gluten-Free", "Chef Special"],
    winePairing: "Château Margaux Premier Grand Cru 2015",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Miyazaki A5 Wagyu", "Black Périgord Truffle", "Balsamic Caviar", "Parmigiano Crisp", "Extra Virgin Olive Oil"]
  },
  {
    id: 2,
    name: "Seared Pan-Fried Foie Gras",
    category: "starters",
    price: 42,
    rating: 4.8,
    reviewsCount: 98,
    prepTime: "18 min",
    calories: "450 kcal",
    description: "Pan-seared French duck foie gras served over caramelized mission fig compote, warm artisanal brioche, finished with Sauternes glaze reduction.",
    dietary: ["Chef Special"],
    winePairing: "Château d'Yquem Sauternes 2011",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Duck Foie Gras", "Mission Figs", "French Brioche", "Sauternes Wine", "Pink Himalayan Salt"]
  },
  {
    id: 3,
    name: "Wild Brittany Lobster Bisque",
    category: "starters",
    price: 36,
    rating: 4.9,
    reviewsCount: 156,
    prepTime: "12 min",
    calories: "310 kcal",
    description: "Velvety sea lobster broth infused with cognac, saffron, fennel cream, and butter-poached lobster tail medallion.",
    dietary: ["Gluten-Free Option"],
    winePairing: "Domaine Leflaive Puligny-Montrachet 2019",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Brittany Blue Lobster", "Hennessy Cognac", "Spanish Saffron", "Crème Fraîche", "Fresh Tarragon"]
  },
  {
    id: 4,
    name: "Dry-Aged Tomahawk Ribeye (32oz)",
    category: "steaks",
    price: 165,
    rating: 5.0,
    reviewsCount: 210,
    prepTime: "35 min",
    calories: "1150 kcal",
    description: "45-day Himalayan salt-cave aged prime Angus Tomahawk, charbroiled over binchotan white charcoal. Served with smoked bone marrow butter and truffle jus.",
    dietary: ["Gluten-Free", "Chef Special"],
    winePairing: "Opus One Napa Valley Cabernet Sauvignon 2018",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Prime Angus Beef", "Smoked Marrow Butter", "Binchotan Charcoal", "Black Truffle Jus", "Rosemary"]
  },
  {
    id: 5,
    name: "Pan-Roasted Chilean Sea Bass",
    category: "seafood",
    price: 58,
    rating: 4.9,
    reviewsCount: 142,
    prepTime: "25 min",
    calories: "520 kcal",
    description: "Sustainably caught wild sea bass with crispy skin, lemongrass-infused champagne velouté, caviar pearls, and baby leek fondue.",
    dietary: ["Gluten-Free", "Pescatarian"],
    winePairing: "Cloudy Bay Sauvignon Blanc 2022",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Chilean Sea Bass", "Osetra Caviar", "Champagne Velouté", "Baby Leeks", "Lemongrass"]
  },
  {
    id: 6,
    name: "Sous-Vide Duck Breast à l'Orange",
    category: "mains",
    price: 52,
    rating: 4.8,
    reviewsCount: 88,
    prepTime: "22 min",
    calories: "640 kcal",
    description: "Crispy skin Moulard duck breast, blood orange Grand Marnier reduction, roasted heritage carrots, spiced parsnip mousseline.",
    dietary: ["Gluten-Free"],
    winePairing: "Domaine de la Romanée-Conti Échezeaux 2017",
    image: "https://images.unsplash.com/photo-1514944288352-fffac99f0bdf?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Moulard Duck", "Blood Orange", "Grand Marnier", "Parsnip Purée", "Star Anise"]
  },
  {
    id: 7,
    name: "Black Truffle Risotto (V)",
    category: "mains",
    price: 46,
    rating: 4.9,
    reviewsCount: 175,
    prepTime: "20 min",
    calories: "490 kcal",
    description: "Acquerello Carnaroli rice slow-cooked in wild mushroom broth, mantecato with cultured butter, fresh Norcia black truffle shavings.",
    dietary: ["Vegetarian", "Gluten-Free"],
    winePairing: "Barolo Monfortino Riserva Giacomo Conterno 2013",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Acquerello Rice", "Norcia Black Truffle", "Porcini Broth", "24-Month Parmigiano", "Chervil"]
  },
  {
    id: 8,
    name: "L'Étoile Golden Sphere Dessert",
    category: "desserts",
    price: 32,
    rating: 5.0,
    reviewsCount: 310,
    prepTime: "15 min",
    calories: "420 kcal",
    description: "24-Karat edible gold leaf chocolate sphere melted table-side with warm Valrhona dark chocolate ganache, passion fruit gel, hazelnut praline core.",
    dietary: ["Vegetarian", "Chef Special"],
    winePairing: "Taylor Fladgate 40 Year Old Tawny Port",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
    ingredients: ["24K Edible Gold", "Valrhona 70% Dark Chocolate", "Piedmont Hazelnut", "Passion Fruit", "Vanilla Bean Gelato"]
  },
  {
    id: 9,
    name: "Grand Marnier Soufflé",
    category: "desserts",
    price: 28,
    rating: 4.8,
    reviewsCount: 115,
    prepTime: "25 min",
    calories: "360 kcal",
    description: "Light-as-air baked soufflé infused with orange liquor, served with creme anglaise and Madagascar vanilla bean ice cream.",
    dietary: ["Vegetarian"],
    winePairing: "Château Raymond-Lafon Sauternes 2016",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Grand Marnier", "Organic Eggs", "Tahitian Vanilla", "Canoe Creme Anglaise"]
  },
  {
    id: 10,
    name: "Dom Pérignon Vintage 2013 Champagne",
    category: "wines",
    price: 380,
    rating: 5.0,
    reviewsCount: 65,
    prepTime: "Chilled",
    calories: "120 kcal/glass",
    description: "Crisp notes of white peach, candied citrus, brioche, and smoky minerality. The pinnacle of French Champagne craftsmanship.",
    dietary: ["Vegan", "Gluten-Free"],
    winePairing: "Osetra Caviar & Fresh Oysters",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
    ingredients: ["Pinot Noir", "Chardonnay", "Épernay France Region"]
  }
];

export const CHEF_PROFILE = {
  name: "Chef Antoine Laurent",
  title: "Executive Culinary Director & Founder",
  bio: "Trained under 3-star Michelin masters in Paris and Tokyo, Chef Antoine reimagines classical French techniques with modern molecular gastronomy. His philosophy centers on hyper-seasonal ingredients, theatrical presentation, and unforgettable flavor harmony.",
  quote: "Food is not merely sustenance; it is an emotional voyage. Every dish at L'Étoile D'Or tells a story of passion, precision, and place.",
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
  awards: [
    "Michelin 3 Stars (2020 - 2026)",
    "World's 50 Best Restaurants Top 10",
    "James Beard Outstanding Chef Award"
  ]
};

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Grand Dining Hall",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Private Salt-Cave Wine Cellar",
    category: "Cellar",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Open Culinary Lab Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Plating Perfection",
    category: "Dishes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Moonlight Terrace Lounge",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Mixology & Craft Cocktails",
    category: "Bar",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Lord Julian Sterling",
    role: "Michelin Guide Reviewer",
    comment: "An extraordinary culinary symphony. The Truffled Wagyu Carpaccio and Golden Sphere dessert are triumphs of contemporary dining.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Food & Wine Magazine",
    comment: "L'Étoile D'Or sets a new global benchmark. The AI Sommelier matched our 7-course tasting menu with breathtaking precision.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Culinary Critic, NY Times",
    comment: "From the moment the golden doors open to the final sip of vintage port, every detail exudes uncompromised luxury.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS = [
  {
    question: "What is the dress code at L'Étoile D'Or?",
    answer: "We mandate Elegant Formal Attire. Jackets are required for gentlemen; sneakers, sportswear, and casual sandals are strictly prohibited."
  },
  {
    question: "Do you accommodate severe allergies or dietary restrictions?",
    answer: "Yes! Our culinary team crafts custom multi-course tasting menus for Vegan, Gluten-Free, Halal, and Kosher-style requirements upon 24-hour advance request."
  },
  {
    question: "How far in advance can I make a table reservation?",
    answer: "Reservations open 60 days in advance on the 1st of every month at 9:00 AM EST. Private Vault bookings can be arranged up to 6 months prior."
  }
];
