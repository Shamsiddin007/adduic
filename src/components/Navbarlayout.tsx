
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './style.module.css'
import Logo from '/public/icons/logo.svg'

import JoinUsModal from '@/components/JoinUs';


const Navbarlayout = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isscrolled, setScrolled] = useState(false);
    const [isactive, setActive] = useState(false);


    const handleActiveLang = () => {
        setActive(!isactive)
    }

    useEffect(() => {
        const handleScrolled = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScrolled)

        return () => {
            window.removeEventListener('scroll', handleScrolled)
        }

    }, [])

    return (

        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isscrolled ? styles.activeScrolled : ''}`}>
            <nav className='container mx-auto max-w-screen-xl flex justify-between items-center pt-10 relative top-0 left-0'>
                <Link href="/"><Image width={parseInt("160px")} height={parseInt("16px")} src={Logo} alt='Logo UIC Games' /></Link>
                <ul className='flex items-center gap-[22px]'>
                    <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="/about" replace>About us</Link></li>
                    <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="/portfolio" replace>Portfolio</Link></li>
                    <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="/praktikum" replace>Praktikum</Link></li>
                    <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="/service-us" replace>Services</Link></li>
                    <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="/blog" replace>Blogs</Link></li>
                </ul>
                <article className='flex items-center gap-4'>
                    <button className='py-[8px] px-[13px] bg-[#3375F6] rounded-[140px] text-[14px] text-[#FFFFFF] font-medium'>Contact us</button>
                    <button className='py-[8px] px-[15px] bg-[#2b2c2d] rounded-[140px] text-[14px] text-[#FFFFFF]'>Join us</button>
                    {isModalOpen && <JoinUsModal onClose={() => setIsModalOpen(false)} />}
                    <article className='flex gap-2 items-center cursor-pointer' onClick={handleActiveLang}>
                        <p className='text-[14px] text-[white] font-medium uppercase '>eng</p>
                        <Image className={`${isactive ? 'rotate-180' : 'rotate-0'} transition-all duration-300`} width={parseInt("12px")} height={parseInt("6px")} src="/icons/arrow.png" alt='Arrow icons' />
                    </article>
                </article>
               {isactive && (
                    <div className=' absolute right-0 -bottom-14 w-[60px] flex flex-col gap-2 bg-cyan-300'>
                        <p className='text-[14px] text-[white] font-medium uppercase cursor-pointer'>uz</p>
                        <p className='text-[14px] text-[white] font-medium uppercase cursor-pointer'>ru</p>
                    </div>
               )}            
            </nav>
        </div>
    );
};

export default Navbarlayout;
