import { useState } from "react";

const faqs = [
    {
        question: "C'est quoi l'assurance automobile ?",
        answer: "L'assurance automobile est un contrat qui couvre les risques liés à l'utilisation d'un véhicule, comme les accidents, les dommages matériels ou corporels, et le vol."
    },
    {
        question: "Qui doit souscrire à l'assurance automobile ?",
        answer: "Tout propriétaire d'un véhicule à moteur destiné à circuler sur la voie publique est tenu de souscrire une assurance automobile."
    },
    {
        question: "L'assurance automobile est-elle obligatoire ?",
        answer: "Oui, la garantie responsabilité civile (dommages causés aux tiers) est obligatoire pour tout véhicule circulant sur la voie publique."
    },
    {
        question: "Qu'est-ce qu'un bonus ?",
        answer: "Le bonus est une réduction progressive de la prime d'assurance accordée aux conducteurs n'ayant pas causé d'accident responsable."
    },
    {
        question: "Qu'est-ce qu'une franchise ?",
        answer: "La franchise est le montant restant à la charge de l'assuré en cas de sinistre, avant que l'assurance n'intervienne."
    },
    {
        question: "Quelle est la seule garantie obligatoire pour l'automobile ?",
        answer: "La garantie responsabilité civile (couverture des dommages causés aux tiers) est la seule obligation légale."
    },
    {
        question: "Quels sont les éléments indispensables à la souscription ?",
        answer: "Permis de conduire, carte grise, informations sur le véhicule et le conducteur, ainsi qu'un RIB pour le prélèvement."
    },
    {
        question: "Qu'est-ce qu'une prime ou cotisation ?",
        answer: "C'est le montant payé périodiquement (mensuellement ou annuellement) à l'assureur pour bénéficier des garanties du contrat."
    },
    {
        question: "Qu'est-ce qu'une valeur neuve ?",
        answer: "C'est le prix d'achat d'un véhicule neuf identique au vôtre au moment du sinistre, utilisé pour certaines indemnisations."
    },
    {
        question: "Qu'est-ce qu'une valeur vénale ?",
        answer: "C'est la valeur marchande du véhicule d'occasion avant le sinistre, tenant compte de son âge et de son usure."
    },
    {
        question: "Que couvre la garantie Bris de glaces ?",
        answer: "Elle prend en charge la réparation ou le remplacement des vitres et pare-brise du véhicule en cas de bris."
    },
    {
        question: "Quelle est la durée du contrat d'assurance auto ?",
        answer: "Généralement d'un an avec tacite reconduction, sauf résiliation par l'une des parties dans les délais légaux."
    },
    {
        question: "Quels sont les documents prouvant que l'assuré(e) est réellement protégé(e) ?",
        answer: "L'attestation d'assurance (ou carte verte) et le contrat signé sont les preuves de la couverture. L'attestation doit toujours être présente dans le véhicule."
    },
    {
        question: "Quelles sont les différentes formules ?",
        answer: "Les principales formules sont : au tiers (minimum légal), intermédiaire (tiers + vol/incendie), et tous risques (couverture la plus complète)."
    },
    {
        question: "Qu'est-ce qu'un malus ?",
        answer: "Le malus est une majoration de la prime d'assurance appliquée après un sinistre responsable. Il augmente le coût de l'assurance."
    },
    {
        question: "Qu'est-ce qu'un rapport d'inspection automobile ?",
        answer: "C'est un document établi par un expert après inspection du véhicule, souvent requis après un sinistre pour évaluer les dommages."
    },
    {
        question: "Qu'est-ce qu'une proposition d'assurance automobile ?",
        answer: "C'est un document détaillant les garanties proposées, les exclusions, et le coût, envoyé par l'assureur avant la souscription du contrat."
    },
    {
        question: "Quel est le délai de déclaration d'un sinistre ?",
        answer: "Le délai légal est de 5 jours ouvrés maximum après l'incident, mais il est recommandé de déclarer au plus vite (24-48h idéalement)."
    },
    {
        question: "Pourquoi l'Assureur prend du temps pour indemniser l'assuré ?",
        answer: "Les délais varient selon la complexité du sinistre (expertise nécessaire, vérifications, dossier incomplet). Les cas simples sont traités sous 15 jours."
    },
    {
        question: "Quelles sont les voies de recours lorsqu'un assuré n'arrive pas à avoir réparation auprès de son assureur ?",
        answer: "1. Médiation (via le médiateur de l'assurance). 2. Recours légal (saisine de la justice). Conserver toutes les preuves est essentiel."
    },
    {
        question: "Quelles sont les catégories concernées par l'assurance automobile ?",
        answer: "Tous véhicules terrestres à moteur : voitures, motos, utilitaires, camions, ainsi que les engins spéciaux (tracteurs, etc.)."
    },
    {
        question: "Comment bénéficier de l'assistance ?",
        answer: "En contactant le numéro dédié (24/7) fourni dans votre contrat, en cas de panne, accident, ou vol. Des services comme dépannage ou véhicule de remplacement peuvent être inclus."
    },
    {
        question: "Comment contacter notre assureur ?",
        answer: "Via : 1. L'appli mobile de l'assureur (si disponible). 2. Le numéro de téléphone (service client ou urgence). 3. L'espace client en ligne. 4. L'agence locale."
    }
];

const FaqFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="bg-[#eaf5fc] space-y-4 px-4 py-6">
            {faqs.map((item, index) => (
                <div
                    key={index}
                    className="bg-[#f6f6f6] border border-[#ddd] rounded"
                >
                    <div className="flex justify-between items-center px-4 py-3 cursor-pointer" onClick={() => toggle(index)}>
                        <span className="text-[#497b9c] font-medium text-sm">
                            {item.question}
                        </span>
                        <button
                            className="bg-[#0099c4] hover:bg-white hover:text-gray-600 text-white w-6 h-6 flex items-center justify-center rounded"
                        >
                            <span className="text-xl">
                                {activeIndex === index ? "-" : "+"}
                            </span>
                        </button>
                    </div>

                    {activeIndex === index && (
                        <div className="px-4 pb-4 text-sm text-gray-600">
                            {item.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default FaqFAQ;
