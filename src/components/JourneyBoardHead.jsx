import React from 'react'
import { projectData } from '../../projectData'

export default function JourneyBoardHead() {
    const data = projectData
    
    return (
        <div className='font-poppins  mb-10'>
            <div className='flex justify-between '>
                <h1 className='text-[#0029FF] font-bold text-lg sm:text-2xl mt-12 sm:mt-16 media1200:mt-6 mb-8'>{data.title}</h1>
                <button className='bg-[#0029FF] text-white rounded sm:rounded-2xl p-1 sm:px-4 sm:py-2 self-center text-xs sm:text-sm'>Submit task</button>
            </div>
            <div className='bg-[#E9ECEF] rounded-md p-5'>
                <h3 className='font-semibold text-xl pb-3'>{data.tasks[0].task_title}</h3>
                <p className='text-sm'>{data.tasks[0].task_description}</p>
            </div>
        </div>

    )
}
