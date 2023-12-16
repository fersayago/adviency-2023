import React, { createContext } from 'react';
import IGift from '@/interfaces/IGift';

interface GiftsProviderProps {
  children: React.ReactNode;
}

interface GiftsContextType {
  gifts: IGift[],
  addGift: (gift: IGift) => void,
}

const DEFAULT_GIFTS: IGift[] = [
  {
    id: crypto.randomUUID(),
    gift: 'Medias',
  },
  {
    id: crypto.randomUUID(),
    gift: 'Caramelos',
  },
  {
    id: crypto.randomUUID(),
    gift: 'Galletas',
  },
  {
    id: crypto.randomUUID(),
    gift: 'Vitel Tone',
  }
]

export const GiftsContext = createContext<GiftsContextType>({
  gifts: DEFAULT_GIFTS,
  addGift: () => {},
});

function GiftsProvider({ children }: GiftsProviderProps) {
  const [gifts, setGifts] = React.useState(DEFAULT_GIFTS);

  function addGift(gift: IGift) {
    const nextGifts = [
      ...gifts,
      gift
    ];
    setGifts(nextGifts);
  }

  const contextValue: GiftsContextType = {
    gifts,
    addGift,
  };

  return (
    <GiftsContext.Provider value={contextValue}>
      {children}
    </GiftsContext.Provider>
  );
}

export default GiftsProvider;