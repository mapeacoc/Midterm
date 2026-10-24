const heros = ["Dynamo", "Abrams", "Viscous", "Paradox", "Billy", "Ivy"]


let herolist = ""
heros.forEach(listFunction)

document.getElementById("herolist").innerHTML = herolist
 
function listFunction(hero) {
  herolist += hero + "<br>"
}

const addHero = () => {
    let newHero = prompt("What Hero do you want to add to your roster?")
    heros.push(newHero)
    let herolist = ""
    heros.forEach(listFunction)

    document.getElementById("herolist").innerHTML = herolist
 
function listFunction(hero) {
  herolist += hero + "<br>"
}
}

const removeHero = () => {
    let range = heros.length - 1
    let deleteHero = prompt("What Hero do you want to remove from your roster? (0 - "+range+")")
    heros.splice(deleteHero, deleteHero)

let herolist = ""
heros.forEach(listFunction)

document.getElementById("herolist").innerHTML = herolist
 
function listFunction(hero) {
  herolist += hero + "<br>"
}
}

const findHero = () => {
    let locateHero = prompt("What hero do you want to find?");
    const herofinder = heros.find(hero => hero === locateHero);

    document.getElementById("herofind").innerHTML = herofinder;
};

const replaceHero = () => {
    let range = heros.length - 1
    let addHero = prompt("What hero do you want to add?");
    let replaceHero = prompt("What Hero do you want to remove from your roster? (0 - "+range+")")
    heros.splice(replaceHero, addHero)

let herolist = ""
heros.forEach(listFunction)

document.getElementById("herolist").innerHTML = herolist
 
function listFunction(hero) {
  herolist += hero + "<br>"
}
};

