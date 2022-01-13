let baseDeDonnees = [];


//fonction pour aller checher1️⃣
const chercheUtilisateurs = async () => {
    
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) =>res.json())
    .then((bruno) => (baseDeDonnees = bruno.results));
     console.log(baseDeDonnees[0]);
// setTimeout(() => {
//    //lesson les api 1h 26
//     console.log(baseDeDonnees);
// }, 2000);
};

//au moment ou je fais le console log  "console.log(baseDeDonnees)"1
//il n'a pas encore fini tous sa//// fetch("https://randomuser.me/api/?results=24").then((res) =>res.json()).then((bruno) => baseDeDonnees = bruno.results);//////////



//fonction pour afficher2️⃣ je fais un map,avant de commencer le map tu await tu executes la fonction fetch
const utilisateurAffichage = async () => {
await chercheUtilisateurs();

//fonction qui va traiter les dates au bon formats
const dateParser = (date) => {
let newDate = new Date(date).toLocaleDateString("fr-FR", {
  year:"numeric",
  month:"long",
  day: "numeric"
});
return newDate;

};
 
//je fais un calculateur de date!!!!!!
const dayCalc = (date) => {
let today = new Date();
let todayTimestamp = Date.parse(today);
let timestamp = Date.parse(date);
return Math.ceil((todayTimestamp-timestamp) / 8.64e7);
};

document.body.innerHTML = baseDeDonnees
.map(
  (rigal) =>
 `
<div class = "card">
<img src=${rigal.picture.large} alt="photo de ${rigal.name.last}">
<h3>${rigal.name.first} ${rigal.name.last}</h3>
<p>${rigal.location.city}, ${dateParser(rigal.dob.date)}</p>
  <em>Membre depuis  : ${dayCalc(rigal.registered.date)} jours</em>
  </div>
  
 `
)
  .join("");
};


utilisateurAffichage();

