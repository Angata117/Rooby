import Logo from './Logo';
import star from '/public/integrations/star.svg';
import hubspot from '/public/integrations/hubspot.svg';
import zoom from '/public/integrations/zoom.svg';
import meet from '/public/integrations/meet.svg';
import zendesk from '/public/integrations/zendesk.svg';
import intercom from '/public/integrations/intercom.svg';
import box from '/public/integrations/box.svg';
import slag from '/public/integrations/slag.svg';
import asana from '/public/integrations/asana.svg';
import teams from '/public/integrations/teams.svg';
import arrowRight from '/public/ic_keyboard_arrow_right.svg';
import Image from 'next/image';
const Integrations = () => {
    return (
        <section className="flex flex-col  items-center bg-bg-gray max-sm:p-5 py:10 md:py-24">
           
            <h1 className="font-inter
            text-3xl md:text-4xl lg:text-5xl font-bold leading-normal md:leading-[68px] tracking-[-0.67px]">Over 300+ integrations</h1>
            <p className="font-inter max-sm:w-[90%] text-base md:text-lg">Expand the capabilities of <span className="font-bold">Roooby</span> with hundreds of apps and integrations</p>
            <div className='flex flex-wrap md:mt-16 gap-2 md:gap-4 max-md:w-full justify-center max-md:scale-75 max-md:flex-row'>
                <Logo src={star} className="" />
                <Logo src={hubspot} className="" />
                <Logo src={zoom} />
                <Logo src={meet} className="" />
                <Logo src={zendesk} className="" />
                <Logo src={intercom} />
                <Logo src={box} className="m" />
                <Logo src={slag} className="md:col-span-1" />
                <Logo src={asana} />
                <Logo src={teams} className="md:col-span-1" />
            </div>
        <a href='#' className='font-inter font-medium text-xl md:text-2xl mt-10 tracking-[0.51px] flex items-center gap-2' >
            See all apps and extensions <Image src={arrowRight} alt="arrow right"></Image>
        </a>
        </section>
    )
}

export default Integrations