class Man {
    constructor() {
        this.hx = 200;
        this.hy = 100;
        this.lx = 200;
        this.ly = 120;
        this.lw = 200;
        this.lh = 250;
    }

    create() {
        //head
        if(tries<1) {
          fill("red");
        }
        else {
          fill("black")
        }
        ellipse(this.hx,this.hy,50);
        //arm1
        if(tries<2) {
          stroke("red");
        }
        else {
          stroke("black");
        }
        strokeWeight(3);
        line(this.lx,this.ly+25,150,this.ly+60);
        //arm2
        if(tries<3) {
          stroke("red");
        }
        else {
          stroke("black");
        }
        strokeWeight(3);
        line(this.lx,this.ly+25,250,this.ly+60);
        //backbone
        if(tries<4) {
          stroke("red");
        }
        else {
          stroke("black");
        }
        line(this.lx,this.ly+5,this.lw,this.lh);
        //leg1
        if(tries<5) {
          stroke("red");
        }
        else {
          stroke("black");
        }
        line(this.lx,this.ly+130,150,this.ly+180);
        //leg2
        if(tries<6) {
          stroke("red");
        }
        else {
          stroke("black");
        }
        line(this.lx,this.ly+130,250,this.ly+180);
        //hanger
        stroke("black");
        line(50,350,150,350);
        line(100,350,100,50);
        line(100,50,this.hx,50);
        line(this.hx,50,this.hx,75);
    }

    display() {
        this.create();
    }
}
