import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, ShoppingBag, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenCart, onOpenReserve, onToggleAIChat }) {
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
    { label: 'Home Entrance', path: '/' },
    { label: 'Menu & Food', path: '/menu' },
    { label: 'Build Combo Box', path: '/combos' },
    { label: 'Hot Deals', path: '/deals' },
    { label: 'Express Locations', path: '/contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isScrolled ? '12px 4%' : '18px 4%',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(15, 17, 23, 0.96)' : 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, transparent 100%)',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '2px solid var(--crimson-accent)' : 'none'
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--crimson-accent)',
            border: '2px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 0 15px var(--crimson-glow)'
          }}>
            <Flame size={22} color="#fff" />
          </div>
          <div>
            <span className="font-serif text-gold-gradient" style={{ fontSize: '1.3rem', fontWeight: '900', letterSpacing: '0.5px', display: 'block', lineHeight: 1.1 }}>
              {RESTAURANT_INFO.name}
            </span>
            <span style={{ fontSize: '0.62rem', color: 'var(--crimson-accent)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '800' }}>
              BURGERS • CHICKEN • PIZZAS
            </span>
          </div>
        </Link>

        {/* Desktop Router Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '22px' }} className="desktop-only">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                data-cursor="GOTO"
                style={{
                  color: isActive ? 'var(--gold-primary)' : 'var(--text-main)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? '800' : '600',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease',
                  borderBottom: isActive ? '2px solid var(--crimson-accent)' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* AI Concierge */}
          <button
            onClick={onToggleAIChat}
            data-cursor="AI CRAVE"
            style={{
              background: 'rgba(230, 57, 70, 0.15)',
              border: '1.5px solid var(--crimson-accent)',
              color: '#fff',
              padding: '8px 14px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '700',
              fontSize: '0.8rem'
            }}
          >
            <Sparkles size={14} color="var(--gold-primary)" />
            <span className="desktop-only">AI Crave Assistant</span>
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            data-cursor="CART"
            style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.06)',
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
                background: 'var(--crimson-accent)',
                color: '#fff',
                fontSize: '0.68rem',
                fontWeight: '800',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--bg-primary)'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Combo Builder Link (Desktop) */}
          <Link
            to="/combos"
            className="btn-gold desktop-only"
            data-cursor="COMBO"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Flame size={14} />
            <span>Build Combo</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-primary)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
          background: 'rgba(15, 17, 23, 0.98)',
          backdropFilter: 'blur(25px)',
          borderBottom: '2px solid var(--crimson-accent)',
          padding: '24px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--gold-primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: '800' }}>
              BURGER & CRUNCH CO. MENU
            </div>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: isActive ? 'var(--gold-primary)' : '#fff',
                    textDecoration: 'none',
                    fontSize: '1.15rem',
                    fontWeight: isActive ? '800' : '600',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(230, 57, 70, 0.15)' : 'rgba(255,255,255,0.02)',
                    border: '1px solid ' + (isActive ? 'var(--crimson-accent)' : 'var(--border-subtle)'),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} color={isActive ? 'var(--gold-primary)' : 'var(--text-muted)'} />
                </Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <Link
              to="/combos"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Flame size={18} />
              <span>Build Custom Crave Box</span>
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAIChat();
              }}
              className="btn-crimson"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <Sparkles size={18} />
              <span>Ask AI Crave Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
