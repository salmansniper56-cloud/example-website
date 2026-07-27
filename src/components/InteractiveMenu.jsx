import React, { useState } from 'react';
import { Search, Star, Clock, Wine, Plus, Check, Filter, X, Sparkles } from 'lucide-react';
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
      matchesDietary = item.dietary.includes('Chef Special');
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
    <section id="menu" style={{ padding: '80px 4% 100px', maxWidth: '1300px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--gold-primary)',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: '600',
          marginBottom: '8px'
        }}>
          <Sparkles size={15} />
          <span>Haute Culinary Selection</span>
        </div>
        <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700' }}>
          Interactive Gourmet Menu
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '10px auto 0', fontSize: '0.95rem' }}>
          Handcrafted daily by Chef Antoine using rare seasonal imports and black Périgord truffles.
        </p>
      </div>

      {/* Filter Controls Row: Search + Diets */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{
          display: 'flex',
          gap: '14px',
          flexDirection: 'column',
          marginBottom: '20px',
          background: 'rgba(18, 22, 31, 0.8)',
          border: '1px solid var(--border-gold)',
          padding: '16px',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(12px)'
        }}>
          {/* Search Input Bar */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} color="var(--gold-primary)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search dishes or ingredients (e.g. Wagyu, Truffle)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                background: 'rgba(11, 13, 16, 0.92)',
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
              { id: 'all', label: 'All Diets' },
              { id: 'chef-special', label: 'Chef Specials' },
              { id: 'gluten-free', label: 'Gluten-Free' },
              { id: 'vegetarian', label: 'Vegetarian' }
            ].map((diet) => (
              <button
                key={diet.id}
                onClick={() => setDietaryFilter(diet.id)}
                style={{
                  whiteSpace: 'nowrap',
                  background: dietaryFilter === diet.id ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: dietaryFilter === diet.id ? '#000' : 'var(--text-main)',
                  fontWeight: dietaryFilter === diet.id ? '700' : '500',
                  border: '1px solid ' + (dietaryFilter === diet.id ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                  padding: '7px 14px',
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
              data-cursor="SELECT"
              style={{
                background: activeCategory === cat.id ? 'linear-gradient(135deg, #f5d77f, #d4af37)' : 'rgba(18, 22, 31, 0.85)',
                color: activeCategory === cat.id ? '#0b0d10' : 'var(--text-main)',
                fontWeight: activeCategory === cat.id ? '700' : '500',
                border: '1px solid ' + (activeCategory === cat.id ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                padding: '10px 20px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                boxShadow: activeCategory === cat.id ? '0 4px 15px var(--gold-glow)' : 'none'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Item Grid */}
      {filteredItems.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '50px 20px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-gold)'
        }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            No culinary dishes match "{searchQuery}".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); setDietaryFilter('all'); }}
            className="btn-outline-gold"
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
              className="glass-card"
              onClick={() => setSelectedDish(item)}
              data-cursor="VIEW DISH"
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#12161f' }}>
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
                  background: 'rgba(11, 13, 16, 0.92)',
                  border: '1px solid var(--gold-primary)',
                  color: 'var(--gold-light)',
                  fontWeight: '800',
                  fontSize: '1.05rem',
                  padding: '6px 14px',
                  borderRadius: '20px'
                }}>
                  ${item.price}
                </div>

                {/* Dietary Badges */}
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
                      background: 'rgba(11, 13, 16, 0.85)',
                      color: 'var(--gold-primary)',
                      border: '1px solid var(--border-gold)',
                      fontSize: '0.68rem',
                      fontWeight: '600',
                      padding: '4px 8px',
                      borderRadius: '10px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content Body */}
              <div style={{ padding: '20px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff' }}>
                      {item.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-primary)', fontSize: '0.82rem', flexShrink: 0 }}>
                      <Star size={14} fill="var(--gold-primary)" />
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

                  {/* Wine Pairing */}
                  {item.winePairing && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(139, 21, 56, 0.2)',
                      border: '1px solid rgba(139, 21, 56, 0.4)',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      color: '#f8d7da',
                      marginBottom: '16px'
                    }}>
                      <Wine size={14} color="#e63946" />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        Pairing: {item.winePairing}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Action Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <Clock size={13} /> {item.prepTime}
                  </div>

                  <button
                    onClick={(e) => handleAddToCart(item, e)}
                    data-cursor="ADD"
                    style={{
                      background: addedItemIds[item.id] ? '#2eb872' : 'linear-gradient(135deg, #f5d77f, #d4af37)',
                      color: addedItemIds[item.id] ? '#fff' : '#000',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontWeight: '700',
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.3s ease'
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

      {/* Dish Detail Modal (Fixed Opaque Centered Overlay) */}
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
              background: '#12161f',
              border: '1.5px solid var(--gold-primary)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '640px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
              color: '#ffffff',
              WebkitOverflowScrolling: 'touch'
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
                border: '1px solid var(--border-gold)',
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
            <div style={{ position: 'relative', height: '260px', width: '100%', background: '#0b0d10' }}>
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(11, 13, 16, 0.85)',
                border: '1px solid var(--gold-primary)',
                color: 'var(--gold-primary)',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: '700',
                textTransform: 'uppercase'
              }}>
                {selectedDish.category}
              </div>
            </div>

            {/* Modal Details Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '12px' }}>
                <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.6rem', fontWeight: '700', margin: 0, lineHeight: 1.2 }}>
                  {selectedDish.name}
                </h3>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--gold-light)', flexShrink: 0 }}>
                  ${selectedDish.price}
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                {selectedDish.description}
              </p>

              {/* Key Attributes Box */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                marginBottom: '20px',
                background: 'rgba(11, 13, 16, 0.8)',
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
                  <strong style={{ fontSize: '0.85rem', color: 'var(--gold-primary)' }}>★ {selectedDish.rating}</strong>
                </div>
              </div>

              {/* Ingredients */}
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ color: '#fff', fontSize: '0.92rem', marginBottom: '8px' }}>Artisan Ingredients</h4>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {selectedDish.ingredients.map((ing, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--text-gold)',
                      padding: '4px 10px',
                      borderRadius: '16px',
                      fontSize: '0.78rem'
                    }}>
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sommelier Pairing Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(139, 21, 56, 0.3), rgba(11, 13, 16, 0.9))',
                border: '1px solid rgba(139, 21, 56, 0.6)',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                <Wine size={24} color="#e63946" style={{ flexShrink: 0 }} />
                <div>
                  <h5 style={{ color: '#f8d7da', fontSize: '0.82rem', margin: 0 }}>Sommelier Curated Pairing</h5>
                  <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.88rem', margin: '2px 0 0' }}>
                    {selectedDish.winePairing}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => {
                    handleAddToCart(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="btn-gold"
                  style={{ width: '100%', padding: '14px', fontSize: '1rem' }}
                >
                  <Plus size={18} />
                  <span>Add To Order - ${selectedDish.price}</span>
                </button>

                <button
                  onClick={() => {
                    const query = `What wine or side dish pairs best with ${selectedDish.name}?`;
                    setSelectedDish(null);
                    onOpenAIChatWithQuery(query);
                  }}
                  className="btn-outline-gold"
                  style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                >
                  <Sparkles size={16} />
                  <span>Ask AI Sommelier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
