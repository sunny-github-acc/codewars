import React from 'react'

function Playground() {

    const theHashTagGenerator = (formula) => {
        
        // extract all molecules
        let molecules = [];
        let numbers = [];
        const regLetters = /[a-zA-Z]/;
        const regNumbers = /[0-9]$/;
        let array = formula.split("")
        .filter(i => i.match(regLetters))
        .map((i) => {
            if (i === i.toUpperCase()) {
                let isEqual = false;
                molecules.map((m, int) => {
                    if (i === m) {
                        isEqual = true;
                        numbers[int]++;
                    } 
                    return m
                })
                !isEqual && molecules.push(i) && numbers.push(1);
                return i
            } else {
                let isEqual = false;
                molecules.map((m, int) => {
                    if (molecules[molecules.length - 1] + i === m) {
                        isEqual = true;
                        numbers[int]++;
                        numbers.pop();
                    } 
                    return m
                })
                !isEqual ? 
                molecules[molecules.length - 1] = molecules[molecules.length - 1] + i :
                molecules.pop();
                
                return i
            }
        });


        // K4[ON(SO3)2]2
        // MgO(OH)2

        // make a function which takes each molecule and does the calculation
        // let calculation = formula.split("");
        // const rLetters = /[a-zA-Z]/;
        // const rNumbers = /[0-9]/;
        // const rBracks = /[ \( | \) ]/;
        /* formula.split("").map(i => {
            if (i.match(rLetters)) {
                return calculation.push(i)
            } else if (i.match(rNumbers)) {
                return calculation.push(i)
            }
        }) */

        let joinedArray = [];
        formula.split("")
        .map(i => {
            return i === i.toUpperCase() ? 
            joinedArray.push(i) && i :
            joinedArray.push(joinedArray.pop() + i) && i;
        });
        joinedArray = joinedArray.map(i => {
            return regLetters.test(i) ? "1" + i : i;
        });
        for (let i = joinedArray.length - 1; i > -1; i--) {
            if (regNumbers.test(joinedArray[i])) {
                console.log(joinedArray[i], regNumbers.test(joinedArray[i]))
                if (/]/.test(joinedArray[i - 1])) {
                    while (joinedArray[j] === )
                }
            }
        }



        console.log(joinedArray);
        // console.log(array, molecules, numbers)
        // console.log(string[0] === string[0].toUpperCase())






        
        return ":)"

    }


    
    const answer = theHashTagGenerator("K4[ON(SO3)2]2")
    const answer2 = theHashTagGenerator("MgO(OH)2MgOO ")

    return (
        <div style={{padding: "10px"}}>
            <h3>{answer}</h3>
            <h3>{answer2}</h3>
        </div>

    );
  }
  
  export default Playground;