// There are two types of exports 
// 1.) Named exports
// 2.) Default exports 

// There are two types of named exports 
// 1.) Exports Individually 
// 2.) Exports at the Bottom 


//Exports Individually 

export let a = 10;
export let arr = [1, 2, 3, 4];
export const obj = { name: "rahul" };

export function greet() {
  console.log("Greet");
}

//collective export at the bottom
export{a,arr,obj}

//Named export -> we actually exports anything 
//Default export -> we can actually expots one thing 

export function greet2() {
    console.log("Greet");
  }

export default greet2;   //can't change of these exports  & We cannot use export statements before initialising declarations in JavaScript. 

//do mcq must 


