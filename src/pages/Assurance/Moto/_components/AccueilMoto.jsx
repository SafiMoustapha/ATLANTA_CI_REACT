import bgMoto from "../../../../assets/Bg_moto.jpg"

const AccueilMoto = () => {
    return (
        <section>
            <div className="h-64 lg:h-[76vh] relative " style={{ backgroundImage: `url(${bgMoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-1/2 text-start px-6 py-10 md:px-12 lg:pl-44 md:py-16 lg:py-24">
                    <h2 className="text-white font-bold text-sm md:text-lg lg:text-4xl lg:mb-6">
                        Sécurisez votre Moto <br />avec <span className="text-[#0094c2]">CONFIANCE</span> et à <span className="text-[#0094c2]">PETIT PRIX</span>
                    </h2>
                    <p className="text-gray-300 hidden lg:block text-xl w-full">
                        ATLANTA ASSURANCE vous offre une protection complète pour votre moto, adaptée à votre besoin. Bénéficiez de notre expertise et d'un service client dédié pour rouler en toute sérénité.
                    </p>
                    <div className="w-[400px] h-10 hidden lg:flex items-center justify-center bg-[#0094c2] font-semibold text-[1rem] my-10 text-white">
                        <h2>CALCULER MON ASSURANCE</h2>
                    </div>
                </div>
                <div>
                    <div className="absolute bottom-12 md:bottom-16 right-0 left-0 text-center p-2 bg-gray-100 text-[0.57rem] text-[#497b9c] font-bold lg:hidden">
                        <p>
                           ATLANTA ASSURANCE vous offre une protection complète pour votre moto, adaptée à votre besoin. Bénéficiez de notre expertise et d'un service client dédié<br className="hidden md:flex"/>pour rouler en toute sérénité.
                        </p>
                    </div>
                    {/* Bouton mobile */}
                    <div className='absolute bottom-0 flex lg:hidden items-center justify-center w-full h-10 bg-[#0094c2] font-semibold text-[0.7rem] text-white'>
                        <h2>CALCULER MON ASSURANCE</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccueilMoto;