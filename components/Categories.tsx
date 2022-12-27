import Image from 'next/image'

const Categories: React.FC = () => {
    return (
        <div className='h-full mt-[180px] relative flex flex-col items-center'>
            <div className='z-10'>
                <h1 className='text-[56px] leading-[72px] text-fourthBlack font-Lora text-center'>Product Categories</h1>
                <div className='flex gap-[56px] mt-[64px]'>
                    <div className='flex flex-col items-center'>
                        <Image src='/images/category-1.png' width={401} height={560} alt="1" />
                        <h2 className='text-[24px] text-primaryGreen font-Lora mt-[40px]'>Natural Plants</h2>
                    </div>
                    <div className='flex flex-col items-center mt-[60px]'>
                        <Image src='/images/category-2.png' width={401} height={560} alt="2" />
                        <h2 className='text-[24px] text-primaryGreen font-Lora mt-[40px]'>Artificial Plants</h2>
                        <Image src='/icons/arrow-right.svg' width={36} height={24} alt="arrow" className='mt-[20px]' />
                        <p className='text-center mt-[20px] text-[18px] leading-[23px] font-Livvic text-fifthGray w-[340px]'>Plastic and textile products are a practical solution for everyone who loves flowering plants, but does not have the time or desire to care for them.</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Image src='/images/category-3.png' width={401} height={560} alt="3" />
                        <h2 className='text-[24px] text-primaryGreen font-Lora mt-[40px]'>Accesories</h2>
                    </div>
                </div>
            </div>
            <div className='w-screen h-[850px] bg-secondaryLightGreen absolute top-[250px] z-0' />
        </div>
    )
}

export default Categories



