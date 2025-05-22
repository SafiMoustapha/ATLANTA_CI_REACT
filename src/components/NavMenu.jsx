import AccountButton from './AccountButton';
import flecheIconBas from '../assets/fleche-enbas.png';

const NavMenu = () => {
    return (
        <nav className='w-full'>
            <ul className='flex text-[#497b9c] font-bold justify-between items-center text-[0.9rem]'>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <a href="#">Assistance</a>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300 flex items-center group gap-1'>
                    <a href="#">Assurance Auto</a>
                    <img src={flecheIconBas} alt="" />
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <a href="#">Qui sommes-nous</a>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <a href="#">FAQ</a>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <a href="#">Nous contacter</a>
                </li>
                <AccountButton />
            </ul>
        </nav>
    );
};

export default NavMenu;