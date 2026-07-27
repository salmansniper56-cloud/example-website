import React from 'react';
import GallerySection from '../components/GallerySection';

export default function GalleryPage() {
  return (
    <div className="page-fade-enter" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <GallerySection />
    </div>
  );
}
