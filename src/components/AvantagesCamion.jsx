import Icon1 from "../assets/Icon_1.png"
import Icon2 from "../assets/Icon_2.png"
import Icon3 from "../assets/Icon_3.png"

const AvantagesCamion = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Les avantages de <br/>notre assurance CAMION
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center px-10 pb-6">
                <div className="flex flex-col justify-start items-center">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon1} alt="" className="w-16 lg:w-32" />
                        <figcaption className="text-[#497b9c] font-bold text-sm lg:text-xl my-4">Protection Complète</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem] lg:text-[1.1rem]">
                        Profitez d'une couverture exhaustive avec notre assurance camion. ATLANTA ASSURANCE offre une protection contre les accidents, les dommages et le vol, assurant ainsi la sécurité de votre véhicule en toutes circonstances. Notre priorité est de vous offrir la tranquillité, que vous soyez sur la route ou à l'arrêt.
                    </p>
                </div>
                <div className="pt-3">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon2} alt="" className="w-16 lg:w-32" />
                        <figcaption className="text-[#497b9c] font-bold text-sm lg:text-xl my-4">Flexibilité des Offres</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem] lg:text-[1.1rem]">
                        ATLANTA ASSURANCE comprend que chaque entreprise est unique. C'est pourquoi nous proposons des offres flexibles qui s'adaptent à vos besoins spécifiques. Que vous ayez besoin d'une couverture basique ou d'options supplémentaires, nous configurons votre assurance pour qu'elle vous convienne parfaitement.
                    </p>
                </div>
                <div className="pt-4">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon3} alt="" className="w-16 lg:w-32" />
                        <figcaption className="text-[#497b9c] font-bold text-sm lg:text-xl my-4">Souscription et Gestion en Ligne</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem] lg:text-[1.1rem]">
                        Simplifiez la gestion de votre assurance avec notre plateforme en ligne facile à utiliser. Souscrivez et gérez votre assurance camion sans effort, où que vous soyez. Avec ATLANTA ASSURANCE, profitez d'une gestion sans tracas et d'un support client toujours disponible.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AvantagesCamion;