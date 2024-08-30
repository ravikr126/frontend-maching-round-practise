let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filled = 0;

container.addEventListener("click", function (e) {
  let currClicked = e.target.dataset.index; //for clicked star

  for (let i = 0; i < filled; i++) {
    star[i].classList.remove("star-filled"); // we have to remove the pre-selected star
  }

  for (let i = 0; i < currClicked; i++) {
    star[i].classList.add("star-filled"); // it will make it yellow while clicking star upto that star
  }

  document.getElementById("count").innerText = `Rating Count: ${currClicked}`;  //it will print rating star value

  filled = currClicked;
});

container.addEventListener("mouseover", function (e) {  //it for mouse hover
  let currClicked = e.target.dataset.index;

  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");    //removing the previous star filled while hovering
  }

  for (let i = 0; i < currClicked; i++) {     //adding colur to the star while hovering
    star[i].classList.add("star-filled"); 
  }
});

container.addEventListener("mouseleave", function (e) {  // when cursor leaves while hovering , the star colorless
  for (let i = 0; i < 5; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filled; i++) {// when cursor clicked while hovering , the star become colored
    star[i].classList.add("star-filled");
  }
});