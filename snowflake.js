function getRandomSize(){

let r = pow(random(0.01, 1), 100);
return constrain(r * 32, 2, 36);

}



class Snowflake {

constructor(sx, sy, img){
let x = sx || random(width);
let y = sy || random(-100, -10);

this.pos = createVector(x,y);
this.vel = createVector(0,0);
this.acc = createVector();
this.r = getRandomSize();

}

applyForce(force){
  
  let f = force.copy();
f.mult(this.r);
 

    this.acc.add(f);
}

randomize(){
  
        let x = random(width);
        let y = random(-100, -10);
        
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector();
        this.r = getRandomSize();
}

update(){

    
this.vel.add(this.acc);
this.vel.limit(this.r * 0.2);
if (this.vel.mag() < 1){
    this.vel.normalize();
}


this.pos.add(this.vel);
this.acc.mult(0);

if(this.pos.y > height+this.r){
   this.randomize(); 
}
}

render(){
stroke(225);
strokeWeight(this.r);
point(this.pos.x, this.pos.y);

}













}