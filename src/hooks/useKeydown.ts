import React from 'react';

export function useKeydown(callback: (event:KeyboardEvent) => void, key: string) {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === key) {
        callback(event)
      }
    }

    window. addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback])
}