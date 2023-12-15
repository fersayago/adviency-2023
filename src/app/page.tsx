
export default function Home() {
  return (
    <main>
      <div className='flex items-center justify-center h-screen bg-cover bg-center' style={{
        backgroundImage: 'url(/christmas-bg.png)'
      }}>
        <div className='bg-gray-100 p-6 rounded-lg text-black '>
          <h1 className="text-red-500 font-bold top pb-2 text-xl">Regalos</h1>
          <p>Medias</p>
          <p>Caramelos</p>
          <p>Vitel Tone</p>
        </div>
      </div>
    </main>
  )
}
