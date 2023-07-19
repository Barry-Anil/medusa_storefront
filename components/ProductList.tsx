"use client"
import { Product } from '@medusajs/medusa'
import React from 'react'
import NoResult from './ui/NoResult'
import ProductCard from './ui/ProductCard'


interface ProductListProps {
    title: string,
    items: any
}


const ProductList: React.FC<ProductListProps> = ({title, items}) => {
    console.log(items,"items")
  return (
    <div className='space-y-4'>
        <h3 className='font-bold text-3xl'>{title}</h3>
        {items && items.length === 0 && <NoResult />}    
        <div className='grid drid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {items && items.map((item:any) => (
                <ProductCard key={item.id} data={item} />
            ))}
        </div>
    </div>
  )
}

export default ProductList