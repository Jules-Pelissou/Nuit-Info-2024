// ----- Questions/réponses
let mapAnswers = new Map();
mapAnswers.set("arteres", 1);
mapAnswers.set("foie", 3);
mapAnswers.set("poumons", 3);
mapAnswers.set("peau", 2);

// ----- Zones image principale
let mapZones = new Map();
mapZones.set("stream", "arteres");
mapZones.set("coral", "foie");
mapZones.set("plankton", "poumons");
mapZones.set("ice", "peau");

// ----- Bonhomme
let mapIdBonhomme = new Map();
mapIdBonhomme.set("arteres", "heart");
mapIdBonhomme.set("foie", "liver");
mapIdBonhomme.set("poumons", "lugs");
mapIdBonhomme.set("peau", "skin");

// ----- QUESTIONS
let mapQuestions = new Map();

// --- Artères
mapQuestions.set("arteres", new Map());
mapQuestions.get("arteres").set("contexte", "Les océans sont constitués de nombreux courants marins tels que l'AMOC qui est un ensemble de courants dont le Gulf Stream et le courant du Labrador. Les courants permettent de réguler la chaleur des différents continents ainsi que l'humidité de l'air. A ce jour, l'AMOC est menacé à 95% de s'effondrer entre 2025 et 2095 dû en partie à cause du changement climatique. Si cela venait à arriver, nous ne connaîtrons plus la terre comme nous la connaissons aujourd'hui. Nous pourrions comparer ces courants marins à quelque chose que nous avons tous en nous.");
mapQuestions.get("arteres").set("question", "Selon vous, de quoi s'agit-il ?");

// --- Foie
mapQuestions.set("foie", new Map());
mapQuestions.get("foie").set("contexte", "Les coraux sont des éléments majeurs de l'océan. La Grande barrière de Corail par exemple, qui se situe en Australie, à un rôle primordial dans la filtration mais surtout dans l'absorption des toxines. Après absorption, les coraux sont dans la capacité d'éliminer certaines toxines ou métaux lourds. Il en est de même pour notre foie. Ils piègent les métaux lourds et autres substances afin de purifier leur environnement. Cependant, avec le changement climatique, les coraux meurent plus rapidement, l'absorption est beaucoup moins efficace.");
mapQuestions.get("foie").set("question", "Mais alors, comment agir pour pallier ce problème ?");

// --- Poumons
mapQuestions.set("poumons", new Map());
mapQuestions.get("poumons").set("contexte", "Les poumons permettent à l’oxygène de circuler dans le corps tout en éliminant le dioxyde de carbone. De manière similaire, les phytoplanctons jouent un rôle crucial dans l’écosystème terrestre en produisant environ 50 % de l’oxygène de la planète. Ces deux systèmes sont indispensables à la vie. Pourtant, face à la pollution et au réchauffement climatique, les phytoplanctons voient leur population diminuer, compromettant leur capacité à produire de l’oxygène.");
mapQuestions.get("poumons").set("question", "Alors, comment préserver ces alliés invisibles pour maintenir l’équilibre vital ?");

// --- Peau
mapQuestions.set("peau", new Map());
mapQuestions.get("peau").set("contexte", "La peau et les calottes glaciaires ont un rôle similaire : elles protègent et régulent. Tout comme la peau nous défend contre les agressions extérieures et aide à maintenir notre température, les calottes glaciaires régulent le climat de la Terre en reflétant les rayons du soleil. Mais si elles sont endommagées, les conséquences sont graves : la peau peut se brûler ou s'infecter, et les calottes glaciaires, en fondant, provoquent des dérèglements climatiques. Il est donc crucial de prendre soin de ces deux barrières naturelles pour préserver notre santé et celle de la planète.");
mapQuestions.get("peau").set("question", "Mais alors, quel est le meilleur moyen d'en prendre soin ?");

// RÉPONSES
let mapReponses = new Map();

// --- Artères
mapReponses.set("arteres", new Map());
mapReponses.get("arteres").set(1, "Réduire les émissions de gaz à effet de serre");
mapReponses.get("arteres").set(2, "Restaurer les récifs coralliens pour relancer les courants");
mapReponses.get("arteres").set(3, "Augmenter les activités humaines pour \"renforcer\" les courants");

// --- Foie
mapReponses.set("foie", new Map());
mapReponses.get("foie").set(1, "Interdire le tourisme dans les récifs coraliens");
mapReponses.get("foie").set(2, "Les crèmes solaires biodégradables suffisent pour protéger les coraux");
mapReponses.get("foie").set(3, "Sensibilisation et éducation");

