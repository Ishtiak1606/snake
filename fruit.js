function Fruit (){
    this.x;
    this.y;

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * row ) * scale );
        this.y = (Math.floor(Math.random() * column) * scale );
    }
    this.draw = function(){
        ctx.fillStyle = '#01c0ff';
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}