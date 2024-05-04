import React from 'react'
import ModelCard from './ModelCard'

const AllModels = ({data}) => {
  return (
    <div className='flex flex-wrap gap-4 justify-center mt-5 scroll-smooth'>
      {data?.map((model) => (
        <ModelCard key={model.id} data={model} />
      ))}
    </div>
  )
}

export default AllModels
