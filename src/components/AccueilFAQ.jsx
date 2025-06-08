import FAQBackground from "../assets/backgroud_faq.jpg"

const AccueilFAQ = () => {
    return (
        <section className="w-full h-50 sm:h-64 lg:h-[70vh] relative" style={{ backgroundImage: `url(${FAQBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-1/2 text-start px-4 sm:px-14 lg:pl-44 py-16 lg:py-32">
                    <h2 className="text-white font-bold text-xl lg:text-4xl lg:mb-6">
                        Les questions les plus <br/><span className="text-[#0094c2]">fréquentes</span>
                    </h2>
                    <p className="text-gray-300 hidden lg:block text-xl w-full">
                        Posez vos questions à Abla, notre IA dédiée, et consultez notre liste complète de questions fréquemment posées pour des réponses claires et immédiates sur tous vos besoins en assurance.
                    </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 text-start text-[0.57rem] text-gray-400 font-bold lg:hidden">
                    <p>
                        Posez vos questions à Abla, notre IA dédiée, et consultez notre liste complète de questions fréquemment posées pour des <br className="hidden md:flex"/>réponses claires et immédiates sur tous vos besoins en assurance.
                    </p>
                </div>
        </section>
    );
};

export default AccueilFAQ;