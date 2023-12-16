import React from 'react'
import { ListItem } from '@/components/ListItem';
import { GiftsContext } from '@/components/GiftsProvider';


const GiftsList = () => {
  const { gifts } = React.useContext(GiftsContext);

  return (
    <ul>
      {
        gifts.map(({id, gift}) => (
          <ListItem key={id} item={gift}/>
        ))
      }
    </ul>
  )
}

export default GiftsList