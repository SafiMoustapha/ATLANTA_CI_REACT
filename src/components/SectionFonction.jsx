import React from "react";
import infoImage from "../assets/le-marketing-numerique.png";
import offreImage from "../assets/gadget.png";
import paiementImage from "../assets/sans-contact.png";
import attestationImage from "../assets/dossier-ouvert.png";

const etapes = [
    {
        image: infoImage,
        titre1: "Saisissez vos Informations",
        titre2: "en toute confiance",
        text: "Nous prenons votre confidentialité au sérieux. Remplissez vos\ninformations personnelles en toute sécurité grâce à notre système\nde cryptage avancé. Nous vous guidons pas à pas pour garantir que\nvos données restent protégées du début à la fin du processus.",
    },
    {
        image: offreImage,
        titre1: "Sélectionnez l'Offre Idéale",
        titre2: "pour Vous",
        text: "Explorez une variété d'options d'assurance personnalisées pour\nrépondre précisément à vos besoins. Utilisez nos filtres intuitifs\npour trouver facilement l'offre qui correspond le mieux à votre\nsituation et à votre budget. Nous vous aidons à faire un choix\néclairé, avec des explications claires et des comparatifs\ndétaillés.ifs pour trouver facilement l'offre qui correspond le\nmieux à votre situation et à votre budget.",
    },
    {
        image: paiementImage,
        titre1: "Réglez votre Assurance",
        titre2: "Sans Souci",
        text: "Effectuez votre paiement en toute tranquillité grâce à nos méthodes sécurisées et vérifiées. Nous acceptons une large gamme de moyens de paiement pour vous offrir flexibilité et commodité.",
    },
    {
        image: attestationImage,
        titre1: "Obtenez Instantanément",
        titre2: "votre attestation digitale",
        text: "Dès que votre paiement est validé, votre attestation d'assurance vous est délivrée immédiatement. Accédez à votre attestation électronique depuis n'importe quel appareil, téléchargez-la ou imprimez-la selon votre convenance.Profitez de la couvertureinstantanée et de la tranquillité d'esprit que vous méritez.",
    },
];

const SectionFonction = () => {
    return (
        <section className="text-center sm:h-[620px] lg:h-[110vh] lg:px-10 lg:py-10 bg-gray-200 pb-8 lg:pb-0">
            <div className="flex flex-col items-center justify-start w-full h-20">
                <h2 className="text-[#497b9c] py-2 font-bold lg:text-2xl">
                    Démarrer avec ATLANTA ASSURANCE : Un Processus Simple
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1"></span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 w-full gap-8 py-4 px-16 lg:gap-4 lg:px-10 lg:py-8 lg:mt-8 text-center">
                {etapes.map((etape, index) => (
                    <div key={index} className="gap-2">
                        <figure className="flex flex-col items-center justify-start">
                            <img src={etape.image} alt="" className="w-[100px] mx-auto mb-4" />
                            <div className="flex flex-col items-center">
                                <h2 className="text-[#6bb5e7] font-bold">{etape.titre1}</h2>
                                <h2 className="text-[#6bb5e7] font-bold mb-4">{etape.titre2}</h2>
                            </div>
                        </figure>
                        <p className="text-[0.7rem] text-gray-500 lg:text-[1rem]">
                            {etape.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFonction;