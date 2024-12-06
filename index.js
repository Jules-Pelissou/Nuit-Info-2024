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
mapExplications.set("arteres", new Map());
mapExplications.get("arteres").set("Bonne réponse", "Artères : Permet la circulation du sang dans tout le corps");
mapExplications.get("arteres").set("Mauvaise réponse 1", "Œsophage : C’est juste un conduit");
mapExplications.get("arteres").set("Mauvaise réponse 2", "Cerveau : Aucun lien");

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

                    showAnswers(organe);
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

                    showAnswers(organe);
                }

                finish = true;
                console.log(localStorage.getItem(organe));
            }
        });
    });
}

function showAnswers(organe)
{
    let info = document.querySelector("#info");
    info.style.display = "none";

    let p = document.querySelector("#main-text");
    let goodAnswer = document.querySelector("#good-answer");
    let badAnswer1 = document.querySelector("#bad-answer-1");
    let badAnswer2 = document.querySelector("#bad-answer-2");

    goodAnswer.innerHTML = mapExplications.get(organe).get("Bonne réponse");
    badAnswer1.innerHTML = mapExplications.get(organe).get("Mauvaise réponse 1");
    badAnswer2.innerHTML = mapExplications.get(organe).get("Mauvaise réponse 2");
}

letsPlay(questions[0]);