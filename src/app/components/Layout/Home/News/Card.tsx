import Image, { StaticImageData } from "next/image";
function Card({
  card,
}: {
  card: {
    id: number;
    icon: StaticImageData;
    heading: string;
    type: string;
    date: string;
    author: string;
  };
}) {
  return (
    <section className="flex flex-col justify-start w-full">
      <p className="flex font-inter text-[14px] font-bold uppercase text-text-gray">{card.type}</p>
      <Image src={card.icon} alt={card.type} className="py-5 border-t"></Image>
      <h2 className="font-inter font-bold text-[18px] md:text-[24px] lg:text-[32px] leading-normal md:leading-[42px] tracking-[-0.44px]">{card.heading}</h2>
      <p className="flex items-center justify-start font-inter font-medium text-[16px]">
        {card.date}<span className="text-text-gray"> {card.author}</span></p>
    </section>
  )
}

export default Card