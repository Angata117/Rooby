import head from "/public/icons/benefits/head.svg";
import laptop from "/public/icons/benefits/laptop.svg";
import magicStick from "/public/icons/benefits/magicStick.svg";
import increase from "/public/icons/Information/increase.svg";
import marketing from "/public/icons/information/marketing.svg";
import plan from "/public/icons/information/plan.svg";
import successProduct from "/public/icons/news/success-product.svg";
import employee from "/public/icons/news/employee.svg";
import nellie from "/public/icons/results/nellie.svg";
import lawrance from "/public/icons/results/lawrance.svg";
import lola from "/public/icons/feedback/lola.svg";
import daisy from "/public/icons/feedback/Daisy.svg";
import andrew from "/public/icons/feedback/Andrew.svg";
import { text } from "stream/consumers";
const benefitsData = [
  {
    id: 1,
    icon: head,
    heading: "Lead customers to happiness",
    description:
      "Rooody Support helps you provide personalized support when and where customers need it, so customers stay happy.",
  },
  {
    id: 2,
    icon: laptop,
    heading: "Support your support",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
  },
  {
    id: 3,
    icon: magicStick,
    heading: "Grow without growing pains",
    description:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
  },
];
const informationData = [
  {
    id: 1,
    img: increase,
    tag: "sales",
    heading: "Increase company revenue up to 65%",
    description: "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging. ",
    list: [
      {
        id: 1,
        text: "Close more deals with single-page contact management",
      },
      {
        id: 2,
        text: "Enjoy one-click calling, call scripts and voicemail automation",
      },
      {
        id: 3,
        text: "Track stages and milestones of your deals to keep the sales process on track",
      }
    ]
  },
  {
    id: 2,
    tag: "marketing",
    img: marketing,
    heading: "Marketing",
    description: "Market like the most successful companies in the world with Agile CRM's marketing automation software. ",
    list: [
      {
        id: 1,
        text: "Marketing workflows with an easy drag-and-drop designer",
      },
      {
        id: 2,
        text: "Use our templates to create high converting, mobile responsive landing pages",
      },
      {
        id: 3,
        text: "Integrate social media easily into your marketing campaigns & contact views",
      }
    ]
  },
  {
    id: 3,
    tag: "service",
    img: plan,
    heading: "Help Desk Software",
    description: "Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.",
    list: [
      {
        id: 1,
        text: "Resolve every issue in the shortest possible time with powerful ticketing features",
      },
      {
        id: 2,
        text: "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
      },
      {
        id: 3,
        text: "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard",
      }
    ]
  }
]
const newsData = [
  {
    id: 1,
    icon: successProduct,
    heading: "How To Deliver a Successful Product Launch",
    type: "service",
    date: "05 Sep 2024,",
    author: "by Joshua Nasl"
  },
  {
    id: 2,
    icon: employee,
    heading: "What Makes an Authentic Employee Profile, and Why Does It Matter?",
    type: "service",
    date: "07 Sep 2023,",
    author: "by Ivan Neshev"
  }
]
const resultsData = [
  {
    id: 1,
    icon: nellie,
    heading: "$2.5 M",
    subHeading: "Generate sales",
    description: "Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    authorName: "Nellie Foster",
    position: "Founder & CEO, Foster Business Strateg"
  },
  {
    id: 1,
    icon: lawrance,
    heading: "45%",
    subHeading: "Grew revenue",
    description: "Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
    authorName: "Lawrance Gibbs",
    position: "Marketing Director"
  }
]
const feedbackData = [
  {
    id: 1,
    text: "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.",
    authorName: "Lola Ross",
    authorPosition: "Marketing Director",
    icon: lola
  },
  {
    id: 2,
    text: "It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.",
    authorName: "Daisy Phelps",
    authorPosition: "Speaker and Author, Lifeisea",
    icon: daisy
  },
  {
    id: 3,
    text: "Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!",
    authorName: "Andrew Wilkins",
    authorPosition: "Managing Director, Nirma Stud",
    icon: andrew
  },
]
type FooterSection = {
  id: number;
  header: string;
  items: string[];
}
const footerData: FooterSection[] = [
  {
    id: 1,
    header: "Company",
    items: ["About", "Pricing", "Jobs", "Blog", "Carrers"]
  },
  {
    id: 2,
    header: "Product",
    items: ["Sales software",
      'Features',
      'Privacy',
      'Marketplace',
      'Status',
      'API']
  },
  {
    id: 3,
    header: 'Discover',
    items: ['Partner Program',
      '  Get our newsletter',
      'Sales Pipeline',
      'What is CRM?',
      'CRM Comparison',
      'Resources']
  },
  {
    id: 4,
    header: 'Help Center',
    items: ['Community',
      'Knowledge Base',
      'Academy',
      'Support']
  }
]
export function getFooterData(){
  return footerData;
}
export function getFeedbackData() {
  return feedbackData
}
export function getResultsData() {
  return resultsData;
}
export function getNewsData() {
  return newsData;
}
export function getBenefitsData() {
  return benefitsData;
}
export function getInformationData() {
  return informationData;
}
