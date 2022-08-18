import {NextPage} from "next";
import {useRouter} from "next/router";
import React, {useEffect, useMemo, useState} from "react";
import {Snip721Token, useAssetStore} from "../../stores/AssetStore";
import Head from "next/head";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import {SettingsWidget} from "../../components/Header/Widgets";
import Link from "next/link";
import {getSnip721Permit} from "../../func/secret";
import {useWalletStore} from "../../stores/WalletStore";
import {getSnip721Inventory} from "../../func/queries";
import {Snip721Card} from "../../components/Assets/Snip721Card";


const ViewCollectionPage: NextPage = () => {
    const router = useRouter();
    const { address } = router.query;

    const items = {
        left: [],
        right: [SettingsWidget({ page: "test" })]
    };

    const emptyNft = {
        name: "",
        tokenId: "",
        images: []
    };

    const savedCollections = useAssetStore((state) => state.assets.snip721.collections);
    const updateCollection = useAssetStore((state) => state.assets.snip721.updateCollection);
    const [inventory, setInventory] = useState<Snip721Token[]>([emptyNft, emptyNft, emptyNft]);
    const client = useWalletStore((state) => state.client);

    const collection = useMemo(() => {
        return savedCollections.find(
            (collection) => collection.details.contract.address === address
        );
    }, [savedCollections, address]);

    useEffect(() => {
        if(client && collection && collection.permit) {
            getSnip721Inventory(client, collection).then((res) => setInventory(res));
        }
    }, [collection, client]);

    const handlePermit = async () => {
        const permit = await getSnip721Permit(client, collection);
        if(permit !== null) {
            collection.permit = permit;
            updateCollection(collection);
        } else {
            // TODO -- add error handling
        }
    };

    console.log(inventory);

    if(collection && collection.details && collection.permit) {
        return (
            <>
                <Head>
                    <title>{ collection.details.name }</title>
                </Head>
                <main className="relative h-screen">
                    <Menu activeTitle={"Assets"} />
                    <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                        <Header items={items} />
                        <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-20">
                            <div className="flex flex-col border-t border-black mb-4 lg:mb-8 w-full px-2 sm:px-2 md:px-3 xl:px-6">
                                <h1 className="pt-6 pb-2 text-tiny lg:text-xl font-medium text-white">
                                    { collection.details.name }
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex items-center mt-10 gap-4">
                                    {
                                        inventory.map((nft, index) => (
                                            <Snip721Card nft={nft} contractAddress={collection.details.contract.address}
                                                         key={`nft-card-${nft.name}-${nft.tokenId}-${index}`} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Collection</title>
            </Head>
            <main className="relative h-screen">
                <Menu activeTitle={"Assets"} />
                <div className="lg:ml-sidebar w-full lg:w-auto h-screen flex flex-col">
                    <Header items={items} />
                    <div className="px-1 sm:px-4 lg:container lg:mx-auto lg:px-10 w-full h-full">
                        <div className="border-t flex flex-col h-full justify-center items-center border-black">
                            { collection && !collection.permit ?
                                <>
                                    <h1 className="-mt-20 text-2xl text-white">Permit not found.</h1>
                                    <h3 className="mt-2">
                                        Please
                                        <span className="text-white hover:cursor-pointer" onClick={handlePermit}> create a permit </span>
                                        to view your collection.
                                    </h3>
                                </>
                                :
                                <>
                                    <h1 className="-mt-20 text-2xl text-white">Collection not found.</h1>
                                    <h3 className="mt-2">
                                        You can import this collection on the
                                        <span className="text-white"><Link href="/assets"> assets</Link></span> page.
                                    </h3>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};

export default ViewCollectionPage;