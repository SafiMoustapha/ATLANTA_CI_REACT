import Icon1 from "../../../../assets/Icon_1.png"
import Icon2 from "../../../../assets/Icon_2.png"
import Icon3 from "../../../../assets/Icon_3.png"

const AvantagesAuto = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Les avantages de <br/>notre assurance AUTOMOBILE
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center px-10 pb-6">
                <div className="flex flex-col justify-start items-center">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon1} alt="" className="w-16" />
                        <figcaption className="text-[#497b9c] font-bold text-sm lg:text-xl my-4">Protection Complète</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem] lg:text-[1rem]">
                        Protégez votre véhicule contre tous les risques avec ATLANTA ASSURANCE. Nos polices couvrent les dommages accidentels, le vol et les dégâts naturels, vous offrant ainsi une sécurité complète pour une conduite sereine.
                    </p>
                </div>
                <div className="pt-3">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon2} alt="" className="w-16" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-4 lg:text-xl">Flexibilité des Offres</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem] lg:text-[1rem]">
                        Chez ATLANTA ASSURANCE, nous reconnaissons que chaque conducteur et chaque véhicule sont uniques. C'est pourquoi nous proposons des polices modulables qui s'adaptent à vos besoins spécifiques, garantissant ainsi une couverture optimale à des tarifs compétitifs.
                    </p>
                </div>
                <div className="pt-4">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon3} alt="" className="w-16" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-4 lg:text-xl">Souscription et Gestion en Ligne</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem] lg:text-[1rem]">
                        Profitez de la simplicité de gestion de votre assurance en ligne avec notre système intuitif. Souscrivez et gérez votre police rapidement et facilement. Bénéficiez d'un processus transparent et d'une assistance immédiate pour toutes vos questions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AvantagesAuto;