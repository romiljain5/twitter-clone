import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    // overflow:hidden becoz we just scroll container not entire page
    <div className='mx-auto max-h-screen overflow-hidden lg:max-w-6xl'>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed/>

        {/* Widgets */}
        <Widgets/>
      </main>

    </div>
  )
}

export default Home
