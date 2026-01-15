'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export interface SplitCurtainPreloaderProps {
  onComplete?: () => void;
  duration?: number;
  staggerDelay?: number;
  showProgress?: boolean;
}

const SplitCurtainPreloader: React.FC<SplitCurtainPreloaderProps> = ({
  onComplete,
  duration = 2000,
  staggerDelay = 0.1,
  showProgress = true,
}) => {
  // Gradient color palette - Malgist grayscale spectrum
  const topGradient = [
    '#151816', // Dark charcoal (box 1)
    '#4b5563', // Gray-600 (box 2)
    '#6b7280', // Gray-500 (box 3)
    '#9ca3af', // Gray-400 (box 4)
    '#d1d5db', // Gray-300 (box 5)
  ];

  const bottomGradient = [
    '#d1d5db', // Gray-300 (box 6) - mirror of top
    '#9ca3af', // Gray-400 (box 7)
    '#6b7280', // Gray-500 (box 8)
    '#4b5563', // Gray-600 (box 9)
    '#151816', // Dark charcoal (box 10)
  ];

  console.log('[SplitCurtain] Component rendering with gradient colors');

  const containerRef = useRef<HTMLDivElement>(null);
  const topBoxesRef = useRef<HTMLDivElement[]>([]);
  const bottomBoxesRef = useRef<HTMLDivElement[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log('[SplitCurtain] Component mounted, starting animation');

    // GSAP Timeline for orchestrated animation
    const tl = gsap.timeline({
      onUpdate: () => {
        // Update progress percentage
        const prog = tl.progress() * 100;
        setProgress(Math.round(prog));
      },
      onComplete: () => {
        console.log('[SplitCurtain] Animation complete');
        // Delay before calling onComplete callback
        setTimeout(() => {
          if (onComplete) onComplete();
          console.log('[SplitCurtain] onComplete callback executed');
        }, 200);
      },
    });

    // Animate each pair of boxes (top + bottom) sequentially
    for (let i = 0; i < 5; i++) {
      const startTime = i * staggerDelay;

      console.log(`[SplitCurtain] Adding animation for box pair ${i + 1} at ${startTime}s`);

      // Top box slides UP
      tl.to(
        topBoxesRef.current[i],
        {
          y: '-100%',
          duration: 0.6,
          ease: 'power2.inOut',
        },
        startTime
      );

      // Bottom box slides DOWN (simultaneously with top)
      tl.to(
        bottomBoxesRef.current[i],
        {
          y: '100%',
          duration: 0.6,
          ease: 'power2.inOut',
        },
        startTime
      );
    }

    // Set total duration
    tl.duration(duration / 1000);
    console.log(`[SplitCurtain] Timeline duration set to ${duration / 1000}s`);

    return () => {
      console.log('[SplitCurtain] Cleanup: killing timeline');
      tl.kill();
    };
  }, [duration, staggerDelay, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden"
      style={{
        pointerEvents: 'auto',
        isolation: 'isolate',
      }}
    >
      {/* Top Row - 5 boxes with gradient */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={`top-${index}`}
            ref={(el) => {
              if (el) topBoxesRef.current[index] = el;
            }}
            className="flex-1 h-full relative"
            style={{
              backgroundColor: topGradient[index],
              willChange: 'transform',
            }}
          />
        ))}
      </div>

      {/* Bottom Row - 5 boxes with gradient (mirrored) */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 flex">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={`bottom-${index}`}
            ref={(el) => {
              if (el) bottomBoxesRef.current[index] = el;
            }}
            className="flex-1 h-full relative"
            style={{
              backgroundColor: bottomGradient[index],
              willChange: 'transform',
            }}
          />
        ))}
      </div>

    </div>
  );
};

export default SplitCurtainPreloader;
