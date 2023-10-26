import React from "react";
import CardCondicionals from "../CardCondicionals/CardCondicionals";
function PartOne() {
  return (
    <section>
      <div>
        <div className="hourDate">
            <p>10:32</p>
            <p>PM</p>
        </div>
        <div className="OptionsUser">

        </div>
      </div>
      <div>
       <CardCondicionals number='26' icon='icon' text= 'Cloudy & Windy'/>
       <CardCondicionals number='39' icon='icon' text= 'Cloudy & Windy'/>
       <CardCondicionals number='77' icon='icon' text= 'Cloudy & Windy'/>
       <CardCondicionals number='7' icon='icon' text= 'Cloudy & Windy'/>
      </div>
    </section>
  );
}
export  default PartOne
