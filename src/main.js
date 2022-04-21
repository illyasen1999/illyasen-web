// Modal
const modal = document.querySelector("#modal")


// Modal Button
const modalBtn = document.querySelector(".modalBtn")
.addEventListener('click', () => {
    modal.style.display = "block"
    for(let i = 0; i < 1; i++){
        console.log(`${i} times logged w/ template literals`)
        console.log(i + " " + "times logged with concatenation")
    }
})


// Close Button
const closeBtn = document.querySelector("#close")
.addEventListener('click', () => {
    modal.style.display = "none"
})


// Click Outside
window.addEventListener('click', (event) => {
    if(event.target == modal){
        modal.style.display = "none"
    }
})


let iterate = 0
while (iterate <= 5){
    console.log(iterate++)
}


// Show random number
const resultsDiv = document.querySelector(".resultsDiv")
// variables outside the are globally scoped
const sampletry = document.querySelector(".generateRandom")
.addEventListener('click', () => {
    // Generates integers from 0 to 20
    let i = Math.floor(Math.random() * 21)
    // Error Handling
    try{
        if(i === 0){
            console.log(`${i} is 0`);
            let result0 = document.createTextNode(`${i} is 0`)

            // variables inside a function is locally scoped
            let resultLocation = document.createElement('p')
            
            resultLocation.setAttribute('id', 'resultLocation')
            resultLocation.style.color = "red"
            
            resultLocation.appendChild(result0)
            
            resultsDiv.appendChild(resultLocation)
            
            document.querySelector('.randomresult').appendChild(resultLocation)
        }
        else if(i === 10 || i < 10){
            console.log(`${i} is less than 10 or exactly 10`);
            let result1 = document.createTextNode(`${i} is less than 10 or exactly 10`)


            let resultLocation = document.createElement('p')

            resultLocation.setAttribute('id', 'resultLocation')
            resultLocation.style.color = "blue"
            
            resultLocation.appendChild(result1)
            
            resultsDiv.appendChild(resultLocation)
            
            document.querySelector('.randomresult').appendChild(resultLocation)
        }
        else if(i === 10 || i > 10){
            console.log(`${i} heigher than 10`);
            let result2 = document.createTextNode(`${i} is heigher than 10 or exactly 10`)

            
            let resultLocation = document.createElement('p')
            
            resultLocation.setAttribute('id', 'resultLocation')
            resultLocation.style.color = "green"

            resultLocation.appendChild(result2)
            
            resultsDiv.appendChild(resultLocation)
            
            document.querySelector('.randomresult').appendChild(resultLocation)
        }
    }
    finally{
        console.log("always run")
    }
}) 
const deleteRandom = document.querySelector(".deleteRandom")
.addEventListener('click', () => {
    document.querySelector('#resultLocation').remove()
})

