import { Link } from 'react-router-dom';
import logo from '../assets/AtlantaLogoHD.png';

const Logo = () => {
    return (
        <Link to="/">
            <div className='logo lg:ml-10'>
                <img 
                    src={logo}
                    alt="Logo Atlanta" 
                    className='w-44 h-auto'
                    />
            </div>
        </Link>
    )
};

export default Logo;