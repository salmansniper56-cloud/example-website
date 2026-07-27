import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantData';

export default function ContactSection({ onOpenReserve }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '100px 4%', maxWidth: '1300px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '50px' }}>
        {/* Left Column: Location & Hours */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            <Sparkles size={16} />
            <span>Visit L'Étoile D'Or</span>
          </div>

          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: '700', marginBottom: '24px' }}>
            Location & Hours
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              <MapPin size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '1rem', display: 'block' }}>Address</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{RESTAURANT_INFO.address}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <Phone size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '1rem', display: 'block' }}>Reservations & Concierge</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{RESTAURANT_INFO.phone}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <Mail size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '1rem', display: 'block' }}>Email Enquiries</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{RESTAURANT_INFO.email}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <Clock size={22} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '1rem', display: 'block' }}>Operating Hours</strong>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '4px', lineHeight: 1.6 }}>
                  <div>• {RESTAURANT_INFO.hours.dinner}</div>
                  <div>• {RESTAURANT_INFO.hours.lunch}</div>
                  <div>• {RESTAURANT_INFO.hours.bar}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Placeholder */}
          <div style={{
            height: '180px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--border-gold)',
            backgroundImage: `linear-gradient(rgba(11, 13, 16, 0.4), rgba(11, 13, 16, 0.7)), url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <MapPin size={32} color="var(--gold-primary)" />
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem' }}>Upper East Side, Manhattan</span>
            <button onClick={onOpenReserve} className="btn-gold" style={{ padding: '6px 16px', fontSize: '0.8rem' }}>
              Directions & Reserve
            </button>
          </div>
        </div>

        {/* Right Column: FAQs Accordion & Direct Inquiry Form */}
        <div>
          <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px' }}>
            Frequently Asked Questions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
            {FAQS.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(18, 22, 31, 0.6)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp size={18} color="var(--gold-primary)" /> : <ChevronDown size={18} />}
                </button>

                {openFaqIndex === index && (
                  <div style={{ padding: '0 16px 16px', color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Direct Message */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '14px' }}>Send Direct Message</h4>
            
            {submitted ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2eb872', fontWeight: '600' }}>
                <CheckCircle2 size={20} />
                <span>Thank you! Your message has been sent to our concierge desk.</span>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      padding: '10px',
                      background: 'rgba(11, 13, 16, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.85rem'
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      padding: '10px',
                      background: 'rgba(11, 13, 16, 0.8)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: '#fff',
                      outline: 'none',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <textarea
                  rows={3}
                  required
                  placeholder="Inquire about private dining events, buyout, or chef inquiries..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  style={{
                    padding: '10px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.85rem'
                  }}
                />

                <button type="submit" className="btn-gold" style={{ padding: '10px 20px', alignSelf: 'flex-start', fontSize: '0.85rem' }}>
                  <Send size={14} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
