import Image from 'next/image'

const Newsletter: React.FC = () => {
    return (
        <div className='w-full mt-[330px] flex flex-col items-center'>
            <h1 className='text-[56px] leading-[72px] font-Lora text-fourthBlack'>Join Our Newsletter</h1>
            <p className='text-[20px] leading-[25px] font-Livvic text-fifthGray mt-[24px]'>Sign up for our email newsletter to get exclusive discounts, updates and more</p>
            <div className='flex mt-[48px]'>
                <input type="text" placeholder='Enter Email' className='w-[670px] h-[72px] border border-fourthBlack pl-8 text-[20px] font-Livvic' />
                <button className='w-[236px] h-[72px] bg-primaryGreen text-thirdWhite font-Livvic text-[20px] font-semibold'>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter