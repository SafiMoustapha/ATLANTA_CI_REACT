import flecheOrange from "../assets/fleche-droite (2).png"
import True from "../assets/true.png"

const TableAssurance = () => {
    return (
        <table className="table-auto w-full border-collapse text-xs">
                <thead>
                    <tr className="bg-gradient-to-b from-[#7cc0e8] to-[#b8e1fb] text-left text-[#497b9c] font-bold">
                        <th className="p-2 border-r border-white">Garanties par formule</th>
                        <th className="p-2 text-center">Formule<br/>Tiers Simple Plus</th>
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
                    <tr className="bg-white">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Incendie</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>
                    </tr>
                    <tr className="bg-[#f0f9ff]">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Vol</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Vol des accessoires</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>
                    </tr>
                    <tr className="bg-[#f0f9ff]">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Bris de glace</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>
                    </tr>
                    <tr className="bg-white">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Dommages Tous Accidents</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>
                    </tr>
                    <tr className="bg-[#f0f9ff]">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Bris du tout ouvrant</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>                   
                    </tr>
                    <tr className="bg-white">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Vol Des lèves vitres</a>
                        </td>
                        <td className="text-center text-3xl text-gray-400">-</td>
                    </tr>
                    <tr className="bg-[#f0f9ff]">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Remboursement anticipé</a>
                        </td>
                        <td>
                            <center>
                                <img src={True} alt="" />
                            </center>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Sécurité routière (passagers et conducteur)</a>
                        </td>
                        <td>
                            <center>
                                <img src={True} alt="" />
                            </center>
                        </td>
                    </tr>
                    <tr className="bg-[#f0f9ff]">
                        <td className="p-2 flex items-center gap-2 text-[#497b9c]">
                            <img src={flecheOrange} alt="" />
                            <a href="#" className=" font-bold">Assistance</a>
                        </td>
                        <td className="text-center text-xs">Assistance 1</td>
                    </tr>
                </tbody>
            </table>
    );
};

export default TableAssurance;