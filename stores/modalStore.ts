import create from "zustand";

interface Modals {
    name: string
    isOpen: boolean
    title: string
    setName: (by: string) => void
    setTitle: (by: string) => void
    setIsOpen: (by: boolean) => void
}

export const useModalStore = create<Modals>()(
    (set) => ({
        name: "",
        isOpen: false,
        title: "",
        setName: (by: string) => set(() => ({ name: by })),
        setTitle: (by: string) => set(() => ({ title: by })),
        setIsOpen: (by: boolean) => set(() => ({ isOpen: by })),
    })
);