import Garanties from "../../../components/Garanties";

const ServiceAssistance = () => {
    return (
        <section className="bg-white">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Notre service disponible<br/>24/24 H ET 7/7 J
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1"></span>
            </div>
            <Garanties />
        </section>
    );
};

export default ServiceAssistance;