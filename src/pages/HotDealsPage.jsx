import React from 'react';
import { HOT_DEALS } from '../data/restaurantData';
import { Flame, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export default function HotDealsPage({ onAddToCart }) {
  return (
    <div className="page-fade-enter" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 4%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--crimson-accent)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '900' }}>
            <Flame size={18} color="var(--crimson-accent)" />
            <span>Limited-Time Fast Crave Offers</span>
          </div>
          <h1 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.8rem)', fontWeight: '900' }}>
            Exclusive Hot Crave Deals
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '10px auto 0' }}>
            Save big on family feast buckets, smash burger combos, and stuffed crust pizza deals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {HOT_DEALS.map((deal) => (
            <div key={deal.id} className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', border: '2px solid var(--gold-primary)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ position: 'relative', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '18px' }}>
                  <img src={deal.image} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'var(--crimson-accent)',
                    color: '#fff',
                    fontWeight: '900',
                    fontSize: '0.8rem',
                    padding: '6px 14px',
                    borderRadius: '20px'
                  }}>
                    {deal.discount}
                  </div>
                </div>

                <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px' }}>
                  {deal.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.5 }}>
                  {deal.items}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginRight: '8px' }}>
                      {deal.originalPrice}
                    </span>
                    <span style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--gold-light)' }}>
                      {deal.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart({
                    id: deal.id,
                    name: deal.title,
                    price: parseFloat(deal.price.replace('$', '')),
                    image: deal.image,
                    description: deal.items
                  })}
                  className="btn-crimson"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  <ShoppingBag size={18} />
                  <span>Claim Hot Deal</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
