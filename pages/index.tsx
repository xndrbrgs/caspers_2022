import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Casper's Cows</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* {Hero} */}
      {/* {How to buy} */}
      {/* {Socials} */}
      {/* {Footer} */}

    </div>
  )
}

export default Home
