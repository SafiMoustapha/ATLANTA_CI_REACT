import flecheOrange from "../assets/fleche-droite (2).png"
import True from "../assets/true.png"

const ComparMoto = () => {
    return (
        <section className="bg-blue-50">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center py-4">
                    Comparez les niveaux de couvertures de l'assurance MOTO <br />ATLANTA ASSURANCE et choisissez celui qui vous convient le mieux.
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <table className="table-auto w-full border-collapse text-xs">
                <thead>
                    <tr className="bg-gradient-to-b from-[#7cc0e8] to-[#b8e1fb] text-left text-[#497b9c] font-bold">
                        <th className="p-2 border-r border-white">Garanties par formule</th>
                        <th className="p-2 text-center">Formule<br />Tiers Simple Plus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Responsabilité Civile</a>
                        </td>
                        <td className="">
                            <center>
                                <img src={True} alt="" />
                            </center>
                        </td>
                    </tr>
                    <tr className="bg-[#f0f9ff]">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Défense/Recours</a>
                        </td>
                        <td>
                            <center>
                                <img src={True} alt="" />
                            </center>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default ComparMoto;