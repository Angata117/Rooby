import Image, { StaticImageData } from 'next/image'

function Card({
    card,
}: {
    card: {
        id: number,
        icon: StaticImageData,
        heading: string,
        subHeading: string,
        description: string,
        authorName: string,
        position: string
    };
}) {
    return (
        <section className='flex flex-col md:flex-row  border-t border-t-[#787878] py-5 px-5 md:px-10 mt-10'>
            <div className='flex flex-col justify-start w-full md:w-[40%] pt-10 '>
                <h1 className='font-inter font-bold text-[48px] md:text-[64px] lg:text-[72px] leading-[74px] tracking-[-1px] '>{card.heading}</h1>
                <p className='flex font-inter font-bold text-xl mt-3'>{card.subHeading}</p>
            </div>
            <div className='flex flex-col w-full md:w-[70%] pt-10 '>
                <p className='flex font-inter font-medium text-[18px] md:text-[24px] lg:text-[30px] leading-normal md:leading-[42px] tracking[-0.44px]'>{card.description}</p>
                <div className='flex flex-row mt-5' >
                    <Image src={card.icon} alt={card.subHeading}></Image>
                    <div className='flex flex-col text-[16px] m-2 items-start'>
                        <p className='font-inter font-bold '>{card.authorName}</p>
                        <p className=' font-inter text-[#404040] '>{card.position}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Card