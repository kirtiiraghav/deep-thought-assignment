import React from 'react'

export default function JourneyBoardHead() {
    return (
        <div className='font-poppins mb-10'>
            <div className='flex justify-between '>
                <h1 className='text-[#0029FF] font-bold text-2xl mt-6 mb-8'>Technical Project Management</h1>
                <button className='bg-[#0029FF] text-white rounded-2xl px-4 py-2 self-center text-sm'>Submit task</button>
            </div>
            <div className='bg-[#E9ECEF] rounded-md p-5'>
                <h3 className='font-semibold text-xl pb-3'>Explore the world of management</h3>
                <p className='text-sm'>As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
            </div>
        </div>

    )
}
