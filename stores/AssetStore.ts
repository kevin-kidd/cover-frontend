// Persistent storage for contract viewing keys & permits
import {Permit} from "secretjs";
import create from "zustand";
import {persist} from "zustand/middleware";
import {useEffect, useState} from "react";
import {immer} from "zustand/middleware/immer";
import {Draft} from "immer";
import { mergeDeepLeft } from "ramda";

export type Contract = {
    address: string
    codeHash: string
}

export type TokenDetails = {
    name: string
    denom?: string
    unwrappedName?: string
    network?: string
    icon?: string
    type: string
    decimals: number
    contract: Contract
}

export type CollectionDetails = {
    name: string
    logo?: string
    banner?: string
    description?: string
    contract: Contract
}

export const assets = {
    sscrt: {
        name: "sSCRT",
        unwrappedName: "SCRT",
        denom: "uscrt",
        type: "native",
        icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661027441/icon_sscrt_dp9yoh.svg",
        network: "Secret Network",
        decimals: 6,
        contract: {
            address: "secret18vd8fpwxzck93qlwghaj6arh4p7c5n8978vsyg",
            codeHash: "9587D60B8E6B078ACE12014CEEEE089530B9FABCD76535D93666A6C127AD8813"
        }
    },
    test: {
        name: "TEST",
        type: "token",
        decimals: 6,
        contract: {
            address: "secret15edrq0ce2uz04t6zf835d0g29a9779nmmyj5vt",
            codeHash: "338574ceb3062ffdefa28417e310d018bf045c9a5527a2e9901654a1e344e3c2"
        }
    },
    test_collection: {
        name: "Test Collection",
        logo: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret173emcjes7992g4n76xafnzut9407f7a56ql3k0_icon_1654869351074.png",
        banner: "https://stashhappstorage.blob.core.windows.net/collection-assets/secret173emcjes7992g4n76xafnzut9407f7a56ql3k0_banner_1655799060345.png",
        description: "The Council of Gyld is Legendao’s genesis NFT drop, featuring The Cryptids, mythical apes known as Sasquatch, Bigfoot and Yeti. The Cryptids knew that decentralized technology could bring their greatest wishes for humanity to fruition. They wanted to improve on Web 3 with a blockchain that preserved privacy for its users. Thus, the Secret Network was born.",
        contract: {
            address: "secret1usuwa2hvfz5me9gr42msjsffvj6xn20rm3ffrq",
            codeHash: "E38C18F5F54245E7C31A17ECC38F8D50B18D054B6DA975FE8C92579204682633"
        }
    }
};
//
// const exampleAssets = [
//     {
//         name: "sETH",
//         type: "bridged",
//         icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661028060/icon_seth_jopwc9.svg",
//         network: "Ethereum",
//         address: ""
//     },
//     {
//         name: "sATOM",
//         type: "coin",
//         icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661030372/icon_satom_j45ol1.svg",
//         network: "Cosmos Hub",
//         address: ""
//     },
//     {
//         name: "sXMR",
//         type: "bridged",
//         icon: "https://res.cloudinary.com/drgbtjcgt/image/upload/v1661030438/icon_sxmr_var4mw.svg",
//         network: "Monero",
//         address: ""
//     }
// ];

export type Token = {
    details: TokenDetails
    permit: Permit
    isImported: boolean
}

export type Collection = {
    permit: Permit
    details: CollectionDetails
}

export type Snip721Token = {
    name: string
    tokenId: string
    images: string[]
}

type AssetsState = {
    assets: {
        snip20: {
            tokens: Token[]
            addToken: (token: Token) => void
            removeToken: (address: string) => void
            updateToken: (token: Token) => void
        }
        snip721: {
            collections: Collection[]
            addCollection: (collection: Collection) => void
            removeCollection: (address: string) => void
            updateCollection: (collection: Collection) => void
        }
    }
}

const handleTokenUpdate = (newToken: Token, tokens: Token[]) => {
    const filteredTokens = tokens.filter((token) => token.details.contract.address !== newToken.details.contract.address);
    filteredTokens.push(newToken);
    return filteredTokens;
};

const handleCollectionUpdate = (newCollection: Collection, collections: Collection[]) => {
    const filteredCollections = collections.filter(
        (collection) => collection.details.contract.address !== newCollection.details.contract.address
    );
    filteredCollections.push(newCollection);
    return filteredCollections;
};

const assetStore =
    (set) => ({
        assets: {
            snip20: {
                tokens: [
                    {
                        details: assets.sscrt,
                        isImported: false,
                        permit: null
                    },
                    {
                        details: assets.test,
                        isImported: false,
                        permit: null
                    }
                ],
                addToken: (token: Token) =>
                    set((state: Draft<AssetsState>) => {
                        state.assets.snip20.tokens = [
                            ...state.assets.snip20.tokens,
                            token
                        ]
                    }
                ),
                removeToken: (address: string) =>
                    set((state: Draft<AssetsState>) => {
                        state.assets.snip20.tokens = state.assets.snip20.tokens.filter(
                            (token) => token.details.contract.address !== address
                        )
                    }
                ),
                updateToken: (token: Token) => set((state: Draft<AssetsState>) => {
                    state.assets.snip20.tokens = handleTokenUpdate(token, state.assets.snip20.tokens)
                })
            },
            snip721: {
                collections: [
                    {
                        permit: undefined,
                        details: assets.test_collection
                    }
                ],
                addCollection: (collection: Collection) =>
                    set((state: Draft<AssetsState>) => {
                            state.assets.snip721.collections = [
                                ...state.assets.snip721.collections,
                                collection
                            ]
                        }
                    ),
                removeCollection: (address: string) =>
                    set((state: Draft<AssetsState>) => {
                        state.assets.snip721.collections = state.assets.snip721.collections.filter(
                                (collection) => collection.details.contract.address !== address
                            )
                        }
                    ),
                updateCollection: (collection: Collection) => set((state: Draft<AssetsState>) => {
                    state.assets.snip721.collections = handleCollectionUpdate(collection, state.assets.snip721.collections)
                })
            }
        }
    }
);

const usePersistedAssetStore = create<AssetsState>()((
    persist(
        immer(assetStore),
        {
            name: "asset-store",
            merge: (persistedState, currentState) =>
                mergeDeepLeft(persistedState, currentState)
        }
    )
));

const emptyAssetsState = {
    assets: {
        snip20: {
            tokens: [],
            addToken: () => { return },
            removeToken: () => { return },
            updateToken: () => { return },
        },
        snip721: {
            collections: [],
            addCollection: () => { return },
            removeCollection: () => { return },
            updateCollection: () => { return },
        }
    },
};

export const useAssetStore = ((selector, compare) => {
    const store = usePersistedAssetStore(selector, compare);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => setHydrated(true), []);
    return hydrated ? store : selector(emptyAssetsState);
}) as typeof usePersistedAssetStore;