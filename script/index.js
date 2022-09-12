// const arrowleft = document.getElementById("allcard__arrow__left");
// const arrowRight = document.getElementById("allcard__arrow__right");
// const allCardOne = document.querySelector(".allcard__card__1");
// const allCardTwo = document.querySelector(".allcard__card__2");
// const allCardThree = document.querySelector(".allcard__card__3");

// arrowleft.addEventListener("click", () => {
//   allCardOne.classList.add("animation");
//   allCardTwo.classList.add("animationReverse");
//   allCardThree.classList.add("animationReverse");
//   //   allCardTwo.classList.add("animationreverse");
// });
// arrowRight.addEventListener("click", () => {
//   allCardOne.classList.add("animation");
//   allCardTwo.classList.add("animationReverse");
//   allCardThree.classList.add("animationReverse");
//   //   allCardTwo.classList.add("animationreverse");
// });

const body = document.querySelector(".bodyacceuil");
const container = document.querySelector(".allcard__card");
const btnLeft = document.getElementById("allcard__arrow__left");
const btnRight = document.getElementById("allcard__arrow__right");
const header = document.querySelector(".header");
let nbr = 5;
let position = 0;
console.log(container);

container.style.width = 800 * nbr + "px";
for (i = 1; i <= nbr; i++) {
  const moreContainer = document.createElement("img");
  moreContainer.className = "allcard__card__photo";
  moreContainer.src = "/img/Img-" + i + ".jpg";
  container.appendChild(moreContainer);
}
hiddenArrow();

btnRight.addEventListener("click", () => {
  if (position > -nbr + 1) {
    position--;
    container.style.transform = "translate(" + position * 800 + "px)";
    hiddenArrow();
  }
});
btnLeft.addEventListener("click", () => {
  if (position < 0) {
    position++;
    container.style.transform = "translate(" + position * 800 + "px)";
    hiddenArrow();
  }
});

function hiddenArrow() {
  if (position == -nbr + 1) {
    btnRight.style.visibility = "hidden";
  } else {
    btnRight.style.visibility = "visible";
  }
  if (position == 0) {
    btnLeft.style.visibility = "hidden";
  } else {
    btnLeft.style.visibility = "visible";
  }
}

// const title = document.createElement("h1");
// header.appendChild(title);
// console.log(header);
// const titleH1 = document.querySelector("h1");
// titleH1.innerHTML = "Portfolio";
//  {
//   console.log(allTitle[0]);
// }
// console.log(allTitle[0]);
