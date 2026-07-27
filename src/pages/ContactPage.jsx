import React from 'react';
import ContactSection from '../components/ContactSection';

export default function ContactPage({ onOpenReserve }) {
  return (
    <div className="page-fade-enter" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <ContactSection onOpenReserve={onOpenReserve} />
    </div>
  );
}
