import create from 'zustand'

interface HomeState {
  listingToggleActive: boolean,
  tokenToggleActive: boolean,
  listingToggle: () => void,
  tokenToggle: () => void
}

export const useHomeStore = create<HomeState>()((set) => ({
  listingToggleActive: true,
  tokenToggleActive: true,
  listingToggle: () => set((state) => ({ listingToggleActive: !state.listingToggleActive })),
  tokenToggle: () => set((state) => ({ tokenToggleActive: !state.tokenToggleActive })),
}))