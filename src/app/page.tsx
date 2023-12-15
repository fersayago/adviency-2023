import React from 'react'
import AdventCalendar from '@/components/AdventCalendar';

export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{
        backgroundImage: 'url(/christmas-bg.png)'
      }}>
        <AdventCalendar />
      </div>
    </main>
  )
}
