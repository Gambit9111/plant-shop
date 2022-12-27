import Image from 'next/image'

const HeaderSection: React.FC = () => {
    return (
        <div className='w-full h-[81%] flex'>
            <section className='w-5/12'>
                <p className='text-[20px] leading-[25px] font-Livvic text-fifthGray mt-[132px]'>We offer you a wide range of artificial and natural flowers</p>
                <h1 className='text-[90px] leading-[115px] font-Lora text-fourthBlack mt-[24px]'>Plants for your interior</h1>
                <div className='flex items-center mt-[64px] gap-[64px]'>
                    <button className='w-[236px] h-[72px] bg-primaryGreen text-thirdWhite font-Livvic text-[20px] font-semibold'>Shop Now</button>
                    <div className='flex items-center gap-[24px]'>
                        <Image src='/icons/icon.svg' alt="icon" width={64} height={64} />
                        <h3 className='font-Livvic font-semibold text-[20px] text-fourthBlack'>Watch Video</h3>
                    </div>
                </div>
                <div className='flex items-center mt-[56px] gap-[80px]'>
                    <div className='flex flex-col items-left'>
                        <h2 className='text-[56px] leading-[72px] font-Lora text-fourthBlack'>160+</h2>
                        <h4 className='text-[20px] leading-[25px] font-Livvic text-fifthGray pt-2'>Plant Species</h4>
                    </div>
                    <div className='h-[102px] w-[2px] bg-fifthGray' />
                    <div className='flex flex-col items-left'>
                        <h2 className='text-[56px] leading-[72px] font-Lora text-fourthBlack'>100+</h2>
                        <h4 className='text-[20px] leading-[25px] font-Livvic text-fifthGray pt-2'>Clients</h4>
                    </div>
                </div>
            </section>
            <div className='w-7/12 flex flex-col pt-[52px] items-end'>
                <Image src='/images/header-img.png' priority alt="flower" width={668} height={601} />
                <div className='flex gap-[36px] mt-[48px] pr-[80px]'>
                    <Image src='/icons/arrow-left.svg' alt="arrow-left" width={37} height={15} />
                    <h3 className='text-[24px] font-Lora text-primaryGreen'>1<span className='text-fifthGray'>/4</span></h3>
                    <Image src='/icons/arrow-right.svg' alt="arrow-right" width={37} height={15} />
                </div>
            </div>
        </div>
    )
}

export default HeaderSection