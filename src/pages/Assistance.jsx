import AccueilAssistance from "../components/AccueilAssistance"
import ServiceAssistance from "../components/ServiceAssistance"
import SinistreAssistance from "../components/SinistreAssistance"
import FAQAssistance from "../components/FAQAssistance"

function Assistance() {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilAssistance />
            <ServiceAssistance />
            <SinistreAssistance />
            <FAQAssistance />
        </main>
    );
}

export default Assistance;