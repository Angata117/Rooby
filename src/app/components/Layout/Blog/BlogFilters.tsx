"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
const BlogFilters = () => {
    const [selectedFilter, setSelectedFilter] = useState(1);
    const [selectedMenu, setSelectedMenu] = useState(1);
   
    const handleFilterClick = (id: number) => {
        setSelectedFilter(id);
    };
    const handleSelectChange = (event :any) => {
        const selectedId = parseInt(event.target.value, 10);
        handleFilterClick(selectedId);
        setSelectedMenu(event.target.value);
    };
    return (
        <div className='container-custom  mx-auto md:pt-20 lg:px-20 sm:p-10 max-sm:pt-5'>
            <div className='px-10'>
                <div className='flex w-full flex-col md:flex-row justify-between items-baseline'>
                    <h1 className='font-inter font-bold text-xl sm:text-3xl md:text-5xl lg:text-[64px] 
                        leading-tight md:leading-snug lg:leading-[74px] tracking-tighterest w-full md:w-[50%]'>
                        News and insights  <span className='text-[#787878]'>from our experts</span>
                    </h1>

                </div>

                <div className='hidden sm:flex flex-row gap-5 md:gap-10 pt-10 md:pt-20 '>
                    {(filters.map((f) => (
                        <p key={f.id}
                            onClick={() => handleFilterClick(f.id)}
                            className={`font-inter cursor-pointer font-medium text-lg pb-5 text-[#777777] 
                        ${f.id === selectedFilter ? "border-b border-b-green-500 text-black font-semibold" : ""}`}>{f.title}</p>
                    )))}
                </div>
                <div className="sm:hidden py-5">
                        <select
                            value={selectedMenu}
                            onChange={handleSelectChange}
                            className="text-black p-2 rounded-lg">
                            {filters.map((filter) => (
                                <option key={filter.id} value={filter.id}>{filter.title}</option>
                            ))}
                        </select>
                    </div>
            </div>
        </div>
    )
}

export default BlogFilters