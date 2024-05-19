import Image, { StaticImageData } from 'next/image'
import React from 'react'

const Logo = ({
    src,className,
}:{
    src :StaticImageData;
    className?: string;
}) => {
  return (
    <div>
        <Image src={src} alt="logo" 
        className={`flex items-center justify-center rounded-xlbg-white ${className}`}></Image>
    </div>
  )
}

export default Logo