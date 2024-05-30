import Image from 'next/image';
import { getResultsData } from '@/app/components/static-data/homeData';
import Card from './Card';
const cards = getResultsData();
const Results = () => {
    return (
        <section className="w-full bg-white">
            <div className='p-10 md:p-20 container-custom mx-auto'>
                <h1 className="font-inter text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold leading-normal md:leading-[68px] pt-20 tracking-[-0.67px]">Real-life results and revenue</h1>
                <p className="font inter text-base md:text-lg text-[#3B3A40] mt-3">See how companies like yours have smashed their sales success goals</p>
                <ul className=''>
                    {cards.map((c) => (
                        <Card card={c} key={c.id}></Card>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Results