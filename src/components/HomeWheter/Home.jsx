import React from "react";
import PartOne from "./PartOne/partOne";
import { PartTwo } from './partTwo';

function Home(){
    return(
        <section className="sectionHome">
            <div className="dark:bg-neutral-900 dark:text-white divContainer"> 
                <PartOne/>
                <PartTwo/>
            </div>            
        </section>
    )
}

export default Home