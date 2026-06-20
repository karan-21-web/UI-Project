import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col'     >
            <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div className=' mt-auto' >
                <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sequi eum eius.</p>
                <div className=' flex justify-between mt-auto'>
                    <button className='bg-blue-500 rounded-full text-white px-7 py-3 font-medium'> {props.tag}</button>
                    <button className='bg-blue-500 rounded-full text-white px-4 py-3 font-semibold'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent
