import React from "react";
import digitalHumanIcon from "../../../assets/digital_humain.png";
import paiementSinistres from "../../../assets/paiement_sinistres.png";
import jeuneDynamique from "../../../assets/jeune_dynamique.png";

const advantages = [
    {
        image: digitalHumanIcon,
        imgClass: "w-[60px] lg:w-[108px] mx-auto mb-4 lg:mb-10",
        titre: "Un assureur moderne\net accessible",
        texte: "Nous associons les avantages du digital avec une présence humaine pour vous offrir le meilleur service. Nos conseillers sont toujours disponibles pour vous accompagner dans toutes vos démarches.",
    },
    {
        image: paiementSinistres,
        imgClass: "w-[55px] lg:w-[100px] mx-auto mb-4 lg:mb-10",
        titre: "Un assureur qui respecte\nses engagements",
        texte: "Nous sommes réputés pour notre rapidité et notre efficacité dans le traitement et le paiement des sinistres, assurant ainsi votre tranquillité d'esprit en cas d'incident.",
    },
    {
        image: jeuneDynamique,
        imgClass: "w-[80px] lg:w-[145px] mx-auto mb-4 lg:mb-10",
        titre: "Un assureur jeune\net dynamique",
        texte: "Depuis notre création en 2016, nous continuons à construire et nous progressons. Grâce à notre expertise et à notre engagement envers nos assurés, Atlanta Assurance est devenue un acteur clé du marché de l'assurance en Côte d'Ivoire.",
    }
];

const SectionAPropos = () => {
    return (
        <section className="text-center bg-slate-200 h-auto sm:h-[350px] lg:h-[90vh] lg:py-10 pb-8 lg:pb-0">
            <div className="flex flex-col items-center justify-start w-full h-20">
                <h2 className="text-[#497b9c] py-2 font-bold lg:text-3xl">
                    Pourquoi choisir ATLANTA ASSURANCE,
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1"></span>
            </div>
            <div className="grid sm:grid-rows-3 grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 lg:gap-y-10 px-10 lg:px-40 lg:py-20 text-center items-start box-border">
                {advantages.map((item, index) => (
                    <div key={index} className="grid sm:grid-rows-3 gap-2">
                        <figure className="flex flex-col items-center justify-start">
                            <img 
                            src={item.image} 
                            className={`${item.imgClass}`}
                            alt="" />
                            <h2 className="text-[#497b9c] font-bold lg:text-xl leading-tight mb-4 lg:mb-10">
                                {item.titre}
                            </h2>
                        </figure>
                        <p className="text-[0.7rem] lg:text-[1rem] text-gray-500 leading-snug">
                            {item.texte}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionAPropos;