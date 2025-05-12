import React, { createContext, useContext, useState, useEffect } from "react";

// Membuat MusicContext
const MusicContext = createContext();

// Custom Hook untuk menggunakan MusicContext
export const useMusic = () => {
  return useContext(MusicContext);
};

// MusicProvider untuk menyediakan musik ke seluruh aplikasi
export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true); // Memastikan musik dimulai

  const togglePlay = () => {
    setIsPlaying((prev) => !prev); // Toggle status play/pause
  };

  return (
    <MusicContext.Provider value={{ togglePlay, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicProvider;
