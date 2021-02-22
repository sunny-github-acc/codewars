import React from 'react'

function Directions() {
    function directionsReduction(plan) { 

        var opposite = {
          'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
        return plan.reduce(function(dirs, dir){
            if (dirs[dirs.length - 1] === opposite[dir])
              dirs.pop();
            else
              dirs.push(dir);
            return dirs;
          }, []);
      }
    // const directionsReduction = (arr) => {
        //mine attempt >>>
    //     let isReduction,
    //         result = arr;

    //     for (let i = 0; i < result.length; i++) {
    //         isReduction ? i = 0 : i = i;
    //         isReduction = false;
    //         if (isOpposite(result[i], result[i + 1])) {
    //             removeOpposites(i);
    //             isReduction = true;
    //         };
    //         isReduction ? i = 0 : i = i;
    //     }

    //     function isOpposite(str1, str2) {
    //         let result = false;
    //         switch (str1) {
    //             case "NORTH":
    //                 str2 === "SOUTH" ? result = true : result = false;
    //                 break;
    //             case "SOUTH":
    //                 str2 === "NORTH" ? result = true : result = false;
    //                 break;
    //             case "WEST":
    //                 str2 === "EAST" ? result = true : result = false;
    //                 break;
    //             case "EAST":
    //                 str2 === "WEST" ? result = true : result = false;
    //                 break;
    //             default:
    //                 result = false;
    //         }
            
    //         return result;
    //     }
    
    //     function removeOpposites(index) {
    //         result.splice(index, 2);
    //     }
        
    //     return result;
    // }


    let smth = directionsReduction(['SOUTH', 'EAST', 'WEST', 'NORTH']);

    return (
        <div>
            <h3>{smth}</h3>
        </div>

    );
  }
  
  export default Directions;