'use client'
import React from 'react'
import { GiftsContext } from '@/components/GiftsProvider'


const GiftInput = () => {
  const [value, setValue] = React.useState<string>('')
  const { addGift } = React.useContext(GiftsContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    addGift({
      id: crypto.randomUUID(),
      gift: value
    })
    
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={value}
        placeholder='Agregue un regalo'
        onChange={e => setValue(e.target.value)}
        className='border border-black px-4 py-2 rounded-l-lg focus:outline-none focus:border-red-600 transition'
      />

      <button
        className='bg-red-600 border border-black text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300 ease-in-out'
        type='submit'
      >
        Agregar
      </button>
    </form>
  )
}

export default GiftInput