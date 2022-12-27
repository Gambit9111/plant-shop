import Image from 'next/image'

const Testimonial: React.FC = () => {
    return (
        <div className='w-full mt-[180px] flex relative'>
            <div className='z-10 flex gap-[100px]'>
                <Image src='/images/person.png' width={553} height={775} alt="best-sellers" />
                <div className='mt-[290px] mr-48'>
                    <h1 className='text-[56px] leading-[72px] font-Lora text-fourthBlack'>What Our Happy Client Say</h1>
                    <p className='text-[20px] leading-[25px] font-Livvic text-fourthBlack font-light mt-[64px]'>“Possibility to purchase at any time. Regardless of the
                        season, weather and time of day, any flowers can be used to decorate a room or compose festive compositions.”</p>
                    <div className='mt-[32px]'>
                        <h2 className='text-[20px] leading-[25px] font-Livvic text-primaryGreen'>Mary Sheller</h2>
                        <div className='flex mt-[6px] gap-[48px]'>
                            <p className='text-[20px] leading-[25px] font-Livvic text-fifthGray'>20 june 2023</p>
                            <div className='flex gap-[6px]'>
                                <Image src='/icons/star-dark.svg' width={16} height={15} alt="star" />
                                <Image src='/icons/star-dark.svg' width={16} height={15} alt="star" />
                                <Image src='/icons/star-dark.svg' width={16} height={15} alt="star" />
                                <Image src='/icons/star-dark.svg' width={16} height={15} alt="star" />
                                <Image src='/icons/star-light.svg' width={16} height={15} alt="star" />
                            </div>
                        </div>
                        <div className='flex mt-[64px] gap-[36px]'>
                            <Image src='/icons/arrow-left-darker.svg' width={36} height={16} alt="arrow-left" />
                            <Image src='/icons/arrow-right.svg' width={36} height={16} alt="arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-secondaryLightGreen w-[1134px] h-[775px] absolute z-0 top-[140px] right-[-120px]' />
        </div>
    )
}

export default Testimonial