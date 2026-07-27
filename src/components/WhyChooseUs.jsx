import React from 'react';
import { Flame, Truck, ShieldCheck, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Flame size={28} color="var(--flame-red)" />,
      title: "FRESH INGREDIENTS",
      desc: "Fresh ingredients, delicious taste sensations."
    },
    {
      icon: <Truck size={28} color="var(--flame-red)" />,
      title: "FAST DELIVERY",
      desc: "Fast express delivery right to your door."
    },
    {
      icon: <ShieldCheck size={28} color="var(--flame-red)" />,
      title: "HYGIENIC KITCHEN",
      desc: "Sanitized & 100% hygienic kitchen standards."
    },
    {
      icon: <Award size={28} color="var(--flame-red)" />,
      title: "PREMIUM TASTE",
      desc: "Premium irresistible flavor in every bite."
    }
  ];

  return (
    <section style={{ padding: '50px 4%', maxWidth: '1280px', margin: '0 auto' }}>
      <h2 className="font-serif" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: '900', color: '#ffffff', marginBottom: '32px', textAlign: 'center' }}>
        WHY FOOD LOVERS CHOOSE US
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px'
      }}>
        {pillars.map((item, idx) => (
          <div key={idx} style={{
            background: '#ffffff',
            color: '#121419',
            padding: '28px 20px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center',
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            transition: 'transform 0.25s ease'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: 'rgba(230, 57, 70, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px'
            }}>
              {item.icon}
            </div>

            <h3 style={{ fontSize: '0.95rem', fontWeight: '900', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              {item.title}
            </h3>

            <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.4 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
