import checkOutImg from '../assets/images/checkout/checkout.png'



const Header = ({children}) => {
    return (
        <div className='relative '>
            <div className='text-5xl flex items-center absolute bg-gradient-to-r from-[#151515] h-[300px] w-[1137px] text-white font-bold'>
                <h2 className='ml-5'>{children}</h2>
            </div>
            <img src={checkOutImg} alt="" />            
        </div>
    );
};

export default Header;