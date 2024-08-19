import React, { useEffect, useState } from 'react'
import { useCard } from '../context/cardContext';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const { getFilteredCard } = useCard();

    useEffect(() => {
        getFilteredCard(value)
    }, [value]);

    return (
        <div className='relative w-[80%] sm:w-[65%] md:w-[50%] lg:w-[40%]'>
            <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none"><span className='h-10 w-8 text-gray-500 text-2xl'>{"→"}</span></div>
            <input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder='Search' className='w-full pr-10 p-3 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400' />
        </div>
    )
}

export default SearchBar;