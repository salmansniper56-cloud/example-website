import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeItem, clearCart }) {
  const [diningType, setDiningType] = useState('dine-in');
  const [notes, setNotes] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08875;
  const serviceFee = subtotal > 0 ? subtotal * 0.10 : 0;
  const total = subtotal + tax + serviceFee;

  const handleCheckout = (e) => {
    e.preventDefault();
    const generatedId = 'ETOILE-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setCheckoutComplete(true);
    clearCart();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        height: '100%',
        background: 'var(--bg-secondary)',
        borderLeft: '1px solid var(--gold-primary)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.8)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--border-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(11, 13, 16, 0.9)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} color="var(--gold-primary)" />
            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.4rem', fontWeight: '700' }}>
              Your Gourmet Order
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flex: '1', overflowY: 'auto', padding: '24px' }}>
          {checkoutComplete ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(46, 184, 114, 0.15)',
                border: '2px solid #2eb872',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <CheckCircle2 size={40} color="#2eb872" />
              </div>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', marginBottom: '8px' }}>
                Order Confirmed!
              </h3>
              <p style={{ color: 'var(--text-gold)', fontWeight: '700', fontSize: '1.1rem', marginBottom: '16px' }}>
                Reference ID: {orderId}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Chef Antoine and our team have received your order. We are preparing your selection with utmost Michelin precision.
              </p>
              <button
                onClick={() => {
                  setCheckoutComplete(false);
                  onClose();
                }}
                className="btn-gold"
                style={{ width: '100%' }}
              >
                Return to Experience
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 10px' }}>
              <Utensils size={48} color="var(--gold-primary)" style={{ opacity: 0.5, marginBottom: '16px' }} />
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Your order is currently empty.
              </p>
              <button onClick={onClose} className="btn-outline-gold">
                Browse Menu
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Order Items */}
              {cart.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '14px',
                  background: 'rgba(11, 13, 16, 0.6)',
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  alignItems: 'center'
                }}>
                  <img src={item.image} alt={item.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '8px' }} />
                  
                  <div style={{ flex: '1' }}>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', fontWeight: '600', marginBottom: '4px' }}>
                      {item.name}
                    </h4>
                    <div style={{ color: 'var(--gold-primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                      ${item.price} each
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '16px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', minWidth: '16px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              {/* Service Type Selection */}
              <div style={{ marginTop: '10px' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Select Order Service Type:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    { id: 'dine-in', label: 'Dine-In Pre-Order' },
                    { id: 'takeaway', label: 'VIP Concierge Takeaway' }
                  ].map(t => (
                    <button
                      key={t.id}
                      onClick={() => setDiningType(t.id)}
                      style={{
                        padding: '8px',
                        borderRadius: '8px',
                        background: diningType === t.id ? 'rgba(212, 175, 55, 0.15)' : 'rgba(255,255,255,0.03)',
                        border: '1px solid ' + (diningType === t.id ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                        color: diningType === t.id ? 'var(--gold-primary)' : 'var(--text-muted)',
                        fontSize: '0.8rem',
                        cursor: 'pointer'
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  Special Culinary Request or Allergies:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. No dairy on carpaccio, extra truffle shavings..."
                  style={{
                    width: '100%',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '8px 12px',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {!checkoutComplete && cart.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--border-gold)',
            background: 'rgba(11, 13, 16, 0.95)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>NY State Tax (8.875%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Sommelier & Service (10%)</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.2rem', fontWeight: '800', paddingTop: '8px', borderTop: '1px solid var(--border-subtle)' }}>
                <span>Total Amount</span>
                <span className="text-gold-gradient">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-gold"
              style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
            >
              <span>Confirm Gourmet Order</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
