import AccueilCamionnette from "../components/AccueilCamionnette";
import AvantagesCamion from "../components/AvantagesCamion";
import ComparCamion from "../components/ComparCamion";
import SinistreAssistance from "../components/SinistreAssistance";
import SinistreAuto from "../components/SinistreAuto";

const AssuranceCamionnette = () => {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilCamionnette/>
            <AvantagesCamion/>
            <ComparCamion/>
            <SinistreAuto/>
            <SinistreAssistance/>
        </main>
    );
};

export default AssuranceCamionnette;