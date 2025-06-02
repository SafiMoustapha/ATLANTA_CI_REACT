import FaqSection from "../components/FaqSection"

const FAQAssistance = () => {
    return (
        <section className="bg-[#f2f9fd]">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center py-4">
                    Vos questions les plus fréquemment posées
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <FaqSection />
        </section>
    );
};

export default FAQAssistance;
