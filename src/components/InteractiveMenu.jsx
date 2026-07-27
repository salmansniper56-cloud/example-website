import React, { useState } from 'react';
import { Search, Flame, Star, Clock, Wine, Plus, Check, Info, Sparkles, Filter, X } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/restaurantData';

export default function InteractiveMenu({ onAddToCart, onOpenAIChatWithQuery }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [selectedDish, setSelectedDish] = useState(null);
  const [addedItemIds, setAddedItemIds] = useState({});

  // Filter items based on category, search, and dietary
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
    <section id="menu" style={{ padding: '100px 4%', maxWidth: '1300px', margin: '0 auto' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--gold-primary)',
          fontSize: '0.85rem',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: '600',
          marginBottom: '12px'
        }}>
          <Sparkles size={16} />
          <span>Haute Culinary Selection</span>
        </div>
        <h2 className="font-serif text-gold-gradient" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: '700' }}>
          Interactive Gourmet Menu
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0', fontSize: '1rem' }}>
          Handcrafted daily by Chef Antoine using rare seasonal imports, black Périgord truffles, and Miyazakigyu A5 beef.
        </p>
      </div>

      {/* Filter Controls Row: Categories + Search + Dietary */}
      <div style={{ marginBottom: '40px' }}>
        {/* Search & Dietary Bar */}
        <div style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          background: 'rgba(18, 22, 31, 0.6)',
          border: '1px solid var(--border-gold)',
          padding: '16px 24px',
          borderRadius: 'var(--radius-md)',
          backdropFilter: 'blur(12px)'
        }}>
          {/* Search Bar */}
          <div style={{
            position: 'relative',
            flex: '1',
            minWidth: '260px'
          }}>
            <Search size={18} color="var(--gold-primary)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search by dish, ingredient, or craving (e.g., Truffle, Wagyu)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                background: 'rgba(11, 13, 16, 0.8)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '30px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--gold-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
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

          {/* Dietary Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={14} /> Filter:
            </span>
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
                  background: dietaryFilter === diet.id ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.05)',
                  color: dietaryFilter === diet.id ? '#000' : 'var(--text-main)',
                  fontWeight: dietaryFilter === diet.id ? '700' : '500',
                  border: '1px solid ' + (dietaryFilter === diet.id ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                  padding: '6px 14px',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease'
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
          gap: '12px',
          overflowX: 'auto',
          paddingBottom: '10px',
          scrollbarWidth: 'none'
        }}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="SELECT"
              style={{
                background: activeCategory === cat.id ? 'linear-gradient(135deg, #f5d77f, #d4af37)' : 'rgba(18, 22, 31, 0.8)',
                color: activeCategory === cat.id ? '#0b0d10' : 'var(--text-main)',
                fontWeight: activeCategory === cat.id ? '700' : '500',
                border: '1px solid ' + (activeCategory === cat.id ? 'var(--gold-primary)' : 'var(--border-subtle)'),
                padding: '10px 22px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                transition: 'var(--transition-smooth)',
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
          padding: '60px 20px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-gold)'
        }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
            No culinary dishes found matching "{searchQuery}".
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '30px'
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
              {/* Image Container with Badges */}
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden'
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
                
                {/* Price Tag Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(11, 13, 16, 0.9)',
                  border: '1px solid var(--gold-primary)',
                  color: 'var(--gold-light)',
                  fontWeight: '800',
                  fontSize: '1.1rem',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                  ${item.price}
                </div>

                {/* Dietary Badges */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  display: 'flex',
                  gap: '6px',
                  flexWrap: 'wrap'
                }}>
                  {item.dietary.map((tag, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(11, 13, 16, 0.85)',
                      color: 'var(--gold-primary)',
                      border: '1px solid var(--border-gold)',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      backdropFilter: 'blur(6px)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff' }}>
                      {item.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-primary)', fontSize: '0.85rem' }}>
                      <Star size={14} fill="var(--gold-primary)" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <p style={{
                    fontSize: '0.88rem',
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

                  {/* Wine Pairing Snippet */}
                  {item.winePairing && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(139, 21, 56, 0.2)',
                      border: '1px solid rgba(139, 21, 56, 0.4)',
                      padding: '8px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.78rem',
                      color: '#f8d7da',
                      marginBottom: '20px'
                    }}>
                      <Wine size={14} color="#e63946" />
                      <span><strong>Pairing:</strong> {item.winePairing}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> {item.prepTime}
                    </span>
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
                    {addedItemIds[item.id] ? <Check size={16} /> : <Plus size={16} />}
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
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--gold-primary)',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
          }}>
            <button
              onClick={() => setSelectedDish(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(0,0,0,0.7)',
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

            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />

            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 className="font-serif text-gold-gradient" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                  {selectedDish.name}
                </h3>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--gold-light)' }}>
                  ${selectedDish.price}
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px', lineHeight: 1.6 }}>
                {selectedDish.description}
              </p>

              {/* Key Details Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginBottom: '24px',
                background: 'rgba(11, 13, 16, 0.6)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Caloric Count</span>
                  <p style={{ fontWeight: '600', color: '#fff' }}>{selectedDish.calories}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Preparation Time</span>
                  <p style={{ fontWeight: '600', color: '#fff' }}>{selectedDish.prepTime}</p>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Guest Rating</span>
                  <p style={{ fontWeight: '600', color: 'var(--gold-primary)' }}>★ {selectedDish.rating} / 5.0 ({selectedDish.reviewsCount} reviews)</p>
                </div>
              </div>

              {/* Ingredients List */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: '10px' }}>Artisan Ingredients</h4>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {selectedDish.ingredients.map((ing, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(212, 175, 55, 0.1)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--text-gold)',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '0.82rem'
                    }}>
                      • {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sommelier Wine Pairing Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(139, 21, 56, 0.25), rgba(11, 13, 16, 0.8))',
                border: '1px solid rgba(139, 21, 56, 0.5)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '28px',
                display: 'flex',
                gap: '14px',
                alignItems: 'center'
              }}>
                <Wine size={28} color="#e63946" />
                <div>
                  <h5 style={{ color: '#f8d7da', fontSize: '0.9rem', margin: 0 }}>Sommelier Curated Pairing</h5>
                  <p style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem', margin: '4px 0 0' }}>
                    {selectedDish.winePairing}
                  </p>
                </div>
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <button
                  onClick={() => {
                    handleAddToCart(selectedDish);
                    setSelectedDish(null);
                  }}
                  className="btn-gold"
                  style={{ flex: 1 }}
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
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
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
