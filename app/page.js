import Image from 'next/image'
import Header from '@/components/common/header'

export default function Home() {
  return (
    <>
    <Header />
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Welcome to CyberGuard AI</h1>
      <Image src='/images/cyberguard-ai-logo.png' width={200} height={200} alt='CyberGuard AI Logo' />
      <p className='text-lg'>CyberGuard AI is a cybersecurity company that provides a range of services to help protect your business from cyber threats.</p>
    </main>
    </>
  )
}
