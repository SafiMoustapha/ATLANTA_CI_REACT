import TableAssurance from "./TableAssurance";

const ComparCamion = () => {
    return (
        <section className="bg-blue-50">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center py-4">
                    COMPAREZ LES NIVEAUX DE COUVERTURES DE L'ASSURANCE CAMION <br/>ATLANTA ET CHOISISSEZ CELUI QUI VOUS CONVIENT LE MIEUX.
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <TableAssurance/>
        </section>
    );
};

export default ComparCamion;