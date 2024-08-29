import React from 'react'
import logo from '../../assests/images/logo.svg'
import home from '../../assests/images/home.svg'
import tool from '../../assests/images/tool.svg'
import notification from '../../assests/images/notification.svg'
import userImg from '../../assests/images/userImg.svg'

export default function Header() {
    return (
        <header className='max-w-screen-xl mx-auto bg-[#F0F0F0] shadow-md '>
            <div className='px-2 py-2 sm:px-10 sm:py-4 flex justify-between items-center'>
                <div className='cursor-pointer'><a target='_blank' href="https://deepthought.education/">
                    <img className='w-[80%] sm:w-full' src={logo} alt="deep thought logo" />
                </a>
                </div>
                <div>
                    <ul className='flex gap-1 sm:gap-4 items-center'>
                        <li className='cursor-pointer'><img src={home} alt="home" /></li>
                        <li className='cursor-pointer'><img src={tool} alt="tool" /></li>
                        <li className='cursor-pointer relative'><img src={notification} alt="tool" /><span className='bg-[#FF2C55] h-2 w-2 rounded-[50%] absolute top-2 right-2'></span></li>
                        <li className='cursor-pointer'><img src={userImg} alt="" /></li>
                        <ul className='flex flex-col gap-1 cursor-pointer'>
                            <li className='bg-[#3683F0] h-1 w-1 rounded-[50%]'></li>
                            <li className='bg-[#3683F0] h-1 w-1 rounded-[50%]'></li>
                            <li className='bg-[#3683F0] h-1 w-1 rounded-[50%]'></li>
                        </ul>
                    </ul>
                </div>
            </div>
        </header>
    )
}
