
// function sum(x,y,z){
//     return x+y+z;
// }
// console.log(sum(10,20,30));

function sum(x){
    return function sumY(y){
        return function sumZ(z){
            return x+y+z;
        }
    }
}

//we can access outer function variable inside the inner function becuase of closure;
 

const reasultSum = (sum(10));
const reasultSumY = reasultSum(20);
const resultSumZ = reasultSumY(30);
console.log(resultSumZ);
console.log(sum(10)(20)(30));
