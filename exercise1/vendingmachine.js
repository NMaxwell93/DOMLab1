"use strict";
{
  let total = 0.0;
  const totalCost = document.getElementById("total");
  totalCost.innerText = `Total: $${total}`;

  const limeCola = document.getElementById("lime");
  limeCola.addEventListener("click", lime);

  function lime() {
    console.log("Lime");
    total += 2.0;
    totalCost.innerText = `Total: $${total}`;
    return total;
  }

  const saltedPeanuts = document.getElementById("peanuts");
  saltedPeanuts.addEventListener("click", peanuts);

  function peanuts() {
    console.log("peanuts");
    total += 3.0;
    totalCost.innerText = `Total: $${total}`;
    return total;
  }

  const chocolateBar = document.getElementById("chocolate");
  chocolateBar.addEventListener("click", chocolate);

  function chocolate() {
    console.log("chocolate");
    total += 4.0;
    totalCost.innerText = `Total: $${total}`;
    return total;
  }

  const fruitGummies = document.getElementById("gummies");
  fruitGummies.addEventListener("click", gummies);

  function gummies() {
    console.log("gummies");
    total += 6.0;
    totalCost.innerText = `Total: $${total}`;
    return total;
  }
}
