const i = document.querySelector("i");
const body = document.querySelector("body");

i.addEventListener("click", function(){
  i.classList.toggle("fizz");
});


body.addEventListener("click", function(){
  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  heart.style.left = (event.clientX - 5) + "px"; // Adjust to center the heart for X 
  heart.style.top = (event.clientY - 18) + "px"; // Adjust to center the heart for Y

  heart.style.fontSize = Math.random() * 25 + 30 + "px";

  body.appendChild(heart);

  heart.addEventListener("animationend", function(){
    this.remove();
  })  
});