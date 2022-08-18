import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu'
import {FeaturedListings} from "../components/Home/FeaturedListings";
import {NFTLendingListings} from "../components/Home/NFTLendingListings";
import { TokenToggle, TypeToggle, Cog } from "../components/Home/HeaderItems";
import Header from "../components/Header";


const HomePage: NextPage = () => {
  return (
      <main className="lg:grid lg:grid-cols-5 4k:grid-cols-7 h-full">
          <Head>
            <title>Home - Cover</title>
          </Head>
            <Menu />
            <div className="lg:col-span-4 4k:col-span-6 flex justify-center place-items-start">
                <div className="flex flex-col justify-center w-full">
                    <Header items={[TokenToggle, TypeToggle, Cog]} />
                    <FeaturedListings />
                    <NFTLendingListings />
                </div>
            </div>
      </main>
  )
};

export default HomePage
