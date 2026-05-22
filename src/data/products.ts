export type Category =
  | "food"
  | "toys"
  | "accessories"
  | "health"
  | "grooming"
  | "training";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  tags: string[];
}

// Category emoji for product image placeholders
export const categoryEmoji: Record<Category, string> = {
  food: "🦴",
  toys: "🎾",
  accessories: "🐾",
  health: "💊",
  grooming: "✂️",
  training: "🎓",
};

// Category gradient colors for placeholders
export const categoryColor: Record<Category, string> = {
  food: "#FDE68A",
  toys: "#BBF7D0",
  accessories: "#FED7AA",
  health: "#DDD6FE",
  grooming: "#FBCFE8",
  training: "#BAE6FD",
};

export const categories: { id: Category; label: string; icon: string }[] = [
  { id: "food", label: "Food & Treats", icon: "🦴" },
  { id: "toys", label: "Toys", icon: "🎾" },
  { id: "accessories", label: "Accessories", icon: "🐾" },
  { id: "health", label: "Health & Wellness", icon: "💊" },
  { id: "grooming", label: "Grooming", icon: "✂️" },
  { id: "training", label: "Training", icon: "🎓" },
];

export const products: Product[] = [
  // Food & Treats
  {
    id: "f001",
    name: "Premium Grain-Free Dry Dog Food",
    description:
      "High-protein, grain-free formula made with real chicken as the #1 ingredient. Perfect for dogs of all sizes. Supports lean muscle growth and healthy digestion.",
    price: 54.99,
    category: "food",
    image: "",
    rating: 4.8,
    reviewCount: 312,
    inStock: true,
    featured: true,
    tags: ["grain-free", "chicken", "high-protein"],
  },
  {
    id: "f002",
    name: "Natural Training Treats",
    description:
      "Soft, bite-sized treats ideal for training sessions. Made with real beef and zero artificial flavors. Low calorie so you can reward generously.",
    price: 12.99,
    category: "food",
    image: "",
    rating: 4.9,
    reviewCount: 540,
    inStock: true,
    featured: true,
    tags: ["treats", "beef", "training"],
  },
  {
    id: "f003",
    name: "Senior Dog Wet Food Variety Pack",
    description:
      "Specially formulated for senior dogs (7+). Rich in antioxidants and omega-3 fatty acids. Supports joint health and cognitive function. 12-can variety pack.",
    price: 38.99,
    category: "food",
    image: "",
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    tags: ["senior", "wet-food", "joint-health"],
  },
  {
    id: "f004",
    name: "Puppy Starter Kit - Dry Food",
    description:
      "Complete nutrition for puppies from 8 weeks. DHA for brain development, calcium for strong bones. Kibble sized perfectly for small puppy mouths.",
    price: 29.99,
    category: "food",
    image: "",
    rating: 4.7,
    reviewCount: 276,
    inStock: true,
    tags: ["puppy", "dry-food", "DHA"],
  },
  // Toys
  {
    id: "t001",
    name: "Indestructible Chew Toy - Kong Style",
    description:
      "Ultra-durable rubber chew toy for aggressive chewers. Stuff with treats or peanut butter for hours of engagement. Dishwasher safe.",
    price: 16.99,
    category: "toys",
    image: "",
    rating: 4.9,
    reviewCount: 824,
    inStock: true,
    featured: true,
    tags: ["chew", "durable", "rubber"],
  },
  {
    id: "t002",
    name: "Interactive Puzzle Toy",
    description:
      "Level 3 difficulty puzzle toy that challenges your dog's problem-solving skills. Slow feeder design reduces eating speed. Great for mental stimulation.",
    price: 24.99,
    category: "toys",
    image: "",
    rating: 4.7,
    reviewCount: 367,
    inStock: true,
    tags: ["puzzle", "mental-stimulation", "slow-feeder"],
  },
  {
    id: "t003",
    name: "Rope Tug Toy Set (3-Pack)",
    description:
      "Set of 3 colorful rope toys in different sizes. Great for tug-of-war, fetch, and interactive play. Cotton rope cleans teeth while playing.",
    price: 19.99,
    category: "toys",
    image: "",
    rating: 4.5,
    reviewCount: 213,
    inStock: true,
    tags: ["rope", "tug", "dental"],
  },
  {
    id: "t004",
    name: "Squeaky Plush Toy Bundle",
    description:
      "Bundle of 5 plush squeaky toys in various animal shapes. Super soft, double-stitched seams for durability. Safe for dogs of all sizes.",
    price: 22.99,
    category: "toys",
    image: "",
    rating: 4.4,
    reviewCount: 189,
    inStock: true,
    tags: ["plush", "squeaky", "bundle"],
  },
  // Accessories
  {
    id: "a001",
    name: "Adjustable Dog Harness - No-Pull",
    description:
      "Ergonomic no-pull harness with front and back leash attachment points. Reflective stitching for night visibility. Padded chest plate for comfort.",
    price: 34.99,
    category: "accessories",
    image: "",
    rating: 4.8,
    reviewCount: 651,
    inStock: true,
    featured: true,
    tags: ["harness", "no-pull", "reflective"],
  },
  {
    id: "a002",
    name: "Personalized ID Tag - Stainless Steel",
    description:
      "Custom engraved stainless steel ID tag. Includes your dog's name and up to 3 lines of contact info. Bone-shaped, 2.5cm x 1.5cm. Rust-proof.",
    price: 9.99,
    category: "accessories",
    image: "",
    rating: 4.9,
    reviewCount: 1024,
    inStock: true,
    tags: ["ID-tag", "personalized", "stainless-steel"],
  },
  {
    id: "a003",
    name: "Orthopedic Dog Bed - Memory Foam",
    description:
      "Premium memory foam dog bed with washable cover. Supports joints and pressure points. Available in S, M, L, XL sizes. Waterproof liner included.",
    price: 79.99,
    category: "accessories",
    image: "",
    rating: 4.7,
    reviewCount: 432,
    inStock: true,
    featured: true,
    tags: ["bed", "orthopedic", "memory-foam"],
  },
  {
    id: "a004",
    name: "Retractable Dog Leash - 5m",
    description:
      "5-meter retractable leash with one-button brake and lock. Ergonomic anti-slip handle. For dogs up to 50kg. Nylon cord with reflective threading.",
    price: 27.99,
    category: "accessories",
    image: "",
    rating: 4.5,
    reviewCount: 387,
    inStock: true,
    tags: ["leash", "retractable", "reflective"],
  },
  // Health
  {
    id: "h001",
    name: "Advanced Hip & Joint Supplement",
    description:
      "Veterinarian-formulated chewable tablets with glucosamine, chondroitin, and MSM. Reduces joint discomfort. 120 soft chews per bottle.",
    price: 42.99,
    category: "health",
    image: "",
    rating: 4.8,
    reviewCount: 567,
    inStock: true,
    featured: true,
    tags: ["joint", "supplement", "glucosamine"],
  },
  {
    id: "h002",
    name: "Omega-3 Fish Oil Supplement",
    description:
      "Wild-caught fish oil capsules for dogs. Promotes a shiny coat, healthy skin, and cardiovascular health. 180 softgels, no fishy smell.",
    price: 24.99,
    category: "health",
    image: "",
    rating: 4.7,
    reviewCount: 398,
    inStock: true,
    tags: ["fish-oil", "omega-3", "coat"],
  },
  {
    id: "h003",
    name: "Probiotic & Digestive Enzymes",
    description:
      "Daily probiotic powder that supports gut health and immunity. 6 billion CFU per scoop. Helps reduce gas, bloating and loose stools. Unflavored.",
    price: 32.99,
    category: "health",
    image: "",
    rating: 4.6,
    reviewCount: 244,
    inStock: true,
    tags: ["probiotic", "digestive", "gut-health"],
  },
  // Grooming
  {
    id: "g001",
    name: "Professional Slicker Brush",
    description:
      "Self-cleaning slicker brush with flexible pins that penetrate deep into the coat. Removes loose fur, mats, and tangles. For all coat types.",
    price: 18.99,
    category: "grooming",
    image: "",
    rating: 4.8,
    reviewCount: 476,
    inStock: true,
    featured: true,
    tags: ["brush", "deshedding", "grooming"],
  },
  {
    id: "g002",
    name: "Oatmeal & Aloe Dog Shampoo",
    description:
      "Gentle, tearless formula with oatmeal and aloe vera. Soothes sensitive skin, reduces itching. pH-balanced for dogs. 500ml bottle.",
    price: 14.99,
    category: "grooming",
    image: "",
    rating: 4.7,
    reviewCount: 321,
    inStock: true,
    tags: ["shampoo", "oatmeal", "sensitive-skin"],
  },
  {
    id: "g003",
    name: "Nail Grinder - Quiet Motor",
    description:
      "Ultra-quiet electric nail grinder with 2 speeds and 3 grinding ports. USB rechargeable. LED light for visibility. Reduces nail splitting vs clippers.",
    price: 29.99,
    category: "grooming",
    image: "",
    rating: 4.5,
    reviewCount: 218,
    inStock: true,
    tags: ["nail-grinder", "quiet", "rechargeable"],
  },
  // Training
  {
    id: "tr001",
    name: "Clicker Training Kit",
    description:
      "Complete clicker training starter kit: clicker, treat pouch, 20-page training guide and a 5m training leash. Perfect for puppies and beginners.",
    price: 19.99,
    category: "training",
    image: "",
    rating: 4.8,
    reviewCount: 389,
    inStock: true,
    tags: ["clicker", "training", "beginner"],
  },
  {
    id: "tr002",
    name: "Adjustable Dog Agility Set",
    description:
      "12-piece agility course with jump hurdles, weave poles, pause box, and tunnel. Adjustable heights. Easy assembly. Improves fitness and focus.",
    price: 89.99,
    category: "training",
    image: "",
    rating: 4.6,
    reviewCount: 157,
    inStock: true,
    featured: true,
    tags: ["agility", "fitness", "outdoor"],
  },
];

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured && p.inStock);

export const getProductsByCategory = (category: Category) =>
  products.filter((p) => p.category === category && p.inStock);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);
