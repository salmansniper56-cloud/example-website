import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import DoorLoadingScreen from './components/DoorLoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import AIChatbot from './components/AIChatbot';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import PhilosophyPage from './pages/PhilosophyPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { Sparkles } from 'lucide-react';

// Scroll to top on route navigation helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');

  // Add to cart
  const handleAddToCart = (dish) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === dish.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...dish, quantity: 1 }];
      }
    });
  };

  // Update cart item quantity
  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  // Remove cart item
  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Open AI Chat with custom query
  const handleOpenAIChatWithQuery = (query) => {
    setAiQuery(query);
    setIsAIChatOpen(true);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        {/* Custom Following Cursor */}
        <CustomCursor />

        {/* Loading Animation Screen (Door Opening with Waiter Hands) */}
        {isLoading && (
          <DoorLoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}

        {!isLoading && (
          <>
            {/* Global Navbar */}
            <Navbar
              cartCount={totalCartCount}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenReserve={() => setIsReserveOpen(true)}
              onToggleAIChat={() => setIsAIChatOpen(!isAIChatOpen)}
            />

            {/* Multi-Page Routes */}
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onAddToCart={handleAddToCart}
                    onOpenReserve={() => setIsReserveOpen(true)}
                    onToggleAIChat={() => setIsAIChatOpen(!isAIChatOpen)}
                    onReplayDoors={() => setIsLoading(true)}
                  />
                }
              />
              <Route
                path="/menu"
                element={
                  <MenuPage
                    onAddToCart={handleAddToCart}
                    onOpenAIChatWithQuery={handleOpenAIChatWithQuery}
                  />
                }
              />
              <Route
                path="/reservations"
                element={<ReservationPage />}
              />
              <Route
                path="/philosophy"
                element={<PhilosophyPage />}
              />
              <Route
                path="/gallery"
                element={<GalleryPage />}
              />
              <Route
                path="/contact"
                element={<ContactPage onOpenReserve={() => setIsReserveOpen(true)} />}
              />
            </Routes>

            {/* Global Footer */}
            <Footer />

            {/* Slide-over Order Cart Drawer */}
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cart={cart}
              updateQuantity={handleUpdateQuantity}
              removeItem={handleRemoveItem}
              clearCart={() => setCart([])}
            />

            {/* Quick Table Reservation Modal */}
            <ReservationModal
              isOpen={isReserveOpen}
              onClose={() => setIsReserveOpen(false)}
            />

            {/* AI Sommelier Concierge Chatbot */}
            <AIChatbot
              isOpen={isAIChatOpen}
              onClose={() => setIsAIChatOpen(false)}
              initialQuery={aiQuery}
              onOpenReserve={() => {
                setIsAIChatOpen(false);
                setIsReserveOpen(true);
              }}
            />

            {/* Floating AI Button (When chat is closed) */}
            {!isAIChatOpen && (
              <button
                onClick={() => setIsAIChatOpen(true)}
                data-cursor="AI SOMMELIER"
                style={{
                  position: 'fixed',
                  bottom: '28px',
                  right: '28px',
                  zIndex: 90,
                  background: 'linear-gradient(135deg, #f5d77f 0%, #d4af37 100%)',
                  color: '#0b0d10',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 30px rgba(212,175,55,0.5)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <Sparkles size={18} />
                <span>AI Sommelier</span>
              </button>
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
