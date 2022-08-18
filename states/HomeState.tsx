import create from 'zustand'
import { FeaturedListings } from '../components/Home/FeaturedListings'

export interface Listing {
  isPartiallyFunded?: boolean,
  borrowing?: {
    type: string,
    amount: number,
    image?: string,
    icon?: string,
    name: string,
    estimatedValue?: number
  },
  lending?: {
    type: string,
    estimatedValue?: number,
    amount: number,
    image: string,
    icon?: string,
    total?: number,
    name: string
  },
  collateral: {
    type: string,
    name: string,
    image: string,
    icon?: string,
    amount: number
  },
  duration: string,
  returnPercentage: number
}

interface HomeState {
  listingToggleActive: boolean,
  tokenToggleActive: boolean,
  loading: boolean,
  featuredListings: Listing[],
  selectedListings: Listing[],
  setSelectedListings: (by: Listing[]) => void,
  setFeaturedListings: (by: Listing[]) => void,
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
  setFeaturedListings: (by: Listing[]) => set((state) => ({ featuredListings: by })),
  setSelectedListings: (by: Listing[]) => set((state) => ({ selectedListings: by })),
  featuredListings: [
    {
      isPartiallyFunded: false,
      lending: {
        type: "",
        image: "",
        amount: 0,
        name: ""
      },
      collateral: {
        type: "",
        image: "",
        name: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    },
    {
      isPartiallyFunded: false,
      lending: {
        type: "",
        image: "",
        amount: 0,
        name: ""
      },
      collateral: {
        type: "",
        image: "",
        name: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    },
    {
      isPartiallyFunded: false,
      lending: {
        type: "",
        image: "",
        amount: 0,
        name: ""
      },
      collateral: {
        type: "",
        image: "",
        name: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    },
    {
      isPartiallyFunded: false,
      lending: {
        type: "",
        image: "",
        amount: 0,
        name: ""
      },
      collateral: {
        type: "",
        name: "",
        image: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    }
  ],
  selectedListings: [
    {
      borrowing: {
        type: "",
        amount: 0,
        name: "",
      },
      collateral: {
        type: "",
        name: "",
        image: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    },
    {
      borrowing: {
        type: "",
        amount: 0,
        name: "",
      },
      collateral: {
        type: "",
        name: "",
        image: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    },
    {
      borrowing: {
        type: "",
        amount: 0,
        name: "",
      },
      collateral: {
        type: "",
        name: "",
        image: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    },
    {
      borrowing: {
        type: "",
        amount: 0,
        name: "",
      },
      collateral: {
        type: "",
        name: "",
        image: "",
        amount: 0
      },
      duration: "",
      returnPercentage: 0
    }
  ]
}))