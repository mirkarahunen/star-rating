let stars = document.querySelectorAll(".rating__input") 
let rating = document.querySelector("p")
let average;
let totalScrore;
let totalRatings;
let stars_1;
let stars_2;
let stars_3;
let stars_4;
let stars_5;

for (let index = 0; index < stars.length; index++) {
    const element = stars[index];
    

    element.addEventListener("click", function(e) {
        
        if(parseInt(element.value) === 1) {
            if(!localStorage.getItem("1-star")) {
                localStorage.setItem("1-star", 1)
            } else {
                let storedClickAmount = parseInt(localStorage.getItem("1-star"))
                localStorage.setItem("1-star", ++storedClickAmount)
            }
        } else if (parseInt(element.value) === 2) {
            if(!localStorage.getItem("2-star")) {
                localStorage.setItem("2-star", 1)
            } else {
                let storedClickAmount = parseInt(localStorage.getItem("2-star"))
                localStorage.setItem("2-star", ++storedClickAmount)
            }
            
        } else if (parseInt(element.value) === 3) {
            if(!localStorage.getItem("3-star")) {
                localStorage.setItem("3-star", 1)
            } else {
                let storedClickAmount = parseInt(localStorage.getItem("3-star"))
                localStorage.setItem("3-star", ++storedClickAmount)
            }
            
        } else if (parseInt(element.value) === 4) {
            if(!localStorage.getItem("4-star")) {
                localStorage.setItem("4-star", 1)
            } else {
                let storedClickAmount = parseInt(localStorage.getItem("4-star"))
                localStorage.setItem("4-star", ++storedClickAmount)
            }
            
        } else if (parseInt(element.value) === 5) {
            if(!localStorage.getItem("5-star")) {
                localStorage.setItem("5-star", 1)
            } else {
                let storedClickAmount = parseInt(localStorage.getItem("5-star"))
                localStorage.setItem("5-star", ++storedClickAmount)
            }
            
        }

      calculateAverage()
    })
}

function calculateAverage() {

    stars_1 = JSON.parse(localStorage.getItem("1-star"));
    stars_2 = JSON.parse(localStorage.getItem("2-star"));
    stars_3 = JSON.parse(localStorage.getItem("3-star"));
    stars_4 = JSON.parse(localStorage.getItem("4-star"));
    stars_5 = JSON.parse(localStorage.getItem("5-star"));

    totalScrore = stars_1 * 1 + stars_2 * 2 + stars_3 * 3 + stars_4 * 4 + stars_5 * 5
    totalRatings = stars_1 + stars_2 + stars_3 + stars_4 + stars_5
    average = Math.round((totalScrore / totalRatings) * 100) / 100

    rating.innerHTML = `This recipe has the rating of ${average ? average : 0} stars`

}        

        
calculateAverage()