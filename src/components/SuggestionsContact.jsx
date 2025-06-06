const SuggestionsContact = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center py-4">
                    Avez-vous des questions<br/>ou des remarques?
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
            </div>
            <div className="grid grid-cols-3 gap-4 px-4 mb-4">
                <button className="font-semibold text-white rounded-sm bg-[#0094c2] py-2">
                    FORMULAIRE DE CONTACT
                </button>
                <button className="font-semibold text-[#0094c2] rounded-sm border border-[#0094c2] py-2">
                    PAR TÉLÉPHONE
                </button>
                <button className="font-semibold rounded-sm border border-[#0094c2] text-[#0094c2] py-2">
                    PAR WHATSAPP
                </button>
            </div>
        </section>
    );
};

export default SuggestionsContact;