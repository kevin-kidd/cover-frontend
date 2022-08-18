import {FunctionComponent, ReactNode} from "react";

export type MenuItem = {
    title: string
    walletRequired: boolean
    href: string
    icon: {
        viewBox: string
        path: ReactNode
    }
}

export type HeaderProps = {
    items: FunctionComponent[]
};

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
};