import { useState } from "react";
import menuIcon1 from "../assets/menu1.png";
import menuIcon2 from "../assets/menu2.png";
import closeIcon from "../assets/croix.png"; // si tu as une icône de fermeture

const MobileMenuToggle = ({ isOpen, toggleMenu }) => {
  const [hovered, setHovered] = useState(false);
  let imgSrc;
  if (isOpen) {
    imgSrc = closeIcon;
  } else{
    imgSrc = hovered ? menuIcon1 : menuIcon2;
  }

  return (
    <div
      className="menu p-4 items-center justify-start relative cursor-pointer lg:hidden hover:bg-gray-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggleMenu}
    >
      <img
        src={imgSrc}
        alt="Menu"
        className="transition-transform duration-300 ease-in-out w-7 hover:scale-90 active:scale-75"
      />
    </div>
  );
};

export default MobileMenuToggle;
