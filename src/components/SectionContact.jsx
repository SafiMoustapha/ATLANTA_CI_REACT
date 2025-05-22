import React from "react";
import chatLady from "../assets/chat_lady.png";

const SectionContact = () => {
    return (
        <section className="lg:flex lg:items-center lg:justify-start sm:h-[550px] lg:h-[60vh] bg-[#c6e4f59e] pb-8 lg:pb-0">
            {/* Image à gauche */}
            <div className="flex flex-col items-start justify-start lg:items-center lg:justify-start w-full lg:w-[40%] lg:h-full h-[50%] p-8">
                <img 
                    src={chatLady} 
                    className="sm:w-[338px] sm:h-[212px] lg:w-[400px] lg:h-[280px]"
                    alt="Femme servixe client" />
            </div>

            {/* Texte à droite */}
            <div className="flex flex-col items-start justify-start w-full lg:w-[60%] lg:h-full h-[50%] px-6 lg:py-16 lg:pr-8">
                <h2 className="text-[#497b9c] text-xl sm:text-2xl font-bold lg:text-3xl my-8 lg:font-extrabold">
                    Contact avec ATLANTA ASSURANCE
                </h2>
                <p className="text-[0.8rem] text-gray-700 lg:text-[1rem]">
                    Vous souhaitez des informations sur nos assurances ou des conseils?
                    Nous somme disponible de 8h30 à 17h00 Complétez notre formulaire,
                    nous vous contacterons immédiatement.
                </p>

                {/* Bouton desktop */}
                <div className="hidden lg:flex items-end justify-end w-full pr-32">
                    <button className="text-[#497b9c] font-extrabold rounded-lg flex items-center justify-start w-full lg:w-[280px] py-4 border-2 border-[#497b9c] mt-16">Contactez-nous</button>
                </div>

                {/* Bouton mobile */}
                <button className="lg:hidden text-[#497b9c] font-extrabold rounded-lg flex items-center justify-center w-full lg:w-[300px] py-4 border-2 border-[#497b9c] mt-16">Contactez-nous</button>
            </div>
        </section>
    );
};

export default SectionContact;