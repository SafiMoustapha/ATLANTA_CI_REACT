import TableAssurance from "../../../../components/TableAssurance";

const ComparAuto = () => {
    return (
        <section className="bg-blue-50">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Comparez les niveaux de couvertures de l'assurance AUTOMOBILE <br/>et choissiez celui qui vous convient le mieux.
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <TableAssurance/>
        </section>
    );
};

export default ComparAuto;