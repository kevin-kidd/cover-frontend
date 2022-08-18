import create from "zustand";
import { persist } from "zustand/middleware";
import {useEffect, useState} from "react";

type Config = {
    home: {
        tokenToggle: string;
        listingToggle: string;
    }
};

type Wallet = {
    connected: boolean
    address?: string
};

type PersistentState = {
    config: Config
    wallet: Wallet
    updateWallet: (payload: Wallet) => void
};

const initialConfig = {
    home: {
        tokenToggle: "NFTs",
        listingToggle: "Lend"
    }
};

const store = (set) => ({
    config: initialConfig,
    wallet: {
        connected: false,
        address: ""
    },
    updateWallet: (payload: Wallet) => set({
        wallet: {
            connected: payload.connected,
            address: payload.address
        }
    })
});

const usePersistedStore = create((
    persist<PersistentState>(
        store,
        {
            name: "persistent-state"
        }
    )
));

const emptyState: PersistentState = {
    config: {
        home: {
            tokenToggle: undefined,
            listingToggle: undefined
        }
    },
    wallet: {
        connected: true,
        address: undefined
    },
    updateWallet: () => { return }
};

export const usePersistentStore = ((selector, compare) => {
    const store = usePersistedStore(selector, compare);
    const [hydrated, setHydrated] = useState(false);
    useEffect(() => setHydrated(true), []);
    return hydrated ? store : selector(emptyState);
}) as typeof usePersistedStore;