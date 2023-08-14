import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='flex flex-col md:flex-row max-w-5xl gap-32'>
        <div className='max-w-md flex flex-col gap-6 justify-center h-full'>
        <Image
            src="/drimoos_emoji.svg"
            alt="Next.js Logo"
            width={72}
            height={72}
            priority
          />
          <h1 className='text-6xl font-medium'>Your <span className='text-blue-400'>Smart Dream Journal</span> is About to Launch!</h1>
          <p className='font-medium text-xl text-gray-400'>Enter your email to stay informed and join us on this dreamy adventure!</p>
          <div className='w-full relative'>
            <input type="email" placeholder='Write your e-mail'
            className='w-full pl-6 p-4 rounded-full bg-gray-50 border border-solid focus:outline-none focus:ring-1 focus:border-blue-300'/>
            <button className='absolute text-sm text-white font-medium px-3 py-2 rounded-full bg-blue-400 right-3 top-3'>Ok</button>
          </div>
        </div>
        <div>
        <Image
          src="/drimoos_promo.png"
          alt="Next.js Logo"
          width={420}
          height={640}
          priority
        />
      </div>
        </div>
    </main>
  )
}
