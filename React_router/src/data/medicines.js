export const categories = [
  { slug: "all", name: "All Medicines" },
  { slug: "men", name: "Men's Health" },
  { slug: "women", name: "Women's Wellness" },
  { slug: "kids", name: "Kids Care" }
];

const medicines = [
  {
    id: "med-1",
    name: "Advance Pain Relief",
    category: "men",
    type: "Pain Relief",
    price: 249,
    description: "Fast-acting tablets for muscle pain, headache, and fever relief.",
    stock: 18
  },
  {
    id: "med-2",
    name: "Heart & Energy Plus",
    category: "men",
    type: "Health Support",
    price: 399,
    description: "Daily support for heart health, stamina, and vitality.",
    stock: 12
  },
  {
    id: "med-3",
    name: "Active Joint Care",
    category: "men",
    type: "Joint Comfort",
    price: 329,
    description: "Nutrients for joint mobility and reduced stiffness.",
    stock: 9
  },
  {
    id: "med-4",
    name: "Women's Iron Boost",
    category: "women",
    type: "Nutritional Supplement",
    price: 279,
    description: "Iron and vitamin blend for women's daily energy.",
    stock: 22
  },
  {
    id: "med-5",
    name: "Skin Glow Care",
    category: "women",
    type: "Beauty Support",
    price: 349,
    description: "Vitamin-rich formula for healthy, glowing skin.",
    stock: 15
  },
  {
    id: "med-6",
    name: "Sleep Calm Capsules",
    category: "women",
    type: "Stress & Sleep",
    price: 299,
    description: "Gentle support for relaxation and restful sleep.",
    stock: 10
  },
  {
    id: "med-7",
    name: "Kids Immuno Gummies",
    category: "kids",
    type: "Immune Support",
    price: 229,
    description: "Tasty daily gummies for immunity and growth.",
    stock: 27
  },
  {
    id: "med-8",
    name: "Baby Cough Relief Syrup",
    category: "kids",
    type: "Cold & Flu",
    price: 199,
    description: "Mild syrup for soothing cough and congestion.",
    stock: 14
  },
  {
    id: "med-9",
    name: "Kids Vitamin Boost",
    category: "kids",
    type: "Nutrition",
    price: 259,
    description: "Complete vitamin support for children's growth.",
    stock: 20
  }
];

export default medicines;
