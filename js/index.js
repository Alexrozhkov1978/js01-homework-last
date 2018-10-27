const a = parseFloat(prompt('Please enter the first coefficient of quadratic equation - a -'));
const b = parseFloat(prompt('Please enter the second coefficient of quadratic equation - b -'));
const c = parseFloat(prompt('Please enter the third coefficient of quadratic equation - c -'));
alert( 'You entered (a,b,c) : ' + a + ', ' + b + ', ' + c);
    if (a !== a || b !== b || c !== c) { // Перевірка на правильність вводу
        alert('You entered wrong variable value. Repeat task please.');
    } else { 
      let solutionArr = [];
      solutionArr = solveQuadraticEquation (a,b,c);
        alert(' d = ' + solutionArr[3]);
        if (solutionArr[0]==0) { 
        alert('Solution is : ' +  solutionArr[1]);
        } else { 
            if (solutionArr[3] > 0) {
                alert('Solution number one is : ' +  solutionArr[1] + '.      Solution number two is : ' +  solutionArr[2]); 
            }
        }
    }
function solveQuadraticEquation (a,b,c) {
    let solveArr = [];
    solveArr [3] = (b**2 - a * c * 4); // Обчислення дискримінанту
    if (solveArr [3] > 0) {
        solveArr [1] = (- b + Math.sqrt(solveArr [3]))/(2 * a);
        solveArr [2] = (- b - Math.sqrt(solveArr [3]))/(2 * a);
    } else {
           if (solveArr [3] === 0) { // Дискримінант 0
           solveArr [0] = - b / (2 * a);
            } else { 
      }   
   }
return solveArr;
}





