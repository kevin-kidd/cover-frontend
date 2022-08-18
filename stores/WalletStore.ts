import {SecretNetworkClient} from "secretjs";
import create from "zustand";

type Wallet = {
    client?: SecretNetworkClient
    balance: number
    setClient: (by: SecretNetworkClient) => void
    setBalance: (by: number) => void
}

export const useWalletStore = create<Wallet>()(
    (set) => ({
        balance: -1,
        setClient: (by: SecretNetworkClient) =>
            set(() => ({
                client: by
            })
        ),
        setBalance: (by: number) =>
            set(() => ({
                balance: by
            })
        )
    })
);