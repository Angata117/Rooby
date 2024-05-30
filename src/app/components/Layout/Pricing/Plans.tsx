import React from 'react'
import Card from './Card'
const plans = [
  {
    title: "Starter",
    description: "Get organized and set up simple sales processes lorem ipsum",
    price: "8,90",
    benefits: [
      "2 team members",
      "1,000 Contacts & Companies",
      "5 Campaign Workflows",
      "10 Nodes Per Campaign",
      "5 Automation Rules (Triggers)",
      "3 Plugins/Integrations",
      "Marketing Automation	",
      "Custom Deal Tracks",
      "Automated Voicemails	",
      "Post-call Automation	",
    ],
  },
  {
    title: "Professional",
    description:
      "Everything you need to boost performance and revenue lorem ipsum",
    price: "29,90",
    benefits: [
      "10 team members",
      "2,500 Contacts & Companies",
      "5 Campaign Workflows",
      "10 Nodes Per Campaign",
      "5 Automation Rules (Triggers)",
      "3 Plugins/Integrations",
      "Marketing Automation	",
      "Custom Deal Tracks",
      "Automated Voicemails	",
      "Post-call Automation	",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Customize without limits and access unrivaled support lorem ipsum",
    price: "39,90",
    benefits: [
      "Unlimited team members",
      "5,000 Contacts & Companies",
      "25 Campaign Workflows",
      "20 Nodes Per Campaign",
      "15 Automation Rules (Triggers)",
      "10 Plugins/Integrations",
      "Marketing Automation	",
      "Custom Deal Tracks",
      "Automated Voicemails	",
      "Post-call Automation	",
    ],
  },
];

const Plans = () => {
  return (
    <section>
      <div className='flex flex-col container-custom mx-auto justify-between py-5 md:py-10'>
        <div className='flex flex-col md:flex-row justify-between items-baseline p-10'>
          <h1 className='font-inter font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight md:leading-snug lg:leading-[74px] tracking-tighterest w-full md:w-[50%]'>
            Choose the right plan <span className='text-[#787878]'>for your business</span>
          </h1>
          <p className='mt-4 md:mt-0 flex justify-end font-inter text-sm md:text-base lg:text-[18px] leading-snug md:leading-relaxed lg:leading-[28px] w-full md:w-[28%]'>
            Built with love for growing businesses.
            Check out the Roooby CRM pricing grid below.
            Switch between plans at any time.
          </p>
        </div>
        <div className='flex flex-col items-center xl:flex-row '>
          {plans.map((p, i) => (
            <div className='w-auto mb-4 md:mb-0' key={i}>
              <Card plan={p}></Card>
            </div>
          ))}
        </div>
        <div className='flex flex-col md:flex-row border-t border-gray-400 mt-5 md:mt-10 p-5 md:p-10 gap-10 items-center justify-center text-center md:text-left'>
          <p className='font-bold font-inter text-2xl md:text-[42px] leading-snug md:leading-[42px] tracking-[-0.44px]'>
            Need help choosing the right plan?
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-4 md:space-y-0 tracking-[-0.25px] font-inter font-bold text-lg md:text-[18px] w-full md:w-auto">
            <button className="border-2 border-white w-3/4 md:w-auto mx-auto md:mx-3 px-4 py-2 rounded-md bg-white" >
              Contact sales
            </button>
            <button className="rounded-md bg-dark-pink text-white px-4 py-2 w-3/4 md:w-auto mx-auto md:mx-0">
              Compare plans
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Plans