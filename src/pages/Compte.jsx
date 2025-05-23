function Compte() {
    return (
        <div className="flex flex-col items-start justify-center h-screen py-10 px-8 mt-[75px] lg:mt-[85px]">
            <h2 className="text-center text-[#497b9c] mb-6">Veuillez renseigner votre addresse mail</h2>
            <input type="text" className="w-full h-6 outline-none shadow-md focus:outline-[#497b9c] mb-10" />
            <button className="bg-[#497b9c] p-4 hover:bg-[#81c4f0]">Suivant</button>
        </div>
    );
}

export default Compte;