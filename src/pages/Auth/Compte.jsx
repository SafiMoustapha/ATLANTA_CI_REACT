function Compte() {
    return (
        <div className="flex flex-col items-center justify-start h-screen py-14 px-8 mt-[75px] lg:mt-[85px]">
            <h2 className="text-center text-[#0094c2] mb-6 font-semibold text-xl lg:text-3xl">Veuillez renseigner votre adresse mail</h2>
            <input type="text" className="w-full lg:w-1/4 h-12 outline-none shadow-sm focus:outline-[#497b9c] mb-10 rounded-lg border" />
            <button className="bg-[#0094c2] py-2 px-8 hover:bg-[#81c4f0] text-white font-bold">Suivant</button>
        </div>
    );
}

export default Compte;