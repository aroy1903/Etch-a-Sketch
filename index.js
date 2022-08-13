const userSelector = document.querySelector("#userColor");
const submitColor = document.querySelector("#submitColor");
const clearButton = document.querySelector("#clearButton");
const gameScreen = document.querySelector("#gameScreen");
const gameHeader = document.querySelector("#gameSize");

function makeDivs() {
  let divScreen = document.createElement("div");
  divScreen.className = "gameBlocks";
  gameScreen.appendChild(divScreen);
}

const gridRange = document.querySelector("#inputRange");

gridRange.addEventListener("click", () => {
  //range of 12x12 grid size
  clearFunc();
  if (gridRange.value == 12) {
    let divCount = 144;
    for (i = 1; i <= divCount; i++) {
      makeDivs();
    }
    const boxDivs = document.querySelectorAll(".gameBlocks");
    gameScreen.style.height = "790px";
    for (let box of boxDivs) {
      box.style.height = "65px";
      box.style.width = "65px";
      box.style.flex = "1 1 65px";
    }
    submitColor.addEventListener("click", () => {
      const userColor = userSelector.value;
      for (let box of boxDivs) {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = userColor;
        });
      }
      clearButton.addEventListener("click", () => {
        for (let box of boxDivs) {
          box.style.backgroundColor = "white";
        }
      });
    });

    //end of 12x12
  } else if (gridRange.value == 15) {
    // range of 15x15 for grid size
    clearFunc();
    let divCount = 225;
    for (i = 1; i <= divCount; i++) {
      makeDivs();
    }
    const boxDivs2 = document.querySelectorAll(".gameBlocks");
    gameScreen.style.height = "760px";
    for (let box of boxDivs2) {
      box.style.height = "50px";
      box.style.width = "50px";
      box.style.flex = "1 1 50px";
    }
    submitColor.addEventListener("click", () => {
      const userColor = userSelector.value;
      for (let box of boxDivs2) {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = userColor;
        });
      }
      clearButton.addEventListener("click", () => {
        for (let box of boxDivs2) {
          box.style.backgroundColor = "white";
        }
      });
    });

    //end of 15x15
  } else if (gridRange.value == 9) {
    // range of 9x9 for grid size
    clearFunc();
    let divCount = 81;
    for (i = 1; i <= divCount; i++) {
      makeDivs();
    }
    const boxDivs1 = document.querySelectorAll(".gameBlocks");
    gameScreen.style.height = "730px";
    for (let box of boxDivs1) {
      box.style.height = "80px";
      box.style.width = "80px";
      box.style.flex = "1 1 80px";
    }
    submitColor.addEventListener("click", () => {
      const userColor = userSelector.value;
      for (let box of boxDivs1) {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = userColor;
        });
      }
      clearButton.addEventListener("click", () => {
        for (let box of boxDivs1) {
          box.style.backgroundColor = "white";
        }
      });
    });

    //end of 9x9
  }
});

function clearFunc() {
  gameScreen.innerHTML = "";
}
// make a 7x7 grid with flexbox of divs
