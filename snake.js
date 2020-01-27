function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.alive = true;

    this.draw = function(){
        if(this.alive){

            ctx.fillStyle = '#fff';
            for (let i = 0; i < this.tail.length; i++) {
                
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }
            ctx.fillRect(this.x, this.y, scale, scale);
        }else alert('game over');
        return;
    }
    this.update = function(){
        

        if (this.x > canvas.width){
            // console.log('Game Over');
            this.alive = false;
            this.xSpeed = 0;
            return ;
        }
        else if (this.x < 0){
            // console.log('Game Over');
            this.alive = false;
            this.xSpeed = 0;
            return ;
        }
        else if (this.y < 0){
            // console.log('Game Over');
            this.alive = false;
            this.ySpeed = 0;
            return ;
        }
        else if (this.y > canvas.height){
            // console.log('Game Over');
            this.alive = false;
            this.ySpeed = 0;
            return ;
        }
        else {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i+1];  
            }
            this.tail[this.total - 1] = {x: this.x, y: this.y}
    
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }
        // if (this.x < 0){
        //     console.log('Game Over');
        //     break;
        // }
        // if (this.y > canvas.height){
        //     console.log('Game Over');
        //     break;
        // }
        // if (this.y < 0){
        //     console.log('Game Over');
        //     break;
        // }
    }
    this.changeDirection = function (direction){
        switch(direction){
            case "Up" :
                if(snake.ySpeed === 0){
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
                }
                break;
            case "Down" :
                if(snake.ySpeed === 0){
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
                }
                break;
            case "Right" :
                if(snake.xSpeed === 0){
                this.ySpeed = 0;
                this.xSpeed = scale * 1;
                break;
                }
                break;
            case "Left" :
                if(snake.xSpeed === 0){
                this.ySpeed = 0;
                this.xSpeed = -scale * 1;
                break;
                }
            if(undefined) break;
        }
    }
    this.eat = function(fruit){
        if(this.x === fruit.x && this.y === fruit.y){
            this.total ++;
            score.innerHTML = this.total;
            return true;
        }
        else false;
    }
}
