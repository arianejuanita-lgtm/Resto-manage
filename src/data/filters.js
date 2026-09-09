const filters = {
  categories: [
    { id: "all", label: "ALL", icon: "🍽️" },
    { id: "pizza", label: "Pizza", icon: "🍕" },
    { id: "chicken", label: "Chicken", icon: "🍗" },
    { id: "drinks", label: "Drinks", icon: "🥤" },
    { id: "desserts", label: "Desserts", icon: "🍰" },
    { id: "sides", label: "Sides", icon: "🍟" }
  ],
  price_range: { min: 3, max: 35 },
  portion_sizes: [
    { id: "regular", label: "Regular" },
    { id: "large", label: "Large" },
    { id: "family", label: "Family" }
  ],
  dietary: [
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "spicy", label: "Spicy" },
    { id: "gluten_free", label: "Gluten-Free" }
  ]
};

export default filters;