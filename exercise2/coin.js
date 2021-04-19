"use strict";
{
  const formEl = document.getElementById("moneyForm");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    let coinCount = document.getElementById("howMany").value;
    let coinName = document.getElementById("whichCoin").value;
    newCoinEl.innerText = coinName;
    for (let i = 0; i < coinCount; i++) {
    
    newCoinEl.classList.add("coin");
    let newCoinEl = document.createElement("div");
    let theContainer = document.getElementById("coins");
    theContainer.apppend(newCoinEl);

}
  });
}
