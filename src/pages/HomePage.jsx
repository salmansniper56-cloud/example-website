import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import KitchenVideoMarquee from '../components/KitchenVideoMarquee';
import VideoBRollSection from '../components/VideoBRollSection';
import { MENU_ITEMS } from '../data/restaurantData';
import { Flame, Sparkles, ArrowRight, ShoppingBag, Truck, Clock } from 'lucide-react';

export default function HomePage({ onAddToCart, onOpenReserve, onToggleAIChat, onReplayDoors }) {
  const featuredBurgers = MENU_ITEMS.filter(i => i.category === 'burgers' || i.category === 'pizzas').slice(0, 3);

  return (
    <div className="page-fade-enter">
      {/* Sizzling Hero Banner */}
      <HeroSection onOpenReserve={onOpenReserve} onToggleAIChat={onToggleAIChat} />

      {/* Unlimited Kitchen Video B-Roll Stream */}
      <KitchenVideoMarquee />

      {/* Express Delivery Info Banner */}
      <section style={{ padding: '20px 4%', background: 'var(--brand-red)', color: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '16px', textTransform: 'uppercase', fontWeight: '800', fontSize: '0.85rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Truck size={20} />
            <span>19-MIN EXPRESS DELIVERY</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Flame size={20} color="var(--brand-yellow)" />
            <span>100% ANGUS FRESH SMASH BEEF</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={20} />
            <span>24/7 EXPRESS DRIVE-THRU</span>
          </div>
        </div>
      </section>

      {/* Replay Door Entrance Button */}
      <div style={{ textAlign: 'center', margin: '30px 0 20px' }}>
        <button
          onClick={onReplayDoors}
          className="btn-outline-clean"
          style={{ fontSize: '0.82rem', padding: '8px 20px' }}
        >
          <Sparkles size={14} color="var(--brand-yellow)" />
          <span>Replay Waiter Entrance</span>
        </button>
      </div>

      {/* Video B-Roll Interactive Theater */}
      <VideoBRollSection onAddToCart={onAddToCart} />

      {/* Featured Items Grid */}
      <section style={{ padding: '60px 4%', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ color: 'var(--brand-yellow)', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '6px' }}>
                🔥 MOST CRAVED
              </div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: '900', color: '#fff' }}>
                Featured Burgers & Pizzas
              </h2>
            </div>
            <Link to="/menu" className="btn-outline-clean">
              <span>View Full Menu</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {featuredBurgers.map((item) => (
              <div key={item.id} className="card-clean" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px', position: 'relative', background: '#121418' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(18,20,24,0.9)', color: 'var(--brand-yellow)', fontWeight: '900', fontSize: '1rem', padding: '4px 12px', borderRadius: '14px', border: '1px solid var(--border-subtle)' }}>
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

                <button onClick={() => onAddToCart(item)} className="btn-red" style={{ width: '100%', padding: '10px' }}>
                  <ShoppingBag size={16} />
                  <span>Add To Order</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Combo Box Promo Section */}
      <section style={{ padding: '80px 4%', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', background: 'var(--bg-card)', padding: '40px 24px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          <Flame size={40} color="var(--brand-yellow)" style={{ marginBottom: '12px' }} />
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: '900', marginBottom: '12px', color: '#fff' }}>
            Build Your Custom Crave Box
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '28px', maxWidth: '600px', margin: '0 auto 28px' }}>
            Combine your favorite Smash Burger, Crispy Wings or Loaded Fries, and Thick Shake. Save 18% automatically on all Crave Boxes!
          </p>
          <Link to="/combos" className="btn-yellow" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            <Sparkles size={18} />
            <span>BUILD COMBO BOX NOW</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
