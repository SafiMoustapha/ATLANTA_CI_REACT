import AccountButton from './AccountButton';
import flecheIconBas from '../assets/fleche-enbas.png';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    return (
        <nav className='w-full'>
            <ul className='flex text-[#497b9c] font-bold justify-between items-center text-[0.9rem]'>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="#">Assistance</Link>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300 flex items-center group gap-1'>
                    <Link to="#">Assurance Auto</Link>
                    <img src={flecheIconBas} alt="" />
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="#">Qui sommes-nous</Link>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="#">FAQ</Link>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="../pages/Compte">Nous contacter</Link>
                </li>
                <AccountButton />
            </ul>
        </nav>
    );
};

export default NavMenu;