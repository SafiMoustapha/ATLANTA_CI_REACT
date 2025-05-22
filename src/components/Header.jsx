import { useState } from 'react';
import MobileMenuToggle from './MobileMenuToggle';
import Logo from './Logo';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev => !prev));
    };
    return (
        <>
            <header className="w-full flex items-center lg:justify-between px-4 py-1 bg-white shadow-md h-[75px] lg:h-[85px] fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center justify-start gap-40">
                    <MobileMenuToggle isOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    <Logo />
                </div>
                <div className="menu w-[850px] px-4 py-2 hidden lg:flex">
                    <NavMenu />
                </div>
            </header>
            {/* Sidebar visible uniquement si le menu est ouvert */}
            {isMenuOpen && <Sidebar toggleMenu={toggleMenu} />}
        </>
    );
};

export default Header;