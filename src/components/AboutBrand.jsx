import React from 'react';

export default function AboutBrand() {
  const images = [
    { url: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', caption: 'Chef Preparing' },
    { url: 'https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', caption: 'Happy Guests' },
    { url: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', caption: 'Urban Storefront' },
    { url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400', caption: 'Sizzling Kitchen' }
  ];

  return (
    <section style={{ padding: '60px 4%', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '40px',
        alignItems: 'center'
      }}>
        {/* Left Column: Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '14px'
        }}>
          {images.map((img, idx) => (
            <div key={idx} style={{ height: '160px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
              <img src={img.url} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* Right Column: Brand Copy */}
        <div>
          <span style={{ color: 'var(--flame-orange)', fontWeight: '900', fontSize: '0.78rem', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
            URBAN VIBE & STREET FOOD TASTE
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '900', color: '#ffffff', marginBottom: '16px' }}>
            ABOUT THE BRAND
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
            Flamebox Brand was established to bring authentic street-food sizzle with an urban vibe. Our customers love our signature flame-broiled Angus smash burgers, 11-spice mega crispy chicken, and artisan paninis.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>
            We source fresh local ingredients daily, marinate every chicken piece to perfection, and craft house secret sauces that keep thousands coming back every single day.
          </p>
        </div>
      </div>
    </section>
  );
}
