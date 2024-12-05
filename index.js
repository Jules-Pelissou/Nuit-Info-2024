// Questions/réponses
let mapAnswers = new Map();
mapAnswers.set("arteres", 1);
mapAnswers.set("foie", 3);
mapAnswers.set("poumons", 3);
mapAnswers.set("peau", 2);

// Question 1
function letsPlay()
{
    let buttons = document.querySelectorAll(".answer");
    let finish = false;
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            while(!finish)
            {
                if(button.getAttribute("data-number") == mapAnswers.get("arteres"))
                {
                    alert("Bien ouej mec !");
                    localStorage.setItem("arteres", 25);
                }
                else
                {
                    alert("Game over :(");
                    localStorage.setItem("arteres", 0);
                }

                finish = true;
                console.log(localStorage.getItem("arteres"));
            }
        });
    });
}

letsPlay();