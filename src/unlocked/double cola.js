import React from 'react'

function Double() {
    function doubleCola(plan) { 
        console.log(plan.map(i => i)) //?
        plan.map(i => i) //?
        return plan
    }
    let plan = doubleCola([1, 2]);

    return (
        <div>
            <h3>{plan}</h3>
        </div>

    );
  }


  
  export default Double;