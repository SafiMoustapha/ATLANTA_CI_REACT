import AccueilAuto from "../components/AccueilAuto";
import AvantagesAuto from "../components/AvantagesAuto";
import ComparAuto from "../components/ComparAuto";
import SinistreAssistance from "../components/SinistreAssistance";
import SinistreAuto from "../components/SinistreAuto";

const AssuranceAuto = () => {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilAuto/>
            <AvantagesAuto/>
            <ComparAuto/>
            <SinistreAuto/>
            <SinistreAssistance/>
        </main>
    );
};

export default AssuranceAuto;