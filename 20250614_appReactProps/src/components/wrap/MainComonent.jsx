import Section1Comonent from "./main/Section1Comonent";
import Section2Comonent from "./main/Section2Comonent";
import Section3Comonent from "./main/Section3Comonent";

export default function MainComonent({modalOpenEvent}) {
    return (
        // <div id="main">
        //     <h1>MainComonent</h1>
        //     <Section1Comonent></Section1Comonent>
        //     <Section2Comonent></Section2Comonent>
        //     <Section3Comonent></Section3Comonent>
        // </div>
        <main id="main">
            <Section1Comonent></Section1Comonent>
            <Section2Comonent></Section2Comonent>
            <Section3Comonent modalOpenEvent={modalOpenEvent}></Section3Comonent>
        </main>
    )
}