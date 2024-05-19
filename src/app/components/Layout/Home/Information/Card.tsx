import Image, { StaticImageData } from 'next/image';
import check from "/public/icons/Information/check.svg";
interface Information {
    tag: string;
    heading: string;
    description: string;
    list: { id: number; text: string }[];
    img: StaticImageData;
}
function Card({ info }: { info: Information }) {
    return (
        <div className='flex flex-col lg:flex-row justify-between p-10 border-t border-gray-700'>
            <div className='flex flex-col lg:w-1/2'>

                <p className='block uppercase font-inter rounded-lg tracking-[1.4px] 
                bg-card-yellow w-fit py-1 px-2 font-bold'>{info.tag}</p>

                <h2 className='font-inter font-bold text-2xl sm:text-3xl md:text-4xl 
                lg:text-5xl tracking-[-0.67px] leading-normal md:leading-[58px] lg:w-[80%] mt-5'>{info.heading}</h2>

                <p className='lg:w-[80%] font-inter text-base md:text-lg leading-normal md:leading-[28px] mt-5'>{info.description}</p>
                <ul className='flex flex-col mt-5 lg:w-[80%]'>
                    {info.list.map((li, i) => (
                        <div key={li.id} className='flex items-center mt-3'>
                            <Image src={check} alt="check" className='mr-2'></Image>
                            <li className='font-inter text-base md:text-lg leading-normal md:leading-[28px] tracking-[0.2px] '>
                                {li.text}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='mt-10 lg:mt-0 lg:w-1/2  '>
                <Image src={info.img} alt={info.heading} className=''></Image>
            </div>
        </div>

    )
}
export default Card