const updateLight = (current) => {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  }
};

/*
const updateLight = (current) => {
  return current === "yellow" ? "red" : current === "green" ? "yellow" : "green";
};
*/

/*
const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);
*/

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
