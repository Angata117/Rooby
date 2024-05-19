import Image from 'next/image';
import arrowRight from '/public/green_arrow_right.svg';
import { getFeedbackData } from '@/app/components/static-data/homeData';
import Card from './Card';
const cards = getFeedbackData();

const Feedback = () => {
    return (
        <section className='flex flex-col max-sm:p-5 p-10 md:p-20'>
            <div className='flex max-sm:flex-col justify-between max-sm:items-start  items-end'>
                <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-normal md:leading-[58px] tracking-[-0.67px]}
                 max-sm:w-full w-[50%]">
                    We love our Customers and They love us too
                </h1>
                <a href='#' className='font-inter font-medium text-[20px] flex tracking-[0.43px]'>
                    See all <Image src={arrowRight} alt="arrow right" ></Image></a>
            </div>
            <div className='flex justify-between max-md:flex-col '>
                {cards.map((card) => (
                    <Card key={card.id} card={card}></Card>
                ))}
            </div>
        </section>
    )
}

export default Feedback