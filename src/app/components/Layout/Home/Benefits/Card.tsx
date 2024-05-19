import Image, { StaticImageData } from "next/image";
import React from "react";

function Card({
  card,
}: {
  card: {
    id: number;
    icon: StaticImageData;
    heading: string;
    description: string;
  };
}) {
  return (
    <figure className="group h-full  rounded-xl bg-main-blue-900 px-2 py-4 text-white  transition-all duration-500 
    hover:-translate-y-[10px] hover:cursor-pointer hover:bg-card-yellow lg:px-8 lg:py-16 lg:my-10
    w-full sm:w-1/2 lg:w-[100%] md:justify-center md:py-14
    md:max-lg:flex-rows-2
    ">
      <Image
        src={card.icon}
        alt="Icon"
        className="md:scale-100 scale-75 group-hover:invert mb-14"
      />
      <div className="flex flex-col border-t border-opacity-[24%] py-4 group-hover:border-opacity-100 group-hover:invert">
        <h3 className=" text-md md:text-xl font-bold tracking-[0.28px] ">
          {card.heading}
        </h3>
        <p className="leading-[26px] text-sm md:text-base my-2 ">
          {card.description}
        </p>
      </div>
    </figure>
  );
}

export default Card;