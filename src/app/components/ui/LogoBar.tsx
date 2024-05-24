import Image from "next/image"
import { partners } from "../static-data/partners"
const LogoBar = ({ text }: any) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-2 mt-10 sm:mt-20">
      <p className="font-medium font-inter text-base mb-4 sm:mb-0 whitespace-nowrap">
        {text}
      </p>
      <div className="flex flex-row items-center justify-center flex-wrap  gap-5 sm:gap-10">
        {partners.map((partner, index) => (
          <Image key={index} src={partner.src} alt={partner.alt} width={partner.width} height={partner.height}
            className="sm:mx-2 sm:py-1 py-4 "></Image>
        ))}
      </div>
    </div>

  )
}

export default LogoBar