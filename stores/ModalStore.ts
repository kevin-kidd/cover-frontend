import create from "zustand";

type Modals = {
    name: string
    isOpen: boolean
    title: string
    asset?: {
        name: {
            wrapped: string
            unwrapped: string
        }
        address: string
    }
    setAsset: (by: { name: { wrapped: string, unwrapped: string }, address: string}) => void
    setName: (by: string) => void
    setTitle: (by: string) => void
    setIsOpen: (by: boolean) => void
}

export const useModalStore = create<Modals>()(
    (set) => ({
        name: "",
        isOpen: false,
        title: "",
        setAsset: (by: { name: { wrapped: string, unwrapped: string }, address: string}) => set(() => ({ asset: by })),
        setName: (by: string) => set(() => ({ name: by })),
        setTitle: (by: string) => set(() => ({ title: by })),
        setIsOpen: (by: boolean) => set(() => ({ isOpen: by })),
    })
);