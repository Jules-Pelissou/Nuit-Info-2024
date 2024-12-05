// Questions/réponses
let mapAnswers = new Map();
mapAnswers.set("arteres", 1);
mapAnswers.set("foie", 3);
mapAnswers.set("poumons", 3);
mapAnswers.set("peau", 2);

// Question 1
let buttons = document.querySelectorAll(".answer");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.getAttribute("data-number") == mapAnswers.get("arteres"))
        {
            alert("Bien ouej mec !");
        }
        else
        {
            alert("Game over :(");
        }
    });

    console.log(button.getAttribute("data-number"));
});