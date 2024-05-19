import Link from 'next/link'
import React from 'react'
import Image from "next/image";

const logo = () => {
  return (
    <Link href="/">
    <Image src="roooby.svg"  width={95} height={28} alt='logo' layout='responsive' ></Image>
    </Link>
  )
}

export default logo