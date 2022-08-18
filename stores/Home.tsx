import create from 'zustand'

export type Listing = {
  isPartiallyFunded?: boolean
  borrowing?: {
    type: string
    amount: number
    image?: string
    icon?: string
    name: string
    estimatedValue?: number
  },
  lending?: {
    type: string
    estimatedValue?: number
    amount: number
    image: string
    icon?: string
    total?: number
    name: string
  },
  collateral: {
    type: string
    name: string
    images: string[]
    icon?: string
    amount: number
  },
  duration: string
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

const emptyLoanListing = {
  isPartiallyFunded: false,
  lending: {
    type: "",
    image: "",
    amount: 0,
    name: ""
  },
  collateral: {
    type: "",
    images: [],
    name: "",
    amount: 0
  },
  duration: "",
  returnPercentage: 0
};
const emptyBorrowListing = {
  borrowing: {
    type: "",
    amount: 0,
    name: "",
  },
  collateral: {
    type: "",
    name: "",
    images: [],
    amount: 0
  },
  duration: "",
  returnPercentage: 0
};
let emptyLoans: Listing[] = [emptyLoanListing, emptyLoanListing, emptyLoanListing, emptyLoanListing];
let emptyBorrows: Listing[] = [emptyBorrowListing, emptyBorrowListing, emptyBorrowListing, emptyBorrowListing];

export const useHomeStore = create<HomeState>()((set) => ({
  listingToggleActive: true,
  tokenToggleActive: true,
  loading: true,
  setLoading: (by) => set(() => ({ loading: by })),
  listingToggle: () => set((state) => ({ listingToggleActive: !state.listingToggleActive })),
  tokenToggle: () => set((state) => ({ tokenToggleActive: !state.tokenToggleActive })),
  setFeaturedListings: (by: Listing[]) => set(() => ({ featuredListings: by })),
  setSelectedListings: (by: Listing[]) => set(() => ({ selectedListings: by })),
  featuredListings: emptyLoans,
  selectedListings: emptyBorrows
}));