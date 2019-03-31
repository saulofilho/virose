class Blob {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        let angle = random(0, 2*PI);
        this.xspeed = random(-30, 15)*Math.cos(angle);
        this.yspeed = random(-30, 15)*Math.sin(angle);
        this.r = random(60, 200);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if(this.x > width || this.x < 0) this.xspeed *= -1;
        if(this.y > height || this.y < 0) this.yspeed *= -1;
    }

    show() {
        ellipse(this.x, this.y, this.r*1, this.r*1);
    }
}
