import colision from "../assets/pt_1.png"
import questions from "../assets/pt_2.png"
import remorques from "../assets/pt_3.png"

const TelContact = () => {
    return (
        <section className="bg-slate-100">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Nous contacter par téléphone
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-8 pb-4">
                <div className="flex flex-col justify-center items-center text-center">
                    <figure className="flex flex-col justify-center items-center mb-4">
                        <img src={colision} alt="" className="w-24 sm:w-auto" />
                        <figcaption className="text-[#497b9c] font-bold">Déclarer de votre sinistre</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.9rem]">Pour signaler rapidement un sinistre, contactez-nous directement. Notre équipe s'engage à traiter votre cas avec efficacité.</p>
                    <div className="flex items-center justify-center text-[#0094c2]">
                        <img src="" alt="" />
                        <p>2722224404</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <figure className="flex flex-col justify-center items-center mn-4">
                        <img src={questions} alt="" className="w-24 sm:w-auto" />
                        <figcaption className="text-[#497b9c] font-bold">Questions générales</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.9rem]">Si vous avez des questions concernant nos services ou votre police, n'hésitez pas à appeler. Nos conseillers sont prêts à vous fournir toutes les informations nécessaires.</p>
                    <div className="flex items-center justify-center text-[#0094c2]">
                        <img src="" alt="" />
                        <p>2722224404</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <figure className="flex flex-col justify-center items-center mb*4">
                        <img src={remorques} alt="" className="w-24 sm:w-auto" />
                        <figcaption className="text-[#497b9c] font-bold">Besoin d'une assitance d'urgence</figcaption>
                    </figure>
                    <p className="text-gray-500 text-[0.9rem]">En cas d'urgence, notre ligne dédiée est toujours prête pour vous offrir une assistance immédiate. Contactez-nous pour obtenir de l'aide rapidement.</p>
                    <div className="flex items-center justify-center text-[#0094c2]">
                        <img src="" alt="" />
                        <p>2722224404</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TelContact;