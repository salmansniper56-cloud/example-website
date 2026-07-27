import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationModal({ isOpen, onClose }) {
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState('2026-08-01');
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [seatingArea, setSeatingArea] = useState('Main Dining Hall');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const seatingOptions = [
    { title: 'Main Hall', desc: 'Live grand piano ambience', extra: 'Standard' },
    { title: 'Salt-Cave Vault', desc: 'Private cellar surrounded by rare vintages', extra: '$250 Min' },
    { title: 'Moonlight Terrace', desc: 'Manhattan skyline views', extra: 'Seasonal' },
    { title: "Chef's Tasting Bar", desc: 'Front-row seats to Chef Antoine', extra: 'Exclusive' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    const code = 'RES-' + Math.floor(10000 + Math.random() * 90000);
    setBookingCode(code);
    setIsSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.88)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div className="mobile-drawer-full" style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--gold-primary)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '620px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
        padding: '24px',
        WebkitOverflowScrolling: 'touch'
      }}>
        <button
          onClick={onClose}
          aria-label="Close Modal"
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

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '2px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={40} color="var(--gold-primary)" />
            </div>

            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', marginBottom: '6px' }}>
              Reservation Confirmed
            </h3>
            <p style={{ color: 'var(--text-gold)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '16px' }}>
              Booking Reference: {bookingCode}
            </p>

            <div style={{
              background: 'rgba(11, 13, 16, 0.8)',
              border: '1px solid var(--border-gold)',
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'left',
              marginBottom: '20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '10px',
              fontSize: '0.85rem'
            }}>
              <div><strong style={{ color: 'var(--text-muted)' }}>Name:</strong> <br />{guestName}</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Guests:</strong> <br />{guestCount} Guests</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Date/Time:</strong> <br />{date} at {timeSlot}</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Seating:</strong> <br />{seatingArea}</div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="btn-gold"
              style={{ width: '100%', padding: '12px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-primary)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                <Sparkles size={12} />
                <span>Michelin Fine Dining</span>
              </div>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.7rem', fontWeight: '700' }}>
                Table Reservation
              </h3>
            </div>

            {/* Guest Count & Date */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <Users size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(11, 13, 16, 0.88)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  {[1,2,3,4,5,6,7,8,9,10,12].map(n => (
                    <option key={n} value={n} style={{ background: '#000' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>
                  <Calendar size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(11, 13, 16, 0.88)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>
            </div>

            {/* Time Slot Picker */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                <Clock size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Time Slot
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '6px' }}>
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '6px',
                      background: timeSlot === slot ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
                      color: timeSlot === slot ? '#000' : '#fff',
                      fontWeight: timeSlot === slot ? '700' : '400',
                      border: '1px solid ' + (timeSlot === slot ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                      cursor: 'pointer',
                      fontSize: '0.8rem'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating Choice Grid */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '6px' }}>
                <MapPin size={13} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Seating Experience
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                {seatingOptions.map((opt) => (
                  <div
                    key={opt.title}
                    onClick={() => setSeatingArea(opt.title)}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      background: seatingArea === opt.title ? 'rgba(212, 175, 55, 0.15)' : 'rgba(11, 13, 16, 0.6)',
                      border: '1px solid ' + (seatingArea === opt.title ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.82rem' }}>{opt.title}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gold-primary)', marginTop: '2px' }}>{opt.extra}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(11, 13, 16, 0.88)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.88rem'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px' }}>Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(11, 13, 16, 0.88)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.88rem'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}>
              Confirm Table Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
