import React from 'react'
import { ListItem } from '@/components/ListItem';
import { GiftsContext } from '@/components/GiftsProvider';


const GiftsList = () => {
  const { gifts } = React.useContext(GiftsContext);

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