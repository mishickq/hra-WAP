class Player {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.v = 4;
        this.bv = 4;
    }

    draw(gtx){
        gtx.fillStyle = this.c;
        gtx.fillRect(this.x, this.y, this.w, this.h);
    }
    update(keys){
        if (keys["w"]){
            if(this.y - this.v > 0){
                this.y -= this.v;
            }
            
        }        
        if (keys["s"]){
            if(this.y + this.h + this.v < gameCanvas.height){
                this.y += this.v;
            }  
        }        
        if (keys["a"]){
            if(this.x - this.v > 0){
                this.x -= this.v;
            }
        }        
        if (keys["d"]){
            if(this.x + this.w + this.v < gameCanvas.width){
                this.x += this.v;
            }
        }    
        if (keys[" "]){
            this.v = 10;
        } 
        else{
            this.v = this.bv;
        }             
        if (keys["e"]){
            if(this.w > 3 || this.h > 3){
                this.w--;
                this.h--;
            }
        
    } 
        if (keys["r"]){
            if(this.w < 100 || this.h < 100){
        this.w++;
        this.h++;
    } 
}
}
}

const myPlayer = new Player(10, 10, 50, 50, "pink");
const gameCanvas = document.getElementById("gameCanvas");
const gtx = gameCanvas.getContext("2d");

const resizeCanvas = () => {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let keys = {};

window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);



const gameLoop = () => {
    gtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    myPlayer.update(keys);
    myPlayer.draw(gtx);
    gtx.fillStyle = test.c;
    gtx.fillRect(test.x, test.y, test.w, test.h);
    requestAnimationFrame(gameLoop);
    checkCollision(myPlayer, test);
}

requestAnimationFrame(gameLoop);

let test = {
    x: 100,
    y: 200,
    w: 100,
    h: 100,
    c: "dark pink",
}

const checkCollision = (object1, object2) => {
if(object1.x + object1.w > object2.x && object1.x < object2.x + object2.w && object1.y + object1.h > object2.y && object1.y < object2.y + object2.h){
    console.log("nastala kolize");
    object2.c = "green";
    object1.v = 0;

}
}