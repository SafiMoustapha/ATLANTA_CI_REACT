import HeroBackground from "../assets/Hero_background.jpg"

const AccueilAssistance = () => {
    return (
        <section>
            <div className="h-64 lg:h-[70vh] relative " style={{backgroundImage:`url(${HeroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-1/2 text-start px-14 lg:pl-44 py-16 lg:py-32">
                    <h2 className="text-white font-bold text-xl lg:text-4xl lg:mb-6">
                        Vous avez besoin <br/><span className="text-[#497b9c]">d'assistance</span> ?
                    </h2>
                    <p className="text-gray-300 hidden lg:block text-xl w-full">
                        Accédez rapidement à notre support expert disponible 24h/24 et 7j/7, prêt à répondre à toutes vos questions et à vous guider dans la déclaration de votre sinistre, que ce soit par téléphone ou en ligne.
                    </p>
                </div>
                <div className="absolute bottom-0 right-0 left-0 text-center p-4 bg-gray-300 text-[0.57rem] text-[#497b9c] font-bold lg:hidden">
                    <p>
                        Accédez rapidement à notre support expert disponible 24h/24 et 7j/7, prêt à répondre à toutes vos questions et à vous guider dans la déclaration de votre sinistre, <br/>que ce soit par téléphone ou en ligne.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AccueilAssistance;