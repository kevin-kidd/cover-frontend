import create from 'zustand'

interface HomeState {
  listingToggleActive: boolean,
  tokenToggleActive: boolean,
  loading: boolean,
  setLoading: (by: boolean) => void,
  listingToggle: () => void,
  tokenToggle: () => void
}

export const useHomeStore = create<HomeState>()((set) => ({
  listingToggleActive: true,
  tokenToggleActive: true,
  loading: true,
  setLoading: (by) => set((state) => ({ loading: by })),
  listingToggle: () => set((state) => ({ listingToggleActive: !state.listingToggleActive })),
  tokenToggle: () => set((state) => ({ tokenToggleActive: !state.tokenToggleActive })),
}))