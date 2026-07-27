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
    { label: 'HOME', path: '/' },
    { label: 'MENU', path: '/menu' },
    { label: 'BUILD COMBO', path: '/combos' },
    { label: 'HOT DEALS', path: '/deals' },
    { label: 'LOCATIONS', path: '/contact' },
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
      background: isScrolled ? 'rgba(18, 20, 24, 0.96)' : 'linear-gradient(180deg, rgba(18, 20, 24, 0.95) 0%, transparent 100%)',
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
        {/* Brand Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'var(--brand-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: '900'
          }}>
            <Flame size={20} fill="#fff" />
          </div>
          <div>
            <span className="font-serif" style={{ fontSize: '1.3rem', fontWeight: '900', letterSpacing: '0.5px', color: '#fff', display: 'block', lineHeight: 1.1 }}>
              BURGER & CRUNCH CO.
            </span>
            <span style={{ fontSize: '0.62rem', color: 'var(--brand-yellow)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: '800' }}>
              FAST-CASUAL GOURMET
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-only">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  color: isActive ? 'var(--brand-yellow)' : '#ffffff',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? '800' : '600',
                  letterSpacing: '1px',
                  transition: 'color 0.2s ease',
                  borderBottom: isActive ? '2px solid var(--brand-red)' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* AI Crave */}
          <button
            onClick={onToggleAIChat}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '700',
              fontSize: '0.78rem'
            }}
          >
            <Sparkles size={14} color="var(--brand-yellow)" />
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
                background: 'var(--brand-red)',
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

          {/* Combo Builder CTA (Desktop) */}
          <Link
            to="/combos"
            className="btn-yellow desktop-only"
            style={{ padding: '8px 18px', fontSize: '0.82rem' }}
          >
            <Flame size={14} />
            <span>ORDER COMBO</span>
          </Link>

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
          background: '#181b20',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '28px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--brand-yellow)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '800' }}>
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
                    color: isActive ? 'var(--brand-yellow)' : '#fff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: isActive ? '800' : '600',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'rgba(230, 57, 70, 0.15)' : 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} color={isActive ? 'var(--brand-yellow)' : 'var(--text-muted)'} />
                </Link>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
            <Link
              to="/combos"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-yellow"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Flame size={18} />
              <span>BUILD CUSTOM COMBO</span>
            </Link>

            <button
              onClick={() => { setMobileMenuOpen(false); onToggleAIChat(); }}
              className="btn-red"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <Sparkles size={18} />
              <span>ASK AI ASSISTANT</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
