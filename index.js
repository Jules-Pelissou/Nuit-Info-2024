// Questions/réponses
let mapAnswers = new Map();
mapAnswers.set("arteres", 1);
mapAnswers.set("foie", 3);
mapAnswers.set("poumons", 3);
mapAnswers.set("peau", 2);

// Bonhomme
let mapIdBonhomme = new Map();
mapIdBonhomme.set("arteres", "heart");
mapIdBonhomme.set("foie", "liver");
mapIdBonhomme.set("poumons", "lugs");
mapIdBonhomme.set("peau", "skin");

// Explications
let mapExplications = new Map();
mapExplications.set("arteres", "")

// Ordre questions
let questions = ["arteres", "foie", "poumons", "peau"];

// Question 1
function letsPlay(organe)
{
    let buttons = document.querySelectorAll(".answer");
    let finish = false;
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            while(!finish)
            {
                if(button.getAttribute("data-number") == mapAnswers.get(organe))
                {
                    alert("Bien ouej mec !");
                    localStorage.setItem(organe, 25);

                    let idBonhomme = mapIdBonhomme.get(organe);
                    document.querySelector("#" + idBonhomme).classList.add("text-success");

                    let questionBadge = document.querySelector("#questionBadge");
                    questionBadge.style.display = "none";

                    let responseBadge = document.querySelector("#responseBadge");
                    responseBadge.style.display = "";
                    responseBadge.classList.add("text-bg-success");

                    let answers = document.querySelector("#answers");
                    answers.remove();
                }
                else
                {
                    alert("Game over :(");
                    localStorage.setItem(organe, 0);

                    let idBonhomme = mapIdBonhomme.get(organe);
                    document.querySelector("#" + idBonhomme).classList.add("text-danger");

                    let questionBadge = document.querySelector("#questionBadge");
                    questionBadge.style.display = "none";

                    let responseBadge = document.querySelector("#responseBadge");
                    responseBadge.style.display = "";
                    responseBadge.classList.add("text-bg-danger");

                    let answers = document.querySelector("#answers");
                    answers.remove();
                }

                finish = true;
                console.log(localStorage.getItem(organe));
            }
        });
    });
}

letsPlay(questions[0]);