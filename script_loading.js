
type();
function type() {
    
    document.addEventListener('DOMContentLoaded', () => {
        new TypeIt("#simpleUsage", {
            strings: ["Welcome to dasfef's PAGE. I believe you got some presents for me...", "If you contact me, i have some accounts for SNS and you can check it from inside the page...", "I don't believe that you can read all of my words written by this blinking effects.",""],
            speed: 0.5,
            // breakLines: false,
            waitUntilVisible: false,
        }).go();
    })
}
setTimeout(timer, 5000);
function timer() {
    location.href="home";
}

