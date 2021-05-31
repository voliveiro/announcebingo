console.log ("app.js connected")
let buzzwordsArray = ["TraceTogether", "Work From Home", "Panic Buying", "Endemic", "Difficult Year for All of Us", "Opening Up", "Economy", "Let's Continue to Do Our Part", "Racism/Xenophobia", "New Normal", "SG United", "Ringfence", "Phase 2 HA", "Cannot let our guard down/be complacent", "Phase 3", "My fellow Singaporeans", "Pink Shirt", "Wears Glasses", "Vaccinations", "Students", "Safe Distancing", "Move forward together", "Frontline staff", "Magic Cup", "#gotmyshot"]

let gridIDs = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]

let bingoCard = []

for (let item of gridIDs) {
    let squareValue = {}; 
    squareValue.ID = item;
    let selectedBuzzword = buzzwordsArray[Math.floor(Math.random()*buzzwordsArray.length)];
    squareValue.buzzword = selectedBuzzword;
    bingoCard.push(squareValue);
    let indexNo = buzzwordsArray.indexOf(selectedBuzzword)
    buzzwordsArray.splice(indexNo, 1)

}

console.log (bingoCard)


// Populate the Grid 

for (let item of bingoCard) {
    //let IDstring=`${item.ID}` 
    document.getElementById(item.ID).innerHTML=item.buzzword



document.querySelector(".grid").addEventListener('click', function(event) {
    event.target.style.background="#A2C2B4"
})

document.querySelector(".grid").addEventListener('dblclick', function(event) {
    event.target.style.background="white"
})
}
