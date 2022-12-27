import Image from 'next/image'

const BestSellers: React.FC = () => {
    return (
        <div className='mt-[240px]'>
            <div className='flex justify-between'>
                <h1 className='text-[56px] leading-[72px] font-Lora text-fourthBlack'>BestSellers</h1>
                <div className='flex gap-[36px]'>
                    <Image src='/icons/arrow-left.svg' width={36} height={36} alt="arrow" />
                    <Image src='/icons/arrow-right.svg' width={36} height={36} alt="arrow" />
                </div>
            </div>
            <div className='flex justify-between mt-[48px]'>
                <div>
                    <Image src='/images/best-1.png' width={322} height={450} alt="best-sellers" />
                    <h2 className='text-[24px] leading-[31px] text-primaryGreen font-Lora mt-[24px]'>Artificial Plants</h2>
                    <p className='text-[20px] leading-[25px] text-fifthGray font-Livvic mt-[12px]'>$20</p>
                </div>
                <div>
                    <Image src='/images/best-2.png' width={322} height={450} alt="best-sellers" />
                    <h2 className='text-[24px] leading-[31px] text-primaryGreen font-Lora mt-[24px]'>Artificial Plants</h2>
                    <p className='text-[20px] leading-[25px] text-fifthGray font-Livvic mt-[12px]'>$20</p>
                </div>
                <div>
                    <Image src='/images/best-3.png' width={322} height={450} alt="best-sellers" />
                    <h2 className='text-[24px] leading-[31px] text-primaryGreen font-Lora mt-[24px]'>Artificial Plants</h2>
                    <p className='text-[20px] leading-[25px] text-fifthGray font-Livvic mt-[12px]'>$20</p>
                </div>
                <div>
                    <Image src='/images/best-4.png' width={322} height={450} alt="best-sellers" />
                    <h2 className='text-[24px] leading-[31px] text-primaryGreen font-Lora mt-[24px]'>Artificial Plants</h2>
                    <p className='text-[20px] leading-[25px] text-fifthGray font-Livvic mt-[12px]'>$20</p>
                </div>
            </div>
        </div>
    )
}

export default BestSellers