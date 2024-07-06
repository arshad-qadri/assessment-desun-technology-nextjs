"use client"
import { createContext, useContext, useState } from 'react';

const OverlayContext = createContext(null);

export const OverlayContextProider = ({ children }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <OverlayContext.Provider value={{ overlay, setOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export const  useOverlay = ()=> useContext(OverlayContext)
