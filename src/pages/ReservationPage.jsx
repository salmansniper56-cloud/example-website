import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function ReservationPage() {
  const [guestCount, setGuestCount] = useState(2);
  const [date, setDate] = useState('2026-08-01');
  const [timeSlot, setTimeSlot] = useState('19:30');
  const [seatingArea, setSeatingArea] = useState('Main Dining Hall');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialNote, setSpecialNote] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const seatingOptions = [
    { title: 'Main Dining Hall', desc: 'Crystal chandeliers & live grand piano ambience', extra: 'Standard' },
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
    <div className="page-fade-enter" style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 4%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold-primary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '12px' }}>
            <Sparkles size={16} />
            <span>Table Reservations</span>
          </div>
          <h1 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: '800' }}>
            Reserve Your Culinary Evening
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '12px auto 0' }}>
            {RESTAURANT_INFO.name} • {RESTAURANT_INFO.address}
          </p>
        </div>

        {isSubmitted ? (
          <div className="glass-card" style={{ padding: '50px 30px', textAlign: 'center' }}>
            <div style={{
              width: '85px',
              height: '85px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '2px solid var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle2 size={50} color="var(--gold-primary)" />
            </div>

            <h2 className="font-serif text-gold-gradient" style={{ fontSize: '2.2rem', marginBottom: '8px' }}>
              Reservation Confirmed
            </h2>
            <p style={{ color: 'var(--text-gold)', fontSize: '1.3rem', fontWeight: '700', marginBottom: '24px' }}>
              Booking Reference: {bookingCode}
            </p>

            <div style={{
              background: 'rgba(11, 13, 16, 0.8)',
              border: '1px solid var(--border-gold)',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              textAlign: 'left',
              marginBottom: '30px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              fontSize: '0.95rem'
            }}>
              <div><strong style={{ color: 'var(--text-muted)' }}>Guest Name:</strong> <br />{guestName}</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Party Size:</strong> <br />{guestCount} Guests</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Date & Time:</strong> <br />{date} at {timeSlot}</div>
              <div><strong style={{ color: 'var(--text-muted)' }}>Seating Experience:</strong> <br />{seatingArea}</div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '30px' }}>
              A confirmation invitation has been sent to {guestPhone}. We look forward to welcoming you to L'Étoile D'Or.
            </p>

            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-gold"
              style={{ padding: '12px 36px' }}
            >
              Make Another Reservation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '40px' }}>
            {/* Guest Count & Date */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '24px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '8px' }}>
                  <Users size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Number of Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '10px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                >
                  {[1,2,3,4,5,6,7,8,9,10,12].map(n => (
                    <option key={n} value={n} style={{ background: '#000' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '8px' }}>
                  <Calendar size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Reservation Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '10px',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              </div>
            </div>

            {/* Time Slot Picker */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '10px' }}>
                <Clock size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Select Evening Time Slot
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '10px' }}>
                {timeSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setTimeSlot(slot)}
                    style={{
                      padding: '10px 6px',
                      borderRadius: '8px',
                      background: timeSlot === slot ? 'var(--gold-primary)' : 'rgba(255,255,255,0.05)',
                      color: timeSlot === slot ? '#000' : '#fff',
                      fontWeight: timeSlot === slot ? '700' : '400',
                      border: '1px solid ' + (timeSlot === slot ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating Choice Grid */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '10px' }}>
                <MapPin size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} /> Select Seating Environment
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                {seatingOptions.map((opt) => (
                  <div
                    key={opt.title}
                    onClick={() => setSeatingArea(opt.title)}
                    style={{
                      padding: '16px',
                      borderRadius: '10px',
                      background: seatingArea === opt.title ? 'rgba(212, 175, 55, 0.15)' : 'rgba(11, 13, 16, 0.6)',
                      border: '1px solid ' + (seatingArea === opt.title ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>
                      <span>{opt.title}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--gold-primary)', fontWeight: '700' }}>{opt.extra}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px', lineHeight: 1.4 }}>
                      {opt.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guest Information */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '28px' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '6px' }}>Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Lord / Lady / Mr. John Doe"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '6px' }}>Mobile Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(11, 13, 16, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '8px',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn-gold" style={{ width: '100%', padding: '16px', fontSize: '1.05rem' }}>
              Confirm Table Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
