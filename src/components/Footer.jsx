import React from "react";
import flecheEnHaut from "../assets/en-haut.png";

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="w-full h-auto sm:h-[70vh] bg-[#031323] text-white">
            {/* Partie principale */}
            <div className="w-full sm:h-[62vh] bg-[#031323] text-white text-center sm:text-start sm:pl-10 py-8 overflow-x-hidden sm:overflow-visible">
                <div className="grid grid-cols-1 sm:[grid-template-columns:repeat(6,minmax(0,1fr))_40px] gap-6">
                    {/* Produits */}
                    <div className="space-y-2">
                        <h3 className="font-bold">PRODUITS</h3>
                        <nav>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#">Voiture</a></li>
                                <li><a href="#">Moto</a></li>
                                <li><a href="#">Camionette</a></li>
                                <li><a href="#">Camion</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Services après vente */}
                    <div className="sm:col-span-2 space-y-2">
                        <h3 className="font-bold">SERVICES APRES VENTE</h3>
                        <nav>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#">Assistance</a></li>
                                <li><a href="#">Compliments et critiques</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Atlanta */}
                    <div className="space-y-2">
                        <h3 className="font-bold">ATLANTA</h3>
                        <nav>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#">Qui sommes-nous</a></li>
                                <li><a href="#">Mention légale</a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 sm:overflow-x-auto lg:overflow-visible">
                        <h3 className="font-bold">CONTACT</h3>
                        <nav>
                            <ul className="space-y-2 leading-relaxed text-gray-400">
                                <li><a href="#">27 22 22 44 00</a></li>
                                <li><a href="#">Le numéro court 1601</a></li>
                                <li><a href="#">support@at</a></li>
                                <li><a href="#">
                                    ATLANTA ASSURANCE<br />
                                    Siège Plateau,<br />
                                    avenue Noguès<br />
                                    Immeuble Broadway
                                </a></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Suivez-nous */}
                    <div className="space-y-2">
                        <h3 className="font-bold">SUIVEZ-NOUS</h3>
                    </div>

                    {/* Bouton retor en haut */}
                    <div className="flex items-center justify-center lg:justify-start h-full">
                        <div className="rounded-full bg-gray-300 flex items-center justify-center">
                        <button onClick={scrollTop}>
                            <img src={flecheEnHaut} alt="Retour en haut" className="rounded-full p-[10px]" />
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pied de page */}
            <div className="flex items-center justify-center sm:justify-start pl-4 w-full h-[8vh] bg-black text-[0.8rem] font-light">
                <p>Release 1.1</p>
            </div>
        </footer>
    );
};

export default Footer;