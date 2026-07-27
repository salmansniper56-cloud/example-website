import React, { useState, useEffect } from 'react';
import { Flame, ShoppingBag, X } from 'lucide-react';

export default function LiveOrdersToast() {
  const [activeOrder, setActiveOrder] = useState(null);

  const sampleOrders = [
    { name: "Alex from Brooklyn", item: "The Monster Double Smash Burger", time: "2 mins ago", image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { name: "Sarah from Manhattan", item: "Supreme Pepperoni Stuffed Crust Pizza", time: "1 min ago", image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { name: "Marcus from Queens", item: "Mega Crunch Chicken Bucket (12 Pcs)", time: "Just now", image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
    { name: "David from Times Square", item: "Salted Caramel Oreo Monster Shake", time: "3 mins ago", image: "https://images.pexels.com/photos/34711204/pexels-photo-34711204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }
  ];

  useEffect(() => {
    // Show first toast after 3s
    const initialTimer = setTimeout(() => {
      setActiveOrder(sampleOrders[0]);
    }, 3000);

    // Rotate toast every 16 seconds
    const interval = setInterval(() => {
      const randomOrder = sampleOrders[Math.floor(Math.random() * sampleOrders.length)];
      setActiveOrder(randomOrder);

      // Auto dismiss after 5s
      setTimeout(() => {
        setActiveOrder(null);
      }, 5000);
    }, 16000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!activeOrder) return null;

  return (
    <div className="live-toast">
      <img src={activeOrder.image} alt={activeOrder.item} style={{ width: '48px', height: '48px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--gold-primary)', fontSize: '0.7rem', fontWeight: '800' }}>
          <Flame size={12} color="var(--crimson-accent)" />
          <span>RECENT EXPRESS ORDER</span>
        </div>
        <div style={{ color: '#fff', fontSize: '0.82rem', fontWeight: '700', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {activeOrder.name}
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Ordered {activeOrder.item} ({activeOrder.time})
        </div>
      </div>
      <button
        onClick={() => setActiveOrder(null)}
        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '2px' }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
