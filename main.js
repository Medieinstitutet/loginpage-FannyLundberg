window.addEventListener("load", keepLoggedIn);

// Variabler för att hämta element
const header = document.getElementById("header");
const logInOrLogOff = document.getElementById("logInOrLogOff");
const mainContent = document.getElementById("mainContent");
const footer = document.getElementById("footer");


// Skapa inputfönster för användarnamn
let inputUserName = document.createElement("input");
inputUserName.placeholder = "Användarnamn";
logInOrLogOff.append(inputUserName);


// Skapa inputfönster för lösenord
let inputPassword = document.createElement("input");
inputPassword.placeholder = "Lösenord";
logInOrLogOff.append(inputPassword);


// Skapa knapp för "Logga in"
let logInBtn = document.createElement("button");
logInBtn.innerText = "Logga in";
logInOrLogOff.append(logInBtn);


// Skapa knapp för "Logga ut"
let logOutBtn = document.createElement("button");
logOutBtn.innerText = "Logga ut";


// Skapa innehåll i main för oinloggat läge
let logInPageMainContent = document.createElement("section");
logInPageMainContent.innerText = "Hej, Välkommen till min sida! Vänligen logga in.";
mainContent.append(logInPageMainContent);


// localStorage (spara i localStorage om en korrekt inloggad användare)
logInBtn.addEventListener("click", () => {
    const inputUserNameValue = inputUserName.value;

    if (inputUserName.value == "janne" && inputPassword.value == "test") {
        console.log(inputUserNameValue);
        localStorage.setItem("user", inputUserNameValue);
    }
});


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
        logInPageMainContent.innerText = "Hej " + localStorage.getItem("user", "") + ", välkommen till inloggat läge!";
        // Få upp "Logga ut"-knapp istället
        logInOrLogOff.append(logOutBtn);
        // Dölja inputfälten och "Logga in"-knapp
        inputUserName.remove();
        inputPassword.remove();
        logInBtn.remove();
    } else {
        console.log("Fel användarnamn eller lösenord")
        let wrongInput = document.createElement("section");
        wrongInput.innerText = "Du har angett fel användarnamn eller lösenord. Vänligen försök igen."
        mainContent.append(wrongInput);
        logInPageMainContent.remove();
            // om man skrivit fel uppgifter en gång men sen skriver rätt - hamna på oinloggat-läge
            inputUserName.onclick = function () {
                location.reload();
            };
    }   
});

// Kunna logga ut
//Klick på knappen
logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("user", "janne");
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


// localStorage (hålla kvar i inloggat läge)
function keepLoggedIn() {
    let loggedIn = localStorage.getItem("user", "janne");

    if (loggedIn) {
        logInPageMainContent.innerText = "Hej " + localStorage.getItem("user", "") + ", välkommen till inloggat läge!";
        // Få upp "Logga ut"-knapp istället
        logInOrLogOff.append(logOutBtn);
        // Dölja inputfälten och "Logga in"-knapp
        inputUserName.remove();
        inputPassword.remove();
        logInBtn.remove();
    } 
};