// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(meow) {
   const copyOfCats = [...cats.slice(), meow];
   return copyOfCats;
}
function prependCat(woof) {
    const copyOfCats = [woof, ...cats.slice()];
    return copyOfCats;
}
function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}
function removeLastCat() {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
}