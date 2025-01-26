var ausgedachteZahl;
var OberGrenze = 100;
var gerateneZahl = "";
var anzahlDerVersuche = 0;
var klein= "";
var groß = "";

ausgedachteZahl = Math.random() * 100;
ausgedachteZahl = Math.round(ausgedachteZahl + 0.5)

do{
    gerateneZahl = prompt("Rate eine Zahl von 1 bis " + OberGrenze + ", " + klein + groß, "");
    if(gerateneZahl > ausgedachteZahl){
        alert("deine Zahl ist zu groß")
        groß = gerateneZahl + " ist zu groß! "
    } 
    if(gerateneZahl < ausgedachteZahl){
        alert("Deine Zahl ist zu klein")
        klein = gerateneZahl + " ist zu klein! "
    }
    anzahlDerVersuche = anzahlDerVersuche + 1
} while (gerateneZahl != ausgedachteZahl)

if(ausgedachteZahl = gerateneZahl){
    alert("Richtig geraten! Die Zahl ist " + ausgedachteZahl)
}

alert("Du hast " + anzahlDerVersuche + " Versuche Gebraucht!")
