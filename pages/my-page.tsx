import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/Menu";
import Header from "../components/Header";
import {ListingsSection} from "../components/Listings/ListingsSection";
import {useHomeStore} from "../stores/Home";
import {useEffect} from "react";
import exampleListings from "../exampleListings.json";
import { useRouter } from "next/router";
import {SettingsWidget} from "../components/Header/Widgets";
import {usePersistentStore} from "../stores/Persistent";


const MyPage: NextPage = () => {

    const listings = useHomeStore((state) => state.selectedListings);
    const setSelectedListings = useHomeStore((state) => state.setSelectedListings);
    const isConnected = usePersistentStore((state) => state.wallet.connected);
    const router = useRouter();

    useEffect(() => {
        if(!isConnected) {
            router.push("/");
        }
        setTimeout(() => {
            setSelectedListings(exampleListings.lend.nft);
        }, 5000)
    }, [setSelectedListings, isConnected, router]);

    const items = {
        left: [],
        right: [SettingsWidget({ page: "test" })]
    };

    return (
      <>
          <Head>
              <title>My Page - Cover</title>
          </Head>
          <main className="relative h-screen">
              <Menu activeTitle={"My Page"} />
              <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                  <Header items={items} />
                  <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
                      <ListingsSection listings={listings} title={"My Listings (All)"} displayToggles={true} />
                      <ListingsSection listings={listings} title={"Listings With My Positions"} displayToggles={false} />
                  </div>
              </div>
          </main>
      </>
    )
};

export default MyPage
