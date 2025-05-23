import AccueilSection from '../components/SectionAccueil';
import SectionAPropos from '../components/SectionAPropos';
import SectionContact from '../components/SectionContact';
import SectionFonction from '../components/SectionFonction';
import SectionOffres from '../components/SectionOffres';
import SectionTemoinages from '../components/SectionTemoignages';

function Accueil() {
    return (
        <main className='mt-[75px] lg:mt-[85px]'>
            <AccueilSection />
            <SectionAPropos />
            <SectionOffres />
            <SectionFonction />
            <SectionTemoinages />
            <SectionContact />
        </main>
    );
}

export default Accueil;