"use strict";
{
    const onButton = document.getElementById("on");
    const offButton = document.getElementById("off");
    const toggleButton = document.getElementById("toggle");
    const endButton = document.getElementById("end");
    const lightBulb = document.getElementById("bulb");

    onButton.addEventListener("click", () => {
        lightBulb.classList.add("on")
    })

    offButton.addEventListener("click", () => {
        lightBulb.classList.remove("on")
    })

    toggleButton.addEventListener("click", () => {
        lightBulb.classList.toggle("on")
    })

    endButton.addEventListener("click", () => {
        lightBulb.remove();
        onButton.disabled = true;
        offButton.disabled = true;
        endButton.disabled = true;
        toggleButton.disabled = true;
    })

}






