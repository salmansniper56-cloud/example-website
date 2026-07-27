import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Utensils } from 'lucide-react';

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
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div className="mobile-drawer-full" style={{
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        background: 'var(--bg-secondary)',
        borderLeft: '1px solid var(--gold-primary)',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-10px 0 40px rgba(0,0,0,0.9)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          padding: '18px 20px',
          borderBottom: '1px solid var(--border-gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(11, 13, 16, 0.95)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--gold-primary)" />
            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.25rem', fontWeight: '700' }}>
              Your Gourmet Order
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flex: '1', overflowY: 'auto', padding: '20px', WebkitOverflowScrolling: 'touch' }}>
          {checkoutComplete ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                background: 'rgba(46, 184, 114, 0.15)',
                border: '2px solid #2eb872',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle2 size={36} color="#2eb872" />
              </div>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem', marginBottom: '6px' }}>
                Order Confirmed!
              </h3>
              <p style={{ color: 'var(--text-gold)', fontWeight: '700', fontSize: '1rem', marginBottom: '14px' }}>
                Reference ID: {orderId}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px', lineHeight: 1.5 }}>
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
                Return to Menu
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px 10px' }}>
              <Utensils size={42} color="var(--gold-primary)" style={{ opacity: 0.4, marginBottom: '14px' }} />
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                Your order is currently empty.
              </p>
              <button onClick={onClose} className="btn-outline-gold">
                Browse Gourmet Menu
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Order Items */}
              {cart.map((item) => (
                <div key={item.id} style={{
                  display: 'flex',
                  gap: '12px',
                  background: 'rgba(11, 13, 16, 0.7)',
                  padding: '10px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  alignItems: 'center'
                }}>
                  <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
                  
                  <div style={{ flex: '1', minWidth: 0 }}>
                    <h4 style={{ color: '#fff', fontSize: '0.88rem', fontWeight: '600', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.name}
                    </h4>
                    <div style={{ color: 'var(--gold-primary)', fontWeight: '700', fontSize: '0.85rem' }}>
                      ${item.price}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '14px' }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '0.82rem', fontWeight: '700', minWidth: '14px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}

              {/* Service Type Selection */}
              <div style={{ marginTop: '6px' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Select Service Type:
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    { id: 'dine-in', label: 'Dine-In Pre-Order' },
                    { id: 'takeaway', label: 'VIP Takeaway' }
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
                        fontSize: '0.78rem',
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
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                  Special Requests or Allergies:
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. No dairy on carpaccio..."
                  style={{
                    width: '100%',
                    background: 'rgba(11, 13, 16, 0.88)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    padding: '8px 10px',
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
            padding: '18px 20px',
            borderTop: '1px solid var(--border-gold)',
            background: 'rgba(11, 13, 16, 0.98)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>NY State Tax (8.875%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Sommelier Service (10%)</span>
                <span>${serviceFee.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '1.1rem', fontWeight: '800', paddingTop: '6px', borderTop: '1px solid var(--border-subtle)' }}>
                <span>Total Amount</span>
                <span className="text-gold-gradient">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-gold"
              style={{ width: '100%', padding: '12px', fontSize: '0.95rem' }}
            >
              <span>Confirm Order</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
