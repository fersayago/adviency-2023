import React from 'react'
import { GiftsContext } from '@/components/GiftsProvider'

const ClearGifts = () => {
  const [isEnabled, setIsEnabled] = React.useState<boolean>(true)
  const { gifts, clearGifts } = React.useContext(GiftsContext)

  const handleClearGifts = () => {
    clearGifts()
  }

  React.useEffect(() => {
    setIsEnabled(gifts.length > 0)
  }, [gifts])

  const buttonClassName = isEnabled
    ? 'bg-red-500 hover:bg-red-400 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2'
    : 'bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-2 opacity-50 cursor-not-allowed'

  return (
    <button
      className={buttonClassName}
      onClick={handleClearGifts}
    >
      Eliminar todos los regalos
    </button>
  )
}

export default ClearGifts