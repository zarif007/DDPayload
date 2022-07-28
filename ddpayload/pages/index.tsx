import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>DD Payload</title>
        <meta name="description" content="Generated apis" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Saira:wght@500&display=swap" rel="stylesheet"></link>
      </Head>


      {/* F4ABC4 */}
      {/* #5DADE2  */}
      {/* #40E0D0  */}
      <Banner />


    </div>
  )
}

export default Home
