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
  //12x12 grid size
  clearFunc();
  if (gridRange.value == 12) {
    let divCount = 225;
    for (i = 1; i <= divCount; i++) {
      makeDivs();
    }
    const boxDivs = document.querySelectorAll(".gameBlocks");
    gameScreen.style.height = "760px";
    for (let box of boxDivs) {
      box.style.height = "50px";
      box.style.width = "50px";
      box.style.flex = "1 1 50px";
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

    //end of 12x12 grid function
  } else if (gridRange.value == 15) {
    //15x15 grid size
    clearFunc();
    let divCount = 2500;
    for (i = 1; i <= divCount; i++) {
      makeDivs();
    }
    const boxDivs2 = document.querySelectorAll(".gameBlocks");
    gameScreen.style.height = "785px";
    for (let box of boxDivs2) {
      box.style.height = "15.5px";
      box.style.width = "15.5px";
      box.style.flex = "1 1 15.5px";
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
    //end of 15x15 grid function
  } else if (gridRange.value == 9) {
    // 9x9 grid size
    clearFunc();
    let divCount = 144;
    for (i = 1; i <= divCount; i++) {
      makeDivs();
    }
    const boxDivs1 = document.querySelectorAll(".gameBlocks");
    gameScreen.style.height = "790px";
    for (let box of boxDivs1) {
      box.style.height = "65px";
      box.style.width = "65px";
      box.style.flex = "1 1 65px";
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
    //end of 9x9 grid function
  }
});

function clearFunc() {
  gameScreen.innerHTML = "";
}
