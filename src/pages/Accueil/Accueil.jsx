import AccueilSection from './_components/SectionAccueil';
import SectionAPropos from './_components/SectionAPropos';
import SectionContact from './_components/SectionContact';
import SectionFonction from './_components/SectionFonction';
import SectionOffres from './_components/SectionOffres';
import SectionTemoinages from './_components/SectionTemoignages';

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