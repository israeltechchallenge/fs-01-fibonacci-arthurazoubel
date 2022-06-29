const button = document.getElementById("btn");
const spinner = document.querySelector(".spinner")
const divList = document.getElementById("resultslist")
button.addEventListener("click", getFibonacciResult)
button.addEventListener("click", clearList)
//button.addEventListener("click", getAllResults)
//window.addEventListener('load', getAllResults)

function getFibonacciResult() {

    let inputValue = document.getElementById("input").value;
    let URL = `http://localhost:5050/fibonacci/${inputValue}`
    let changeText = document.getElementById("y");
    spinner.classList.remove("d-none")

    if (inputValue > 50) {
        changeText.innerHTML = "The number can't be greater than 50!"
        spinner.classList.add("d-none")
    } else {
        fetch(URL).then((response) => {
            if (response.ok === false) {
                return response.text().then((err) => {
                    throw new Error(err)
                })
            }
            return response.json()
        }).then((data) => {
            changeText.innerText = data.result
            spinner.classList.add("d-none")
            getAllResults()
        }).catch((error) => {
            console.log(error)
            changeText.innerText = error
            spinner.classList.add("d-none")
        })
    }
}

function clearList() {
    divList.innerText = ''
}

function getAllResults() {
    const URL = 'http://localhost:5050/getFibonacciResults';
    //let inputValue = document.getElementById("input").value;
    fetch(URL)
    .then((response) => response.json())
    .then(data => {
        let arrayResults = data.results;
        
        //for (let i = 0; i < arrayResults.length; i++) {
            const date = new Date(arrayResults[0].createdDate)
            const htmlElement = `The Fibonacci of ${arrayResults[0].number} is ${arrayResults[0].result}. Calculated at: ${date}`;
            divList.innerHTML += htmlElement; 
        //}
    })
} 


// STILL WORKING ON THAT!