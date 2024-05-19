import Image, { StaticImageData } from 'next/image';

function Card({
  card,
}: {
  card: {
    id: number;
    icon: StaticImageData;
    text: string;
    authorName: string;
    authorPosition: string;
  };
}) {
  return (
    <figure className=" flex flex-col py-5 md:py-10 w-full sm:w-[70%] md:w-[30%] ">
      <p className='flex top-0 left-0 font-inter font-bold text-[70px] md:text-[120px] leading-[80px] md:leading-[120px]
      tracking-[-1.67px] text-[#00CC61]'>“</p>
      <div className="border-t  border-t-[#787878] py-2 md:py-4 items-center">
        <p className="mb-[14px] text-lg md:text-2xl font-medium tracking-[-0.32px] leading-[32px]">
          {card.text}
        </p>
      </div>
      <div className='flex flex-row md:mt-5 items-center ' >
          <Image src={card.icon} alt={card.authorName}></Image>
          <div className='flex flex-col text-[16px] m-2 items-start'>
            <p className='font-inter font-bold '>{card.authorName}</p>
            <p className=' font-inter text-[#404040] '>{card.authorPosition}</p>
          </div>
        </div>
    </figure>
  );
}

export default Card