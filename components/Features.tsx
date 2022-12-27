import Image from 'next/image'

const Features: React.FC = () => {
    return (
        <div className='mt-[180px] flex flex-col items-center'>
            <h1 className=' text-fourthBlack font-Lora text-[56px] leading-[72px]'>About Us</h1>
            <p className=' text-fifthGray font-Livvic text-[20px] leading-[25px] mt-[24px]'>This site is for those who admire the beauty and harmony of nature</p>
            <div className='flex gap-[24px] mt-[64px]'>
                <div className='w-[437px] h-[411px] border-2 border-secondaryLightGreen flex flex-col items-center'>
                    <Image src='/icons/flower.svg' width={100} height={100} alt="flower" className='mt-[70px]' />
                    <h3 className='text-[24px] font-Lora text-primaryGreen mt-[32px]'>Large Assortment</h3>
                    <p className='px-8 text-[18px] leading-[23px] font-Livvic text-fifthGray mt-[20px] text-center'>We offer our customers more then 15,000 items of natural and artificial flowers, trees and many accessories for floristry.</p>
                </div>
                <div className='w-[437px] h-[411px] border-2 border-secondaryLightGreen flex flex-col items-center'>
                    <Image src='/icons/box.svg' width={100} height={100} alt="flower" className='mt-[70px]' />
                    <h3 className='text-[24px] font-Lora text-primaryGreen mt-[32px]'>Free & Fast Shipping</h3>
                    <p className='px-8 text-[18px] leading-[23px] font-Livvic text-fifthGray mt-[20px] text-center'>We will ship your goods after receipt of funds to the current account. Choose the most convenient from the offered delivery options.</p>
                </div>
                <div className='w-[437px] h-[411px] border-2 border-secondaryLightGreen flex flex-col items-center'>
                    <Image src='/icons/phone.svg' width={100} height={100} alt="flower" className='mt-[70px]' />
                    <h3 className='text-[24px] font-Lora text-primaryGreen mt-[32px]'>24/7 Support</h3>
                    <p className='px-8 text-[18px] leading-[23px] font-Livvic text-fifthGray mt-[20px] text-center'>We work seven days a week and a lunch break. We will be glad to welcome you as our Buyer and thank you for your trust in us !
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features