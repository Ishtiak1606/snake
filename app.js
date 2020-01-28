let canvas = document.querySelector('.canvas');
let ctx = canvas.getContext('2d');
let scale = 10;
let row = canvas.height / scale;
let column = canvas.width / scale;
let snake; 
let level;
let btn = document.querySelector('.btn-play');
let score = document.getElementById('score');

btn.addEventListener('click', ()=>{
    level = document.getElementById('level').value;
    play();
})
function play(){
    fruit = new Fruit();
    fruit.pickLocation();
    snake = new Snake();
    snake.draw();
    let interval = level;
    window.setInterval(( ()=>{
        if(snake.alive){
            ctx.clearRect(0,0, canvas.width, canvas.height);
            fruit.draw();
            snake.update();
            snake.draw();

            if(snake.eat(fruit)){
                fruit.pickLocation();
            }
        }else return;
        }
    ), interval);
};


window.addEventListener('keydown', ((evt)=>{
    let direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
let up, down, left, right;
up = document.querySelector('.up'); 
down = document.querySelector('.down'); 
left = document.querySelector('.left'); 
right = document.querySelector('.right'); 
up.addEventListener('click', ()=>{
    if(snake.ySpeed === 0){
    snake.xSpeed = 0;
    snake.ySpeed = -scale * 1;
    }
})
down.addEventListener('click', ()=>{
    if(snake.ySpeed === 0){
    snake.xSpeed = 0;
    snake.ySpeed = scale * 1;
    }
})
left.addEventListener('click', ()=>{
    if(snake.xSpeed === 0){
        snake.ySpeed = 0;
        snake.xSpeed = -scale * 1;
    }
})
right.addEventListener('click', function(){
    if(snake.xSpeed === 0){
        snake.ySpeed = 0;
        snake.xSpeed = scale * 1;
    }
})
// window.addEventListener('load', play);
