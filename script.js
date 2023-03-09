let canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
// let str = "! 崔 然 雄 #+ j+ $& @ hj c y w one * & 최 돼 지 0 1 ";
let str = "ア ァ カ ラ ワ ガ ザ ダ バ パ イ A B C H I J K L 0 1 최 돼 지 崔 然 雄"

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

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
    ctx.fillStyle = "#0F0";
    ctx.font = `${font}px monospace`;

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

function timeOut(){
    clearInterval(timer);
    ctx.clearRect(0,0,width, height);
    location.href="loading";
}