import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, ShoppingBag, Calendar, Sparkles, Menu, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Navbar({ cartCount, onOpenCart, onOpenReserve, onToggleAIChat }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
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
      padding: isScrolled ? '14px 4%' : '22px 4%',
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(11, 13, 16, 0.94)' : 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
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
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            border: '1.5px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(212, 175, 55, 0.12)'
          }}>
            <Utensils size={22} color="var(--gold-primary)" />
          </div>
          <div>
            <span className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', fontWeight: '700', letterSpacing: '1px', display: 'block', lineHeight: 1.1 }}>
              {RESTAURANT_INFO.name}
            </span>
            <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Michelin ★★★ Gastronomy
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

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* AI Concierge Trigger */}
          <button
            onClick={onToggleAIChat}
            data-cursor="AI SOMMELIER"
            style={{
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid var(--gold-primary)',
              color: 'var(--gold-primary)',
              padding: '9px 15px',
              borderRadius: '30px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: '600',
              fontSize: '0.82rem',
              transition: 'var(--transition-smooth)'
            }}
          >
            <Sparkles size={15} color="var(--gold-primary)" />
            <span>AI Sommelier</span>
          </button>

          {/* Cart Icon Button */}
          <button
            onClick={onOpenCart}
            data-cursor="CART"
            style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-subtle)',
              color: '#fff',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--crimson-accent)',
                color: '#fff',
                fontSize: '0.7rem',
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

          {/* Book Table Link */}
          <Link
            to="/reservations"
            className="btn-gold"
            data-cursor="RESERVE"
            style={{ padding: '9px 20px', fontSize: '0.85rem' }}
          >
            <Calendar size={15} />
            <span>Book Table</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Router Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(11, 13, 16, 0.98)',
          borderBottom: '1px solid var(--border-gold)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
