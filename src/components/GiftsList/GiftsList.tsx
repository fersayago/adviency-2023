import React from 'react'
import { ListItem } from '@/components/ListItem';
import { GiftsContext } from '@/components/GiftsProvider';


const GiftsList = () => {
  const { gifts } = React.useContext(GiftsContext);

  if (gifts.length === 0) {
    return (
      <p
        className='text-gray-500 text-center text-xl pt-5 pb-2'
      >
        No hay regalos
      </p>
    )
  }

  return (
    <ul className="pt-5">
      {
        gifts.map((gift) => (
          <ListItem key={gift.id} gift={gift}/>
        ))
      }
    </ul>
  )
}

export default GiftsList