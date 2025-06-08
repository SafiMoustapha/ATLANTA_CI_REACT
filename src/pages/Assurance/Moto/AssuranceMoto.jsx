import AccueilMoto from "./_components/AccueilMoto";
import AvantagesMoto from "./_components/AvantagesMoto";
import ComparMoto from "./_components/ComparMoto";
import SinistreAssistance from "../../../components/SinistreAssistance";
import SinistreAuto from "../../../components/SinistreAuto";

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