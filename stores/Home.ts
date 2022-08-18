import create from 'zustand'
import {Listing} from "../types/general";

export type HomeConfig = {
  id: number;
  tokenToggle: string;
  listingToggle: string;
}

type HomeState = {
  loading: boolean
  featuredListings: Listing[]
  selectedListings: Listing[]
  setSelectedListings: (by: Listing[]) => void
  setFeaturedListings: (by: Listing[]) => void
  setLoading: (by: boolean) => void
  toggles: {
    tokenType: string
    listingType: string
  }
  toggleListing: (by: string) => void
  toggleToken: (by: string) => void
}

const emptyLoanListing = {
  address: "",
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
  address: "",
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
  toggles: {
    tokenType: "NFTs",
    listingType: "Lend"
  },
  loading: true,
  setLoading: (by) => set(() => ({ loading: by })),
  toggleListing: (by: string) => set((state) => ({ toggles: { ...state.toggles, listingType: by } })),
  toggleToken: (by: string) => set((state) => ({ toggles: { ...state.toggles, tokenType: by } })),
  setFeaturedListings: (by: Listing[]) => set(() => ({ featuredListings: by })),
  setSelectedListings: (by: Listing[]) => set(() => ({ selectedListings: by })),
  featuredListings: emptyLoans,
  selectedListings: emptyBorrows
}));