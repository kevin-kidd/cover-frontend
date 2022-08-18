import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/Menu";
import Header from "../components/Header";
import {SettingsWidget} from "../components/Header/Widgets";
import {ToggleButton} from "../components/Header/ToggleButton";
import {usePersistentStore} from "../stores/Persistent";
import {AssetsFilters, ImportButton} from "../components/Assets/Filters";
import {TokensTable} from "../components/Assets/TokensTable";


const AssetsPage: NextPage = () => {

    const tokenType = usePersistentStore((state) => state.config.toggles.myTokensToggle);

    const items = {
        left: [],
        right: [ToggleButton({ type: "myTokensToggle" }), SettingsWidget({ page: "test" })]
    };


    return (
      <>
          <Head>
              <title>Assets</title>
          </Head>
          <main className="relative h-screen">
              <Menu activeTitle={"Assets"} />
              <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                  <Header items={items} />
                  <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
                      <div className="border-t border-black mb-4 lg:mb-8 w-full px-2 sm:px-2 md:px-3 xl:px-6">
                          <div className="w-full flex justify-between mb-2 sm:mb-0">
                              <h1 className="pt-6 pb-2 text-tiny text-lg lg:text-xl font-medium text-white">
                                  My { tokenType === "NFTs" ? "Collections" : "Tokens" }
                              </h1>
                              <div className="flex sm:hidden items-end">
                                  <ImportButton tokenType={tokenType} />
                              </div>
                          </div>
                          <AssetsFilters tokenType={tokenType} />
                          { tokenType === "Tokens" ?
                              <TokensTable />
                              :
                              <>
                              </>
                          }
                      </div>
                  </div>
              </div>
          </main>
      </>
    )
};

export default AssetsPage
