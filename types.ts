import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"

export interface Billboard {
    id: string,
    label: string,
    imageUrl: string,
};

export interface Category {
    id: string,
    name: string,
    billboards: Billboard[],
}

export interface Product {
    variants: any;
    id: string,
    title: Category,
    name: string,
    price: string,
    size: Size;
    isFeatured: boolean,
    color: Color,
    image: any,
}

export interface Image {
    id: string,
    url: string,
}

export interface Color {
    id: string,
    name: string,
    value: string,
}

export interface Size {
    id: string;
    name: string;
    value: string;
  };




export type CollectionData = {
  id: string
  title: string
}

export type FeaturedProduct = {
  id: string
  title: string
  handle: string
  thumbnail?: string
}

export type StoreNavData = {
  collections: CollectionData[]
  hasMoreCollections: boolean
  featuredProducts: PricedProduct[]
}

