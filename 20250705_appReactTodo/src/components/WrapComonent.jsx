import React from "react";
import FooterComonent from "./wrap/FooterComonent";
import HeaderComonent from "./wrap/HeaderComonent";
import MainComonent from "./wrap/MainComonent";
import ModalComonent from "./wrap/ModalComonent";
import Sub1Component from "./wrap/sub/Sub1Component";
import Sub2Component from "./wrap/sub/Sub2Component";
import Sub3Component from "./wrap/sub/Sub3Component";
import Sub4Component from "./wrap/sub/Sub4Component";
import Page404Component from "./wrap/Page404Component";
import './scss/WrapComonent.scss';
import { Route, Routes } from "react-router-dom";

export default function WrapComonent(){
   
    return(
        <div id="wrap">
            <Routes>
                <Route path="/" element={<HeaderComonent />}>                               
                    <Route index element={<MainComonent />} />
                    <Route path="/main" element={<MainComonent />} />
                    <Route path="/sub1" element={<Sub1Component />} />
                    <Route path="/sub2" element={<Sub2Component />} />
                    <Route path="/sub3" element={<Sub3Component />} />
                    <Route path="/sub4" element={<Sub4Component />} />                    
                    <Route path="/*" element={<Page404Component /> } />                    
                </Route>
            </Routes>
            <FooterComonent />
            <ModalComonent />            
        </div>
    )
}