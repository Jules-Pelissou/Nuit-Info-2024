let result = localStorage.getItem("score");


let withoutZeros = result.replace(/^0+/, '');
let count25 = (withoutZeros.match(/25/g) || []).length;

console.log("Occurrences de '25':", count25);
total = count25*25;

let phrase1 = "";
let phrase2 = "";
let phrase3 = "D'ailleurs tant qu'on y est voila quelques stats sur la ville, là-bas dans le ciel il y a ";
let phrase4 = "L'humidité est à ";
let phrase5 = "Le vent souffle à ";

switch (total){
    case 0 :
        city_name = "Yakutsk";
        phrase1 = "Brrrrrrrrrrrrrrrrr, vous êtes terriblement froid, on dirait qu'on est à";
        phrase2 = "C'est glacial là-bas, il y fait actuellement ";
        getWeather(city_name, true, phrase1, phrase2, phrase3, phrase4 ,phrase5);
        break;
    case 25 :
        city_name = "Moscou";
        phrase1 = "Il fait un peu frais la non ? On dirait que vos réponses ont jetté un petit froid, on dirait qu'on est à";
        phrase2 = "Il va peut-être falloir mettre un pull la, il y fait actuellement ";
        getWeather(city_name, true, phrase1, phrase2, phrase3, phrase4 ,phrase5);
        break;
    case 50 :
        city_name = "Paris";
        phrase1 = "Il fait assez bon, c'est un peu comme vos réponses. Avec ce temps on se croirait à";
        phrase2 = "Franchement on pourrait aller prendre l'air avec cette température ";
        getWeather(city_name, true, phrase1, phrase2, phrase3, phrase4 ,phrase5);
        break;
    case 75 :
        city_name = "Le Caire";
        phrase1 = "Y a un petit courant d'air chaud non ? Avec tes réponses on dirait qu'on est à";
        phrase2 = "C'était tes réponses qui ont réchauffé l'athomsphère ou c'est toi ? Tout d'un coup il fait ";
        getWeather(city_name, true, phrase1, phrase2, phrase3, phrase4 ,phrase5);
        break;
    case 100 :
        city_name = "Riyad";
        phrase1 = "Ouuuffffff il fait extrêmement chaud, c'est tes réponses qui ont fait ça ?  On dirait qu'on est à ";
        phrase2 = "On crève de chaud il doit faire au moins 30 000°C. Ah non il ne fait que : ";
        getWeather(city_name, true, phrase1, phrase2, phrase3, phrase4 ,phrase5);
        break;
    default:
        break;
}
