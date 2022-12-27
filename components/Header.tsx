import Image from 'next/image'

const Header: React.FC = () => {
    return (
        <nav className="w-full h-[48px] flex justify-between items-center">
            <h1 className='text-[36px] leading-[46px] text-fourthBlack font-Lora'>greenday</h1>
            <div className='flex gap-[78px] ml-28'>
                <div className='relative'>
                    <h2 className='text-[20px] leading-[25px] text-primaryGreen font-Livvic font-semibold'>Home</h2>
                    <div className="w-[12px] h-[2px] bg-primaryGreen absolute top-[32px] left-[24px]" />
                </div>
                <h2 className='text-[20px] leading-[25px] text-fifthGray font-Livvic'>Products</h2>
                <h2 className='text-[20px] leading-[25px] text-fifthGray font-Livvic'>Contacts</h2>
            </div>
            <div className='flex gap-[40px]'>
                <Image src="/icons/search.svg" alt="search" width={24} height={24} />
                <Image src="/icons/user.svg" alt="user" width={24} height={24} />
                <Image src="/icons/shopping-cart.svg" alt="cart" width={24} height={24} />
                <div className='w-[2px] h-[40px] bg-fifthGray' />
                <Image src="/icons/burger.svg" alt="burger" width={24} height={18} />
            </div>
        </nav>
    )
}

export default Header