// --- Poumons
mapReponses.set("poumons", new Map());
mapReponses.get("poumons").set(1, "Réduire uniquement l'émission de CO2");
mapReponses.get("poumons").set(2, "Protéger l'environnement marin uniquement");
mapReponses.get("poumons").set(3, "Ni l'un ni l'autre");

// --- Peau
mapReponses.set("peau", new Map());
mapReponses.get("peau").set(1, "Les émissions de CO2 d'un pays ne comptent pas si d'autres ne font pas d'efforts");
mapReponses.get("peau").set(2, "Recherche et collaboration internationale");
mapReponses.get("peau").set(3, "Recyclage du plastique");

// ----- EXPLICATIONS
let mapExplications = new Map();

// --- Artères
mapExplications.set("arteres", new Map());
mapExplications.get("arteres").set("Bonne réponse", "Réduire les émissions de gaz à effet de serre : C’est la solution principale. Les émissions de CO2 provoquent le réchauffement des océans et la fonte des glaces, ce qui perturbe les courants. En réduisant ces émissions, nous pouvons limiter les changements climatiques et stabiliser les courants marins.");
mapExplications.get("arteres").set("Mauvaise réponse 1", "Restaurer les récifs coralliens pour relancer les courants : Les récifs coralliens jouent un rôle important dans les écosystèmes marins, mais leur restauration ne suffit pas à réguler les grands courants océaniques, qui dépendent surtout de la température et de la salinité des eaux.");
mapExplications.get("arteres").set("Mauvaise réponse 2", "Augmenter les activités humaines pour \"renforcer\" les courants : Certaines solutions technologiques mal réfléchies, comme essayer de modifier artificiellement les courants marins, pourraient aggraver les déséquilibres écologiques. Il vaut mieux prévenir les causes du problème.");

// --- Foie
mapExplications.set("foie", new Map());
mapExplications.get("foie").set("Bonne réponse", "Sensibilisation et éducation : Des campagnes de sensibilisation auprès des décideurs, du grand public et des écolier doivent être organisé pour informer sur les dangers de la pollution plastique et encourager des comportement responsables.");
mapExplications.get("foie").set("Mauvaise réponse 1", "Les crèmes solaires biodégradables suffisent pour protéger les coraux : Certes elles réduisent les dommages causé par les produits chimiques mais elles n'empêchent pas la menace principale, qui est la hausse des températures");
mapExplications.get("foie").set("Mauvaise réponse 2", "Interdire le tourisme dans les récifs coraliens : Le tourisme mal géré est un pb, mais impliquer les touristes dans des actions responsables peut aussi être bénéfiques.");

// --- Poumons
mapExplications.set("poumons", new Map());
mapExplications.get("poumons").set("Bonne réponse", "Ni l'un ni l'autre : Afin d'assurer un avenir stable au phytoplancton, il faudrait à la fois réduire les émissions de CO2, protéger les écosystèmes marins, lutter contre la surpêche… Une seule solution de suffira pas, il faut combiner plusieurs actions pour obtenir des résultats efficaces.");
mapExplications.get("poumons").set("Mauvaise réponse 1", "Réduire uniquement l'émission de CO2 : Non, pas uniquement . La réduction drastique des émission de CO2 est la solution la plus efficace à long terme pour limiter le réchauffement climatique et l'acidification des océans. MAIS, elle doit être accompagné de solutions complémentaires");
mapExplications.get("poumons").set("Mauvaise réponse 2", "Protéger l'environnement marin uniquement : De même");

// --- Peau
mapExplications.set("peau", new Map());
mapExplications.get("peau").set("Bonne réponse", "Recherche et collaboration internationale : Financer des projets de recherche sur le climat, les modèles de prévision du climat et la surveillance des glaces polaires pour mieux comprendre et anticiper les changements.");
mapExplications.get("peau").set("Mauvaise réponse 1", "Les émissions de CO2 d'un pays ne comptent pas si d'autres ne font pas d'efforts : Le changement climatique est un problème global, et chaque pays doit jouer un rôle. Même les petits pays ou les régions moins polluantes contribuent à l’équilibre climatique. Chaque effort compte dans la lutte contre la fonte des glaces.");
mapExplications.get("peau").set("Mauvaise réponse 2", "Recyclage du plastique : Pour ce problème, le recyclage n'est pas la solution la plus efficace. De plus, sans infrastructures suffisantes, seule une petite fraction des plastiques est recyclée ");

let turn = 1;
localStorage.setItem("score", 0);

