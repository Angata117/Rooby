"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import clock from '/public/icons/blog/clock.svg'
import { blogs } from '../../static-data/blogData'
import { getPhotos } from '../../lib/actions/photos';
import { getPosts } from '../../lib/actions/posts';
import Card from './Card';
import PostCard from './PostCard'
import Link from 'next/link'
import BlogFilters from './BlogFilters'

const Blog = () => {

    const [posts, setPosts] = useState([] as JsonPlaceholder.Post[]);
    const [photos, setPhotos] = useState([] as JsonPlaceholder.Photo[]);


    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        });
        getPhotos().then((data) => {
            console.log('Photos:', data);
            setPhotos(data);
        });
    }, []);

    return (
        <section className='w-full '>
            <BlogFilters></BlogFilters>
            <div className='w-full  bg-white'>
                <div className='container-custom mx-auto'>

                    <div className=' flex flex-col max-md:items-center justify-between md:pt-20 p-10'>
                        <Link href={`/blog/11`} className='flex flex-col md:flex-row font-inter gap-8'>
                            <div className='flex flex-col max-sm:w-full w-[80%] pt-5 md:w-[50%] border-y-[1px] border-[#787878]'>
                                <p className=' uppercase  font-bold tracking-[1.4px] text-[#787878] text-[14px]'>service</p>
                                <h1 className='font-bold w-full  md:w-[90%] pt-5 md:text-3xl lg:text-[40px] lg:leading-[50px] lg:tracking-[-0.56px]'>
                                    The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers
                                </h1>
                                <p className='flex bottom-0 mt-auto font-medium pb-5 text-[16px]'>
                                    05 Sep 2024, <span className='text-[#787878]'>by  Maxwell Iskiev</span>
                                </p>
                            </div>
                            <div className='flex'>
                                <Image src={clock} alt='clock'
                                    className='flex'></Image>
                            </div>
                        </Link>
                    </div>

                    <div className='grid max-sm:mx-auto  max-sm:w-[90%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10'>

                        {(blogs.map((b) => (
                            <div key={b.id}
                                className={`${b.id === 7 ? "col-span-3 md:row-span-2 max-md:col-span-1" : ""}`}
                            >
                                {b.id === 7 && (

                                    <div className="flex flex-col max-md:hidden justify-center items-center">

                                        <h1>Access Roooby leads features on your mobile</h1>
                                        <p className="flex items-center justify-start font-inter font-medium text-[16px]">
                                            11 Aug 2023, <span className="text-text-gray"> by Joshua Nash</span></p>
                                    </div>
                                )}
                                <Card card={b} postId={b.id} />

                            </div>

                        )))}



                        {posts.map((post, i) => {
                            const photo = photos?.[i];

                            return (
                                <Link key={post.id} className='' href={`/post/${post.id}`}>
                                    <PostCard postImg={photo} post={post} />
                                    {/* <Image src={photo.thumbnailUrl} alt={photo.title} className="py-5 border-t"></Image> */}
                                </Link>
                            )
                        })}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blog