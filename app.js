/* Creates DOMContentLoaded Event Handler */
document.addEventListener("DOMContentLoaded", function(event) {
    /* Should log: Success, DOM fully loaded and parsed! */
    console.log("%cSuccess,%c DOM fully loaded and parsed!", "font-size: 12px; font-weight: 900; color: #28a745;", "font-size: 12px; font-weight: 500; color: #28a745;"); 

    /* Should log: Start of app.js file! */
    console.log("%cStart%c of app.js file!", "font-size: 12px; font-weight: 900; color: #007bff;", "font-size: 12px; font-weight: 500; color: #007bff;"); 

    /* Defines Global Variables */
    let number = Math.floor(Math.random() * (11 - 1) + 1);
    console.log(`%cThe random number is %c${number}.`, "font-size: 12px; font-weight: 500; color: #6c757d;", "font-size: 12px; font-weight: 900; color: #6c757d;");
    
    /* Creates print() Function */
    function print(message) {
        console.log(`%c${message}`, "font-size: 12px; font-weight: 900; color: #343a40;");
        return number;
    };

    /* Creates multiply() Function */
    function multiply() {
        console.log(`%c${number} %cmultiplied by %c4%c is %c${number * 4}.`, "font-size: 12px; font-weight: 900; color: #6c757d;", "font-size: 12px; font-weight: 500; color: #6c757d;", "font-size: 12px; font-weight: 900; color: #6c757d;", "font-size: 12px; font-weight: 500; color: #6c757d;", "font-size: 12px; font-weight: 900; color: #6c757d;");
    }

    /* Calls multiply() Function after 2 seconds via setTimeout()Function */
    setTimeout(multiply, 2000);

    /* Creates getWords() Function */
    function getWords(word1, word2, word3, word4) {
        console.log(`%c1st Word: %c${word1}`, "font-size: 12px; font-weight: 900; color: #343a40;", "font-size: 12px; font-weight: 500; color: #343a40;");
        setTimeout(function() {
            console.log(`%c2nd Word: %c${word2}`, "font-size: 12px; font-weight: 900; color: #343a40;", "font-size: 12px; font-weight: 500; color: #343a40;");
        }, 3000);
        setTimeout(function() {
            console.log(`%c3rd Word: %c${word3}`, "font-size: 12px; font-weight: 900; color: #343a40;", "font-size: 12px; font-weight: 500; color: #343a40;");
        }, 2000);
        setTimeout(function() {
            console.log(`%c4th Word: %c${word4}`, "font-size: 12px; font-weight: 900; color: #343a40;", "font-size: 12px; font-weight: 500; color: #343a40;");
        }, 1000);
    };

    /* Calls getWords() Function */
    /* Should log: 1st Word: Hello */
    /* Should log: 4th Word: Adiós */
    /* Should log: 3rd Word: Hola */
    /* Should log: 2nd Word: Goodbye */
    getWords("Hello", "Goodbye", "Hola", "Adiós");

    /* Should log: End of app.js file! */
    console.log("%cEnd%c of app.js file!", "font-size: 12px; font-weight: 900; color: #007bff;", "font-size: 12px; font-weight: 500; color: #007bff;"); 
});