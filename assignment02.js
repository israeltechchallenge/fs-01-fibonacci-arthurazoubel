let fibonacciList = [];
let a, b, result;
a = 0;
b = 1;
result = b;
for (let i = 1; i <= 50; i++) {
    result = a + b;
    a = b;
    b = result
    fibonacciList.push(result)
}
fibonacciList.unshift(0, 1)

const button = document.getElementById("btn");
const checkBox = document.getElementById("checkbox");
button.addEventListener('click', handleClick)

function handleClick() {
    if (checkBox.checked) {
        const spinner = document.querySelector(".spinner");
        const listaHistorica = document.getElementById("resultslist");

        function getFibonacciResult() {
            let inputValue = document.getElementById("input").value;
            let URL = `http://localhost:5050/fibonacci/${inputValue}`;
            let changeText = document.getElementById("y");
            listaHistorica.innerHTML = ''
            spinner.classList.remove("d-none");

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
                    changeText.innerText = data.result;
                    spinner.classList.add("d-none")
                    return getAllResults()
                }).catch((error) => {
                    console.log(error);
                    changeText.innerText = error;
                    spinner.classList.add("d-none")
                })
            }
        }
        getFibonacciResult()
        function getAllResults() {
            const URL = 'http://localhost:5050/getFibonacciResults';
            fetch(URL)
                .then((response) => response.json())
                .then(data => {
                    let arrayResults = data.results;
                    for (let i = 0; i < 3; i++) {
                        let index = Math.floor(Math.random() * arrayResults.length)
                        const date = new Date(arrayResults[index].createdDate)
                        const htmlElement = `The Fibonacci of <b>${arrayResults[index].number}</b> is <b>${arrayResults[index].result}</b>. Calculated at: ${date}`;
                        listaHistorica.innerHTML += `<li>${htmlElement}</li>`;
                    }
                })
        }
        
    } else {
        function callArray() {
            let inputValue = document.getElementById("input").value;
            let j = inputValue;
            if (j > 50) {
                changeText.innerHTML = "The number can't be greater than 50!"
            } else {
                let fibonacciNumber = fibonacciList[j];
                const changeText = document.getElementById("y");
                const listaHistorica = document.getElementById("resultslist")
                changeText.innerHTML = `${fibonacciNumber}`
                const htmlElement = `The Fibonacci of <b>${inputValue}</b> is <b>${fibonacciNumber}</b>.`;
                listaHistorica.innerHTML = `<li>${htmlElement}</li>`;
            }
        }
        callArray()
    }
}