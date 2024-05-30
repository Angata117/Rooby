// pages/blogs/[id].js
import { getPostById } from '@/app/components/lib/actions/posts';
import { blogs } from '@/app/components/static-data/blogData';
import { getServerSideProps } from 'next/dist/build/templates/pages';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
    params: {
        id: number;
    }
}
export async function BlogDetails(props: Props) {
    let id = props.params.id;
    const blog = blogs[id - 1];
    if (!blog) {
        return <div>Blog doesn&apost exist</div>;
    }
    return (

        <section className='bg-[#F4F4F4] w-full h-full'>
            <div className="container mx-auto ">
                <div className='md:px-20 md:pt-10 '>
                    <div className='flex flex-col font-inter items-center  mx-auto  '>
                        <p className="flex py-3 md:text-base text-[12px] font-bold uppercase text-text-gray">{blog.type}</p>
                        <h2 className="flex py-5 w-[60%] max-sm:w-[90%] items-start font-bold text-[18px] border-t-2 md:text-[24px] 
                        lg:text-5xl leading-normal lg:leading-[58px] tracking-normal lg:tracking-[-0.67px]">{blog.heading}</h2>

                        <p className="flex font-medium text-sm md:text-lg">
                            {blog.date}<span className="text-text-gray"> {blog.author}</span></p>
                    </div>
                    <div className='flex flex-wrap justify-center py-5 px-5 lg:mt-10'>
                        <Image src={blog.icon} alt={blog.type}
                            className='lg:w-[945px] lg:h-[511px]'></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
