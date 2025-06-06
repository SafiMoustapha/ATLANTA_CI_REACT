import ContactBackground from "../assets/bg_contact.jpg"

const AccueilContact = () => {
    return (
        <section>
            <div className="h-64 lg:h-[70vh] relative " style={{backgroundImage:`url(${ContactBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-1/2 text-start px-14 lg:pl-44 py-16 lg:py-32">
                    <h2 className="text-white font-bold text-xl lg:text-4xl lg:mb-6">
                        Besoin d'aide? <br/>Nos conseillers sont <span className="text-[#0094c2]">à votre disposition</span>
                    </h2>
                    <p className="text-gray-300 hidden lg:block text-xl w-full">
                        Chez ATLANTA ASSURANCE, votre satisfaction est notre priorité. Contactez-nous par téléphone, e-mail ou via notre service de messagerie instantanée pour toute question ou besoin d'assistance. Notre équipe dédiée est disponible pour vous fournir des réponses rapides et des solutions adaptées à vos besoins d'assurance.
                    </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 text-center p-4 bg-gray-300 text-[0.57rem] text-[#0094c2] fon4c2t-bold lg:hidden">
                    <p>
                        Chez ATLANTA ASSURANCE, votre satisfaction est notre priorité. Contactez-nous par téléphone, e-mail ou via notre service de messagerie instantanée pour toute <br/>question ou besoin d'assistance. Notre équipe dédiée est disponible pour vous fournir des réponses rapides et des solutions adaptées à vos besoins d'assurance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AccueilContact;