"use client";
import React, { useState } from "react";
import { BsDash } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const cards = [
    {
        question: "How Does Roooby CRM Compare To The Competition?",
        answer:
            "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
        question: "Can I Change Plans Or Cancel My Subscription At Any Time?",
        answer:
            "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
        question: "How Secure Is My Data With Roooby CRM?",
        answer:
            "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
        question: "What Is The Uptime Guarantee?",
        answer:
            "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
    {
        question: "How Can I Add More Emails To My Account?",
        answer:
            "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
    },
];

export default function FAQ() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenAccordion((prevIndex: number | null) =>
            prevIndex === index ? null : index,
        );
    };

    return (
        <section className="container-custom mx-auto bg-white px-4 md:px-10 lg:px-20 py-10 lg:py-20" >
            <h1 className="font-inter font-bold text-3xl md:text-4xl lg:text-[64px] leading-tight md:leading-snug lg:leading-[74px] tracking-tighterest w-full md:w-3/4 lg:w-1/2">
                Frequently asked questions
            </h1>

            <div className="flex flex-col w-full md:w-4/5 justify-end lg:ml-40 pt-10 ">
                {cards.map((cards, index) => (
                    <div onClick={() => toggleAccordion(index)} key={index}
                        className="flex flex-col border-t py-5">
                        <div className="flex justify-between items-center cursor-pointer px-2 md:px-4">
                            <h2 className="font-inter text-xl md:text-2xl lg:text-[32px] leading-snug md:leading-relaxed lg:leading-[42px] tracking-[-0.44px]">
                                {cards.question}
                            </h2>
                            {openAccordion === index ? (
                                <BsDash size={30} />
                            ) : (
                                <AiOutlinePlus size={30} />
                            )}
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ${openAccordion === index ? "max-h-[500px]" : "max-h-0"}`}>
                            <p className="font-inter text-sm md:text-base lg:text-[18px] leading-snug md:leading-relaxed lg:leading-[28px] mt-5 px-2 md:px-4">
                                {cards.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}
