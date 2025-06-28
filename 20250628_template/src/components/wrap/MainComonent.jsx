import Section1Component from "./main/Section1Component";
import Section2Component from "./main/Section2Component";
import Section3Component from "./main/Section3Component";
import './scss/MainComonent.scss';

export default function MainComonent({modalOpenEvent}){
    return(
         <main id="main">
            <Section1Component />
            <Section2Component />
            <Section3Component modalOpenEvent={modalOpenEvent} />
        </main>
    )
}