import React from "react";
import PartOne from "./PartOne/partOne";
import {CardDaysComp} from '../CardDays/CardDaysComp'

function Home(){
    return(
        <section className="sectionHome">
            <CardDaysComp/>
            <div className="dark:bg-neutral-900 dark:text-white divContainer"> 
                <PartOne/>
            </div>            
        </section>
    )
}

export default Home