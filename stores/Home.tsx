import create from 'zustand'

export type Listing = {
  listingType: string
  isPartiallyFunded?: boolean
  duration: string
  returnPercentage: number
  borrowing?: {
    tokenType: string
    amount: number
    image?: string
    icon?: string
    name: string
    estimatedValue?: number
  },
  lending?: {
    tokenType: string
    estimatedValue?: number
    amount: number
    image: string
    icon?: string
    total?: number
    name: string
  },
  collateral: {
    tokenType: string
    name: string
    images: string[]
    icon?: string
    amount: number
  }
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
  toggleListing: () => void,
  toggleToken: () => void
}

const emptyLoanListing = {
  listingType: "lend",
  isPartiallyFunded: false,
  lending: {
    tokenType: "",
    image: "",
    amount: 0,
    name: ""
  },
  collateral: {
    tokenType: "",
    images: [],
    name: "",
    amount: 0
  },
  duration: "",
  returnPercentage: 0
};
const emptyBorrowListing = {
  listingType: "borrow",
  borrowing: {
    tokenType: "",
    amount: 0,
    name: "",
  },
  collateral: {
    tokenType: "",
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
  toggleListing: () => set((state) => ({ listingToggleActive: !state.listingToggleActive })),
  toggleToken: () => set((state) => ({ tokenToggleActive: !state.tokenToggleActive })),
  setFeaturedListings: (by: Listing[]) => set(() => ({ featuredListings: by })),
  setSelectedListings: (by: Listing[]) => set(() => ({ selectedListings: by })),
  featuredListings: emptyLoans,
  selectedListings: emptyBorrows
}));