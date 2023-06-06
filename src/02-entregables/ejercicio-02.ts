console.log("************** DELIVERABLE 02 *********************");

import { arrayWords, arrayOtherWords } from "./data-exercises.js";

const concat = (arrayWords: string[], arrayOtherWords: string[]) => {
    return [...arrayWords, ...arrayOtherWords]
};

console.log(concat(arrayWords, arrayOtherWords));