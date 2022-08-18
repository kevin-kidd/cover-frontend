import create from "zustand";
import { persist } from "zustand/middleware";
import {useEffect, useState} from "react";

type Config = {
    toggles: {
        tokenToggle: string;
        listingToggle: string;
        myTokensToggle: string;
        createListingToggle: string;
        hideZeroBalances: boolean;
    }
};

type Wallet = {
    connected: boolean
    address?: string
    provider?: string
};

type PersistentState = {
    config: Config
    wallet: Wallet
    updateWallet: (payload: Wallet) => void
    updateConfig: (payload: Object) => void
};

const initialConfig = {
    toggles: {
        tokenToggle: "NFTs",
        listingToggle: "Lend",
        myTokensToggle: "Tokens",
        createListingToggle: "Lending",
        hideZeroBalances: true
    }
};

const persistentStore = (set) => ({
    config: initialConfig,
    wallet: {
        connected: false,
        address: ""
    },
    updateWallet: (payload: Wallet) => set({
        wallet: {
            connected: payload.connected,
            address: payload.address,
            provider: payload.provider
        }
    }),
    updateConfig: (payload: Object) => set((state) => ({
        config: {
            ...state.config,
            ...payload
        }
    }))
});

const usePersistedStore = create((
    persist<PersistentState>(
        persistentStore,
        {
            name: "persistent-state"
        }
    )
));

const emptyPersistentState: PersistentState = {
    config: {
        toggles: {
            tokenToggle: "NFTs",
            listingToggle: "Lend",
            myTokensToggle: "My NFTs",
            createListingToggle: "Lending",
            hideZeroBalances: true
        }
    },
    wallet: {
        connected: false,
        address: undefined
    },
    updateConfig: () => { return },
    updateWallet: () => { return }
};

export const usePersistentStore = ((selector, compare) => {
    const store = usePersistedStore(selector, compare);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => setHydrated(true), []);
    return hydrated ? store : selector(emptyPersistentState);
}) as typeof usePersistedStore;