import AccountButton from './AccountButton';
import flecheIconBas from '../assets/fleche-enbas.png';
import accueilIcon from "../assets/accueil.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const subLinks = [
        { label: "Auto", path: "/assurance/auto" },
        { label: "Camion", path: "/assurance/camion" },
        { label: "Moto", path: "/assurance/moto" },
        { label: "Camionnette", path: "/assurance/camionnette" }
    ];
    return (
        <nav className='w-full'>
            <ul className='flex text-[#497b9c] font-bold justify-between items-center text-[0.9rem]'>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="/assistance">Assistance</Link>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300 flex items-center gap-1 relative cursor-pointer'
                    onClick={() => setShowSubMenu(!showSubMenu)}>
                    <span>Assurance Auto</span>
                    <img
                        src={flecheIconBas}
                        alt="arrow"
                        className={`w-[12px] transition-transform duration-300 ${showSubMenu ? 'rotate-180' : ''}`}
                    />

                    {showSubMenu && (
                        <div className="absolute top-full left-0 mt-1 bg-[#3a6583] shadow-md z-50 min-w-[150px]">
                            {subLinks.map((sub, subIndex) => (
                                <Link
                                    key={subIndex}
                                    to={sub.path}
                                    className="block py-2 text-white hover:bg-[#2c5168] no-underline"
                                >
                                    <div className='flex items-center  hover:border-l-2 hover:border-orange-400 hover:text-orange-300'>
                                        <img src={accueilIcon} alt="" className="w-4 h-4 mr-2" />
                                        {sub.label}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="/apropos">Qui sommes-nous</Link>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li className='hover:bg-gray-300 p-2 rounded-sm transition-duration-300'>
                    <Link to="/contact">Nous contacter</Link>
                </li>
                <AccountButton />
            </ul>
        </nav>
    );
};

export default NavMenu;