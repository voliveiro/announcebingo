$(()=> {
    console.log ("app.js is linked")

    //create the buzzwords 
    let buzzwordsArray = ["TraceTogether", "Work From Home", "Panic Buying", "Endemic", "Difficult Year for All of Us", "Opening Up", "Economy", "Let's Continue to Do Our Part", "Racism/\nXenophobia", "New Normal", "SG United", "Ringfence", "Phase 2 HA", "Cannot let our guard down/be complacent", "Phase 3", "My fellow Singaporeans", "essential services", "behave responsibly", "Vaccinations", "Students", "Safe Distancing", "Move forward together", "Frontline staff", "Resilient", "minimise physical contact"]

    //create an array with all the grid IDs    
    let gridIDs = ["A1", "A2", "A3", "A4", "A5", "B1", "B2", "B3", "B4", "B5", "C1", "C2", "C4", "C5", "D1", "D2", "D3", "D4", "D5", "E1", "E2", "E3", "E4", "E5"]

    //create an array to store the assigned buzzwords to each square in the bingo card
    let bingoCard = []

    //pairs an ID to a buzzword
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

    for (let i=0; i<bingoCard.length; i++) {
        document.getElementById(bingoCard[i].ID).innerHTML = bingoCard[i].buzzword 
    }

    document.querySelector(".grid").addEventListener('click', function(event) {
        event.target.style.background="rgb(112, 7, 7)";
        event.target.style.color="white"
    })

    document.querySelector(".grid").addEventListener('dblclick', function(event) {
        event.target.style.background="white"
        event.target.style.color="black"
    })
})
