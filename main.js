// Variabler för att hämta element
const header = document.getElementById("header");
const logInOrLogOff = document.getElementById("logInOrLogOff");
const mainContent = document.getElementById("mainContent");
const footer = document.getElementById("footer");


// Göra inputfönster för användarnamn
let inputUserName = document.createElement("input");
inputUserName.placeholder = "Användarnamn";
logInOrLogOff.append(inputUserName);


// Göra inputfönster för lösenord
let inputPassword = document.createElement("input");
inputPassword.placeholder = "Lösenord";
logInOrLogOff.append(inputPassword);


// Göra knapp för Logga in
let btn = document.createElement("button");
btn.innerText = "Logga in";
logInOrLogOff.append(btn);


// Skapa innehåll i main för oinloggat läge
let logInPageMainContent = document.createElement("section");
logInPageMainContent.innerText = "Hej, Välkommen till min sida! Vänligen logga in.";
mainContent.append(logInPageMainContent);


// Kunna logga in (if)
    //Klick på knappen
btn.addEventListener("click", () => {
    console.log("Klick på knappen");

    // Kontrollera användarnamn och lösenord matchar
console.log(inputUserName.value);
console.log(inputPassword.value);

if (inputUserName.value == "janne" && inputPassword.value == "test") {
	console.log("rätt användarnamn och lösenord");
    // Skapa innehåll i main för inloggat läge
    logInPageMainContent.innerText = "Hej janne, välkommen till inloggat läge!";
    // Få "Logga ut"-knapp istället
    btn.innerText = "Logga ut";
    // Dölja inputfälten
    inputUserName.remove();
    inputPassword.remove();
}  else {
    console.log("fel användarnamn eller lösenord")
    let wrongInput = document.createElement("p");
    wrongInput.innerText = "Du har angett fel användarnamn eller lösenord. Vänligen försök igen."
    logInOrLogOff.append(wrongInput);
}
});

// Logga ut-knappen ska logga ut (skicka till oinloggad vy)
