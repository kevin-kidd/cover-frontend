import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/Menu";
import { SettingsButton } from "../components/Home/HeaderItems";
import Header from "../components/Header";
import {ListingsSection} from "../components/ListingsSection";
import {useHomeStore} from "../stores/Home";
import {useEffect} from "react";
import exampleListings from "../exampleListings.json";
import {useMenuStore} from "../stores/Menu";
import { useRouter } from "next/router";


const MyPage: NextPage = () => {

    const listings = useHomeStore((state) => state.selectedListings);
    const setSelectedListings = useHomeStore((state) => state.setSelectedListings);
    const isConnected = useMenuStore((state) => state.walletConnected);
    const router = useRouter();

    useEffect(() => {
        if(!isConnected) {
            router.push("/");
        }
        setTimeout(() => {
            setSelectedListings(exampleListings.lend.nft);
        }, 5000)
    }, [setSelectedListings, isConnected, router]);

    return (
      <>
          <Head>
              <title>My Page - Cover</title>
          </Head>
          <div className="flex flex-row min-h-screen w-full">
              <Menu activeTitle={"My Page"} />
              <div className="flex flex-col w-full">
                  <Header items={[SettingsButton]} />
                  <div className="px-1 sm:px-8 lg:px-16 2xl:px-20 container mx-auto">
                      <ListingsSection listings={listings} title={"My Listings (All)"} displayToggles={true} />
                      <ListingsSection listings={listings} title={"Listings With My Positions"} displayToggles={false} />
                  </div>
              </div>
          </div>
      </>
    )
};

export default MyPage
