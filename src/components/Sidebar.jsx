import { useState } from 'react';
import { Link } from 'react-router-dom';
import accueilIcon from "../assets/accueil.png";
import flecheIcon from "../assets/fleche-droite.png";
import contactIcon from '../assets/contactBlanc.png';

const Sidebar = ({ toggleMenu }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const links = [
        { label: "Assistance", icon: accueilIcon, path: "/assistance" },
        {
            label: "Assurance Auto",
            icon: accueilIcon,
            arrow: flecheIcon,
            subLinks: [
                { label: "Auto", path: "/assurance/auto", icon: accueilIcon },
                { label: "Camion", path: "/assurance/camion", icon: accueilIcon },
                { label: "Moto", path: "/assurance/moto", icon: accueilIcon },
                { label: "Camionnette", path: "/assurance/camionnette", icon: accueilIcon }
            ]
        },
        { label: "Qui sommes-nous", icon: accueilIcon, path: "/apropos" },
        { label: "FAQ", icon: accueilIcon, path: "/faq" },
        { label: "Nous contacter", icon: accueilIcon, path: "/contact" },
        { label: "Mon Compte", icon: contactIcon, path: "/compte" },
    ];

    return (
        <aside className="w-[80%] sm:w-[33%] h-screen mt-[75px] lg:mt-[85px] bg-[#497b9c] fixed top-0 left-0 z-50 shadow-lg transition-transform duration-300 animate-slide-in overflow-y-auto">
            {links.map((link, index) => (
                <div key={index}>
                    {link.subLinks ? (
                        <>
                            {/* Assurance Auto clickable */}
                            <div
                                className="w-full flex items-center justify-between p-4 border-b border-gray-400 cursor-pointer hover:bg-[#3a6583] hover:border-l-4 hover:border-l-orange-500"
                                onClick={() => setShowSubMenu(!showSubMenu)}
                            >
                                <div className="flex items-center">
                                    <img src={link.icon} alt="" className="w-6 h-6 mr-2" />
                                    <p className="text-white text-[1rem]">{link.label}</p>
                                </div>
                                {link.arrow && <img
                                    src={link.arrow}
                                    alt=""
                                    className={`w-[12px] transition-transform duration-300 ${showSubMenu ? 'rotate-90' : ''}`}
                                />}
                            </div>

                            {/* Sous-menu */}
                            {showSubMenu && (
                                <div className="pl-10 bg-[#3a6583]">
                                    {link.subLinks.map((sub, subIndex) => (
                                        <Link
                                            key={subIndex}
                                            to={sub.path}
                                            onClick={toggleMenu}
                                            className="block py-2 text-white hover:bg-[#2c5168] no-underline"
                                        >
                                            <div className='flex items-center hover:border-l-2 hover:border-orange-400'>
                                                <img src={link.icon} alt="" className="w-4 h-4 mr-2" />
                                                {sub.label}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <Link
                            to={link.path}
                            onClick={toggleMenu}
                            className="w-full flex items-center justify-start p-4 border-b border-gray-400 cursor-pointer hover:bg-[#3a6583] no-underline hover:border-l-4 hover:border-l-orange-500"
                        >
                            <img src={link.icon} alt="" className="w-6 h-6 mr-2" />
                            <p className="text-white text-[1rem]">{link.label}</p>
                        </Link>
                    )}
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
