import Image from "next/image"
import LogoBar from "@/app/components/ui/LogoBar"

const Hero = () => {
    return (
        <section className="container-custom mx-auto px-4 lg:px-20 p-20  items-center">
            <div className="flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col space-y-6 m-4">
                <h1 className="font-inter text-3xl lg:text-6xl font-bold text-dark-pink tracking-tighter">
                    Bringing companies and customers together, anywhere
                </h1>
                <p className="font-inter text-lg lg:text-xl">
                    An awesome & powerful tools for your business, increase business revenue with enterprise-grade links built to acquire and engage customers.
                </p>
                <div className="relative max-sm:w-full max-md:w-[60%]">
                    <input type="email" className="rounded-md w-full border px-3 py-2.5 max-sm:py-1.5 font-inter text-lg" placeholder="Enter your email" />
                    <button className="rounded-md font-bold max-sm:text-sm text-lg font-inter bg-dark-pink text-white absolute 
                    right-1 top-1 py-2 px-4 max-sm:px-1 ">
                        Try For Free
                    </button>
                    <p className="font-inter text-sm w-full p-2">Full access. No credit card required.</p>

                </div>

            </div>

            <div className="flex-1 flex  justify-end items-center pt-10 lg:mt-0">
                <Image src="/Stats.png" alt="stats" width={382} height={575} className="scale-100 md:scale-110 lg:scale-150" />

            </div>
            </div>
            <div className="flex flex-col w-full justify-between">
                <LogoBar text="Trusted by 1,000+ customers" />
            </div>
        </section>

    )
}

export default Hero