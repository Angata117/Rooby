import LogoBar from '../../ui/LogoBar';
import arrow from '/public/arrow_right_white.svg';
import Image from 'next/image';

const Contact = () => {
    return (
        <section className='container-custom mx-auto md:p-20 p-10 md:pb-10 font-inter'>
            <div className='flex flex-col '>
                <div className='flex '>
                    <h1 className='font-bold text-3xl md:text-5xl lg:text-[64px] 
                leading-tight md:leading-snug lg:leading-[74px] tracking-tighterest w-full md:w-[45%]'>
                        Get in touch with our lovely team
                    </h1>
                </div>

                <div className='flex lg:flex-row flex-col py-10 lg:justify-between
                  max-lg:items-center '>
                    <div className='flex flex-col'>

                        <p className='font-bold text-lg'>Roooby Technologies</p>
                        <p className='font-medium text-lg leading-[28px] text-[#404040]'>Plovdiv, Bulgaria, bul Vasil Levski 96</p>

                        <div className='py-5'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.4247291420975!2d24.740869476793378!3d42.162595671211925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd18de452a06b%3A0x838e93baa43989e5!2z0KHQtdCy0LXRgNC10L0sINGD0LsuIOKAntCS0LDRgdC40Lsg0JvQtdCy0YHQutC44oCcIDk2LCA0MDAzINCf0LvQvtCy0LTQuNCy!5e0!3m2!1sbg!2sbg!4v1716303078391!5m2!1sbg!2sbg"
                                loading="lazy"
                                className='w-[458px] h-[288px] max-sm:w-[350px] max-sm:h-[280px]' ></iframe>
                        </div>

                        <div className='flex flex-row justify-between  pt-5'>

                            <div className='flex flex-col border-l-[2px] border-[#787878] pl-5'>
                                <p className='font-bold text-base lg:text-lg'>General</p>
                                <p className='font-medium text-base lg:text-lg leading-[28px] text-[#404040]'>hello@me.com</p>
                            </div>

                            <div className='flex flex-col border-l-[2px] border-[#787878] pl-5'>
                                <p className='font-bold  text-base lg:text-lg'>Support</p>
                                <p className='font-medium  text-base lg:text-lg leading-[28px] text-[#404040]'>support@me.com</p>
                            </div>

                        </div>
                    </div>
                    <form className='flex flex-col gap-8 max-md:gap-5 '>
                        <input type='label' placeholder='Your Name' className='xl:w-[555px] md:h-[72px] h-[50px] px-5 
                             sm:w-[450px]  w-[350px] rounded-lg' required></input>
                        <input type='label' placeholder='Your Email' className='xl:w-[555px] md:h-[72px] h-[50px] px-5 
                            sm:w-[450px]  w-[350px] rounded-lg' required></input>
                        <textarea placeholder='Message' className='xl:w-[555px] md:h-[190px] px-5 
                            sm:w-[450px]  w-[350px] h-[120px] rounded-lg resize-none' required></textarea>

                        <div>
                            <button type='submit'
                                className="flex-row flex text-white rounded-md shadow-lg font-inter text-base md:text-lg 
                                tracking-[-0.25px] bg-[#00CC61] p-2 md:p-4 items-center ">
                                Send a message <Image src={arrow} alt="arrow" className='max-md:pl-1 md:ml-2 text-white'></Image>
                            </button>
                        </div>
                    </form>
                </div>

            </div>

        </section>
    )
}

export default Contact