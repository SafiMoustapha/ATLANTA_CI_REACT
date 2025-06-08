import React from 'react';
import headerImage from '../../../assets/Header.png';
import cocherIcon from '../../../assets/cocher.png';
import logosPayement from '../../../assets/Logos_payment.png';
const AccueilSection = () => {
    const advantages = [
        "Assurez votre quotidien sans difficulté.",
        "Consultez gratuitement nos tarifs compétitifs.",
        "Obtenez votre attestation digitale instantanément."
    ];
    return (
        <section className="relative h-[300px] lg:h-[500px] lg:bg-gray-50 lg:flex lg:items-center lg:justify-between flex-col items-start justify-start text-white text-center px-3 py-1 mb-[93px] lg:mb-0">
            {/* Image fond mobile */}
            <div className="absolute top-0 left-0 h-full w-full sm:w-1/2 bg-cover bg-center opacity-10 z-[-1] lg:hidden" style={{ backgroundImage: `url(${headerImage})` }}>
            </div>
            {/* Contenu principal */}
            <div className="lg:flex lg:items-center lg:justify-around text-start text-white z-10 w-full h-full lg:px-32">
                {/* Texte */}
                <div className="block text-start p-4 text-white z-10 w-auto h-full lg:w-1/2 lg:h-full lg:p-10">
                    <h2 className="text-[#497b9c] font-bold lg:text-[2rem]">
                        Votre Sécurité, Notre Priorité
                    </h2>
                    <h1 className="text-[#ff802b] font-bold text-2xl">
                        À des tarifs accessibles
                    </h1>
                    <ul className="flex flex-col text-start items-start gap-4 mt-4 text-[0.6rem]">
                        {advantages.map((text, index) => (
                            <li key={index} className="flex items-center gap-2 text-black lg:text-[1rem]">
                                <img src={cocherIcon} alt="check" />
                                <p>{text}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="w-[400px] h-10 hidden lg:flex items-center justify-center bg-[#497b9c] font-semibold text-[1rem] my-10">
                        <h2>CALCULER MON ASSURANCE</h2>
                    </div>

                    <div className="hidden lg:flex pt-2">
                        <img src={logosPayement} alt="logos de paiement" />
                    </div>
                </div>

                {/* Image à droite sur desktop */}
                <div className='photo hidden lg:flex items-center justify-start w-1/2 h-full'>
                    <img src={headerImage} alt="Image d'assurance"/>

                </div>
            </div>

            {/* Bouton mobile */}
            <div className='flex lg:hidden items-center justify-center w-full h-10 bg-[#497b9c] font-semibold text-[0.7rem]'>
                <h2>CALCULER MON ASSURANCE</h2>
            </div>

            {/* Logos de paiement mobile */}
            <div className='flex lg:hidden items-center justify-center h-14 bg-gray-50 pt-2'>
                <img src={logosPayement} alt="logos de paiement" />
            </div>
        </section>
    );
};

export default AccueilSection;