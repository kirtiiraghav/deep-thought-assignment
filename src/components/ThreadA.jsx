import React from 'react'
import idea from '../../assests/images/idea.svg'
import msg from '../../assests/images/msg.svg'
import doubt from '../../assests/images/doubt.svg'
import lotus from '../../assests/images/lotus.svg'

export default function ThreadA() {
    return (
        <div className='font-poppins '>
            <div className='bg-[#FEFFC0] py-2 px-2 font-bold'>Thread A</div>
            <div className='px-4 py-4 gap-2 flex justify-between'>
                <div className='bg-[#F6F6F6] rounded-xl max-w-[45%] text-sm py-1'>&nbsp; Sub thread 1 <br />
                    <input className='rounded-xl py-1 px-2 shadow-lg h-[70px]' type="text" placeholder='Enter text here' />
                </div>
                <div className='bg-[#F6F6F6] rounded-xl max-w-[45%] text-sm py-1'>&nbsp; Sub Interpretation 1 <br />
                    <input className='rounded-xl py-1 px-2  shadow-lg h-[70px]' type="text" placeholder='Enter text here' />
                </div>
            </div>

            <div className='flex gap-2 justify-evenly px-4 py-4'>
                <img className='cursor-pointer' src={idea} alt="" />
                <img className='cursor-pointer' src={msg} alt="" />
                <img className='cursor-pointer' src={doubt} alt="" />
                <img className='cursor-pointer' src={lotus} alt="" />
                <select className='shadow-lg px-1 py-2 rounded-xl outline-none' name="" id="">
                    <option hidden>Select Category</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
                <select className='shadow-lg px-1 py-2 rounded-xl outline-none' name="" id="">
                    <option hidden>Select Process</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>

            <div className='px-4 py-4'>
                <button className='px-3 py-2 bg-[#0029FF] text-white rounded-xl text-sm mb-6'>+ Sub-thread</button>
                <div className='bg-[#F6F6F6] rounded-xl max-w-[100%] text-sm pt-1'>&nbsp; Summary for Thread A <br />
                    <textarea className='mt-1 rounded-xl py-1 px-2 shadow-lg h-[70px] w-full' type="text" placeholder='Enter text here' />
                </div>
            </div>
        </div>
    )
}
