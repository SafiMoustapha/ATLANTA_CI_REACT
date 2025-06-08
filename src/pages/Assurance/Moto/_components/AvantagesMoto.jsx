import Icon1 from "../../../../assets/Icon_1.png"
import Icon2 from "../../../../assets/Icon_2.png"
import Icon3 from "../../../../assets/Icon_3.png"

const AvantagesAuto = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center py-4">
                    Les avantages de <br/>notre assurance MOTO
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center px-10 pb-6">
                <div className="flex flex-col justify-start items-center">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon1} alt="" className="w-16" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-4">Protection Complète</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem]">
                        ATLANTA ASSURANCE offre une assurance moto qui couvre tous les aspects essentiels, des accidents aux dommages matériels. Profitez d'une protection solide qui garantit votre sécurité et celle de votre moto en toute situation. Roulez en toute confiance.
                    </p>
                </div>
                <div className="pt-3">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon2} alt="" className="w-16" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-4">Flexibilité des Offres</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem]">
                        Chez ATLANTA ASSURANCE, nous comprenons que les besoins de chaque motard varient. Nos offres d'assurance moto sont flexibles et conçues pour s'adapter aux différentes exigences. Personnalisez votre couverture pour qu'elle corresponde parfaitement à vos besoins.
                    </p>
                </div>
                <div className="pt-4">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Icon3} alt="" className="w-16" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-4">Souscription et Gestion en Ligne</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.8rem]">
                        Facilitez la souscription et la gestion de votre assurance moto avec notre plateforme en ligne facile à utiliser. Gérez votre police, choisissez vos options et accédez à l'assistance rapidement, tout cela depuis votre ordinateur ou smartphone. Avec ATLANTA ASSURANCE, gérer votre assurance est aussi simple que de naviguer sur la route.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AvantagesAuto;