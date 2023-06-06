console.log("************** DELIVERABLE 01 *********************");

import { arrayWords } from "./data-exercises.js";

const head = (arrayWords: string[]) => {
    const { 0: first } = arrayWords;
    return first;
};

const tail = (arrayWords: string[]) => {
    return arrayWords;
};

let [first, ...otherData] = tail(arrayWords);

const init = (arrayWords: string[]) => {
    return arrayWords.slice(0, (arrayWords.length - 1));
};

const last = (arrayWords: string[]) => {
    return arrayWords[arrayWords.length - 1];
};

console.log(head(arrayWords));
console.log(otherData);
console.log(init(arrayWords));
console.log(last(arrayWords));