import logo from '../assets/AtlantaLogoHD.png';

const Logo = () => {
    return (
        <div className='logo lg:ml-10'>
            <img 
                src={logo}
                alt="Logo Atlanta" 
                className='w-44 h-auto'
                />
        </div>
    )
};

export default Logo;