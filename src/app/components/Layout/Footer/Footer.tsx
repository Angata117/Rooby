import Socials from './Socials';
import { getFooterData } from '../../static-data/homeData';
import copyright from '/public/icons/footer/Copyright.svg';
import language from '/public/icons/footer/ic_language.svg';
import arrow_down from '/public/icons/footer/arrow_down.svg';
import Image from 'next/image'
const list = getFooterData();
const Footer = () => {
  return (
<footer className='container-custom mx-auto px-4 md:px-10 xl:px-32 py-10 md:py-32'>
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
        <div className='flex items-center mt-5 md:mt-0'>
            <Image src={language} alt='language' className='mr-2'></Image>
            <p className='font-semibold font-inter text-[14px] tracking-[0.2px]'>English</p>
            <Image src={arrow_down} alt='arrow_down'></Image>
        </div>
    </div>
</footer>

  )
}

export default Footer