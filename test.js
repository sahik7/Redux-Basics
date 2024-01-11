// Function Currying

const add = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}


console.log(add(1)(2)(3)) // 6


// Another Example

const level = add(5);
console.log(level(2)(2));  // 9
console.log(level(12)(4)); // 21
console.log(level(54)(66)); // 125
console.log(level(15)(12)); // 32
console.log(level(2)(4));// 11







