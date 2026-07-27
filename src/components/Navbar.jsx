import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, ShoppingBag, Calendar, Sparkles, Menu, X, ArrowRight } from 'lucide-react';
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

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home Entrance', path: '/' },
    { label: 'Gourmet Menu', path: '/menu' },
    { label: 'Reservations', path: '/reservations' },
    { label: 'Chef Philosophy', path: '/philosophy' },
    { label: 'Ambiance Gallery', path: '/gallery' },
    { label: 'Location & Contact', path: '/contact' },
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
      background: isScrolled ? 'rgba(11, 13, 16, 0.95)' : 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
      backdropFilter: isScrolled ? 'blur(20px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border-gold)' : 'none'
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
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            border: '1.5px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(212, 175, 55, 0.12)',
            flexShrink: 0
          }}>
            <Utensils size={19} color="var(--gold-primary)" />
          </div>
          <div>
            <span className="font-serif text-gold-gradient" style={{ fontSize: '1.25rem', fontWeight: '700', letterSpacing: '0.5px', display: 'block', lineHeight: 1.1 }}>
              {RESTAURANT_INFO.name}
            </span>
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Michelin ★★★ Gastronomy
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
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
                  fontWeight: isActive ? '700' : '500',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s ease',
                  borderBottom: isActive ? '2px solid var(--gold-primary)' : '2px solid transparent',
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
          {/* AI Concierge Trigger */}
          <button
            onClick={onToggleAIChat}
            data-cursor="AI SOMMELIER"
            style={{
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--gold-primary)',
              color: 'var(--gold-primary)',
              padding: '8px 14px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '600',
              fontSize: '0.8rem'
            }}
          >
            <Sparkles size={14} color="var(--gold-primary)" />
            <span className="desktop-only">AI Sommelier</span>
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
                fontWeight: '700',
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

          {/* Reserve Table Link (Desktop) */}
          <Link
            to="/reservations"
            className="btn-gold desktop-only"
            data-cursor="RESERVE"
            style={{ padding: '8px 18px', fontSize: '0.85rem' }}
          >
            <Calendar size={14} />
            <span>Book Table</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
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

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100%',
          left: 0,
          right: 0,
          height: 'calc(100vh - 60px)',
          background: 'rgba(11, 13, 16, 0.98)',
          backdropFilter: 'blur(25px)',
          borderBottom: '1px solid var(--border-gold)',
          padding: '24px 20px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--gold-primary)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: '700' }}>
              Navigation Menu
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
                    fontSize: '1.2rem',
                    fontWeight: isActive ? '700' : '500',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: isActive ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255,255,255,0.02)',
                    border: '1px solid ' + (isActive ? 'var(--gold-primary)' : 'var(--border-subtle)'),
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

          {/* Quick Mobile Action CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
            <Link
              to="/reservations"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Calendar size={18} />
              <span>Book A Table</span>
            </Link>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onToggleAIChat();
              }}
              className="btn-outline-gold"
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              <Sparkles size={18} />
              <span>Ask AI Sommelier</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
