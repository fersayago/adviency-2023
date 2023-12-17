'use client'
import React from 'react'
import { GiftsContext } from '@/components/GiftsProvider'


const GiftInput = () => {
  const [value, setValue] = React.useState<string>('')
  const [ isRepeated, setIsRepeated ] = React.useState<boolean>(false)
  const { gifts, addGift } = React.useContext(GiftsContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isGiftRepeated = gifts.find(gift => gift.name === value)

    if (isGiftRepeated) {
      setIsRepeated(true);
      return
    }

    addGift({
      id: crypto.randomUUID(),
      name: value
    })
    
    setValue('')
    setIsRepeated(false);
  }
  
  const buttonClassName = value.length === 0
    ? 'bg-red-600 border border-black text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300 ease-in-out opacity-50 cursor-not-allowed'
    : 'bg-red-600 border border-black text-white px-4 py-2 rounded-r-lg hover:bg-red-500 transition duration-300 ease-in-out'

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
        className={buttonClassName}
        type='submit'
        disabled={value.length === 0}
      >
        Agregar
      </button>
      {
        isRepeated && (
          <p className='text-red-600 text-xs mt-1 ml-2'>
            El regalo ya existe
          </p>
        )
      }
    </form>
  )
}

export default GiftInput