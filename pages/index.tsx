import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/Menu";
import { TokenTypeToggle, ListingTypeToggle, SettingsButton } from "../components/Home/HeaderItems";
import Header from "../components/Header";
import {ListingsSection} from "../components/ListingsSection";
import {useHomeStore} from "../stores/Home";
import {useEffect} from "react";
import exampleListings from "../exampleListings.json";


const HomePage: NextPage = () => {

    const selectedListings = useHomeStore((state) => state.selectedListings);
    const setSelectedListings = useHomeStore((state) => state.setSelectedListings);
    const featuredListings = useHomeStore((state) => state.featuredListings);
    const setFeaturedListings = useHomeStore((state) => state.setFeaturedListings);

    useEffect(() => {
        setTimeout(() => {
            setSelectedListings(exampleListings.lend.nft);
            setFeaturedListings(exampleListings.featured);
        }, 5000)
    }, [setSelectedListings, setFeaturedListings]);


    return (
      <>
          <Head>
              <title>Home - Cover</title>
          </Head>
          <div className="flex flex-row min-h-screen w-full">
              <Menu activeTitle={"Home"} />
              <div className="flex flex-col w-full">
                  <Header items={[TokenTypeToggle, ListingTypeToggle, SettingsButton]} />
                  <div className="px-1 sm:px-8 lg:px-16 2xl:px-20 container mx-auto">
                      <ListingsSection listings={featuredListings} title={"Featured Listings (All)"} displayToggles={false} />
                      <ListingsSection listings={selectedListings} displayToggles={true} />
                  </div>
              </div>
          </div>
      </>
    )
};

export default HomePage
