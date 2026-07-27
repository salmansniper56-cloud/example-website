import React, { useState } from 'react';
import { Flame, CheckCircle2, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';

export default function ComboBuilderPage({ onAddToCart }) {
  const [selectedMain, setSelectedMain] = useState('Monster Double Smash Burger');
  const [selectedSide, setSelectedSide] = useState('Loaded Animal Fries');
  const [selectedDrink, setSelectedDrink] = useState('Salted Caramel Oreo Shake');
  const [extraCheese, setExtraCheese] = useState(true);
  const [added, setAdded] = useState(false);

  const mains = [
    { title: 'Monster Double Smash Burger', price: 12.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
    { title: 'Nashville Spicy Crispy Chicken Burger', price: 11.49, image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=400&q=80' },
    { title: 'Supreme Pepperoni Pizza (Personal)', price: 13.99, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=400&q=80' }
  ];

  const sides = [
    { title: 'Loaded Animal Fries', price: 4.99, image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80' },
    { title: 'Golden Crispy Wings (4 Pcs)', price: 5.99, image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=400&q=80' },
    { title: 'Cheesy Garlic Sticks', price: 4.49, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' }
  ];

  const drinks = [
    { title: 'Salted Caramel Oreo Shake', price: 4.49, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { title: 'Double Chocolate Fudge Shake', price: 4.49, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80' },
    { title: 'Iced Crave Cola', price: 2.49, image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80' }
  ];

  const mainItem = mains.find(m => m.title === selectedMain);
  const sideItem = sides.find(s => s.title === selectedSide);
  const drinkItem = drinks.find(d => d.title === selectedDrink);

  const rawTotal = (mainItem?.price || 0) + (sideItem?.price || 0) + (drinkItem?.price || 0) + (extraCheese ? 1.50 : 0);
  const comboPrice = rawTotal * 0.82; // 18% combo discount!

  const handleAddCombo = () => {
    const comboDish = {
      id: 'combo-' + Date.now(),
      name: `Custom Crave Box (${selectedMain})`,
      price: Number(comboPrice.toFixed(2)),
      image: mainItem.image,
      description: `Includes ${selectedMain}, ${selectedSide}, and ${selectedDrink}${extraCheese ? ' with Extra Melted Cheese' : ''}.`
    };
    onAddToCart(comboDish);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="page-fade-enter" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 4%' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: '800' }}>
            <Sparkles size={16} />
            <span>Interactive Combo Creator</span>
          </div>
          <h1 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: '900' }}>
            Build Your Own Custom Crave Box
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '10px auto 0' }}>
            Mix & match your favorite burger, pizza, loaded side, and thick shake. Save 18% automatically on all Crave Boxes!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'flex-start' }}>
          {/* Left Column: Interactive Options Picker */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Step 1: Main */}
            <div>
              <h3 style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '800' }}>
                1. Select Main Crave Item
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {mains.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => setSelectedMain(item.title)}
                    className="glass-card"
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      border: '2px solid ' + (selectedMain === item.title ? 'var(--crimson-accent)' : 'var(--border-subtle)'),
                      background: selectedMain === item.title ? 'rgba(230, 57, 70, 0.15)' : 'rgba(22, 26, 36, 0.6)'
                    }}
                  >
                    <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: '#fff', fontSize: '0.92rem', fontWeight: '700' }}>{item.title}</h4>
                      <span style={{ color: 'var(--gold-light)', fontSize: '0.82rem', fontWeight: '800' }}>${item.price}</span>
                    </div>
                    {selectedMain === item.title && <CheckCircle2 size={20} color="var(--crimson-accent)" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Side */}
            <div>
              <h3 style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '800' }}>
                2. Select Loaded Side
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {sides.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => setSelectedSide(item.title)}
                    className="glass-card"
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      border: '2px solid ' + (selectedSide === item.title ? 'var(--crimson-accent)' : 'var(--border-subtle)'),
                      background: selectedSide === item.title ? 'rgba(230, 57, 70, 0.15)' : 'rgba(22, 26, 36, 0.6)'
                    }}
                  >
                    <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: '#fff', fontSize: '0.92rem', fontWeight: '700' }}>{item.title}</h4>
                      <span style={{ color: 'var(--gold-light)', fontSize: '0.82rem', fontWeight: '800' }}>${item.price}</span>
                    </div>
                    {selectedSide === item.title && <CheckCircle2 size={20} color="var(--crimson-accent)" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Drink */}
            <div>
              <h3 style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '800' }}>
                3. Select Shake / Drink
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {drinks.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => setSelectedDrink(item.title)}
                    className="glass-card"
                    style={{
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      border: '2px solid ' + (selectedDrink === item.title ? 'var(--crimson-accent)' : 'var(--border-subtle)'),
                      background: selectedDrink === item.title ? 'rgba(230, 57, 70, 0.15)' : 'rgba(22, 26, 36, 0.6)'
                    }}
                  >
                    <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: '#fff', fontSize: '0.92rem', fontWeight: '700' }}>{item.title}</h4>
                      <span style={{ color: 'var(--gold-light)', fontSize: '0.82rem', fontWeight: '800' }}>${item.price}</span>
                    </div>
                    {selectedDrink === item.title && <CheckCircle2 size={20} color="var(--crimson-accent)" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Mockup Card Summary */}
          <div className="glass-card" style={{ padding: '24px', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px', border: '2px solid var(--gold-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ background: 'var(--crimson-accent)', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '800' }}>
                18% COMBO SAVINGS
              </span>
              <span style={{ color: 'var(--gold-primary)', fontSize: '0.8rem', fontWeight: '700' }}>
                CUSTOM CRAVE BOX
              </span>
            </div>

            {/* Mockup Preview Image */}
            <div style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '18px', position: 'relative' }}>
              <img src={mainItem?.image} alt="Main mockup" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '12px' }}>
              Your Custom Crave Box
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <div>• <strong>Main:</strong> {selectedMain}</div>
              <div>• <strong>Side:</strong> {selectedSide}</div>
              <div>• <strong>Drink:</strong> {selectedDrink}</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'line-through', display: 'block' }}>
                  Regular ${rawTotal.toFixed(2)}
                </span>
                <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--gold-light)' }}>
                  ${comboPrice.toFixed(2)}
                </span>
              </div>
              <span style={{ background: 'rgba(255, 183, 3, 0.15)', color: 'var(--gold-primary)', padding: '4px 10px', borderRadius: '10px', fontSize: '0.78rem', fontWeight: '700' }}>
                Combo Deal
              </span>
            </div>

            <button
              onClick={handleAddCombo}
              className="btn-crimson"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              {added ? <CheckCircle2 size={18} /> : <ShoppingBag size={18} />}
              <span>{added ? 'Added To Order!' : 'Add Crave Box To Order'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
