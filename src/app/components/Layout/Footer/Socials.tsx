import Image from 'next/image';
import Logo from "../../ui/logo";
import facebook from '/public/icons/footer/Facebook.svg';
import linkedIn from '/public/icons/footer/Linkedin.svg';
import twitter from '/public/icons/footer/Twitter.svg';

const Socials = () => {
    return (
        <section className="flex flex-col ">
            <div className="flex"><Logo ></Logo></div>
            <p className="flex font-inter text-[14px] my-5 leading-[24px] w-[50%]">We built an elegant solution.
                Our team created a fully integrated sales and marketing solution for SMBs</p>
            <div className='flex flex-row gap-3'>
                <Image src={twitter} alt='twitter'></Image>
                <Image src={facebook} alt='facebook'></Image>
                <Image src={linkedIn} alt='linkedIn'></Image>
            </div>
        </section>
    )
}

export default Socials