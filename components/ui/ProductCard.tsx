"use client"
import { Product } from '@medusajs/medusa'
import Image from 'next/image'
import React, { MouseEventHandler, use } from 'react'
import IconButton from './IconButton'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './Currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'

interface ProductCardProps {
    data: any
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {
    
    const router = useRouter()
    const handleClick = () => {
        router.push(`/product/${data.id}`)
    }

    const PreviewModal = usePreviewModal();
    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        PreviewModal.onOpen(data);
    }

    const cart = useCart();
    const addToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        cart.addItem(data);
    }

  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
        {/* Images */}
        <div className='aspect-sqaure rounded-xl bg-gray-100 relative'>
            <Image 
                alt='image'
                src={data?.thumbnail}
                width={400}
                className='aspect-sqaure rounded-xl object-cover h-[300px]'
                height={400}

            />
            <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
                <div className='flex gap-x-6 justify-center'>
                    <IconButton 
                        onClick={onPreview}
                        icon={<Expand size={20} className='text-gray-600'/>}
                    />
                    <IconButton 
                        onClick={addToCart}
                        icon={<ShoppingCart size={20} className='text-gray-600'/>}
                    />
                </div>
            </div>
        </div>
        {/* Description */}
        <div>
            <p className='font-semibold text-lg'>{data.name}</p>
            <p className='text-sm text-gray-500'>{data.title}</p>
        </div>
        {/* price */}
        <div className='flex items-center justify-between'>
            {/* <Currency value={data?.variant[0].prices[0].amount} /> */}
        </div>
    </div>
  )
}

export default ProductCard