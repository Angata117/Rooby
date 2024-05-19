import Card from './Card';
import { getNewsData } from '@/app/components/static-data/homeData';
import arrowRight from '/public/green_arrow_right.svg';
import Image from 'next/image';

const news = getNewsData();
const News = () => {
    return (
        <section className='flex flex-col  bg-white md:p-20 p-10 '>
            <div className='flex justify-between max-sm:flex-col items-baseline'>
                <h1 className="font-inter text-2xl sm:text-4xl lg:text-6xl font-bold leading-normal xl:leading-[74px] tracking-tighterest w-[60%]">What’s new at Roooby?</h1>
                <a href='#' className='font-inter font-medium  text-[16px] md:text-[20px] flex tracking-[0.43px] '>
                    See all <Image src={arrowRight} alt="arrow right" ></Image></a>
            </div>
            <div className='flex flex-row max-lg:flex-col gap-5 w-full  mt-10'>
                {news.map((item) => (
                    <Card key={item.id} card={item}></Card>
                ))}
            </div>
        </section>
    )
}

export default News