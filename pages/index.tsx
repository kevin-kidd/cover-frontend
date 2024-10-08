import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef } from "react";

import { useHomeStore } from "../stores/HomeStore";
import exampleListings from "../exampleListings.json";

// Components
import Menu from "../components/Menu";
import { ToggleButton } from "../components/Header/ToggleButton";
import { FaucetWidget, SettingsWidget } from "../components/Header/Widgets";
import Header from "../components/Header";
import { ListingsSection } from "../components/Listings/ListingsSection";

const ExplorePage: NextPage = () => {
	const selectedListings = useHomeStore((state) => state.selectedListings);
	const setSelectedListings = useHomeStore(
		(state) => state.setSelectedListings,
	);
	const featuredListings = useHomeStore((state) => state.featuredListings);
	const setFeaturedListings = useHomeStore(
		(state) => state.setFeaturedListings,
	);

	useEffect(() => {
		setTimeout(() => {
			setSelectedListings(exampleListings.lend.nft);
			setFeaturedListings(exampleListings.featured);
		}, 5000);
	}, [setSelectedListings, setFeaturedListings]);

	const items = {
		left: [<FaucetWidget key="faucet" />],
		right: [
			<ToggleButton key="tokenToggle" type="tokenToggle" />,
			<ToggleButton key="listingToggle" type="listingToggle" />,
			<SettingsWidget key="settings" page="test" />,
		],
	};

	const containerRef = useRef(null);

	return (
		<>
			<Head>
				<title>Explore</title>
			</Head>
			<main>
				<Menu activeTitle={"Explore"} />
				<div
					ref={containerRef}
					className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col"
				>
					<Header items={items} />
					<div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
						<ListingsSection
							listings={featuredListings}
							title={"Featured Listings (All)"}
							displayFilters={false}
						/>
						<ListingsSection
							listings={selectedListings}
							displayFilters={true}
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default ExplorePage;
