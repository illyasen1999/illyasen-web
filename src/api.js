let url = 'https://api.sampleapis.com/coffee/hot'

let getCoffee = document.querySelector(".getCoffee")
.addEventListener("click", () => {
    fetch(url)
    .then((res) => res.json())
    .then((coffee) => {
        console.log(coffee);

        let coffeeInfo = ''
        coffee.forEach((coffee) => {
            let title = coffee.title
            let desc = coffee.description
            let ingredients = coffee.ingredients

            coffeeInfo += `
            <ul>
                <li class="coffeeItem">
                    <h2 class="cofTitle">💡Title: ${title}</h2> <br>
                    <h2>📄Description: <br></h2>
                    <p class="cofDesc">${desc}</p> <br>
                    <h2>🧾Ingredients: </h2><br>
                    <ul>
                        <li class="cofIngre"> ${ingredients}</li>
                    </ul>
                </li>
            </ul>
            `

        })
        document.querySelector(".coffeeDiv2").insertAdjacentHTML("afterbegin", coffeeInfo)
        document.querySelector(".coffeeDiv2").style.border = "1px solid saddlebrown"
    })
})



