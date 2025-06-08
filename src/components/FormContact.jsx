import { useState } from "react";
import LabelFlottantSelect from "./LabelFlottantSelect";
import LabelFlottantInput from "./LabelFlottantInput";
import LabelFlottantTextarea from "./LabelFlottantTextarea";

const TelContact = () => {
    const [Nom, setNom] = useState('');
    const [Téléphone, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [statut, setStatut] = useState('');

    const options = [
        { value: 'client', label: 'Je suis déjà client' },
        { value: 'non-client', label: 'Je ne suis pas client' },
        { value: 'courtier', label: 'Je suis un Courtier' },
        { value: 'journaliste', label: 'Je suis un Journaliste' },
        { value: 'entreprise', label: 'Je suis une Entreprise' },
    ];
    const option = [
        { value: 'none', label: '' },
    ];

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#497b9c] font-bold text-center lg:text-2xl py-4">
                    Nous contacter par formulaire
                </h2>
                <span className="bg-[#ff802b] w-[100px] h-1 mb-6"></span>
                <p className="text-gray-400">
                    Veuillez remplir le formulaire ci-dessous et nous allons traité votre demande dans les plus brefs délais
                </p>
            </div>
            <form className="space-y-4 px-4 pb-6 lg:w-1/2">
                <LabelFlottantSelect
                    id="statut"
                    label="Je suis"
                    value={statut}
                    onChange={setStatut}
                    options={options}
                    required
                />
                <LabelFlottantSelect
                    id="statut"
                    label="Je souhaite"
                    value={statut}
                    onChange={setStatut}
                    options={option}
                    required
                />
                <LabelFlottantInput
                    id="nom"
                    label="Nom"
                    value={Nom}
                    onChange={setNom}
                    required
                />
                <LabelFlottantInput
                    id="nom"
                    label="Téléphone"
                    value={Téléphone}
                    onChange={setTel}
                    required
                />
                <LabelFlottantTextarea
                    id="message"
                    label="Votre demande"
                    value={message}
                    onChange={setMessage}
                    required
                    rows={5}
                />
                <button className="bg-[#0094c2] text-white px-14 py-2 font-bold rounded">
                    Envoyer
                </button>
            </form>
        </section>
    );
};

export default TelContact;