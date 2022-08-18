import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu'
import Dashboard from '../components/Home/Dashboard'

const HomePage: NextPage = () => {


  return (
    <>
      <Head>
        <title>Home - Cover</title>
      </Head>
      <main className="lg:grid lg:grid-cols-10 h-screen">
        <div className="lg:col-span-2 z-20">
          <Menu />
        </div>
        <div className="lg:col-span-8 flex justify-center place-items-start">
          <Dashboard />
        </div>
      </main>
    </>
  )
}

export default HomePage
