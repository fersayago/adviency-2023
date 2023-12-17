import React, { createContext } from 'react';
import IGift from '@/interfaces/IGift';

interface GiftsProviderProps {
  children: React.ReactNode;
}

interface GiftsContextType {
  gifts: IGift[],
  addGift: (gift: IGift) => void,
  removeGift: (id: string) => void,
  clearGifts: () => void,
  editGift: (gift: IGift) => void,
}

const DEFAULT_GIFTS: IGift[] = [
  {
    id: crypto.randomUUID(),
    name: 'Medias',
    quantity: 2,
  },
  {
    id: crypto.randomUUID(),
    name: 'Caramelos',
    quantity: 5,
  },
  {
    id: crypto.randomUUID(),
    name: 'Pan Dulce',
    quantity: 1,
  },
  {
    id: crypto.randomUUID(),
    name: 'Vitel Tone',
    quantity: 1,
  }
]

export const GiftsContext = createContext<GiftsContextType>({
  gifts: DEFAULT_GIFTS,
  addGift: () => {},
  removeGift: () => {},
  clearGifts: () => {},
  editGift: () => {},
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

  function editGift(newGift: IGift) {
    const giftIndex = gifts.findIndex(gift => gift.id === newGift.id);

    if (giftIndex !== -1) {
      const updatedGifts = [...gifts];
      updatedGifts[giftIndex] = {
        ...updatedGifts[giftIndex],
        ...newGift
      }

      setGifts(updatedGifts);
    }
  }

  function clearGifts() {
    setGifts([]);
  }

  const contextValue: GiftsContextType = {
    gifts,
    addGift,
    removeGift,
    clearGifts,
    editGift,
  };

  return (
    <GiftsContext.Provider value={contextValue}>
      {children}
    </GiftsContext.Provider>
  );
}

export default GiftsProvider;