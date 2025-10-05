import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';
import Menu from './pages/Menu';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants" element={<Restaurants />} />
              <Route path="/restaurant/:id" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1>My Orders - Coming Soon</h1></div>} />
              <Route path="/profile" element={<div className="max-w-7xl mx-auto px-4 py-8"><h1>Profile - Coming Soon</h1></div>} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                    <span className="ml-2 text-xl font-bold">FoodExpress</span>
                  </div>
                  <p className="text-gray-400">
                    Delivering happiness to your doorstep with the best food from local restaurants.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="/" className="hover:text-white transition duration-150">Home</a></li>
                    <li><a href="/restaurants" className="hover:text-white transition duration-150">Restaurants</a></li>
                    <li><a href="/about" className="hover:text-white transition duration-150">About Us</a></li>
                    <li><a href="/contact" className="hover:text-white transition duration-150">Contact</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>support@foodexpress.com</li>
                    <li>+1 (555) 123-4567</li>
                    <li>123 Food Street, City</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Download App</h3>
                  <div className="space-y-2">
                    <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-150">
                      App Store
                    </button>
                    <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-150">
                      Google Play
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 FoodExpress. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;