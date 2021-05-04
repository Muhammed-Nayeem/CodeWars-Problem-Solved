const greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";

// const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
