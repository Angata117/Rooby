import arrow from '/public/ic_keyboard_arrow_right.svg';
import Image from 'next/image';
const Banner = () => {
    return (
        <section className='flex flex-row p-10 md:p-20 max-md:w-full bg-dark-pink  relative overflow-hidden' >
            <div className=' w-[70%] max-sm:w-full'>
                <h1 className='font-inter font-bold  max-sm:justify-center max-sm:items-center
                 w-[90%] text-xl sm:text-3xl lg:text-6xl text-white lg:leading-[74px] tracking-tighterest'>
                    Ready to supercharge your business?
                </h1>
                <p className='font-inter max-sm:hidden font-medium text-sm sm:text-base md:text-lg md:leading-[28px] w-[60%] text-gray-300 mt-5'>
                    Ask about <span className='font-bold text-white'>Roooby</span> products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
                </p>
                <div className='sm:hidden flex justify-between items-center flex-col '>
                    <p className='font-inter w-[50%] font-medium text-sm text-gray-300 mt-2'>
                        Ask about <span className='font-bold text-white'>Roooby</span> products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help.
                    </p>
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <button className="flex-row flex items-center rounded-md shadow-lg font-inter text-sm
                font-bold  bg-white p-1 ">
                            Try For Free <Image src={arrow} alt="arrow" className='max-sm:scale-75'></Image>
                        </button>
                        <p className='font-inter font-medium text-sm  mt-2 text-white'>Full access. No credit card required.</p>
                    </div>
                </div>

            </div>

            <div className='flex w-[35%] justify-center max-sm:hidden bg-[#FFE377] absolute top-0 right-0 h-full '>

            </div>

            <div className='flex flex-col  bg-[#00CC61] right-0 max-sm:hidden rounded-full absolute h-[450px] w-[450px] md:h-[768px] md:w-[768px]
                         transform translate-x-[20%] '>
                <div className='flex flex-col justify-center items-center pt-20 pr-32'>
                    <button className="flex-row flex  rounded-md shadow-lg font-inter  sm:text-base text-sm md:text-lg 
                font-bold tracking-[-0.25px] bg-white p-1 sm:p-2 md:p-4 ">
                        Try For Free <Image src={arrow} alt="arrow" className='max-sm:scale-75'></Image>
                    </button>
                    <p className='font-inter font-medium text-[14px] mt-2 sm:mt-5 text-white'>Full access. No credit card required.</p>
                </div>
            </div>
        </section>





    )
}

export default Banner