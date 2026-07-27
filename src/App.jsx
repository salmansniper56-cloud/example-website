import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import DoorLoadingScreen from './components/DoorLoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ReservationModal from './components/ReservationModal';
import AIChatbot from './components/AIChatbot';
import SpinWheelModal from './components/SpinWheelModal';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import ComboBuilderPage from './pages/ComboBuilderPage';
import HotDealsPage from './pages/HotDealsPage';
import ContactPage from './pages/ContactPage';
import { Flame } from 'lucide-react';

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
  const [isSpinWheelOpen, setIsSpinWheelOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');

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

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleOpenAIChatWithQuery = (query) => {
    setAiQuery(query);
    setIsAIChatOpen(true);
  };

  const handleClaimSpinPrize = (prize) => {
    const couponItem = {
      id: 'prize-' + Date.now(),
      name: `Coupon Reward: ${prize.text}`,
      price: 0.00,
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      description: `Claimed via Spin Wheel using code ${prize.code}`
    };
    handleAddToCart(couponItem);
    setIsCartOpen(true);
  };

  const totalCartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
        {/* Custom Follow Cursor */}
        <CustomCursor />

        {/* Entrance Door Screen */}
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
              onOpenSpinWheel={() => setIsSpinWheelOpen(true)}
            />

            {/* Main Routes */}
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
                path="/combos"
                element={<ComboBuilderPage onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/deals"
                element={<HotDealsPage onAddToCart={handleAddToCart} />}
              />
              <Route
                path="/contact"
                element={<ContactPage onOpenReserve={() => setIsReserveOpen(true)} />}
              />
            </Routes>

            {/* Global Footer */}
            <Footer />

            {/* Slide-over Cart */}
            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              cart={cart}
              updateQuantity={handleUpdateQuantity}
              removeItem={handleRemoveItem}
              clearCart={() => setCart([])}
            />

            {/* Quick Order Modal */}
            <ReservationModal
              isOpen={isReserveOpen}
              onClose={() => setIsReserveOpen(false)}
            />

            {/* Spin Wheel Coupon Modal */}
            <SpinWheelModal
              isOpen={isSpinWheelOpen}
              onClose={() => setIsSpinWheelOpen(false)}
              onClaimPrize={handleClaimSpinPrize}
            />

            {/* Crunchy AI Crave Assistant */}
            <AIChatbot
              isOpen={isAIChatOpen}
              onClose={() => setIsAIChatOpen(false)}
              initialQuery={aiQuery}
              onOpenReserve={() => {
                setIsAIChatOpen(false);
                setIsReserveOpen(true);
              }}
            />

            {/* Floating AI Button */}
            {!isAIChatOpen && (
              <button
                onClick={() => setIsAIChatOpen(true)}
                data-cursor="AI CRAVE"
                style={{
                  position: 'fixed',
                  bottom: '28px',
                  right: '28px',
                  zIndex: 90,
                  background: 'linear-gradient(135deg, #f3e5ab 0%, #d4af37 100%)',
                  color: '#000000',
                  border: 'none',
                  padding: '12px 22px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 30px rgba(212,175,55,0.4)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <Flame size={18} fill="#000000" />
                <span>AI Assistant</span>
              </button>
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
