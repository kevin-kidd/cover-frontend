import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/Menu";
import { SettingsButton, ToggleButton } from "../components/Home/HeaderItems";
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
        }, 5000);
    }, [setSelectedListings, setFeaturedListings]);

    return (
      <>
          <Head>
              <title>Home - Cover</title>
          </Head>
          <main className="relative h-screen">
              <Menu activeTitle={"Home"} />
              <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                  <Header items={[ToggleButton({ type: "token" }), ToggleButton({ type: "listing-type" }), SettingsButton({ page: "test" })]} />
                  <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
                      <ListingsSection listings={featuredListings} title={"Featured Listings (All)"} displayToggles={false} />
                      <ListingsSection listings={selectedListings} displayToggles={true} />
                  </div>
              </div>
          </main>

      </>
    )
};

export default HomePage
