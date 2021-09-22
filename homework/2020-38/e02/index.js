import { max, min } from "./modules/utility.js";
import readargs from "./modules/commandlineargument.js";
let myarray = readargs();
console.log(max(myarray));
console.log(min(myarray));
