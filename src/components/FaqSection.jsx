import { useState } from "react";

const faqs = [
    {
        question: "Qu’est-ce qu’un bonus ?",
        answer: "Le bonus est une réduction accordée sur votre prime d’assurance lorsque vous n’avez pas eu de sinistre."
    },
    {
        question: "Qu’est-ce qu’une franchise ?",
        answer: "La franchise est la somme qui reste à votre charge après l'indemnisation de l'assurance."
    },
    {
        question: "Quelle est la seule garantie obligatoire pour l’automobile ?",
        answer: "La garantie responsabilité civile est la seule assurance obligatoire en automobile."
    },
    {
        question: "Qu’est-ce qu’une prime ou cotisation ?",
        answer: "C’est le montant que vous payez régulièrement à votre assureur pour être couvert."
    },
    {
        question: "Quelle est la durée du contrat d’assurance auto ?",
        answer: "La durée standard est d’un an, renouvelable automatiquement sauf résiliation."
    }
];

export default function FaqSection() {
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
                            className="bg-[#0099c4] hover:bg-[#007aa1] text-white w-6 h-6 flex items-center justify-center rounded"
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

            <div className="text-center pt-6">
                <button className="bg-[#0099c4] hover:bg-[#007aa1] text-white font-semibold py-2 px-6 rounded">
                    Voir toutes les FAQs Auto
                </button>
            </div>
        </div>
    );
}
