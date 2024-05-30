import { getCommentById } from "@/app/components/lib/actions/comments";
import { getPhotoById } from "@/app/components/lib/actions/photos";
import { getPostById } from "@/app/components/lib/actions/posts"
import Image from "next/image";

type Props = {
    params: {
        id: number;
    }
}
const types: string[] = ["sales", "service", "marketing", "news", "product"]
const rand: number = Math.floor(Math.random() * 5)
const type: string = types[rand]

const dates: string[] = ["29 Jun 2024,", "20 mar 2022,", "07 Jun 2024,",]
const randDate: number = Math.floor(Math.random() * 3)
const date: string = dates[randDate]

const authors: string[] = ["by  Maxwell Iskiev", "by Bill Holloway", "by Stephen Handerson", "by Joshua Nash"]
const randAuthor: number = Math.floor(Math.random() * 4)
const author: string = authors[randAuthor]
export async function PostDetails(props: Props) {
    const id = props.params.id;

    let post = await getPostById(id);
    let comment = await getCommentById(id);
    let photo = await getPhotoById(id);
      if (!post) {
        return <div>Loading...</div>;
      }
    if (!post) return <p>No blog found</p>
    return (
        <section className='bg-[#F4F4F4] w-full h-full'>
            <div className="container mx-auto ">
                <div className='md:px-20 md:pt-10 '>
                    <div className='flex flex-col font-inter items-center  mx-auto  '>
                        <p className="flex py-3 md:text-base text-[12px] font-bold uppercase text-text-gray">{type}</p>
                        <h2 className="flex py-5 w-[60%] max-sm:w-[90%] items-start font-bold text-[18px] border-t-2 md:text-[24px] 
                        lg:text-5xl leading-normal lg:leading-[58px] tracking-normal lg:tracking-[-0.67px]">{post.title}</h2>

                        <p className="flex font-medium text-sm md:text-lg">
                            {date}<span className="text-text-gray"> {author}</span></p>
                    </div>
                    <div className='flex flex-wrap justify-center py-5 px-5 lg:mt-10'>
                        <Image src={photo.url} alt={photo.title}
                            className='lg:w-[945px] lg:h-[511px]' width={945} height={511}></Image>
                    </div >
                    <p className="flex font-medium text-sm md:text-lg p-5">{comment.body}</p>
                </div>
            </div>
        </section>
    );
};

export default PostDetails