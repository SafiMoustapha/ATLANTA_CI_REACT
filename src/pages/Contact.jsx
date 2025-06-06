import AccueilContact from "../components/AccueilContact";
import SuggestionsContact from "../components/SuggestionsContact";
import TelContact from "../components/TelContact";
import FormContact from "../components/FormContact";

function Contact() {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilContact/>
            <SuggestionsContact/>
            <TelContact/>
            <FormContact/>
        </main>
    );
}

export default Contact;