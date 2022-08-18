import type { NextPage } from "next";
import Head from "next/head";
import {useEffect, useRef} from "react";

import {useHomeStore} from "../stores/Home";
import exampleListings from "../exampleListings.json";

// Components
import Menu from "../components/Menu";
import { ToggleButton } from "../components/Header/ToggleButton";
import { SettingsWidget, PriceWidget } from "../components/Header/Widgets";
import Header from "../components/Header";
import {ListingsSection} from "../components/Listings/ListingsSection";


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

    const items = {
        left: [PriceWidget({ coin: "SCRT" })],
        right: [ToggleButton({ type: "token" }), ToggleButton({ type: "listing-type" }), SettingsWidget({ page: "test" })]
    };

    const containerRef = useRef(null);

    return (
      <>
          <Head>
              <title>Home - Cover</title>
          </Head>
          <main className="relative h-screen">
              <Menu activeTitle={"Explore"} />
              <div ref={containerRef} className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                  <Header items={items} containerRef={containerRef} />
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
