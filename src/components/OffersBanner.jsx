import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OffersBanner() {
  return (
    <section style={{ padding: '40px 4% 60px', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{
        background: 'linear-gradient(135deg, #1d212b 0%, #15171e 100%)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: '36px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
      }}>
        {/* Left Copy */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--flame-orange)', color: '#fff', padding: '4px 12px', borderRadius: '14px', fontSize: '0.72rem', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
            <Tag size={13} />
            <span>LIMITED TIME PROMO</span>
          </div>

          <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: '900', color: '#ffffff', marginBottom: '12px' }}>
            SPECIAL COMBOS & OFFERS
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '500px' }}>
            Save up to 30% off on all Grand Crave Boxes, Family Buckets, and Double Smash Burger meals this week!
          </p>
        </div>

        {/* Right Offer Image + Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', width: '180px', height: '130px', borderRadius: '14px', overflow: 'hidden' }}>
            <img
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400"
              alt="Special Combo Offer"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'linear-gradient(135deg, #ff8533, #ff6b00)',
              color: '#fff',
              fontWeight: '900',
              fontSize: '0.82rem',
              padding: '4px 10px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(255, 107, 0, 0.5)'
            }}>
              30% OFF
            </div>
          </div>

          <Link to="/combos" className="btn-orange" style={{ padding: '14px 28px' }}>
            <span>GRAB YOUR MEAL</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
