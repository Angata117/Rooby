import Image from 'next/image'
const types: string[] = ["sales", "service", "marketing", "news", "product"]
const rand: number = Math.floor(Math.random() * 5)
const type: string = types[rand]

const dates: string[] = ["29 Jun 2024,", "20 mar 2022,", "07 Jun 2024,",]
const randDate: number = Math.floor(Math.random() * 3)
const date: string = dates[randDate]

const authors: string[] = ["by  Maxwell Iskiev", "by Bill Holloway", "by Stephen Handerson", "by Joshua Nash"]
const randAuthor: number = Math.floor(Math.random() * 4)
const author: string = authors[randAuthor]
function PostCard({
    post,
    postImg,
    className,
}: {
    className?: string;
    post: JsonPlaceholder.Post;
    postImg: JsonPlaceholder.Photo;

}) {
    return (
        <article className={`flex flex-col justify-start w-full ${className}`}>
            <p className="flex font-inter text-[14px] font-bold uppercase text-text-gray">{type}</p>
           
            {postImg && postImg.url ? (
                <Image src={postImg.url} alt={postImg.title} className="py-5 border-t" width={360} height={280} />
            ) : (
                <div className="py-5 border-t bg-gray-200 h-48 w-full"></div>
            )} {/* <Image src={postImg.thumbnailUrl} alt={postImg.title} className="py-5 border-t"></Image> */}
            <h2 className="font-inter font-bold text-[18px] md:text-[24px] lg:text-[32px] leading-normal md:leading-[42px] 
                tracking-[-0.44px]">{post.title}</h2>
            <p className="flex items-center justify-start font-inter font-medium text-[16px]">
                {date}<span className="text-text-gray"> {author}</span></p>
        </article>
    )
}

export default PostCard