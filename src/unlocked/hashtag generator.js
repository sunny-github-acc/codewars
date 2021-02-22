import React from 'react'

function Playground() {

    const theHashTagGenerator = (str) => {

        if (str === "") {
            return false
        }
        let hash = str.trim().split(/\s+/)
        console.log(hash)
        if (hash.length === 1 && hash[0].length === 1 | hash[0] === "") {
            return false
        }

        hash = hash.map(i => {
            i = i.split("")
            i[0] = i[0].toUpperCase()
            return i.join("")
        })

        hash = hash.join("")
        if (hash[0] !== "#") {
            hash = hash.split("")
            hash.unshift("#")
            hash = hash.join("")
        }
        
        
        console.log(hash)
        if (hash.length > 140) {
            return false
        }



        return hash

    }



    const answer = theHashTagGenerator(" ")

    return (
        <div style={{padding: "10px"}}>
            <h3>{answer}</h3>
        </div>

    );
  }
  
  export default Playground;