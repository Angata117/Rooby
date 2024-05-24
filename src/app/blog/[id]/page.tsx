// pages/blogs/[id].js
import { getPostById } from '@/app/components/lib/actions/posts';
import { blogs } from '@/app/components/static-data/blogData';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
type Params = {
    params: {
        postId: number;
    }
}
export async function BlogDetails(props: Params) {
    //     let post = await getPostById(id);
    let id = props.params.postId;
    const blog = blogs[id];
    //   if (!post) {
    //     return <div>Loading...</div>;
    //   }
    // const router = useRouter();
    // const { id } = router.query; // Получаване на id от URL

    // let post = await getPostById(Number(id));


    // if (!blog) return <p>No blog found</p>
    return (

        <div className="container mx-auto px-4 py-8">
            <h1>asddd</h1>
            <p className="flex font-inter text-[14px] font-bold uppercase text-text-gray">{blog.heading}</p>
            {/* <h2 className="font-inter font-bold text-[18px] md:text-[24px] lg:text-[32px] leading-normal md:leading-[42px] tracking-[-0.44px]">{card.heading}</h2>
            <p className="flex items-center justify-start font-inter font-medium text-[16px]">
                {blog.date}<span className="text-text-gray"> {blog.author}</span></p> */}

        </div>
    );
};

export default BlogDetails;
