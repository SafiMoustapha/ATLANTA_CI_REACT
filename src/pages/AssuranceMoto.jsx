import AccueilMoto from "../components/AccueilMoto";
import AvantagesMoto from "../components/AvantagesMoto";
import ComparMoto from "../components/ComparMoto";
import SinistreAssistance from "../components/SinistreAssistance";
import SinistreAuto from "../components/SinistreAuto";

const AssuranceMoto = () => {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilMoto/>
            <AvantagesMoto/>
            <ComparMoto/>
            <SinistreAuto/>
            <SinistreAssistance/>
        </main>
    );
};

export default AssuranceMoto;