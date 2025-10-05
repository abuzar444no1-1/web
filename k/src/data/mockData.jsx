export const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    cuisine: "American, Fast Food",
    rating: 4.5,
    deliveryTime: "25-30 min",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Sushi Master",
    cuisine: "Japanese, Sushi",
    rating: 4.8,
    deliveryTime: "35-40 min",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Pizza Heaven",
    cuisine: "Italian, Pizza",
    rating: 4.3,
    deliveryTime: "20-25 min",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    featured: false
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican, Tacos",
    rating: 4.6,
    deliveryTime: "15-20 min",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1565299585323-38174c13fae8?w=400&h=300&fit=crop",
    featured: true
  }
];

export const menuItems = {
  1: [
    {
      id: 101,
      name: "Classic Cheeseburger",
      description: "Beef patty with cheese, lettuce, tomato, and special sauce",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
      category: "Burgers"
    },
    {
      id: 102,
      name: "Bacon Burger",
      description: "Classic burger with crispy bacon and BBQ sauce",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop",
      category: "Burgers"
    },
    {
      id: 103,
      name: "French Fries",
      description: "Crispy golden fries with sea salt",
      price: 4.99,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=200&fit=crop",
      category: "Sides"
    }
  ],
  2: [
    {
      id: 201,
      name: "Salmon Sushi Roll",
      description: "Fresh salmon with avocado and cucumber",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=200&fit=crop",
      category: "Sushi Rolls"
    },
    {
      id: 202,
      name: "Dragon Roll",
      description: "Eel, cucumber, avocado with eel sauce",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=300&h=200&fit=crop",
      category: "Special Rolls"
    }
  ]
};

// Mock API functions
export const api = {
  getRestaurants: () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(restaurants), 500);
    });
  },
  
  getMenu: (restaurantId) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(menuItems[restaurantId] || []), 300);
    });
  },
  
  placeOrder: (orderData) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        success: true,
        orderId: Math.random().toString(36).substr(2, 9),
        estimatedDelivery: "30-45 minutes"
      }), 1000);
    });
  }
};