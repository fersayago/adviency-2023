import IGift from '@/interfaces/IGift'
import React from 'react'
import { GiftsContext } from '../GiftsProvider'

interface ListItemProps {
  gift: IGift
}

const ListItem: React.FC<ListItemProps> = ({gift}) => {
  const { gifts, removeGift } = React.useContext(GiftsContext)

  const handleRemoveGift = () => {
    removeGift(gift.id)
  }

  return (
    <li className='flex items-center justify-between border-b border-gray-200 py-2 px-3'>
      {gift.quantity}x {gift.name}
      <button
        className='text-red-600 hover:text-red-400 transition duration-300 ease-in-out focus:outline-none'
        type='button'
        onClick={handleRemoveGift}
      >
        X
      </button>
    </li>
  )
}

export default ListItem