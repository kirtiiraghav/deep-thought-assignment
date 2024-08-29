import React from 'react'
import arrowCurveLeftDown from '../../assests/images/arrowCurveLeftDown.svg'
import arrowCurveLeftRight from '../../assests/images/arrowCurveLeftRight.svg'
import arrowExpand from '../../assests/images/arrowExpand.svg'

export default function ArticleForm() {
  return (
    <div className='px-4 pt-4'>
        <label className='w-full' htmlFor="title">Title</label>
        <textarea rows={1}  className='w-full shadow-xl bg-[#FCFBFB] rounded-lg px-2 py-1' name="" id="title"></textarea>

        <label htmlFor="content">Content</label>
        <div className=' rounded-t-lg mb-1 shadow-lg w-full px-2 py-2 text-sm bg-[#FCFBFB] text-[#616161]'>
            <ul className='flex gap-2 flex-wrap'>
                <li className='cursor-pointer'>File</li>
                <li className='cursor-pointer'>Edit</li>
                <li className='cursor-pointer'>View</li>
                <li className='cursor-pointer'>Insert</li>
                <li className='cursor-pointer'>Format</li>
                <li className='cursor-pointer'>Tools</li>
                <li className='cursor-pointer'>Table</li>
                <li className='cursor-pointer'>Help</li>
            </ul>
            <ul className='flex gap-2 mt-2'>
                <li className='cursor-pointer'><img src={arrowCurveLeftRight} alt="" /></li>
                <li className='cursor-pointer'><img src={arrowCurveLeftDown} alt="" /></li>
                <li className='cursor-pointer'><img src={arrowExpand} alt="" /></li>
                <span className='bg-[#EBEBEB] px-2 text-xs'>Paragraph</span>
                <ul className='cursor-pointer flex gap-1 items-center'>
                    <li className='h-1 w-1 rounded-[50%] bg-[#616161]'></li>
                    <li className='h-1 w-1 rounded-[50%] bg-[#616161]'></li>
                    <li className='h-1 w-1 rounded-[50%] bg-[#616161]'></li>
                </ul>
            </ul>
        </div>
        <textarea rows={5} className='w-full bg-[#FCFBFB] rounded-b-lg shadow-xl px-2 py-1 ' name="" id="content"></textarea>
    </div>
  )
}
