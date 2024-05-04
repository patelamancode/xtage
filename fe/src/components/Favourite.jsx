import React from 'react'
import ModelCard from './ModelCard'

const Favourite = ({data}) => {
    // data whose subscriber count > 10000 in favourite section
    const favouriteAIModels = data?.filter((model) => Number(model.subscriber_count) > 10000)
  return (
    <div className='flex flex-wrap gap-4 justify-center mt-5'>
      {favouriteAIModels?.map((model) => (
        <ModelCard key={model.id} data={model} />
      ))}
    </div>
  )
}

export default Favourite
