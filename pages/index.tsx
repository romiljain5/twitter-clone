import type { GetServerSideProps, NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { fetchTweets } from '../sanity/utils/fetchTweets'
import { Tweet } from '../typings'

interface Props {
  tweets: Tweet[]
}

const Home = ({tweets}: Props) => {

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
        <Feed tweets={tweets}/>

        {/* Widgets */}
        <Widgets/>
      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }, // will be passed to the page component as props
  }
}
