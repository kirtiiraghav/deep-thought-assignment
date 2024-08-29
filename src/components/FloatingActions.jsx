import React from 'react'
import questionMark from '../../assests/images/questionMark.svg'
import meeting from '../../assests/images/meeting.svg'
import schedule from '../../assests/images/schedule.svg'

export default function FloatingActions() {
    return (
        <div className='fixed right-4 bottom-4 flex flex-col gap-3'>
            <div className='w-12 h-12 rounded-[50%] bg-[#0029FF] cursor-pointer flex justify-center items-center'>
                <img className='w-[50%]' src={questionMark} alt="" />
            </div>
            <div className='w-12 h-12 rounded-[50%] bg-[#0029FF] cursor-pointer flex justify-center items-center'>
                <img className='w-[50%]' src={meeting} alt="" />
            </div>
            <div className='w-12 h-12 rounded-[50%] bg-[#0029FF] cursor-pointer flex justify-center items-center'>
                <img className='w-[50%]' src={schedule} alt="" />
            </div>
        </div>
    )
}
