import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile touch-only
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check hovered element for cursor label
      const target = e.target.closest('[data-cursor], button, a, input, select');
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isMobile]);

  // Smooth lerp trailing for the ring
  useEffect(() => {
    if (isMobile) return;
    let animationFrameId;

    const followMouse = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(followMouse);
    };

    animationFrameId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
      >
        {cursorText && <span className="cursor-badge">{cursorText}</span>}
      </div>
      <div
        className="custom-cursor-dot"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
    </>
  );
}
