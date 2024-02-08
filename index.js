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
function appendCat(name) {
   const copyOfCats = [...cats.slice(), name];
   return copyOfCats;
}
function prependCat(name) {
    const copyOfCats = [name, ...cats.slice()];
    return copyOfCats;
}
function removeFirstCat(name) {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}
function removeLastCat(name) {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats;
}