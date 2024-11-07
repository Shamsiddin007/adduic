"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '@/components/style.module.css'


const Navbarlayout = () => {

    const [isscrolled, setScrolled] = useState(false)


    useEffect(()=> {
        const handleScrolled = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        };
        window.addEventListener('scroll', handleScrolled)

        return() => {
            window.removeEventListener('scroll', handleScrolled)
        }

    }, [])


  return (

    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isscrolled ? styles.activeScrolled : ''}`}>
        <nav className='container mx-auto max-w-screen-xl flex justify-between items-center pt-10'>
            <Link href="/"><Image width={parseInt("160px")} height={parseInt("16px")} src="/logo.png" alt='Logo UIC Games'/></Link>
            <ul className='flex items-center gap-[22px]'>
                <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="home">Home</Link></li>
                <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="about">About us</Link></li>
                <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="portfolio">Portfolio</Link></li>
                <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="praktikum">Praktikum</Link></li>
                <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="service-us">Services</Link></li>
                <li className='text-[12px] font-medium text-[#FFFFFF]'><Link href="blog">Blogs</Link></li>
            </ul>
            <article className='flex items-center gap-4'>
                <button className='py-[8px] px-[13px] bg-[#3375F6] rounded-[140px] text-[14px] text-[#FFFFFF] font-medium'>Contact us</button>
                <button className='py-[8px] px-[15px] bg-[#2b2c2d] rounded-[140px] text-[14px] text-[#FFFFFF]'>Join us</button>
                <article className='flex gap-2 items-center'>
                    <p className='text-[14px] text-[white] font-medium uppercase '>eng</p>
                    <Image width={parseInt("12px")} height={parseInt("6px")} src="/icons/arrow.png" alt='Arrow icons'/>
                </article>
            </article>
        </nav>
    </div>
  );
};

export default Navbarlayout;
