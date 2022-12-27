import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <div className='w-full h-[640px] relative flex'>
            <div className='w-full h-full flex flex-col'>
                <div className='z-10 w-full h-[447px] mt-[194px] flex'>
                    <div className='w-4/12'>
                        <h1 className='text-[36px] leading-[46px] font-Lora text-fourthBlack mt-[70px]'>greenday</h1>
                        <p className='text-[18px] leading-[23px] text-fifthGray font-Livvic mt-[24px] mr-32'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        <div className='flex mt-[32px] gap-[24px]'>
                            <Image src='/icons/facebook.svg' width={24} height={24} alt="fb" />
                            <Image src='/icons/twitter.svg' width={24} height={24} alt="twitter" />
                            <Image src='/icons/instagram.svg' width={24} height={24} alt="instagram" />
                        </div>
                    </div>
                    <div className='h-full w-8/12 flex pt-[70px]'>
                        <div className='space-y-[24px] mr-[132px]'>
                            <h2 className='text-[20px] leading-[25px] font-Livvic text-fourthBlack'>Navigation</h2>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Home</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Products</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Profile</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Contacts</h3>
                        </div>
                        <div className='space-y-[24px] mr-[121px]'>
                            <h2 className='text-[20px] leading-[25px] font-Livvic text-fourthBlack'>About us</h2>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Our story</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Designers</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Press</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Sustainability</h3>
                        </div>
                        <div className='space-y-[24px] mr-[76px]'>
                            <h2 className='text-[20px] leading-[25px] font-Livvic text-fourthBlack'>Support</h2>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>FAQ</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Shipping & Returns</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Care guide</h3>
                            <h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>Warranty</h3>
                        </div>
                        <div className='space-y-[24px]'>
                            <h2 className='text-[20px] leading-[25px] font-Livvic text-fourthBlack'>Contact us</h2>
                            <div className='flex gap-[12px]'><Image src='/icons/phone-small.svg' width={17} height={17} alt="fb" /><h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>+2 999 456 6543</h3></div>
                            <div className='flex gap-[12px]'><Image src='/icons/phone-small.svg' width={17} height={17} alt="fb" /><h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>+2 954 453 6333</h3></div>
                            <div className='flex gap-[12px]'><Image src='/icons/email-small.svg' width={17} height={17} alt="fb" /><h3 className='text-[18px] leading-[20px] font-Livvic text-fifthGray'>hello@greenday.com</h3></div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[24px] z-10 mb-[80px] flex justify-between'>
                    <h3 className='text-[18px] font-Livvic text-fifthGray'>2023 Greenday.com</h3>
                    <div className='flex gap-[32px]'>
                        <h3 className='text-[18px] font-Livvic text-fifthGray'>Privacy Policy</h3>
                        <h3 className='text-[18px] font-Livvic text-fifthGray'>Terms of Use</h3>
                    </div>
                </div>
            </div>
            <div className='w-[1600px] h-[447px] bg-secondaryLightGreen bottom-0 left-[-120px] absolute z-0' />
        </div>
    )
}

export default Footer