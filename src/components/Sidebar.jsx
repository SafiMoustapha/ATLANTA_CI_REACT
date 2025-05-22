const Sidebar = ({ toggleMenu }) => {
    const links = [
        { label: "Assistance", icon: "../assets/accueil.png" },
        { label: "Assurance Auto", icon: "../assets/accueil.png", arrow: "../assets/fleche.png" },
        { label: "Qui sommes-nous", icon: "../assets/accueil.png" },
        { label: "FAQ", icon: "../assets/accueil.png" },
        { label: "Nous contacter", icon: "../assets/accueil.png" },
        { label: "Mon Compte", icon: "../assets/contactez-nous (1).png" },
    ];

    return (
        <aside className="w-[80%] sm:w-[50%] md:w-[33%] h-screen mt-[75px] lg:mt-[85px] bg-[#497b9c] fixed top-0 left-0 z-50 shadow-lg transition-transform duration-300 animate-slide-in">
            {links.map((link, index) => (
                <div
                    key={index}
                    onClick={toggleMenu}
                    className="w-full flex items-center justify-start p-4 border-b border-gray-400 cursor-pointer hover:bg-[#3a6583]"
                >
                    <div className="flex items-center justify-start w-6 mr-2">
                        <img src={link.icon} alt="" className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <p className="text-white text-[1rem]">{link.label}</p>
                        {link.arrow && <img src={link.arrow} alt="" className="w-[12px]" />}
                    </div>
                </div>
            ))}
        </aside>
    );
};

export default Sidebar;
