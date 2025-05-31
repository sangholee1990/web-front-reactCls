import FooterComonent from "./wrap/FooterComonent";
import HeaderComonent from "./wrap/HeaderComonent";
import MainComonent from "./wrap/MainComonent";
import ModalComonent from "./wrap/ModalComonent";

export default function WrapComonent() {
    return (
        <div id="wrap">
            {/* <h1>WrapComonent</h1> */}
            <HeaderComonent></HeaderComonent>
            <MainComonent></MainComonent>
            <FooterComonent></FooterComonent>
            <ModalComonent></ModalComonent>
        </div>
    )
}