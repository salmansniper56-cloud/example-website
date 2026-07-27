import React from 'react';
import { Flame, Play, Sparkles } from 'lucide-react';

export default function KitchenVideoMarquee() {
  const videoClips = [
    {
      title: "Flame Smash Patties",
      url: "https://videos.pexels.com/video-files/4929488/4929488-hd_1280_720_30fps.mp4",
      poster: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Pizza Cheese Stretch",
      url: "https://videos.pexels.com/video-files/30627970/13111089_1440_2560_25fps.mp4",
      poster: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "11-Spice Crispy Crunch",
      url: "https://videos.pexels.com/video-files/19537505/19537505-hd_1920_1080_24fps.mp4",
      poster: "https://images.pexels.com/photos/33254639/pexels-photo-33254639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Golden Fries & Cheese",
      url: "https://videos.pexels.com/video-files/7653233/7653233-uhd_4096_2160_25fps.mp4",
      poster: "https://images.pexels.com/photos/5779487/pexels-photo-5779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Gelato Oreo Shake Pour",
      url: "https://videos.pexels.com/video-files/7334409/7334409-hd_1280_720_25fps.mp4",
      poster: "https://images.pexels.com/photos/34711204/pexels-photo-34711204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
  ];

  return (
    <section style={{
      padding: '40px 0',
      background: '#121418',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }}>
      {/* Header Badge */}
      <div style={{ textAlign: 'center', marginBottom: '24px', padding: '0 16px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(230, 57, 70, 0.15)',
          border: '1px solid var(--brand-red)',
          color: '#ffffff',
          padding: '6px 18px',
          borderRadius: '30px',
          fontSize: '0.78rem',
          fontWeight: '800',
          letterSpacing: '1.5px',
          textTransform: 'uppercase'
        }}>
          <Flame size={14} color="var(--brand-yellow)" />
          <span>UNLIMITED LIVE KITCHEN B-ROLL STREAM</span>
        </div>
      </div>

      {/* Unlimited Video Reel Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {videoClips.map((clip, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              height: '240px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: '#000',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.5)'
            }}
          >
            <video
              src={clip.url}
              poster={clip.poster}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Overlay Title Tag */}
            <div style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              right: '12px',
              background: 'rgba(18, 20, 24, 0.88)',
              border: '1px solid var(--border-subtle)',
              padding: '6px 12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backdropFilter: 'blur(8px)'
            }}>
              <span style={{ color: '#fff', fontSize: '0.82rem', fontWeight: '800' }}>
                {clip.title}
              </span>
              <span style={{ color: 'var(--brand-yellow)', fontSize: '0.68rem', fontWeight: '800', letterSpacing: '1px' }}>
                LIVE B-ROLL
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
