import type { NextPage } from 'next'
import { useState, useRef } from 'react'
import Head from 'next/head'
import Menu from '../components/Menu'
import { useOnClickOutside } from "../functions/helper";
import { useRecoilState } from "recoil";
import { mobileMenuState } from "../atoms/HomeState"

import styles from '../styles/Home.module.css'
import Dashboard from '../components/Home/Dashboard'

const HomePage: NextPage = () => {

  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuState)
  const mobileMenuRef = useRef()
  useOnClickOutside(mobileMenuRef, () => setMobileMenu(false))

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
