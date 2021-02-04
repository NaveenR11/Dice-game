var randomNumber1=Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var randomimg1="images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomimg1);

var randomNumber2=Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var randomimg2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomimg2);

if(randomNumber1>randomNumber2){
  document.querySelector(".result").textContent="Player one wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".result").textContent="Player two wins";
}
else{
  document.querySelector(".result").textContent="Draw";
}
