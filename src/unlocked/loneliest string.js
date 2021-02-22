import React from 'react'

function Playground() {





    const loneliest = (str) => {
        let trimmed = str.trim();
        let chars = str.split(/\s*/);
        let spaces = trimmed.split(/\S/).map(i => i.length)
        let spacesPerChar = chars.map((char, i) => spaces[i] + spaces[i + 1]);
        let spaceSize = spacesPerChar.reduce((t, a) => t > a ? t : a)
        let lo = chars.filter((c, i) => spacesPerChar[i] === spaceSize)
        console.log(lo)
        return  lo
/*  
        const trimmed = str.trim();

        const array = trimmed
        .split("")
        .join(" ")
        .split(" ")
        .filter(i => i !== "");

        const points = array.map(i => i = 0);
        
        let que = -1;
        
        for (let i = 0; i < trimmed.length; i++) {
            if (trimmed[i] != " ") {
                que++;
            }
            if (trimmed[i] == " ") {
                points[que]++;
            }   
    }

    que = points.length;
    
        for (let i = trimmed.length - 1; i > 0; i--) {
            if (trimmed[i] != " ") {
                que--;
            }
            if (trimmed[i] == " ") {
                points[que]++;
            }
    }

    let maxPoints = Math.max.apply(Math, Object.values(points));

    let final = [];

     for (let i = 0; i < array.length; i++) {
         if (points[i] === maxPoints) {
            final.push(array[i])
         }
        // return points[i] === maxPoints ? final.push(array[i]) : null;
     }


 */

/* 
          
        console.log(final, "final")
        console.log(array, "array")
        console.log(points, "points")
        console.log(que, "que")  */
        // return str
      }




















    const answer = loneliest("a b   c   d  ")
    // const answer2 = loneliest("    a b  sc     p     t   k")
    return (
        <div style={{padding: "10px"}}>
            <h3>{answer}</h3>
        </div>

    );
  }
  
  export default Playground;