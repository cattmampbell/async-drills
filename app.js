// Should log: Start of app.js file! 
// console.log(
//     "%cStart%c of app.js file!", 
//     "font-size: 12px; font-weight: 900; color: #007bff;", 
//     "font-size: 12px; font-weight: 500; color: #007bff;"
// )

// Creates DOMContentLoaded event handler
document.addEventListener("DOMContentLoaded", (event) => {
    console.log(
        "%cSuccess,%c DOM fully loaded and parsed!", 
        "font-size: 12px; font-weight: 900; color: #28a745;", 
        "font-size: 12px; font-weight: 500; color: #28a745;"
    )

    // Defines global variables
    let number = Math.floor(Math.random() * (11 - 1) + 1);
    const boolean = true;
    
    // Creates print() function 
    // Accepts an argument named 'message' 
    const print = (message) => {
        console.log(
            `%c${message}`, 
            "font-size: 12px; font-weight: 900; color: #007bff;"
        )
        return console.log(
            `%cThe random number is %c${number}.`, 
            "font-size: 12px; font-weight: 500; color: #6c757d;", 
            "font-size: 12px; font-weight: 900; color: #6c757d;"
        )
    }

    // Calls print() function
    print("Hello World!");

    // Creates multiply() function
    const multiply = () => {
        let multiplyNumber = number * 4;
        console.log(
            `%c${number} %cmultiplied by %c4%c is %c${multiplyNumber}`, 
            "font-size: 12px; font-weight: 900; color: #6c757d;", 
            "font-size: 12px; font-weight: 500; color: #6c757d;", 
            "font-size: 12px; font-weight: 900; color: #6c757d;", 
            "font-size: 12px; font-weight: 500; color: #6c757d;", 
            "font-size: 12px; font-weight: 900; color: #6c757d;"
        )
        console.log(
            "   %cDelay:%c 2%c seconds",
            "font-size: 10px; font-weight: 500; color: #6c757d;; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #6c757d;",
            "font-size: 10px; font-weight: 500; color: #6c757d;"
        )
    }

    // Calls multiply() function after waiting 2 seconds via setTimeout() function 
    setTimeout(multiply, 2000);

    // Creates getWords() function 
    // Accepts 4 arguments called 'word1', 'word2', 'word3' and 'word4'
    const getWords = (word1, word2, word3, word4) => {
        // Logs word1 to the console immediately 
        console.log(
            `%c1st Word: %c${word1}`, 
            "font-size: 12px; font-weight: 900; color: #343a40;", 
            "font-size: 12px; font-weight: 500; color: #343a40;"
        )
        console.log(
            "   %cDelay:%c 0%c seconds",
            "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
            "font-size: 10px; font-weight: 900; color: #343a40;",
            "font-size: 10px; font-weight: 500; color: #343a40;"
        )
        // Logs word2 to the console after waiting 3 seconds via setTimeout() function 
        setTimeout(() => {
            console.log(
                `%c2nd Word: %c${word2}`, 
                "font-size: 12px; font-weight: 900; color: #343a40;", 
                "font-size: 12px; font-weight: 500; color: #343a40;"
            )
            console.log(
                "   %cDelay:%c 3%c seconds",
                "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                "font-size: 10px; font-weight: 900; color: #343a40;",
                "font-size: 10px; font-weight: 500; color: #343a40;"
            )
        }, 3000)
        // Logs word3 to the console after waiting 2 seconds via setTimeout() function 
        setTimeout(() => {
            console.log(
                `%c3rd Word: %c${word3}`, 
                "font-size: 12px; font-weight: 900; color: #343a40;", 
                "font-size: 12px; font-weight: 500; color: #343a40;"
            )
            console.log(
                "   %cDelay:%c 2%c seconds",
                "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                "font-size: 10px; font-weight: 900; color: #343a40;",
                "font-size: 10px; font-weight: 500; color: #343a40;"
            )
        }, 2000)
        // Logs word1 to the console after waiting 1 second via setTimeout() function 
        setTimeout(() => {
            console.log(
                `%c4th Word: %c${word4}`, 
                "font-size: 12px; font-weight: 900; color: #343a40;", 
                "font-size: 12px; font-weight: 500; color: #343a40;"
            )
            console.log(
                "   %cDelay:%c 1%c second",
                "font-size: 10px; font-weight: 500; color: #343a40; text-decoration: underline;",
                "font-size: 10px; font-weight: 900; color: #343a40;",
                "font-size: 10px; font-weight: 500; color: #343a40;"
            )
        }, 1000)
    }

    // Calls getWords() Function 
    // Should log: 
    // 1st Word: Hello 
    // 4th Word: Adiós 
    // 3rd Word: Hola 
    // 2nd Word: Goodbye 
    getWords("Hello", "Goodbye", "Hola", "Adiós");

    // Creates done() Function 
    // Accepts Argument called 'message' 
    const done = (message) => {
        console.log(
            `%c${message}`, 
            "font-size: 14px; font-weight: 900; color: #28a745;"
        )
    }

    // Creates countdown() Function 
    // Accepts Arguments called 'start' and 'callback' 
    const countdown = (start, callback) => {
        console.log(
            `%cCountdown%c: %c${start}%c seconds`, 
            "font-size: 12px; font-weight: 700; color: #343a40; text-decoration: underline;",
            "font-size: 12px; font-weight: 600; color: #343a40;", 
            "font-size: 12px; font-weight: 700; color: #dc3545;",
            "font-size: 12px; font-weight: 500; color: #dc3545;"
        )
        start -= 1;
        let timer = setInterval(() => {
            if(start > 1) {
                console.log(
                    `%cCountdown%c: %c${start}%c seconds`, 
                    "font-size: 12px; font-weight: 700; color: #343a40; text-decoration: underline;",
                    "font-size: 12px; font-weight: 600; color: #343a40;", 
                    "font-size: 12px; font-weight: 700; color: #dc3545;",
                    "font-size: 12px; font-weight: 500; color: #dc3545;"
                )
                start -= 1;
            } else if(start === 1) {
                console.log(
                    `%cCountdown%c: %c${start}%c second`, 
                    "font-size: 12px; font-weight: 700; color: #343a40; text-decoration: underline;",
                    "font-size: 12px; font-weight: 600; color: #343a40;", 
                    "font-size: 12px; font-weight: 700; color: #dc3545;",
                    "font-size: 12px; font-weight: 500; color: #dc3545;"
                )
                start -= 1;
            } else if(start === 0) {
                callback("Done!");
                clearInterval(timer);
            }
        }, 1000)
    }

    countdown(10, done);
});

// Should log: End of app.js file! 
// console.log(
//     "%cEnd%c of app.js file!", 
//     "font-size: 12px; font-weight: 900; color: #007bff;", 
//     "font-size: 12px; font-weight: 500; color: #007bff;"
// )