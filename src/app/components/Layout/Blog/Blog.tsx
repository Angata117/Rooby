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

const filters = [
    {
        id: 1,
        title: "All Articles",
    },
    {
        id: 2,
        title: "Sales",
    },
    {
        id: 3,
        title: "Marketing",
    },
    {
        id: 4,
        title: "Service",
    },
    {
        id: 5,
        title: "Product",
    },
    {
        id: 6,
        title: "News",
    },
]
const Blog = () => {
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [posts, setPosts] = useState([] as JsonPlaceholder.Post[]);
    const [photos, setPhotos] = useState([] as JsonPlaceholder.Photo[]);
    const handleFilterClick = (id: number) => {
        setSelectedFilter(id);
    };

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
        <section className='container-custom mx-auto md:p-20 p-10 pb-0'>
            <div className='px-10'>
                <div className='flex flex-col md:flex-row justify-between items-baseline'>
                    <h1 className='font-inter font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-snug lg:leading-[74px] tracking-tighterest w-full md:w-[50%]'>
                        News and insights  <span className='text-[#787878]'>from our experts</span>
                    </h1>
                </div>

                <div className='flex flex-row gap-10 pt-20 '>
                    {(filters.map((f) => (
                        <p key={f.id}
                            onClick={() => handleFilterClick(f.id)}
                            className={`font-inter cursor-pointer font-medium text-lg pb-5 text-[#777777] 
                        ${f.id === selectedFilter ? "border-b border-b-green-500 text-black font-semibold" : ""}`}>{f.title}</p>
                    )))}
                </div>
            </div>

            <div className=' flex flex-col justify-between bg-white  pt-20 p-10'>
                <div className='flex flex-row font-inter gap-8'>
                    <div className='flex flex-col pt-5 w-[50%] border-y-[1px] border-[#787878]'>
                        <p className=' uppercase  font-bold tracking-[1.4px] text-[#787878] text-[14px]'>service</p>
                        <h1 className='font-bold w-[90%] pt-5 text-[40px] leading-[50px] tracking-[-0.56px]'>
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
                </div>
            </div>

            <div className='grid grid-cols-3 gap-10 mt-10'>
                {(blogs.map((b) => (
                    <div key={b.id} 
                        className={`${b.id === 7 ? "col-span-3 row-span-2" : ""}`}
                    >
                        {b.id === 7 && (

                            <div className="flex flex-col justify-center items-center">

                                <h1>Access Roooby leads features on your mobile</h1>
                                <p className="flex items-center justify-start font-inter font-medium text-[16px]">
                                    11 Aug 2023, <span className="text-text-gray"> by Joshua Nash</span></p>
                            </div>
                        )}
                        <Card card={b} postId={b.id}/>

                    </div>

                )))}
            </div>

            <div className='grid grid-cols-3 gap-10 mt-10'>
                {posts.map((post, i) => {
                    const photo = photos?.[i];

                    return (
                        <Link key={post.id} className=''href={`/post/${post.id}`}>
                            <PostCard postImg={photo} post={post}  />
                            {/* <Image src={photo.thumbnailUrl} alt={photo.title} className="py-5 border-t"></Image> */}
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Blog