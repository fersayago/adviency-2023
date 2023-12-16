import React, { createContext } from 'react';
import IGift from '@/interfaces/IGift';

interface GiftsProviderProps {
  children: React.ReactNode;
}

interface GiftsContextType {
  gifts: IGift[],
  addGift: (gift: IGift) => void,
  removeGift: (id: string) => void,
}

const DEFAULT_GIFTS: IGift[] = [
  {
    id: crypto.randomUUID(),
    name: 'Medias',
  },
  {
    id: crypto.randomUUID(),
    name: 'Caramelos',
  },
  {
    id: crypto.randomUUID(),
    name: 'Pan Dulce',
  },
  {
    id: crypto.randomUUID(),
    name: 'Vitel Tone',
  }
]

export const GiftsContext = createContext<GiftsContextType>({
  gifts: DEFAULT_GIFTS,
  addGift: () => {},
  removeGift: () => {},
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

  function removeGift(id: string) {
    const nextGifts = gifts.filter(gift => gift.id !== id);
    setGifts(nextGifts);
  }

  const contextValue: GiftsContextType = {
    gifts,
    addGift,
    removeGift,
  };

  return (
    <GiftsContext.Provider value={contextValue}>
      {children}
    </GiftsContext.Provider>
  );
}

export default GiftsProvider;