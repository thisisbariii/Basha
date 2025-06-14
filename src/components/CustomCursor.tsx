import React, { useEffect } from 'react';

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="custom-cursor fixed w-8 h-8 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out"></div>
  );
};

export default CustomCursor;
