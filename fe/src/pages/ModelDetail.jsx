import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ModelContext } from '../context/ModelContext';

const ModelDetail = () => {
    const {id} = useParams();
    const { modelData } = useContext(ModelContext);

    const selectedAIModel = modelData?.find((model) => model.model_name === id) || null;
  return (
    <>
    {selectedAIModel && (
        <div className='flex flex-col items-center'>
            <div className='my-14'>
                <h1 className='text-4xl font-semibold underline'>{selectedAIModel.model_name.toUpperCase()}</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
            <div className='flex justify-center items-center'>
                    <img className='max-w-full h-auto' src={selectedAIModel.img} alt={selectedAIModel.model_name} />
                </div>
                <div className='flex justify-center items-center flex-wrap flex-col bg-white text-stone-600 sm:mt-8 sm:p-4 sm:mb-20 md:p-6 lg:p-8 sm:text-xl md:text-4xl'>
                    <p className='flex flex-wrap'>{selectedAIModel.description}</p>
                </div>
            </div>
        </div>
    )
    }
    </>
  )
}

export default ModelDetail
