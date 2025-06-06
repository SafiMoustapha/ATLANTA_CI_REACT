import bgCamionnette from "../assets/Bg_camionette.jpg"

const AccueilCamionnette = () => {
    return (
        <section>
            <div className="h-64 lg:h-[70vh] relative " style={{ backgroundImage: `url(${bgCamionnette})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-1/2 text-start px-12 lg:pl-44 py-16 lg:py-32">
                    <h2 className="text-white font-bold text-lg lg:text-4xl lg:mb-6">
                        Protégez votre activité <br />avec une assurance camion <span className="text-[#0094c2]">SÉCURITÉ</span> et <span className="text-[#0094c2]">ÉCONOMIE</span> sur tous Vos trajets
                    </h2>
                    <p className="text-gray-300 hidden lg:block text-xl w-full">
                        Avec ATLANTA ASSURANCE, bénéficiez d'une couverture complète adaptée aux besoins des professionnels du transport. Nos solutions personnalisées vous assurent tranquillité et protection optimale, même sur les routes les plus exigeantes.
                    </p>
                    <div className="w-[400px] h-10 hidden lg:flex items-center justify-center bg-[#0094c2] font-semibold text-[1rem] my-10 text-white">
                        <h2>CALCULER MON ASSURANCE</h2>
                    </div>
                </div>
                <div>
                    <div className="absolute bottom-16 right-0 left-0 text-center p-2 bg-gray-100 text-[0.57rem] text-[#0094c2] font-bold lg:hidden">
                        <p>
                           Avec ATLANTA ASSURANCE, bénéficiez d'une couverture complète adaptée aux besoins des professionnels du transport. Nos solutions personnalisées vous<br/>assurent tranquillité et protection optimale, même sur les routes les plus exigeantes.
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

export default AccueilCamionnette;