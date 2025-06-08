import bgAuto from "../../../../assets/Bg_auto.jpg"

const AccueilAuto = () => {
    return (
        <section>
            <div className="h-64 lg:h-[70vh] relative " style={{ backgroundImage: `url(${bgAuto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-1/2 text-start p-6 md:px-12 lg:pl-44 md:py-16 lg:py-32">
                    <h2 className="text-white font-bold text-lg lg:text-4xl lg:mb-6">
                        Assurance Auto : <br /> <span className="text-[#0094c2]">SÉCURITÉ</span> et <span className="text-[#0094c2]">ÉCONOMIE</span> sur tous Vos trajets
                    </h2>
                    <p className="text-gray-300 hidden lg:block text-xl w-full">
                        ATLANTA ASSURANCE vous offre une assurance auto qui associe sécurité et économie. Notre formule ajustable assure une protection optimale à un coût adapté.
                    </p>
                    <div className="w-[400px] h-10 hidden lg:flex items-center justify-center bg-[#0094c2] font-semibold text-[1rem] my-10 text-white">
                        <h2>CALCULER MON ASSURANCE</h2>
                    </div>
                </div>
                <div>
                    <div className="absolute bottom-14 md:bottom-16 right-0 left-0 text-center p-2 bg-gray-100 text-[0.57rem] text-[#0094c2] font-bold lg:hidden">
                        <p>
                            ATLANTA ASSURANCE vous offre une assurance auto qui associe sécurité et économie. Notre formule ajustable assure une protection optimale à un coût adapté.
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

export default AccueilAuto;