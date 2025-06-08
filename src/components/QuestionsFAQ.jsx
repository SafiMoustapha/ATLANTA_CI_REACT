import alba from "../assets/Sophie_petit.png"
import albaReponse from "../assets/alba_reponse.png"
import FaqFAQ from "./FaqFAQ";

const QuestionsFAQ = () => {
    return (
        <section className="bg-white">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Poser votre question,<nr/>je serai heureuse de vous répondre
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="">
                <input type="text" className="w-full h-10 border p-4 outline-[#497b9c]" placeholder="Eg. C'est quoi l'assurance automobile ?" />
                <button className="bg-[#0099c4] hover:bg-[#007aa1] text-white font-semibold py-2 px-4 m-2">
                    Répondre
                </button>
            </div>
            <div className="flex items-center justify-center h-12 mt-4 w-full">
                <div className="flex items-start justify-center h-full lg:w-[3%]">
                    <img src={alba} alt="" />
                </div>
                <div className="lg:w-[97%]">
                    <img src={albaReponse} alt="" className="lg:w-full lg:h-10" />
                    <figcaption className="font-extralight text-[0.7rem]">
                        Alba . 03/06/2025
                    </figcaption>
                </div>
            </div>
            <div className="font-extralight text-[0.7rem] flex items-center justify-end">
                <p>Alba peut faire des erreurs. Merci de bien vouloir vérifier les réponses.</p>
            </div>
            <div className="bg-[#eaf5fc]">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                        Foire aux questions
                    </h2>
                    <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
                </div>
                <FaqFAQ/>   
            </div>
        </section>
    );
};

export default QuestionsFAQ;