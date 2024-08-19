import React from 'react'

const Card = ({card}) => {
  return (
    <div className='col-span-12 sm:col-span-6 bg-gray-100 border border-gray-300 rounded-md'>
        <div className='card-header px-4 pt-4 pb-2 border-b border-gray-300'>
            <h2 className='text-gray-600 font-bold'>{card.title}</h2>
        </div>
        <div className='card-content px-4 pt-4 pb-8'>
            <p className='text-gray-700'>{card.description}</p>
        </div>
    </div>
  )
}

export default Card