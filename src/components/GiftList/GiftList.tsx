import React from 'react'
import { ListItem } from '../ListItem';

interface GiftListProps {
  gifts: string[];
}

const GiftList: React.FC<GiftListProps> = ({gifts}) => {

  return (
    <ul>
      {
        gifts.map((gift, index) => (
          <ListItem key={index} item={gift}/>
        ))
      }
    </ul>
  )
}

export default GiftList