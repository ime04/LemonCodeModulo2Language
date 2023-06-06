console.log("************** DELIVERABLE 03 *********************");

interface Cat {
    race: string,
    color: string
}

const cat : Cat =  {
    'race': 'Persa',
    'color': 'grey'
}

interface City {
    name: string,
    country: string
}

const city : City =  {
    'name': 'Málaga',
    'country': 'Spain'
}

const clone = (cat: Cat, secondObject: Object = {}) => {
    return Object.assign(secondObject, cat);
}

const merge = (cat: Cat, city: City) => {
    return clone(cat, city);
}

console.log(clone(cat));
console.log(merge(cat, city));
