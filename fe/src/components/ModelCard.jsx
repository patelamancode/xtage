import React from 'react'
import { Link } from 'react-router-dom';

const ModelCard = (data) => {
  const {model_name, img} = data.data;

  return (
    
      <div className="max-w-xs rounded-xl overflow-hidden shadow-lg cursor-pointer">
        <Link className='appearance-none no-underline' to={`/models/${model_name}`} >
          <img className="w-full h-[70%] object-fill object-center" src={img} alt="Model" />
        </Link>
        <div className="px-6 py-4">
            <div className="font-bold text-xl sm:text-sm md:text-lg lg:text-xl xl:text-xl mb-2">{model_name}</div>
        </div>
    </div>
    
  )
}

export default ModelCard
