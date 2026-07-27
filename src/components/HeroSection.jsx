import React from 'react';
import { Flame, Star, Clock, ArrowRight, Tag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function HeroSection({ onOpenReserve, onToggleAIChat }) {
  const bottomFoodItems = [
    { title: 'Cheeseburger', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250' },
    { title: 'Chicken Burger', image: 'https://images.pexels.com/photos/33254639/pexels-photo-33254639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250' },
    { title: 'Crispy Wrap', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250' },
    { title: 'Seasoned Fries', image: 'https://images.pexels.com/photos/5779487/pexels-photo-5779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250' },
    { title: 'Panini Grill', image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250&w=250' }
  ];

  return (
    <section style={{
      position: 'relative',
      paddingTop: '130px',
      paddingBottom: '60px',
      background: 'radial-gradient(circle at 60% 30%, rgba(255, 107, 0, 0.12) 0%, #121419 70%)',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 4%' }}>
        {/* Main Grid: Left Copy + Right Platter Composite */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '50px'
        }}>
          {/* Left Column Text */}
          <div>
            <h1 className="font-serif" style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
              fontWeight: '900',
              lineHeight: 1.08,
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              <span style={{ color: 'var(--flame-orange)', display: 'block' }}>FRESHLY GRILLED.</span>
              <span style={{ color: '#ffffff', display: 'block' }}>BOLDLY DELICIOUS.</span>
            </h1>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              marginBottom: '32px',
              fontWeight: '500'
            }}>
              Experience the Fire! Street-Food Taste, Urban Vibe.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
              <a href="#menu" className="btn-orange">
                Explore Menu
              </a>

              <button onClick={onOpenReserve} className="btn-outline-red">
                Order Online
              </button>
            </div>
          </div>

          {/* Right Column: Hero Platter Image + Floating Badges */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            {/* Main Platter Hero Composite */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)'
            }}>
              <img
                src="https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1000"
                alt="Flamebox Chicken & Burgers Platter"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>

            {/* Floating Badge 1: Delivery */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '10px',
              background: '#ffffff',
              color: '#000000',
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10
            }}>
              <Clock size={18} color="var(--flame-orange)" />
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: '800', display: 'block', textTransform: 'uppercase' }}>DELIVERY</span>
                <strong style={{ fontSize: '0.82rem', fontWeight: '900' }}>25-30 MINS</strong>
              </div>
            </div>

            {/* Floating Badge 2: Rating */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '10px',
              background: '#ffffff',
              color: '#000000',
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10
            }}>
              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '0.62rem', color: '#64748b', fontWeight: '800', display: 'block', textTransform: 'uppercase' }}>RATING</span>
                <strong style={{ fontSize: '0.88rem', fontWeight: '900', color: 'var(--flame-orange)' }}>4.9 ★ <span style={{ fontSize: '0.7rem', color: '#64748b' }}>12K+</span></strong>
              </div>
            </div>

            {/* Floating Badge 3: Offers */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '-10px',
              background: '#ffffff',
              color: '#000000',
              padding: '8px 14px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              zIndex: 10
            }}>
              <Tag size={16} color="var(--flame-orange)" />
              <strong style={{ fontSize: '0.8rem', fontWeight: '900', textTransform: 'uppercase' }}>OFFERS!</strong>
            </div>
          </div>
        </div>

        {/* Bottom Food Row (Matching Reference Screenshot) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '14px',
          background: 'var(--bg-secondary)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)'
        }}>
          {bottomFoodItems.map((food, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <img
                src={food.image}
                alt={food.title}
                style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '10px', marginBottom: '8px' }}
              />
              <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: '700' }}>{food.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
