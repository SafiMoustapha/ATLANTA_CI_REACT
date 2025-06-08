import AccueilCamion from "./_components/AccueilCamion";
import AvantagesCamion from "../../../components/AvantagesCamion";
import ComparCamion from "../../../components/ComparCamion";
import SinistreAssistance from "../../../components/SinistreAssistance";
import SinistreAuto from "../../../components/SinistreAuto";

const AssuranceCamion = () => {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilCamion/>
            <AvantagesCamion/>
            <ComparCamion/>
            <SinistreAuto/>
            <SinistreAssistance/>
        </main>
    );
};

export default AssuranceCamion;