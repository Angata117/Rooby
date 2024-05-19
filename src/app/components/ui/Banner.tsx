import arrow from '/public/ic_keyboard_arrow_right.svg';
import Image from 'next/image';
const Banner = () => {
    return (
        <section className='flex flex-row p-20  bg-dark-pink w-[50%] h-[50%] md:w-auto md:h-auto relative overflow-hidden' >
            <div className='w-[70%]  z-10'>
                <h1 className='font-inter font-bold w-[90%] text-[64px] text-white leading-[74px] tracking-tighterest'>
                    Ready to supercharge your business?
                </h1>
                <p className='font-inter font-medium text-[18px] leading-[28px] w-[60%] text-gray-300 mt-5'>
                    Ask about <span className='font-bold text-white'>Roooby</span> products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
                </p>
            </div>

            <div className='flex w-[35%] justify-center bg-[#FFE377] absolute top-0 right-0 h-full '>

            </div>

            <div className='flex flex-col  bg-[#00CC61] right-0  rounded-full absolute h-[768px] w-[768px]
                         transform translate-x-[20%] z-0'>
                <div className='flex flex-col justify-center items-center pt-20 pr-32'>
                    <button className="flex-row flex  rounded-md shadow-lg font-inter text-[18px] 
                font-bold tracking-[-0.25px] bg-white  p-4 ">
                        Try For Free <Image src={arrow} alt="arrow"></Image>
                    </button>
                    <p className='font-inter font-medium text-[14px] mt-5 text-white'>Full access. No credit card required.</p>
                </div>
            </div>
        </section>
       




    )
}

export default Banner