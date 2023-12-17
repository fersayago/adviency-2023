'use client'
import React from 'react'
import { GiftsContext } from '@/components/GiftsProvider'


const GiftInput = () => {
  const [gift, setGift] = React.useState<string>('')
  const [quantity, setQuantity] = React.useState<number>(1)
  const { gifts, addGift, editGift } = React.useContext(GiftsContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const repeatedGift = gifts.find(g => g.name === gift)

    if (repeatedGift) {
      editGift({
        ...repeatedGift,
        quantity: repeatedGift.quantity + quantity,
      })
      setGift('')
      setQuantity(1)
      return
    }

    addGift({
      id: crypto.randomUUID(),
      name: gift,
      quantity,
    })
    
    setGift('')
    setQuantity(1)
  }
  
  const buttonClassName = gift.length === 0
    ? 'bg-red-600 border border-black text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300 ease-in-out opacity-50 cursor-not-allowed'
    : 'bg-red-600 border border-black text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300 ease-in-out'

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={gift}
        placeholder='Agregue un regalo'
        onChange={e => setGift(e.target.value)}
        className='border border-black px-4 py-2 rounded-l-lg focus:outline-none focus:border-red-600 transition'
      />

      <input
        type='number'
        value={quantity}
        onChange={e => setQuantity(parseInt(e.target.value))}
        className='border borderblack px-4 py-2 text-right focus:outline-none focus:border-red-600 transition w-20'
      />

      <button
        className={buttonClassName}
        type='submit'
        disabled={gift.length === 0}
      >
        Agregar
      </button>
    </form>
  )
}

export default GiftInput