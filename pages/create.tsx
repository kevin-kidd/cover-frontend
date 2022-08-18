import {NextPage} from "next";
import {FaucetWidget, SettingsWidget} from "../components/Header/Widgets";
import Head from "next/head";
import Menu from "../components/Menu";
import Header from "../components/Header";
import CreateListing  from "../components/Sections/CreateListing";
import {ToggleButton} from "../components/Header/ToggleButton";

const CreatePage: NextPage = () => {

    const items = {
        left: [FaucetWidget({})],
        right: [ToggleButton({ type: "createListingToggle" }), SettingsWidget({ page: "test" })]
    };

    return (
        <>
            <Head>
                <title>Create a Listing</title>
            </Head>
            <main className="relative h-screen">
                <Menu activeTitle={"Create"} />
                <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                    <Header items={items} />
                    <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
                        <div className="border-t border-black mb-4 lg:mb-8 w-full px-2 sm:px-2 md:px-3 xl:px-6">
                            <h1 className="pt-6 pb-2 text-tiny lg:text-xl font-medium text-white">
                                Create a Listing
                            </h1>
                            <CreateListing />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default CreatePage;