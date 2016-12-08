
//Heya there

var C = {
  "game": {
    "width":320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed": 10,
    "file": "assets/glados.png"
},
"p": {
  "file": "assets/Propulsion.jpg",
  "width": 46,
  "height": 64,
  "frames": 1 ,
  "startx": 160,
  "starty": 500
     } 
}


class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}

class Load {
  preload() {
    console.log("ACTIVATING TESTING PROCEDURE");
    this.load.image("bg",C.bg.file)
    this.load.image("p",C.p.file)
    //this.load.spritesheet("",C.p.file,C.p.width,C.p.height,C.p.frames)
  }
  create() {
    console.log("ACTIVATED");
    this.state.start("Play")
  }
}
 class Play {
  create() {
    console.log("MOTION IN TESTING AREA 01");
    this.bg = this.add.sprite(0,0,"bg");
    this.bg.width = game.world.width
    this.bg.height = game.world.height
    this.bg.smoothed = false

  
    this.player = this.add.sprite(C.p.startx,C.p.starty,"p");
    this.player.anchor.set(0.5, 0.5);
    this.player.smoothed = true;
    this.player.scale.set(1);
    //this.player.animations.add("anim");
    //this.player.animations.play("anim",C.p.fps,true);
  }
}


function restart() {
  game.state.start("Boot");
}
var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",Boot);
game.state.add("Load", Load);
game.state.add("Play",Play);
game.state.start("Boot");
