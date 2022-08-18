import type { NextPage } from 'next'
import { useRef } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import { useOnClickOutside } from "../functions/helper";

import styles from '../styles/Home.module.css'
import Dashboard from '../components/Home/Dashboard'
import { useMenuStore } from '../states/MenuState';

const HomePage: NextPage = () => {

  const setOpen = useMenuStore((state) => state.setOpen)
  const mobileMenuRef = useRef()
  useOnClickOutside(mobileMenuRef, () => setOpen(false))

  return (
    <>
      <Head>
        <title>Home - Cover</title>
      </Head>
      <main className="flex-1">
        <Menu mobileMenuRef={mobileMenuRef} />
        <Dashboard />
      </main>
    </>
  )
}

export default HomePage
