class ComputerBase {
    contructor(x, y, width, height) {
        var options = {
            isStatic : true
        };

        this.body = Bodies.rectangle(x, uy, width, height, options);
        this.width = width;
        this.height = hwight;
        this.image = loadImage("./asstes/base2.png");

        World.add(world.body);
    }
    
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    
        pop();
      }
    }