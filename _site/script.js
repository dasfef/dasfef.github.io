let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = "! 崔 然 雄 #+ j+ $& @ hj c y w one * & 최 돼 지 0 1 ";
let matrix = str.split("");
let font = 12;
let col = width / font;
let arr = [];

for(let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0, width, height);
    ctx.fillStyle = "#0ac40a";
    ctx.font = `${font}px system-ui`;

    for(let i = 0; i < arr.length; i++){
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(txt, i * font, arr[i] * font);

        if(arr[i] * font > height && Math.random() > 0.975){
            arr[i] = 0;
        }
        arr[i]++;

    }
}

timer = setInterval(draw, 20);
setTime = setTimeout(timeOut, 5000);
// setTimeout(newCanvas, 5100);

function timeOut(){
    clearInterval(timer);
    ctx.clearRect(0,0,width, height);
    // newCanvas();
    
    location.href="loading";
    // type();
}

// function newCanvas(){
//     ctx.fillStyle = "black";
//     ctx.fillRect(0,0, width, height);
//     ctx.fillStyle = "#FFFFFF";
//     ctx.font = `${font}px system-ui`;
//     type();
// }

// function type() {
//     document.addEventListener('DOMContentLoaded', () => {
//         new TypeIt("#simpleUsage", {
//             strings: "This is a simple string.",
//             speed: 50,
//             waitUntilVisible: true,
//         }).go();
//     })
// }
// function type(){
//     context = ctx.fillText("아무거나 좀 해봐", 50, 50, 500);
//     document.addEventListener('DOMContentLoaded', () => {
//         new TypeIt(context, {
//         strings: "This is a simple string.",
//         speed: 50,
//         waitUntilVisible: true,
//       })).go();
//     }
// document.addEventListener('DOMContentLoaded', () => {
//     new TypeIt('#title')//
//         .pause(1000)
//         .go();
// });
