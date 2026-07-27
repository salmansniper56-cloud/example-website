import React, { useState } from 'react';
import { X, Flame, Sparkles, Trophy, CheckCircle2, Gift } from 'lucide-react';

export default function SpinWheelModal({ isOpen, onClose, onClaimPrize }) {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [wonPrize, setWonPrize] = useState(null);

  if (!isOpen) return null;

  const prizes = [
    { text: "FREE ANIMAL FRIES", code: "FREEFRIES" },
    { text: "30% OFF COMBO BOX", code: "CRAVE30" },
    { text: "FREE OREO SHAKE", code: "FREESHAKE" },
    { text: "$5 OFF YOUR ORDER", code: "TASTE5" },
    { text: "FREE CRISPY WINGS", code: "WINGSDAY" }
  ];

  const handleSpin = () => {
    if (spinning || wonPrize) return;
    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const extraTurns = 5 * 360; // 5 full revolutions
    const segmentAngle = 360 / prizes.length;
    const targetAngle = extraTurns + (randomIndex * segmentAngle);

    setRotation(targetAngle);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(prizes[randomIndex]);
    }, 3500);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      background: 'rgba(0, 0, 0, 0.88)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div className="glass-card" style={{
        background: '#131722',
        border: '2px solid var(--gold-primary)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '480px',
        width: '100%',
        padding: '32px 24px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(230, 57, 70, 0.4)'
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--crimson-accent)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '900', marginBottom: '8px' }}>
          <Gift size={16} color="var(--gold-primary)" />
          <span>Exclusive Crave Wheel</span>
        </div>

        <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: '900', marginBottom: '8px' }}>
          Spin to Win Free Food!
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>
          Spin our wheel to unlock instant coupons, free milkshakes, or free loaded animal fries!
        </p>

        {wonPrize ? (
          <div style={{ padding: '20px 10px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(255, 183, 3, 0.2)',
              border: '2px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <Trophy size={36} color="var(--gold-primary)" />
            </div>

            <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '800', marginBottom: '6px' }}>
              YOU WON: {wonPrize.text}!
            </h4>
            <p style={{ color: 'var(--text-gold)', fontWeight: '800', fontSize: '1.1rem', marginBottom: '20px' }}>
              Coupon Code: {wonPrize.code}
            </p>

            <button
              onClick={() => {
                onClaimPrize(wonPrize);
                onClose();
              }}
              className="btn-crimson"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Sparkles size={18} />
              <span>Claim Prize & Apply Code</span>
            </button>
          </div>
        ) : (
          <div>
            {/* Visual Wheel Container */}
            <div style={{ position: 'relative', width: '240px', height: '240px', margin: '0 auto 24px' }}>
              {/* Pointer indicator */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '18px solid var(--crimson-accent)'
              }}></div>

              {/* Rotating Wheel Circle */}
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '4px solid var(--gold-primary)',
                background: 'conic-gradient(#e63946 0deg 72deg, #ffb703 72deg 144deg, #131722 144deg 216deg, #e63946 216deg 288deg, #ffb703 288deg 360deg)',
                transform: `rotate(${rotation}deg)`,
                transition: spinning ? 'transform 3.5s cubic-bezier(0.15, 0.9, 0.2, 1)' : 'none',
                boxShadow: '0 0 30px var(--gold-glow)'
              }}></div>
            </div>

            <button
              onClick={handleSpin}
              disabled={spinning}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <Flame size={18} />
              <span>{spinning ? 'SPINNING...' : 'SPIN THE WHEEL NOW'}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
