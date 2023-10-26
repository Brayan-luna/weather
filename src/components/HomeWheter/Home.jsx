import React from "react";
import PartOne from "./PartOne/partOne";
import './Home.css'
function Home(){
    return(
        <section className="sectionHome ">
            <div className="dark:bg-neutral-900 dark:text-white divContainer"> 
                <PartOne/>
            </div>
            
        </section>
    )
}
export default Home