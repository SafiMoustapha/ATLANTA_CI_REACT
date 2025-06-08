import illustration1 from "../assets/Illustration_1.png"
import illustration2 from "../assets/Illustration_2.png"

const SinistreAssistance = () => {
    return (
        <section className="bg-[#f2f9fd]">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Déclarer votre sinistre
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
                {/* Par Téléphone */}
                <div className="flex flex-col items-center text-center space-y-4 text-[0.8rem] lg:text-[1.1rem] text-gray-500">
                    <img src={illustration1} alt="Par téléphone" className="w-32 h-auto" />
                    <h3 className="font-semibold text-lg text-[#497b9c]">Par Téléphone</h3>
                    <p>
                        Nos conseillers vous proposent des solutions de prise en charge et
                        l’indemnisation adaptées à votre sinistre
                    </p>
                    <p className="text-[#497b9c] font-semibold">
                         27 22 22 44 00
                    </p>
                    <p>
                        Depuis l’étranger ?<br />
                        <span className="text-[#497b9c] font-semibold">27 22 22 44 00</span>
                    </p>
                    <p className="text-sm lg:text-[1.1rem]">
                        Du lundi au vendredi de 8h30 à 18h30<br />
                        et le samedi de 9h00 à 12h30<br />
                        appel non surtaxé
                    </p>
                </div>

                {/* En Ligne */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <img src={illustration2} alt="En ligne" className="w-32 h-auto mb-2" />
                    <h3 className="font-semibold text-lg text-[#497b9c]">En Ligne</h3>
                    <p className="text-[0.8rem] lg:text-[1.1rem] text-gray-500 mb-4">
                        Effectuez votre déclaration en ligne, chargez vos fichiers et un de nos
                        gestionnaires spécialisés vous rappellera pour un accompagnement adapté à
                        vos besoins.
                    </p>
                    <button className="bg-[#0094c2] text-white font-semibold py-2 px-4 hover:bg-[#007aa1] transition">
                        DÉCLARER UN SINISTRE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SinistreAssistance;