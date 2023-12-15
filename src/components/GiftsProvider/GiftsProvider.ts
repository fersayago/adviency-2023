import React from 'react';

const DEFAULT_GIFTS = [
  {
    id: crypto.randomUUID(),
    title: 'Medias',
  },
  {
    id: crypto.randomUUID(),
    title: 'Caramelos',
  },
  {
    id: crypto.randomUUID(),
    title: 'Galletas',
  },
  {
    id: crypto.randomUUID(),
    title: 'Vitel Tone',
  }
]

export const GiftsContext = React.createContext();

function GiftsProvider({ children }) {
  const [gifts, setGifts] = React.useState(DEFAULT_GIFTS);

  function addGift(gift) {
    const nextGifts = [
      ...gifts,
      gift
    ]
    setGifts(nextGifts);
  }
}

export default GiftsProvider;