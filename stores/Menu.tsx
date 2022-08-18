import create from 'zustand'

interface MenuState {
  isOpen: boolean
  walletConnected: boolean
  toggleMenu: () => void
  setOpen: (by: boolean) => void
  setWalletConnected: (by: boolean) => void
}

export const useMenuStore = create<MenuState>()((set) => ({
    isOpen: false,
    walletConnected: false,
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    setOpen: (by) => set(() => ({ isOpen: by })),
    setWalletConnected: (by) => set(() => ({ walletConnected: by }))
}));

