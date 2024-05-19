import { getBenefitsData } from "@/app/components/static-data/homeData"
import Card from "./Card"

const cards = getBenefitsData()
const Benefits = () => {
    return (
        <section className='flex flex-col  bg-dark-pink md:p-20 sm:p-10 p-5'>
            <div className='flex md:flex-row flex-col max-sm:justify-center max-sm:items-center'>
                <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold md:w-[60%]">
                    Here&apos;s how Roooby can benefit your business
                </h2>
                <p className='text-white sm:text-[12px] md:text-[16px] lg:text-[18px] w-[45%] max-sm:w-full md:mr-20 mt-5 font-inter leading-7'>
                    Build more meaningful and lasting relationships —
                    better understand their needs, identify new opportunities to help,
                    address any problems faster.
                </p>
            </div>
            <div className="flex lg:flex-row md:flex-shrink-0  lg:justify-between flex-col items-center h-full gap-3 
            px-3 sm:px-5 md:px-7 lg:px-10 mt-5 md:mt-14  ">
                {cards.map((card) => (
                    <div key={card.id} className="w-auto ">
                        <Card card={card} />
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Benefits