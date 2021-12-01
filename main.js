window.addEventListener("load", displayUser);

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


// Göra knapp för "Logga in"
let logInBtn = document.createElement("button");
logInBtn.innerText = "Logga in";
logInOrLogOff.append(logInBtn);


// Göra knapp för "Logga ut"
let logOutBtn = document.createElement("button");
logOutBtn.innerText = "Logga ut";


// Skapa innehåll i main för oinloggat läge
let logInPageMainContent = document.createElement("section");
logInPageMainContent.innerText = "Hej, Välkommen till min sida! Vänligen logga in.";
mainContent.append(logInPageMainContent);


// Kunna logga in (if)
//Klick på knappen
logInBtn.addEventListener("click", () => {
    console.log("Klick på Logga in-knappen");

    // Kontrollera användarnamn och lösenord matchar
    console.log("Användarnamn: " + inputUserName.value);
    console.log("Lösenord: " + inputPassword.value);

    if (inputUserName.value == "janne" && inputPassword.value == "test") {
        console.log("Rätt användarnamn och lösenord");
        // Skapa innehåll i main för inloggat läge
        logInPageMainContent.innerText = "Hej " + inputUserName.value + ", välkommen till inloggat läge!";
        // Få upp "Logga ut"-knapp istället
        logInOrLogOff.append(logOutBtn);
        // Dölja inputfälten och "Logga in"-knapp
        inputUserName.remove();
        inputPassword.remove();
        logInBtn.remove();
        displayUser();
    } else {
        console.log("Fel användarnamn eller lösenord")
        let wrongInput = document.createElement("section");
        wrongInput.innerText = "Du har angett fel användarnamn eller lösenord. Vänligen försök igen."
        mainContent.append(wrongInput);
        logInPageMainContent.remove();
    }

    // lösa så om man skrivit fel uppgifter en gång men sen skriver rätt - hamna på inloggat-läge

    
});

displayUser();

// Kunna logga ut
//Klick på knappen
logOutBtn.addEventListener("click", () => {
    console.log("Klick på Logga ut-knappen");
    // Ändra innehåll i main till oinloggat läge
    logInPageMainContent.innerText = "Hej, Välkommen till min sida! Vänligen logga in.";
    // Visa inloggningsfälten och Logga in-knappen
    logInOrLogOff.append(inputUserName);
    logInOrLogOff.append(inputPassword);
    logInOrLogOff.append(logInBtn);
    // Ta bort Logga ut-knappen
    logOutBtn.remove();
});


// localStorage (visa rätt användare och hålla i inloggat läge)
function displayUser() {
    localStorage.setItem("user", inputUserName.value);
    inputUserName.innerText = localStorage.getItem("user");
}