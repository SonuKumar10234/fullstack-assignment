import React from 'react'
import Card from './Card'
import { useCard } from '../context/cardContext'

const CardContainer = () => {
  const { filteredCard } = useCard();

  return (
    <div className='max-w-4xl mx-auto px-6 py-20 '>
      <div className={`grid ${filteredCard.length > 0 ? 'grid-cols-12' : 'text-center'}  gap-y-6 sm:gap-x-12 sm:gap-y-12`}>
        {filteredCard.length > 0 ? (
          filteredCard.map((card) => (
            <Card
              key={card._id}
              card={card}
            />
          ))
        ) : (
          <p>No cards found.</p>
        )}
      </div>
    </div>
  )
}

export default CardContainer