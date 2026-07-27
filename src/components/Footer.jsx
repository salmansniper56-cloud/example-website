import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Instagram, Facebook, Twitter, Award, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#07080a',
      borderTop: '1px solid var(--border-gold)',
      padding: '70px 4% 30px',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '40px',
        marginBottom: '50px'
      }}>
        {/* Col 1: Brand Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Utensils size={24} color="var(--gold-primary)" />
            <span className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', fontWeight: '700' }}>
              {RESTAURANT_INFO.name}
            </span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
            {RESTAURANT_INFO.motto}. Recognized by Michelin Guide and World's 50 Best.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[Instagram, Facebook, Twitter].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Webpages Links */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px' }}>Website Pages</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
            {[
              { label: 'Home Entrance', path: '/' },
              { label: 'Gourmet Menu', path: '/menu' },
              { label: 'Table Reservations', path: '/reservations' },
              { label: 'Chef Philosophy', path: '/philosophy' },
              { label: 'Atmosphere Gallery', path: '/gallery' },
              { label: 'Location & Contact', path: '/contact' }
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--gold-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Accreditations */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px' }}>Accreditations</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} color="var(--gold-primary)" />
              <span>Michelin 3 Stars (2020 - 2026)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} color="var(--gold-primary)" />
              <span>James Beard Outstanding Team</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={16} color="var(--gold-primary)" />
              <span>Wine Spectator Grand Award</span>
            </div>
          </div>
        </div>

        {/* Col 4: Dispatch */}
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '16px' }}>Private Cellar Dispatch</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '12px' }}>
            Subscribe to receive exclusive rare vintage releases & tasting invitations.
          </p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              type="email"
              placeholder="Enter your email..."
              style={{
                flex: 1,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '20px',
                color: '#fff',
                fontSize: '0.8rem',
                outline: 'none'
              }}
            />
            <button className="btn-gold" style={{ padding: '8px 16px', fontSize: '0.78rem' }}>
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1300px',
        margin: '0 auto',
        paddingTop: '24px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        color: 'var(--text-muted)',
        fontSize: '0.8rem'
      }}>
        <div>
          © 2026 L'Étoile D'Or Fine Dining Group. All Rights Reserved.
        </div>

        <button
          onClick={scrollToTop}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border-gold)',
            color: 'var(--gold-primary)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
