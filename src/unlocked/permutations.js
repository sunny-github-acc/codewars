import React from 'react'

function Permutations() {
    function middlePermutation(s) {
        if (s.length == 1) return s;

        let result = [];
        let copy = s.split("").sort();
        let perm = new Set;

        copy.map(i => {
            copy.map(j => {
                if (i != j) {
                    perm.add([i, j].join(""))
                }
            });
        });

        copy = [];

        perm.forEach(i => copy.push(i));
        s.split("").map(i => {
            if (i != copy[copy.length / 2 - 1][0] && i!= copy[copy.length / 2 - 1][1]) {
                result.push(i);
            }
        });

        result.sort().reverse();
        result.unshift(copy[copy.length / 2 - 1]);

        return result.join("");
    }
    
    let resultbdca = middlePermutation("abdc");
        

    return (
        <div>
            <h3>{resultbdca}</h3>
        </div>

    );
  }


  
  export default Permutations;