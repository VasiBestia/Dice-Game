let images = document.querySelectorAll("div img");
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let text1 = "./images/dice" + randomNumber1 + ".png";
let text2 = "./images/dice" + randomNumber2 + ".png";
images[0].setAttribute("src", text1);
images[1].setAttribute("src", text2);

if(randomNumber1>randomNumber2){
     document.querySelector("h1").textContent="Player1 Wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player2 Wins";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}

