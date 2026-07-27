import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { MENU_ITEMS, CHEF_PROFILE } from '../data/restaurantData';
import { Utensils, Calendar, Sparkles, ArrowRight, Award, Wine, Star } from 'lucide-react';

export default function HomePage({ onAddToCart, onOpenReserve, onToggleAIChat, onReplayDoors }) {
  const featuredDishes = MENU_ITEMS.slice(0, 3);

  return (
    <div className="page-fade-enter">
      {/* Hero Section */}
      <HeroSection onOpenReserve={onOpenReserve} onToggleAIChat={onToggleAIChat} />

      {/* Door Entrance Replay Feature */}
      <div style={{ textAlign: 'center', margin: '-40px 0 60px', position: 'relative', zIndex: 20 }}>
        <button
          onClick={onReplayDoors}
          className="btn-outline-gold"
          style={{ fontSize: '0.85rem', padding: '10px 24px', backdropFilter: 'blur(10px)', background: 'rgba(11, 13, 16, 0.85)' }}
        >
          <Sparkles size={16} />
          <span>Replay Waiter Hands Door Entrance</span>
        </button>
      </div>

      {/* Welcome & Philosophy Preview Section */}
      <section style={{ padding: '60px 4%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
              <Award size={16} />
              <span>Three Michelin Stars</span>
            </div>
            <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', fontWeight: '700', marginBottom: '20px', lineHeight: 1.2 }}>
              A Legacy of Culinary Innovation
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              At L'Étoile D'Or, every menu creation is a harmonious dialogue between Japanese precision, French heritage, and molecular gastronomy. Guided by Chef Antoine Laurent, our kitchen elevates rare seasonal ingredients into unforgettable dining moments.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/philosophy" className="btn-gold">
                <span>Meet Chef Antoine</span>
                <ArrowRight size={16} />
              </Link>
              <Link to="/gallery" className="btn-outline-gold">
                <span>Explore Ambiance</span>
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
              alt="Plating perfection"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--gold-primary)' }}
            />
          </div>
        </div>
      </section>

      {/* Featured Chef Specials Section */}
      <section style={{ padding: '80px 4%', background: 'rgba(18, 22, 31, 0.4)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ color: 'var(--gold-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Chef's Handpicked Highlights
              </div>
              <h2 className="font-serif text-gold-gradient" style={{ fontSize: '2.5rem', fontWeight: '700' }}>
                Signature Tasting Dishes
              </h2>
            </div>
            <Link to="/menu" className="btn-outline-gold">
              <span>View Full Menu ({MENU_ITEMS.length} Dishes)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {featuredDishes.map((item) => (
              <div key={item.id} className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 className="font-serif" style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700' }}>{item.name}</h3>
                    <span style={{ color: 'var(--gold-light)', fontWeight: '800', fontSize: '1.1rem' }}>${item.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '16px', lineHeight: 1.5 }}>
                    {item.description}
                  </p>
                </div>

                <button onClick={() => onAddToCart(item)} className="btn-gold" style={{ width: '100%', padding: '10px' }}>
                  <span>Add To Order</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <TestimonialsSection />

      {/* Table Booking Banner */}
      <section style={{ padding: '80px 4%', textAlign: 'center', background: 'linear-gradient(180deg, #0b0d10 0%, #12161f 100%)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(22, 27, 38, 0.8)', padding: '50px 30px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gold-primary)', boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }}>
          <Sparkles size={36} color="var(--gold-primary)" style={{ marginBottom: '16px' }} />
          <h2 className="font-serif text-gold-gradient" style={{ fontSize: '2.4rem', fontWeight: '700', marginBottom: '16px' }}>
            Reserve Your Evening at L'Étoile D'Or
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '30px' }}>
            Table reservations open 60 days in advance. Select your seating area in our Main Hall, Private Salt-Cave Vault, or Moonlight Terrace.
          </p>
          <Link to="/reservations" className="btn-gold" style={{ fontSize: '1.05rem', padding: '14px 36px' }}>
            <Calendar size={18} />
            <span>Book Table Now</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