// Question 1
function letsPlay(organe, id)
{
    hideAnswers();

    // Mise en place de la question
    let info = document.querySelector("#context");
    info.innerHTML = mapQuestions.get(organe).get("contexte");
    let askedQuestion = document.querySelector("#askedQuestion");
    askedQuestion.innerHTML = mapQuestions.get(organe).get("question");

    document.querySelector("#turn").innerHTML = turn;

    // Affichage des boutons
    let questionBadge = document.querySelector("#questionBadge");
    questionBadge.classList.remove("hide");
    let responseBadge = document.querySelector("#responseBadge");
    responseBadge.classList.add("hide");

    installAnswers(organe);

    let buttons = document.querySelectorAll(".answer");
  
    // EventListener sur les boutons
    buttons.forEach(button => {
        button.removeEventListener("click", (event) => plaaay(event, organe, id));
        button.addEventListener("click", (event) => plaaay(event, organe, id));
    });
}

function installAnswers(organe)
{
    let info = document.querySelector("#info");
    info.style.display = "";

    let buttons = document.querySelectorAll(".answer");
    if(buttons != undefined)
    {
        buttons.forEach(button => {
            button.remove();
        });
    }

    for(let i = 1; i <= 3; i++)
    {
        let button = document.createElement("button");
        button.classList.add("btn", "text-center", "cliquable", "answer");
        button.setAttribute("id", "button-" + i);
        button.setAttribute("data-number", i);

        button.innerHTML = mapReponses.get(organe).get(i);

        document.querySelector("#answers").appendChild(button);
    }
}

function showAnswers(organe)
{
    let info = document.querySelector("#info");
    info.style.display = "none";

    let goodAnswer = document.querySelector("#good-answer");
    let badAnswer1 = document.querySelector("#bad-answer-1");
    let badAnswer2 = document.querySelector("#bad-answer-2");

    goodAnswer.classList.remove("hide");
    badAnswer1.classList.remove("hide");
    badAnswer2.classList.remove("hide");

    goodAnswer.innerHTML = mapExplications.get(organe).get("Bonne réponse");
    badAnswer1.innerHTML = mapExplications.get(organe).get("Mauvaise réponse 1");
    badAnswer2.innerHTML = mapExplications.get(organe).get("Mauvaise réponse 2");
}

function hideAnswers()
{
    let goodAnswer = document.querySelector("#good-answer");
    let badAnswer1 = document.querySelector("#bad-answer-1");
    let badAnswer2 = document.querySelector("#bad-answer-2");

    goodAnswer.classList.add("hide");
    badAnswer1.classList.add("hide");
    badAnswer2.classList.add("hide");
}

function plaaay(event, organe, id)
{
    const button = event.target;

    let questionBadge = document.querySelector("#questionBadge");
    let responseBadge = document.querySelector("#responseBadge");

    if(document.querySelector("#" + button.id).getAttribute("data-number") == mapAnswers.get(organe))
    {
        // alert("Bien ouej mec !");
        let newScore = localStorage.getItem("score") + 25;
        localStorage.setItem("score", newScore);

        let idBonhomme = mapIdBonhomme.get(organe);
        document.querySelector("#" + idBonhomme).classList.add("text-success");
        
        questionBadge.classList.add("hide");

        responseBadge.innerHTML = "Bonne réponse";
        responseBadge.classList.remove("hide");
        responseBadge.classList.add("text-bg-success");

        let answers = document.querySelectorAll(".answer");
        answers.forEach(answer => {
            answer.remove();
        });
    
        showAnswers(organe);

        // On cache la zone cliquable
        document.querySelector("#" + id).style.opacity = 0;

        turn++;
        console.log(localStorage.getItem("score"));
    }
    else
    {
        // alert("Game over :(");
        let newScore = localStorage.getItem("score") + 0;
        localStorage.setItem("score", newScore);

        let idBonhomme = mapIdBonhomme.get(organe);
        document.querySelector("#" + idBonhomme).classList.add("text-danger");

        let questionBadge = document.querySelector("#questionBadge");
        questionBadge.classList.add("hide");

        responseBadge.innerHTML = "Mauvaise réponse";
        responseBadge.classList.remove("hide");
        responseBadge.classList.add("text-bg-danger");

        let answers = document.querySelectorAll(".answer");
        answers.forEach(answer => {
            answer.remove();
        });
    
        showAnswers(organe);

        // On cache la zone cliquable
        document.querySelector("#" + id).style.opacity = 0;

        turn++;
        console.log(localStorage.getItem("score"));
    }
}

let zones = document.querySelectorAll(".zone");
zones.forEach(zone => {
    let id = zone.id;
    let organe = mapZones.get(id);
    zone.addEventListener("click", () => {
        letsPlay(organe, id);
    });
});