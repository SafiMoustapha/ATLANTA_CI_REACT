import React from "react";
import carImage from "../../../assets/car.png";
import scooterImage from "../../../assets/scooter.png";
import vanImage from "../../../assets/van.png";
import camionImage from "../../../assets/camion.png";

const offres = [
    { label: "Voiture", image: carImage },
    { label: "Moto", image: scooterImage },
    { label: "Camionette", image: vanImage },
    { label: "Camion", image: camionImage },
];

const SectionOffres = () => {
    return (
        <section className="text-center bg-slate-50 sm:h-[250px] lg:h-[45vh] lg:pt-4 pb-8 lg:pb-0">
            <div className="flex flex-col items-center justify-start w-full h-20">
                <h2 className="text-[#497b9c] py-2 font-bold lg:text-2xl">
                    Votre PROTECTION commence ici : Veuillez découvrir nos OFFRES
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1"></span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 w-full gap-8 p-4 lg:gap-4 lg:px-10 lg:py-10">
                {offres.map((offre, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-start w-full border border-gray-300 p-2">
                            <img src={offre.image} alt={offre.label} className="w-[100px]" />
                            <h2 className="text-gray-400 font-bold">{offre.label}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionOffres;