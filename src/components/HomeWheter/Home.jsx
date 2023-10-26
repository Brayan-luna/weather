import React from "react";
import PartOne from "./partOne";
import {CardDaysComp} from '../CardDays/CardDaysComp';
import './Home.css'
function Home(){
    return(
        <section className="sectionHome">
            <PartOne/>
            <CardDaysComp/>
        </section>
    )
}
export default Home