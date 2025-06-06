import Sinistre1 from "../assets/sinistre_1.png"
import Sinistre2 from "../assets/sinistre_2.jpg"
import Sinistre3 from "../assets/sinistre_3.jpg"
import Valid from "../assets/Valid.png"

const SinistreAuto = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center py-4">
                    Les + en cas de sinistre AUTOMOBILE avec <br/>ATLANTA ASSURANCE
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center px-10">
                <div className="flex flex-col justify-start items-center">
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Sinistre1} alt="" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-1">Indemnisation Rapide</figcaption>
                    </figure>
                    <ul className="text-gray-500 text-[0.8rem]">
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Confiance et transpaence.
                        </li>
                        <li className="flex items-center justify-start gap-2 w-full">
                            <img src={Valid} alt="" className="w-4" />
                            Approbation rapide et assistance par téléphone.
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Evaluation juste et précise des dommages.
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Paiement rapide des indémnistations.
                        </li>
                    </ul>
                </div>
                <div>
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Sinistre2} alt="" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-1">Assistance d'Experts</figcaption>
                    </figure>
                    <ul className="text-gray-500 text-[0.8rem]">
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Assistance complète en cas de sinistre
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Evaluation professionnelles des dommages
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Accompagnement dans toutes les démarches
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Conseils pour les réparations nécessaires
                        </li>
                    </ul>
                </div>
                <div>
                    <figure className="flex flex-col justify-center items-center mb-1">
                        <img src={Sinistre3} alt="" />
                        <figcaption className="text-[#497b9c] font-bold text-sm my-1">Déclaration Simplifiée en Ligne</figcaption>
                    </figure>
                    <ul className="text-gray-500 text-[0.8rem]">
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Déclarer votre sinistre facilement via notre plateforme en ligne.
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Gagnez en temps avec un traitement accéleré de votre dossier.
                        </li>
                        <li className="flex items-center justify-start gap-2">
                            <img src={Valid} alt="" className="w-4" />
                            Suivie en temps réel de l'état de votre dossier
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SinistreAuto;