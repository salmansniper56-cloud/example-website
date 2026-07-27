import React, { useState } from 'react';
import { Search, Star, Clock, Plus, Check, X, Sparkles, Flame } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function InteractiveMenu({ onAddToCart, onOpenAIChatWithQuery }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [selectedDish, setSelectedDish] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState({});

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesDietary = true;
    if (dietaryFilter === 'gluten-free') {
      matchesDietary = item.dietary.some(d => d.toLowerCase().includes('gluten'));
    } else if (dietaryFilter === 'vegetarian') {
      matchesDietary = item.dietary.some(d => d.toLowerCase().includes('vegan') || d.toLowerCase().includes('vegetarian'));
    } else if (dietaryFilter === 'chef-special') {
      matchesDietary = item.dietary.includes('Bestseller') || item.dietary.includes('Chef Recommendation');
    }

    return matchesCategory && matchesSearch && matchesDietary;
  });

  const handleAddToCart = (item, e) => {
    if (e) e.stopPropagation();
    onAddToCart(item);
    setAddedItemIds(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" style={{ padding: '80px 4% 100px', maxWidth: '1280px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--brand-yellow)',
          fontSize: '0.78rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: '800',
          marginBottom: '8px'
        }}>
          <Flame size={15} color="var(--brand-red)" />
          <span>OUR CRAVE MENU</span>
        </div>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontWeight: '900', color: '#fff' }}>
          Freshly Grilled & Handcrafted
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '10px auto 0', fontSize: '0.95rem' }}>
          Explore our signature 100% Angus smash burgers, 11-spice crispy chicken, and stuffed crust pizzas.
        </p>
      </div>

      {/* Filter Row: Search & Diets */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex',
          gap: '14px',
          flexDirection: 'column',
          marginBottom: '20px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          padding: '16px',
          borderRadius: 'var(--radius-md)'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} color="var(--brand-yellow)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search burgers, pizzas, chicken, or fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div style={{
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            paddingBottom: '4px',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none'
          }}>
            {[
              { id: 'all', label: 'All Options' },
              { id: 'chef-special', label: 'Bestsellers' },
              { id: 'gluten-free', label: 'Gluten-Free' },
              { id: 'vegetarian', label: 'Vegetarian' }
            ].map((diet) => (
              <button
                key={diet.id}
                onClick={() => setDietaryFilter(diet.id)}
                style={{
                  whiteSpace: 'nowrap',
                  background: dietaryFilter === diet.id ? 'var(--brand-red)' : 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  fontWeight: dietaryFilter === diet.id ? '800' : '500',
                  border: '1px solid ' + (dietaryFilter === diet.id ? 'var(--brand-red)' : 'var(--border-subtle)'),
                  padding: '7px 16px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.8rem'
                }}
              >
                {diet.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '8px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none'
        }}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? 'var(--brand-yellow)' : 'var(--bg-card)',
                color: activeCategory === cat.id ? '#121418' : '#ffffff',
                fontWeight: activeCategory === cat.id ? '800' : '600',
                border: '1px solid ' + (activeCategory === cat.id ? 'var(--brand-yellow)' : 'var(--border-subtle)'),
                padding: '10px 22px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Food Cards Grid */}
      {filteredItems.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-subtle)'
        }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            No items match "{searchQuery}".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); setDietaryFilter('all'); }}
            className="btn-outline-clean"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card-clean"
              onClick={() => setSelectedDish(item)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {/* Product Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#121418' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Price Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(18, 20, 24, 0.9)',
                  border: '1px solid var(--brand-yellow)',
                  color: 'var(--brand-yellow)',
                  fontWeight: '800',
                  fontSize: '1.05rem',
                  padding: '5px 14px',
                  borderRadius: '20px'
                }}>
                  ${item.price}
                </div>

                {/* Tags Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  display: 'flex',
                  gap: '6px',
                  flexWrap: 'wrap'
                }}>
                  {item.dietary.map((tag, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(18, 20, 24, 0.85)',
                      color: '#ffffff',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.68rem',
                      fontWeight: '700',
                      padding: '4px 8px',
                      borderRadius: '8px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '20px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '800', color: '#fff' }}>
                      {item.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--brand-yellow)', fontSize: '0.82rem', flexShrink: 0 }}>
                      <Star size={14} fill="var(--brand-yellow)" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    marginBottom: '16px',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Card Action */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <Clock size={13} /> {item.prepTime}
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    style={{
                      background: addedItemIds[item.id] ? '#2eb872' : 'var(--brand-red)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '20px',
                      fontWeight: '800',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {addedItemIds[item.id] ? <Check size={15} /> : <Plus size={15} />}
                    <span>{addedItemIds[item.id] ? 'Added!' : 'Add to Order'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div
          onClick={() => setSelectedDish(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#181b20',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '620px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
              color: '#ffffff'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                background: 'rgba(0,0,0,0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>

            {/* Banner Image */}
            <div style={{ position: 'relative', height: '260px', width: '100%', background: '#121418' }}>
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '12px' }}>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', fontWeight: '900', color: '#fff', margin: 0 }}>
                  {selectedDish.name}
                </h3>
                <div style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--brand-yellow)', flexShrink: 0 }}>
                  ${selectedDish.price}
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                {selectedDish.description}
              </p>

              {/* Attributes Box */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginBottom: '20px',
                background: 'var(--bg-primary)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center'
              }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Caloric Count</span>
                  <strong style={{ fontSize: '0.85rem', color: '#fff' }}>{selectedDish.calories}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Prep Time</span>
                  <strong style={{ fontSize: '0.85rem', color: '#fff' }}>{selectedDish.prepTime}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Rating</span>
                  <strong style={{ fontSize: '0.85rem', color: 'var(--brand-yellow)' }}>★ {selectedDish.rating}</strong>
                </div>
              </div>

              {/* Ingredients */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '8px' }}>Fresh Ingredients</h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {selectedDish.ingredients.map((ing, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-muted)',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      fontSize: '0.78rem'
                    }}>
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => {
                    handleAddToCart(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="btn-red"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  <Plus size={18} />
                  <span>Add To Order - ${selectedDish.price}</span>
                </button>

                <button
                  onClick={() => {
                    const query = `What side dish or drink goes best with ${selectedDish.name}?`;
                    setSelectedDish(null);
                    onOpenAIChatWithQuery(query);
                  }}
                  className="btn-outline-clean"
                  style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                >
                  <Sparkles size={16} color="var(--brand-yellow)" />
                  <span>Ask AI Assistant</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
