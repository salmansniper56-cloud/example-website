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
    <section id="contact" style={{ padding: '80px 4%', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px'
      }}>
        {/* Left Column */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-primary)', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
            <Sparkles size={14} />
            <span>Visit L'Étoile D'Or</span>
          </div>

          <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: '700', marginBottom: '20px' }}>
            Location & Hours
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <MapPin size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '0.92rem', display: 'block' }}>Address</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{RESTAURANT_INFO.address}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Phone size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '0.92rem', display: 'block' }}>Reservations & Concierge</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{RESTAURANT_INFO.phone}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Mail size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '0.92rem', display: 'block' }}>Email Enquiries</strong>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{RESTAURANT_INFO.email}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <Clock size={20} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#fff', fontSize: '0.92rem', display: 'block' }}>Operating Hours</strong>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '2px', lineHeight: 1.5 }}>
                  <div>• {RESTAURANT_INFO.hours.dinner}</div>
                  <div>• {RESTAURANT_INFO.hours.lunch}</div>
                  <div>• {RESTAURANT_INFO.hours.bar}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map visual card */}
          <div style={{
            height: '160px',
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
            gap: '8px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <MapPin size={28} color="var(--gold-primary)" />
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.88rem' }}>Upper East Side, Manhattan</span>
            <button onClick={onOpenReserve} className="btn-gold" style={{ padding: '6px 14px', fontSize: '0.78rem' }}>
              Directions & Reserve
            </button>
          </div>
        </div>

        {/* Right Column: FAQs & Direct Inquiry */}
        <div>
          <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
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
                    padding: '14px',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? <ChevronUp size={16} color="var(--gold-primary)" /> : <ChevronDown size={16} />}
                </button>

                {openFaqIndex === index && (
                  <div style={{ padding: '0 14px 14px', color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct Message Form */}
          <div className="glass-card" style={{ padding: '20px' }}>
            <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '12px' }}>Send Direct Message</h4>
            
            {submitted ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2eb872', fontWeight: '600', fontSize: '0.85rem' }}>
                <CheckCircle2 size={18} />
                <span>Message sent to concierge desk!</span>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      padding: '10px',
                      background: 'rgba(11, 13, 16, 0.88)',
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
                      background: 'rgba(11, 13, 16, 0.88)',
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
                    background: 'rgba(11, 13, 16, 0.88)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.85rem'
                  }}
                />

                <button type="submit" className="btn-gold" style={{ padding: '10px 18px', fontSize: '0.82rem', alignSelf: 'flex-start' }}>
                  <Send size={13} />
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
