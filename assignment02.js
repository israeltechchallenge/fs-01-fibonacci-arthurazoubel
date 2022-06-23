
function fibonaccilist() {
    var a,b,result;
    a=0;
    b=1;
    result=b;
    fibonaccinumbers = [];
    for (i=1;i<=50;i++) {
        result = a + b;
        a = b;
        b = result
        fibonaccinumbers.push(result)
    }
        fibonaccinumbers.unshift(0,1)
    }
fibonaccilist()

const button = document.getElementById("btn");
button.addEventListener("click", callArray)

function callArray() {
    //inputValue.
    var inputValue = document.getElementById("input").value;
    i = inputValue;
    if (i > 50) {
        alert("ERROR 404")
    } else {
    fibonacciNumber = fibonaccinumbers[i];
    const changeText = document.getElementById("y");
    changeText.innerHTML = `${fibonacciNumber}`
    }
}

/*
const localServer = `http://localhost:5050/fibonacci/:number`;
fetch(localServer)
  .then(function (response) {
    return response.json();
  })
  .then (function (data) {

  })
*/

/*
function spinnerShow(){
    document.getElementById('y').innerHTML = '';
    document.getElementById('hideSpin').style.visibility = 'visible';
    setTimeout(() => {
        callArray;
    }, 500);
}
*/

// SORRY, I'M STILL TRYING TO FIGURE OUT HOW TO SOLVE MILESTONES 4 AND 5