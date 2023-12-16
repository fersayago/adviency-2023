import React from 'react'
import { GiftInput } from '../GiftInput'
import { GiftsList } from '../GiftsList'
import { GiftsProvider } from '../GiftsProvider'

const AdventCalendar = () => {

  return (
    <GiftsProvider>
      <div className="flex items-center justify-center h-screen">
        <div className='bg-gray-100 p-6 rounded-lg text-black '>
          <h1 className="text-red-500 font-bold top pb-2 text-xl">Regalos</h1>
          <GiftInput/>
          <GiftsList/>
        </div>
      </div>
    </GiftsProvider>
  )
}

export default AdventCalendar