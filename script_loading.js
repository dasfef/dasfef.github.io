
type();
function type() {
    
    document.addEventListener('DOMContentLoaded', () => {
        new TypeIt("#simpleUsage", {
            strings: ["This is a simple string.", "where is my money?", "how can it possible?"],
            speed: 20,
            // breakLines: false,
            waitUntilVisible: false,
        }).go();
        // setTimeout(5000);
        // location.href="home";
    })
}
setTimeout(timer, 5000);
function timer() {
    location.href="home";
}

