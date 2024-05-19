import Image from 'next/image';
import check from '/public/icons/information/check.svg';

function Card({
    plan,
    className,
}:
    {
        plan: {
            title: string,
            description: string,
            price: string,
            benefits: string[],
        };
        className?: string;
    }) {
    return (
        <article className='rounded-xl bg-white p-2 m-2'>
            <div className='flex flex-col font-inter p-2'>

                <div className='flex flex-row max-sm:flex-col  items-center ' >
                    <h3 className='font-bold text-lg md:text-2xl'>{plan.title}</h3>
                    {plan.title.toLowerCase() === 'professional' && (
                        <p className='bg-[#EBFBF3] font-bold text-[12px] px-2 py-1 m-2 text-xs text-arrow-green uppercase'>recommended</p>
                    )}
                </div>

                <p className='text-[14px] md:text-[16px] leading-normal md:leading-[26px] mt-2 w-[80%]'>{plan.description}</p>
                <p className='font-bold text-[28px] md:text-[48px] leading-normal md:leading-[58px] tracking-[-0.67px] mt-5 ml-3'>${plan.price}
                    <span className=' text-[16px] leading-[26px] tracking-normal text-[#777777]'>/month</span>
                </p>

                <button className={`rounded-lg border text-[14px] md:text-[18px] tracking[-0.25px] px-1 py-1 font-bold md:px-3 md:p-2
                ${plan.title.toLowerCase() === 'professional' ? 'bg-dark-pink text-white' : ''}`}>
                    Try For Free
                </button>

                <p className='flex text-[12px] md:text-[14px] tracking-[0.16px] justify-center mt-2 text-[#777777]'>Free 14-day trial. No credit card required.</p>

                <ul className='flex flex-col  justify-start border-t border-t-[#787878] border-opacity-25 mt-2 pt-2 md:mt-5 md:pt-5'>
                    {plan.benefits.map((benefit, i) => (

                        <div key={i} className='flex items-center gap-4 px-2'>
                            <Image src={check} alt="check"
                                className={`scale-75 md:scale-100 ${plan.title.toLowerCase() === "starter" && i > 5 ? "opacity-25" : plan.title.toLowerCase() === "professional" && i > 7 ? "opacity-25" : ""}`}
                                key={i}></Image>
                            <li className={`text-[14px] md:text-[16px] leading-normal md:leading-[26px] m-1 tracking-[-0.25px] 
                            ${plan.title.toLowerCase() === 'starter' && i > 5 ? 'line-through opacity-25' : plan.title.toLowerCase() === 'professional' && i > 7 ? 'line-through opacity-25' : ''}`}>
                                {benefit}
                            </li>

                        </div>
                    ))}
                </ul>
            </div>
            
        </article>
    )
}

export default Card