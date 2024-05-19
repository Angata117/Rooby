import { getInformationData } from '@/app/components/static-data/homeData'
import Card from './Card'
const cards = getInformationData()

const Information = () => {
    return (
        <section className=' justify-center pt-20 bg-white'>
            <div className=' '>
                {cards.map((c, i) => {
                    return (
                        <article key={c.id} className={`md:p-10 p-2 ${i === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <Card info={c} />
                            {i == 1 && (
                                <div className='flex flex-row bg-dark-pink px-2 w-fit gap-8 py-4 items-center rounded-lg'>
                                    <p className='font-inter font-bold text-lg text-white leading-[-0.25px]'>
                                        Automate your sales & marketing
                                    </p>
                                    <button type="submit"
                                        className='bg-btn-green rounded-lg text-white font-inter text-lg leading-[-0.25px]
                                    p-2 font-bold '>
                                        Start Now
                                    </button>
                                </div>)}
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Information