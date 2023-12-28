'use client'
import React, { createContext } from 'react';
import IGift from '@/interfaces/IGift';

interface GiftsProviderProps {
  children: React.ReactNode;
}

interface GiftsContextType {
  gifts: IGift[] | null,
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

const LOCAL_STORAGE_KEY = 'gifts';

export const GiftsContext = createContext<GiftsContextType>({
  gifts: DEFAULT_GIFTS,
  addGift: () => {},
  removeGift: () => {},
  clearGifts: () => {},
  editGift: () => {},
});

function GiftsProvider({ children }: GiftsProviderProps) {
  const [gifts, setGifts] = React.useState<IGift[] | null>(null);

  React.useEffect(() => {
    const giftsFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (giftsFromLocalStorage) {
      setGifts(JSON.parse(giftsFromLocalStorage));
    } else {
      setGifts(DEFAULT_GIFTS);
    }
  }, [])

  React.useEffect(() => {
    if (gifts) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gifts))
    }
  }, [gifts])

  function addGift(gift: IGift) {
    if (!gifts) throw new Error('Gifts is null');
    const nextGifts = [
      ...gifts,
      gift
    ];
    setGifts(nextGifts);
  }

  function removeGift(id: string) {
    if (!gifts) throw new Error('Gifts is null');
    const nextGifts = gifts.filter((gift: IGift) => gift.id !== id);
    setGifts(nextGifts);
  }

  function editGift(newGift: IGift) {
    if (!gifts) throw new Error('Gifts is null');
    const giftIndex = gifts.findIndex((gift: IGift) => gift.id === newGift.id);

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