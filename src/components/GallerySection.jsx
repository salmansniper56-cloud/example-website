import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { Eye, X, Sparkles } from 'lucide-react';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Interior', 'Cellar', 'Kitchen', 'Dishes', 'Bar'];

  const filteredGallery = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="gallery" style={{ padding: '100px 4%', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
          <Sparkles size={16} />
          <span>Visual Ambiance</span>
        </div>
        <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: '700' }}>
          Atmosphere & Cellar Gallery
        </h2>
      </div>

      {/* Filter Category Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            style={{
              background: activeTab === cat ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
              color: activeTab === cat ? '#000' : 'var(--text-main)',
              fontWeight: activeTab === cat ? '700' : '500',
              border: '1px solid ' + (activeTab === cat ? 'var(--gold-primary)' : 'var(--border-subtle)'),
              padding: '8px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              transition: 'all 0.3s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveImage(item)}
            className="glass-card"
            data-cursor="EXPAND"
            style={{
              position: 'relative',
              height: '280px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />

            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(11, 13, 16, 0.95) 100%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '20px'
            }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {item.category}
              </span>
              <h4 className="font-serif" style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 10000,
          background: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <button
            onClick={() => setActiveImage(null)}
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid var(--border-gold)',
              color: '#fff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={24} />
          </button>
          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img src={activeImage.image} alt={activeImage.title} style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: 'var(--radius-md)', border: '1px solid var(--gold-primary)', boxShadow: '0 0 50px rgba(212,175,55,0.3)' }} />
            <h3 className="font-serif text-gold-gradient" style={{ marginTop: '16px', fontSize: '1.6rem' }}>
              {activeImage.title}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{activeImage.category} Collection</p>
          </div>
        </div>
      )}
    </section>
  );
}
