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
      <main className="flex-1">
        <Menu />
        <Dashboard />
      </main>
    </>
  )
}

export default HomePage
