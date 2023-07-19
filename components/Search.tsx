"use client"

import React from 'react'
import Button from './ui/Button'
import { SearchCheck, ShoppingBag } from 'lucide-react'
import SearchBar from './ui/SearchBar'

const Search = () => {
  return (
    <div className='ml-auto flex items-center gap-x-2'>
        <SearchBar className='flex items-center rounded-full bg-gray-800 py-2 px-4'>
            <SearchCheck
                size={20}
                color='white'
            />

        </SearchBar>
    </div>
  )
}

export default Search