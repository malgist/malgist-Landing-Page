'use client';

import { CSSProperties, FC, ReactNode } from 'react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}) => {
  const animationDuration = speed;

  const shinyTextStyle: CSSProperties = {
    display: 'inline-block',
    background: disabled
      ? '#151816'
      : `linear-gradient(
          110deg,
          #151816 45%,
          #ffffff 50%,
          #151816 55%
        )`,
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: disabled ? '#151816' : 'transparent',
    color: disabled ? '#151816' : 'transparent',
    animation: disabled ? 'none' : `shine ${animationDuration}s linear infinite`,
  };

  return (
    <>
      <style>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
      <span style={shinyTextStyle} className={className}>
        {text}
      </span>
    </>
  );
};

export default ShinyText;
