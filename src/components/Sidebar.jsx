import { Link } from 'react-router-dom';

const Sidebar = ({ toggleMenu }) => {
    const links = [
        { label: "Assistance", icon: "../assets/accueil.png", path: "/assistance" },
        { label: "Assurance Auto", icon: "../assets/accueil.png", arrow: "../assets/fleche.png", path: "/assurance-auto" },
        { label: "Qui sommes-nous", icon: "../assets/accueil.png", path: "/qui-sommes-nous" },
        { label: "FAQ", icon: "../assets/accueil.png", path: "/faq" },
        { label: "Nous contacter", icon: "../assets/accueil.png", path: "/contact" },
        { label: "Mon Compte", icon: "../assets/contactez-nous (1).png", path: "/compte" },
    ];

    return (
        <aside className="w-[80%] sm:w-[50%] md:w-[33%] h-screen mt-[75px] lg:mt-[85px] bg-[#497b9c] fixed top-0 left-0 z-50 shadow-lg transition-transform duration-300 animate-slide-in">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.path}
                    onClick={toggleMenu}
                    className="w-full flex items-center justify-start p-4 border-b border-gray-400 cursor-pointer hover:bg-[#3a6583] no-underline"
                >
                    <div className="flex items-center justify-start w-6 mr-2">
                        <img src={link.icon} alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-white text-[1rem]">{link.label}</p>
                        {link.arrow && <img src={link.arrow} alt="" className="w-[12px]" />}
                    </div>
                </Link>
            ))}
        </aside>
    );
};

export default Sidebar;
