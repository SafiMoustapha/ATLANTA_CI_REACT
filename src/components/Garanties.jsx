import iconAuto from "../assets/Icon_auto.png"
import iconMoto from "../assets/Icon_moto.png"
import iconCamion from "../assets/Icon_camion.png"

const Garanties = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-6 text-center text-gray-600 px-12">
            {[
                {
                    icon: iconAuto,
                    title: "Auto",
                    infos: [
                        { label: "Une panne, une crevaison ?", tel: "27 22 22 44 00" },
                        { label: "Déclarer un sinistre", tel: "27 22 22 44 00" },
                        { label: "Par email?", email: "support@atlanta.ci" },
                    ],
                },
                {
                    icon: iconMoto,
                    title: "Moto",
                    infos: [
                        { label: "Déclarer un sinistre", tel: "27 22 22 44 00" },
                        { label: "Par email?", email: "support@atlanta.ci" },
                    ],
                },
                {
                    icon: iconCamion,
                    title: "Camion",
                    infos: [
                        { label: "Une panne, une crevaison ?", tel: "27 22 22 44 00" },
                        { label: "Déclarer un sinistre", tel: "27 22 22 44 00" },
                        { label: "Par email?", email: "support@atlanta.ci" },
                    ],
                },
            ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    {/* Cercle avec icône */}
                    <div className="w-36 h-36 rounded-full flex items-center justify-center mb-4">
                        <img src={item.icon} alt={item.title} className="w-full" />
                    </div>
                    <h3 className="text-[#497b9c] font-bold text-lg mb-3">{item.title}</h3>
                    {/* Infos */}
                    {item.infos.map((info, idx) => (
                        <p key={idx} className="mb-2">
                            {info.label}
                            <br />
                            <span className="text-[#497b9c] flex items-center justify-center gap-2">
                                {info.tel && (
                                    <>
                                        {/* <FaPhoneAlt className="text-sm" /> */}
                                        {info.tel}
                                    </>
                                )}
                                {info.email && (
                                    <>
                                        {/* <FaEnvelope className="text-sm" /> */}
                                        {info.email}
                                    </>
                                )}
                            </span>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Garanties;
