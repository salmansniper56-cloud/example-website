import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Sparkles, Menu, X, ArrowRight, Gift } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenCart, onToggleAIChat, onOpenSpinWheel }) {
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
    { label: 'CRAVE BOX', path: '/combos' },
    { label: 'OFFERS', path: '/deals' },
    { label: 'LOCATIONS', path: '/contact' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: isScrolled ? '12px 4%' : '20px 4%',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(9, 10, 15, 0.94)' : 'linear-gradient(180deg, rgba(9, 10, 15, 0.9) 0%, transparent 100%)',
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
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            border: '1px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(212, 175, 55, 0.08)'
          }}>
            <span style={{ color: 'var(--gold-primary)', fontWeight: '900', fontSize: '0.9rem' }}>C</span>
          </div>
          <div>
            <span className="font-serif text-gold-gradient" style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '1.5px', display: 'block', lineHeight: 1.1 }}>
              CRAVE & CO.
            </span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '600' }}>
              HAUTE FAST CASUAL
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-only">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  color: isActive ? 'var(--gold-primary)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: isActive ? '700' : '600',
                  letterSpacing: '1.5px',
                  transition: 'color 0.2s ease',
                  borderBottom: isActive ? '1px solid var(--gold-primary)' : '1px solid transparent',
                  paddingBottom: '4px'
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Spin Wheel */}
          <button
            onClick={onOpenSpinWheel}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-gold)',
              color: 'var(--gold-light)',
              padding: '8px 16px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '700',
              fontSize: '0.75rem',
              letterSpacing: '0.5px'
            }}
          >
            <Gift size={14} color="var(--gold-primary)" />
            <span>Spin & Win</span>
          </button>

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
              fontWeight: '600',
              fontSize: '0.75rem',
              letterSpacing: '0.5px'
            }}
          >
            <Sparkles size={14} color="var(--gold-primary)" />
            <span className="desktop-only">AI Concierge</span>
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
                background: 'var(--gold-primary)',
                color: '#000',
                fontSize: '0.65rem',
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
          background: 'rgba(9, 10, 15, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '28px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--gold-primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px', fontWeight: '700' }}>
              CRAVE & CO. NAVIGATION
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
                    fontSize: '1.1rem',
                    fontWeight: isActive ? '800' : '500',
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'rgba(212, 175, 55, 0.08)' : 'rgba(255,255,255,0.02)',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSpinWheel(); }}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <Gift size={16} />
              <span>Spin & Win Coupons</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
