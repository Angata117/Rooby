"use client"
import Socials from './Socials';
import { getFooterData } from '../../static-data/homeData';
import copyright from '/public/icons/footer/Copyright.svg';
import language from '/public/icons/footer/ic_language.svg';
import arrow_down from '/public/icons/footer/arrow_down.svg';
import Image from 'next/image'
import { useState } from 'react'
const list = getFooterData();
const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleDropdown = () => setIsOpen(!isOpen);
    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    }
    return (
        <footer className='w-full bg-white'>
            <div className='container-custom mx-auto  px-4 md:px-10 xl:px-32 py-10 md:py-32'>
                <div className='flex flex-col lg:flex-row items-start '>
                    <Socials></Socials>
                    <ul className='grid grid-cols-2  lg:grid-cols-4 gap-10 w-full mt-5 lg:mt-0'>
                        {list.map((item, index) => {
                            return (
                                <li key={index} className='flex flex-col gap-5'>
                                    <p className='font-inter font-bold'>{item.header}</p>
                                    <ul>
                                        {item.items.map((subitem, subindex) => {
                                            return (
                                                <li key={subindex} className='font-inter text-[14px] leading-[34px] tracking-[0.2px] py-1'>{subitem}</li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-between lg:mt-20 border-t border-gray-400 mt-10 pt-5 md:pt-10'>
                    <Image src={copyright} alt='copyright' className='font-inter text-[14px] tracking-[0.2px] text-[#404040] justify-start'></Image>
                    <div className='flex flex-wrap justify-center gap-5 mt-5 md:mt-0'>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                    </div>
                    <div className='relative'>
                        <div className='flex items-center mt-5 md:mt-0 cursor-pointer' onClick={toggleDropdown}>
                            <Image src={language} alt='language' className='mr-2' />
                            <p className='font-semibold font-inter text-[14px] tracking-[0.2px]'>{selectedLanguage}</p>
                            <Image src={arrow_down} alt='arrow_down' />
                        </div>
                        {isOpen && (
                            <div className='absolute max-sm:bottom-full max-sm:mb-[-2px] right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10'>
                                <div className='py-1'>
                                    <p className='block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer' onClick={() => selectLanguage('English')}>English</p>
                                    <p className='block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer' onClick={() => selectLanguage('Bulgarian')}>Bulgarian</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </footer >

    )
}

export default Footer