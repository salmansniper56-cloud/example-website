import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import VideoBRollSection from '../components/VideoBRollSection';
import { MENU_ITEMS, HOT_DEALS } from '../data/restaurantData';
import { Flame, Sparkles, ArrowRight, ShoppingBag, Truck, Clock, ShieldCheck } from 'lucide-react';

export default function HomePage({ onAddToCart, onOpenReserve, onToggleAIChat, onReplayDoors }) {
  const featuredBurgers = MENU_ITEMS.filter(i => i.category === 'burgers' || i.category === 'pizzas').slice(0, 3);

  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <HeroSection onOpenReserve={onOpenReserve} onToggleAIChat={onToggleAIChat} />

      {/* Express Delivery Banner */}
      <section style={{ padding: '20px 4%', background: 'var(--crimson-accent)', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '16px', textTransform: 'uppercase', fontWeight: '800', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={20} />
            <span>19-MIN EXPRESS DELIVERY</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Flame size={20} />
            <span>100% ANGUS FRESH SMASH BEEF</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={20} />
            <span>24/7 DRIVE-THRU OPEN</span>
          </div>
        </div>
      </section>

      {/* Replay Door Entrance Button */}
      <div style={{ textAlign: 'center', margin: '30px 0 20px' }}>
        <button
          onClick={onReplayDoors}
          className="btn-outline-gold"
          style={{ fontSize: '0.82rem', padding: '8px 20px' }}
        >
          <Sparkles size={14} />
          <span>Replay Waiter Hands Entrance</span>
        </button>
      </div>

      {/* Video B-Roll Showcase Section */}
      <VideoBRollSection onAddToCart={onAddToCart} />

      {/* Sizzling Craves Preview */}
      <section style={{ padding: '60px 4%', background: 'rgba(22, 26, 36, 0.5)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ color: 'var(--crimson-accent)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px' }}>
                🔥 Most Loved Craves
              </div>
              <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: '800' }}>
                Featured Burgers & Pizzas
              </h2>
            </div>
            <Link to="/menu" className="btn-outline-gold">
              <span>View Full Menu</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {featuredBurgers.map((item) => (
              <div key={item.id} className="glass-card" style={{ padding: '20px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '14px', position: 'relative' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(15,17,23,0.9)', color: 'var(--gold-primary)', fontWeight: '900', fontSize: '1rem', padding: '4px 12px', borderRadius: '14px', border: '1px solid var(--gold-primary)' }}>
                      ${item.price}
                    </span>
                  </div>
                  <h3 className="font-serif" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '800', marginBottom: '6px' }}>
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>

                <button onClick={() => onAddToCart(item)} className="btn-crimson" style={{ width: '100%', padding: '10px' }}>
                  <ShoppingBag size={16} />
                  <span>Add To Order</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Your Own Crave Box Promo Banner */}
      <section style={{ padding: '80px 4%', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', background: 'linear-gradient(135deg, rgba(230, 57, 70, 0.2), rgba(15, 17, 23, 0.95))', padding: '40px 24px', borderRadius: 'var(--radius-lg)', border: '2px solid var(--gold-primary)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
          <Flame size={42} color="var(--crimson-accent)" style={{ marginBottom: '12px' }} />
          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '12px' }}>
            Build Your Own Custom Crave Box
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
            Pick your favorite Smash Burger, Crispy Wings or Loaded Fries, and Thick Oreo Shake. Save 18% automatically on all Crave Boxes!
          </p>
          <Link to="/combos" className="btn-gold" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            <Sparkles size={18} />
            <span>Build Combo Box Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
