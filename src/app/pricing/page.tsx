import Plans from "../components/Layout/Pricing/Plans";
import FAQ from "../components/Layout/Pricing/FAQ";
import Banner from "../components/ui/Banner";
const page = () => {
    return (
        <section className='container-custom mx-auto px-4 md:px-10 lg:px-20 pt-20'>
            <div className='flex flex-col md:flex-row justify-between items-baseline'>
                <h1 className='font-inter font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-snug lg:leading-[74px] tracking-tighterest w-full md:w-[50%]'>
                    Choose the right plan <span className='text-[#787878]'>for your business</span>
                </h1>
                <p className='mt-4 md:mt-0 flex justify-end font-inter text-sm md:text-base lg:text-[18px] leading-snug md:leading-relaxed lg:leading-[28px] w-full md:w-[28%]'>
                    Built with love for growing businesses.
                    Check out the Roooby CRM pricing grid below.
                    Switch between plans at any time.
                </p>
            </div>
            <Plans></Plans>
            <FAQ></FAQ>
            <Banner></Banner>
        </section>

    )
}

export default page