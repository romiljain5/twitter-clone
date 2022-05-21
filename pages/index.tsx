import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
