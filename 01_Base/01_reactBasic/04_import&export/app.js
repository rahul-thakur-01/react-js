//Named Imports 
import {a} from "./index";                  //single import 
import {arr,obj,greet} from "./index";      //multiple imports 

// for named exports also put variable in {} 

//Default Imports 
import greet2  from "./index";
import greeting from "./index" // this also work beacuase default exports is only thing which can exports 
                                //you can use anyname 

//you can rename named exports using 
import {a as b} from "./index"
//or you can directly exports as b from index.js import(b,arr,obj) 
console.log(a); 
console.log(arr);
console.log(obj);
greet();





// export(a as b ,arr,obj;
// import{b,arr,obj} from "./index"