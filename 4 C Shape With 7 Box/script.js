let boxContainer = document.getElementById("box-container");
let box = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", function (e) {
  let index = e.target.dataset.index;

  if (index != undefined) {
    queue.push(index);
    box[index].classList.add("green-color");
  }

  if (queue.length == 7) {
    let cnt = 0;
    while (queue.length > 0) {
      let ind = queue.shift();
      cnt++;
      setTimeout(() => {
        box[ind].classList.remove("green-color");
      }, cnt * 1000);
    }
  }
});



//2nd method


// const boxes = document.querySelectorAll(".box");
// let queue = [];
// boxes.forEach(function (box) {
//   box.addEventListener("click", function (e) {
//     this.classList.add("active");
//     queue.push(this);
//     removeActiveClassInOrder();
//   });
// });

// function removeActiveClassInOrder() {
//   let totalActive = document.querySelectorAll(".active");
//   if (totalActive.length === boxes.length) {
//     setTimeout(() => {
//       for (let i = 0; i < queue.length; i++) {
//         setTimeout(() => {
//           let box = queue.shift();
//           box.classList.remove("active");
//         }, i * 1000);
//       }
//     }, 2000);
//   }
// }
