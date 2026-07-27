import React from 'react';
import InteractiveMenu from '../components/InteractiveMenu';

export default function MenuPage({ onAddToCart, onOpenAIChatWithQuery }) {
  return (
    <div className="page-fade-enter" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <InteractiveMenu onAddToCart={onAddToCart} onOpenAIChatWithQuery={onOpenAIChatWithQuery} />
    </div>
  );
}
