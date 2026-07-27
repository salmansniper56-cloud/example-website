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
  const [specialNote, setSpecialNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const seatingOptions = [
    { title: 'Main Dining Hall', desc: 'Crystal chandeliers & live grand piano ambience', extra: 'No Min' },
    { title: 'The Salt-Cave Vault', desc: 'Exclusive private cellar dining surrounded by rare vintages', extra: '$250 Min' },
    { title: 'Moonlight Terrace', desc: 'Rooftop dining with breathtaking Manhattan skyline views', extra: 'Seasonal' },
    { title: "Chef's Tasting Bar", desc: 'Front-row seats to Chef Antoine plating molecular creations', extra: 'Exclusive' }
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
      background: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(14px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'var(--bg-secondary)',
        border: '1px solid var(--gold-primary)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '680px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.9)',
        padding: '32px'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer'
          }}
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '2px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={46} color="var(--gold-primary)" />
            </div>

            <h3 className="font-serif text-gold-gradient" style={{ fontSize: '2rem', marginBottom: '8px' }}>
              Reservation Confirmed
            </h3>
            <p style={{ color: 'var(--text-gold)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px' }}>
              Booking Reference: {bookingCode}
            </p>

            <div style={{
              background: 'rgba(11, 13, 16, 0.8)',
              border: '1px solid var(--border-gold)',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'left',
              marginBottom: '24px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              fontSize: '0.9rem'
            }}>
              <div><strong style={{ color: 'var(--text-muted)' }}>Guest Name:</strong> <br />{guestName}</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Party Size:</strong> <br />{guestCount} Guests</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Date & Time:</strong> <br />{date} at {timeSlot}</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Seating Area:</strong> <br />{seatingArea}</div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px' }}>
              A confirmation text message and calendar invitation have been dispatched to {guestPhone}.
            </p>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="btn-gold"
              style={{ padding: '12px 32px' }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--gold-primary)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>
                <Sparkles size={14} />
                <span>Michelin Fine Dining</span>
              </div>
              <h3 className="font-serif text-gold-gradient" style={{ fontSize: '2rem', fontWeight: '700' }}>
                Table Reservation
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {RESTAURANT_INFO.name} • {RESTAURANT_INFO.address}
              </p>
            </div>

            {/* Guest Count & Date */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <Users size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Number of Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                >
                  {[1,2,3,4,5,6,7,8,9,10,12].map(n => (
                    <option key={n} value={n} style={{ background: '#000' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>
                  <Calendar size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Reservation Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Time Slot Picker */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>
                <Clock size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Select Evening Time Slot
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    style={{
                      padding: '8px 4px',
                      borderRadius: '8px',
                      background: timeSlot === slot ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
                      color: timeSlot === slot ? '#000' : '#fff',
                      fontWeight: timeSlot === slot ? '700' : '400',
                      border: '1px solid ' + (timeSlot === slot ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                      cursor: 'pointer',
                      fontSize: '0.85rem'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating Location Picker */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '8px' }}>
                <MapPin size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} /> Seating Experience
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {seatingOptions.map((opt) => (
                  <div
                    key={opt.title}
                    onClick={() => setSeatingArea(opt.title)}
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      background: seatingArea === opt.title ? 'rgba(212, 175, 55, 0.15)' : 'rgba(11, 13, 16, 0.6)',
                      border: '1px solid ' + (seatingArea === opt.title ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: '600', fontSize: '0.88rem' }}>
                      <span>{opt.title}</span>
                      <span style={{ fontSize: '0.7rem', color: 'var(--gold-primary)' }}>{opt.extra}</span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {opt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Lord / Lady / Mr. John Doe"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '6px' }}>Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
              Confirm Table Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
