import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu'
import {FeaturedListings} from "../components/Home/FeaturedListings";
import { TokenTypeToggle, ListingTypeToggle, SettingsButton } from "../components/Home/HeaderItems";
import Header from "../components/Header";
import {SelectedListings} from "../components/Home/SelectedListings";


const HomePage: NextPage = () => {
  return (
      <>
          <Head>
              <title>Home - Cover</title>
          </Head>
          <div className="flex flex-row min-h-screen w-full">
              <Menu />
              <div className="flex flex-col w-full">
                  <Header items={[TokenTypeToggle, ListingTypeToggle, SettingsButton]} />
                  <div className="px-1 sm:px-8 lg:px-16 2xl:px-20 container mx-auto">
                      <FeaturedListings />
                      <SelectedListings />
                  </div>
              </div>
          </div>
      </>
  )
};

export default HomePage
