import React, { useEffect, useState } from 'react';
import '../index.css';

interface SlideContainerProps {
  children: React.ReactNode;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      // Scale based on width to fit the screen width
      setScale(window.innerWidth / 1920);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  const slideCount = React.Children.count(children);
  const totalHeight = 1080 * slideCount * scale;

  return (
    <div style={{ width: '100%', height: `${totalHeight}px`, overflow: 'hidden' }}>
      <div
        style={{
          width: '1920px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} style={{ width: '1920px', height: '1080px', position: 'relative' }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};
