import React from 'react'

function Greed() {
    function score( dice ) {
        let counts = {};
        let result = 0;
        let values = [1000, 200, 300, 400, 500, 600];

        dice.map(i => counts[i] = (counts[i] || 0) + 1); // https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
        
        for (let [key, count] of Object.entries(counts)) {
            key = Number(key);

            if (count >= 3) result += values[key - 1];

            if (key === 1 && (count === 4 || count === 1)) result += 100;
            else if (key === 1 && (count === 5 || count === 2)) result += 200;

            if (key === 5 && (count === 4 || count === 1)) result += 50;
            else if (key === 5 && (count === 5 || count === 2)) result += 100;
        }   
        
        return result;
    }

    let result0 = score( [2, 3, 4, 6, 2] );
    let result400  = score( [4, 4, 4, 3, 3] );
    let result450 = score( [2, 4, 4, 5, 4] );
        

    return (
        <div>
            <h3>{result0} , {result400} , {result450}</h3>
        </div>

    );
  }


  
  export default Greed;