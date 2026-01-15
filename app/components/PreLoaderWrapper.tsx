'use client';
import React, { useState, useEffect } from 'react';
import SplitCurtainPreloader from './SplitCurtainPreloader';
import { usePreloader } from '../context/PreloaderContext';

export interface PreLoaderWrapperProps {
  children: React.ReactNode;
  skipOnRevisit?: boolean;
  storageKey?: string;
  duration?: number;
  staggerDelay?: number;
}

const PreLoaderWrapper: React.FC<PreLoaderWrapperProps> = ({
  children,
  skipOnRevisit = true,
  storageKey = 'malgist_preloader_seen',
  duration = 2000,
  staggerDelay = 0.1,
}) => {
  const { setPreloaderComplete } = usePreloader();

  // Lazy initialization to avoid setState in useEffect
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === 'undefined') return true;

    if (skipOnRevisit) {
      const hasSeenPreloader = localStorage.getItem(storageKey);
      console.log('[PreLoader] Has seen before?', hasSeenPreloader);
      return !hasSeenPreloader; // Show preloader only if not seen before
    }

    console.log('[PreLoader] skipOnRevisit is false, always showing');
    return true; // Always show if skipOnRevisit is false
  });

  useEffect(() => {
    console.log('[PreLoader] isLoading:', isLoading);
    // Mark as seen after component mounts (only for first-time visitors)
    if (isLoading && skipOnRevisit) {
      localStorage.setItem(storageKey, 'true');
      console.log('[PreLoader] Marked as seen in localStorage');
    }
  }, [isLoading, skipOnRevisit, storageKey]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setPreloaderComplete(true);

    // Dispatch custom event for components that need to wait
    if (typeof window !== 'undefined') {
      (window as Window & { __preloaderComplete?: boolean }).__preloaderComplete = true;
      window.dispatchEvent(new CustomEvent('preloader-complete'));
    }
  };

  return (
    <>
      {isLoading && (
        <SplitCurtainPreloader
          onComplete={handlePreloaderComplete}
          duration={duration}
          staggerDelay={staggerDelay}
        />
      )}
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PreLoaderWrapper;
