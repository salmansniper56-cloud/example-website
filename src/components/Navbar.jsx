import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, ShoppingBag, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenCart, onToggleAIChat }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Combos', path: '/combos' },
    { label: 'Locations', path: '/contact' },
    { label: 'Franchise', path: '/contact' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isScrolled ? '12px 4%' : '18px 4%',
      transition: 'all 0.25s ease',
      background: isScrolled ? 'rgba(24, 27, 34, 0.96)' : 'linear-gradient(180deg, rgba(24, 27, 34, 0.95) 0%, transparent 100%)',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo (Matching Screenshot) */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff8533, #ff6b00)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>
            <Flame size={22} fill="#fff" />
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '900', color: '#ffffff', display: 'block', lineHeight: 1.1, letterSpacing: '0.5px' }}>
              FLAMEBOX
            </span>
            <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '700' }}>
              KITCHEN
            </span>
          </div>
        </Link>

        {/* Desktop Router Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '22px' }} className="desktop-only">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path && idx === 0;
            return (
              <Link
                key={idx}
                to={link.path}
                style={{
                  color: isActive ? 'var(--flame-orange)' : '#cbd5e1',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? '700' : '500',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Socials Text Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '10px', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '700' }}>
            <span>FB</span>
            <span>IG</span>
            <span>TT</span>
          </div>
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* AI Concierge */}
          <button
            onClick={onToggleAIChat}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              padding: '8px 14px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '700',
              fontSize: '0.78rem'
            }}
          >
            <Sparkles size={14} color="var(--flame-orange)" />
            <span className="desktop-only">AI Assistant</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <ShoppingBag size={17} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--flame-red)',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: '900',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Order Now Red Button (Matching Screenshot) */}
          <button
            onClick={onOpenCart}
            className="btn-red desktop-only"
            style={{ padding: '9px 20px', fontSize: '0.82rem' }}
          >
            <span>Order Now</span>
          </button>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '6px'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100%',
          left: 0,
          right: 0,
          height: 'calc(100vh - 60px)',
          background: '#181b22',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '28px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--flame-orange)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '800' }}>
              FLAMEBOX KITCHEN MENU
            </div>
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255,255,255,0.02)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} color="var(--text-muted)" />
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              className="btn-red"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <span>Order Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
