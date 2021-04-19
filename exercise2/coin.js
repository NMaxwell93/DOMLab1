"use strict";
{
  const formEl = document.getElementById("moneyForm");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    let coinCount = document.getElementById("howMany").value;
    let coinName = document.getElementById("whichCoin").value;
    console.log(coinName)
    console.log(coinCount)
    
    for (let i = 0; i < coinCount; i++) {
      let newCoinEl = document.createElement("div");
      newCoinEl.innerText = coinName;
      newCoinEl.classList.add("coin");
      newCoinEl.classList.add("coin-" + coinName)
      

      let theContainer = document.getElementById("coinsHere");
      theContainer.append(newCoinEl);
    }
  });
}
