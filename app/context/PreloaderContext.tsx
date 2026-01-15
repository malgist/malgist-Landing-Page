'use client';

import React, { createContext, useContext, useState } from 'react';

interface PreloaderContextType {
  isPreloaderComplete: boolean;
  setPreloaderComplete: (complete: boolean) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaderComplete, setPreloaderComplete] = useState(false);

  return (
    <PreloaderContext.Provider value={{ isPreloaderComplete, setPreloaderComplete }}>
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider');
  }
  return context;
}
