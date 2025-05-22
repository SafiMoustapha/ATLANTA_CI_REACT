import React from "react";
import temoin1 from "../assets/Rev_1.png";
import temoin2 from "../assets/Rev_2.png";
import temoin3 from "../assets/Rev_3.png";
import cinqEtoiles from "../assets/5_stars.png";

const SectionTemoinages = () => {   
    const temoignages = [
        {
            nom: "Konan Dieng",
            avatar: temoin1,
            avis: "Je suis très satisfait de mon assurance auto chez AtlantaAssurance ! Le processus de souscription a été rapide et facile,et le service client est exceptionnel. Ils répondent toujoursmes questions rapidement et avec beaucoup de professionnalisme. Jerecommande vivement !",
        },
        {
            nom: "Kouassi Affoué",
            avatar: temoin2,
            avis: "Atlanta Assurance offre une couverture complète à des tarifs trèscompétitifs. Après avoir comparé plusieurs offres, je suis contentd'avoir choisi Atlanta pour mon assurance auto. Les garanties sontexcellentes et le service est toujours à l'écoute. Très recommandé !",
        },
        {
            nom: "Adjoua Baumann",
            avatar: temoin3,
            avis: "En tant que nouveau client chez Atlanta Assurance, je suis impressionné par l'efficacité et la simplicité du service. Obtenir mon assurance auto a été une expérience sans stress, et je sens que ma voiture est bien protégée. Merci Atlanta pour votre professionnalisme !",
        },
    ];

    return (
        <section className="text-center sm:h-[500px] lg:h-[90vh] bg-gray-100 px-4 lg:py-8 pb-8 lg:pb-0">
            <div className="flex flex-col items-center justify-start w-full h-20">
                <h2 className="text-[#497b9c] py-2 font-bold lg:text-2xl">
                    Ils nous ont fait confiance, Ils témoignent
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1"></span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-[13px] lg:gap-16 pt-4 lg:pt-20 lg:px-32">
                {temoignages.map((temoin, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-start w-full border-b-4 border-[#409fdf] py-6 rounded-xl shadow-md bg-white gap-4"
                    >
                        <figure className="flex flex-col items-center justify-center gap-2">
                            <img 
                                src={temoin.avatar} 
                                className="rounded-full w-[50px] h-[50px]"
                                alt={temoin.nom} />
                            <figcaption className="font-bold">{temoin.nom}</figcaption>
                        </figure>
                        <div className="flex items-center justify-center w-full h-6 bg-gray-100">
                            <img src={cinqEtoiles} className="w-[60px]" alt="5 étoiles" />
                        </div>
                        <p className="text-[0.7rem] lg:text-[1rem] text-gray-500 px-[30px]">
                            {temoin.avis}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionTemoinages;