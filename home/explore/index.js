const input = document.getElementById("ricerca")
input.addEventListener("keyup", autocomplete)
const risultati = document.getElementById("risultati")
const nomi = [
"la storia dei videogiochi",
"la storia dei cartoni",
"la storia del Mc Donald",
"la storia della Coca Cola",
];

function autocompleteMatch(valore){
let valore1 = valore.toLowerCase()
if(valore1 == "") return[]
const reg = new RegExp(valore1)
return nomi.filter(nome => {
    if(nome.match(reg)) return nome
})
}

function autocomplete(event){
let nomiConsigliati = ""
const nomi = autocompleteMatch(event.target.value)
nomi.forEach((nome)=>{
    nomiConsigliati += `<li class="hover:bg-gray-200" onclick="seleziona(event)">${nome}</li>`
})
risultati.innerHTML = `<ul>${nomiConsigliati}</ul>`
}

function seleziona(event){
risultati.innerHTML =""
input.value = event.target.textContent
}

let arrayTitoli = [
{ titolo: 'la storia dei videogiochi', link: 'https://rayetto.github.io/home/explore/la_storia_dei_videogiochi/index.html' },
{ titolo: 'la storia dei cartoni', link: 'WikiTutorial/index2.html' }
];

invio()
function invio(){
document.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
    let titolo = input.value
    let min = titolo.toLowerCase()
    let index = arrayTitoli.findIndex(obj => obj.titolo === min)
    console.log(index)
    let link = arrayTitoli[index].link
    console.log(link)
    window.location.href = link;
    console.log(`titolo: ${titolo} min: ${min} index: ${index} link: ${link}`)
}
});
}