console.log("play");
playGame = {
create:function(){
      game.world.setBounds(-20, -20, game.width + 20, game.height + 20);
   game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.input.onDown.add(coreGame.gofull, game);
    music = game.add.audio('sound',1,true);
    music.loop=true;
    music.volume=0.3;
     music.play();
   coreGame.audioloop(490000);
    console.log("x");
   
    ouch = game.add.audio('ouch');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,"bg"); 
    //star= game.add.sprite(300,400,"star");
    player4 = game.add.sprite(280,650,"enemy2");
    player3 = game.add.sprite(490,450,"enemy1");
    player2 = game.add.sprite(50,250,"enemy");
    player = game.add.sprite(400,700,"naruto");
    player.anchor.setTo(0, 0);
    player.inputEnabled=true;
    //player.events.onInputDown.add(this.player,this);
    //game.camera.follow(this.player);
    //player1 = game.add.sprite(400,700,"naruto1");
    player2.animations.add('walk');
    player2.animations.play('walk',7,true);

    player3.animations.add('walk');
    player3.animations.play('walk',7,true);

    player4.animations.add('walk');
    player4.animations.play('walk',7,true);
    
    platform=game.add.sprite(0,780,'finish')
    border=game.add.sprite(-138,0,'border')
    border1=game.add.sprite(0,-138,'border1')
    x=game.add.sprite(50,120,'x')
    y=game.add.sprite(550,120,'y')


    btup=game.add.button(450,600,"btup",coreGame.taas);
    btup.inputEnabled = true;
    btdown=game.add.button(450,700,"btdown",coreGame.baba);
    btdown.inputEnabled = true;
    btleft=game.add.button(400,650,"btleft",coreGame.kaliwa);
    btleft.inputEnabled = true;
    btright=game.add.button(500,650,"btright",coreGame.kanan);
    btright.inputEnabled = true;
    btrestart=game.add.button(500,0,"restart",coreGame.ulit);
    btrestart.inputEnabled = true;
    btplay=game.add.button(400,0,"play",coreGame.tuloy);
    btplay.inputEnabled = true;
    game.restartMenu=game.add.group();
    game.restartMenu.visible=false;
    game.pauseMenu=game.add.group();
    game.pauseMenu.visible=false;   
    player.animations.add("right",[27,28,29,30,31,32,33,34,35],15,true);
    player.animations.add("left",[9,10,11,12,13,14,15,16,17],15,true);
    player.animations.add("up",[0,1,2,3,4,5,6,7,8],15,true);
    player.animations.add("down",[18,19,20,21,22,23,24,25,26],15,true);

    // player1.animations.add("right",[27,28,29,30,31,32,33,34,35],15,true);
    // player1.animations.add("left",[9,10,11,12,13,14,15,16,17],15,true);
    // player1.animations.add("up",[0,1,2,3,4,5,6,7,8],15,true);
    // player1.animations.add("down",[18,19,20,21,22,23,24,25,26],15,true);
    keyboard = game.input.keyboard.createCursorKeys();
    keyboard1=game.input.keyboard;

    game.physics.enable(player, Phaser.Physics.ARCADE);       
    player.body.allowRotation = false;

   

    game.physics.arcade.enable(player);
    //game.physics.arcade.enable(player1);
    game.physics.arcade.enable(player2);
    game.physics.arcade.enable(player3);
    game.physics.arcade.enable(player4);
    game.physics.arcade.enable(platform);
    game.physics.arcade.enable(border);
    game.physics.arcade.enable(border1);
    game.physics.arcade.enable(x);
    game.physics.arcade.enable(y);

    border.body.immovable = true;
    border1.body.immovable = true;
    x.body.immovable = true;
    y.body.immovable = true;

    player.body.collideWorldBounds = true;
    //player1.body.collideWorldBounds = true;
    player2.body.collideWorldBounds = true;
    player3.body.collideWorldBounds = true;
    player4.body.collideWorldBounds = true;
    player.scale.y = 1;
    player2.scale.y = 1;
    player3.scale.y = 1;
    player4.scale.y = 1;
   // game.physics.arcade.moveToXY(player2,50,250,100);
    tween=game.add.tween(player2).to({x:500},2000,Phaser.Easing.Default,true,200,2000,true);
    tween=game.add.tween(player3).to({x:50},2000,Phaser.Easing.Default,true,200,2000,true);
    tween=game.add.tween(player4).to({y:50},2000,Phaser.Easing.Default,true,200,2000,true);
scoreText=game.add.text(0,20,"SCORE: 0",{fill: "white"} );
gameText=game.add.text(270,400,"",{fill:"RED"});
//bestText=game.add.text(0,42,"BEST :"+getBest(),{fill: "white"} );

//tween= game.add.tween(player.body).to({x:this.mouseTargetX,y:this.mouseTargetY},duration,Phaser.Easing.Linear.None, true);
game.btnpause=game.add.button(450,0,"pause",pauseGame,game,0,0,0);
function pauseGame(){
game.paused=true;
}
game.input.onDown.add(unpause,game);
function unpause(){
if(game.paused){
if(btplay.getBounds().contains(game.input.x,game.input.y)){
game.paused=false;
game.pauseMenu.visible-true;
}
}
}
},
update:function(){
    //player.rotation = game.physics.arcade.moveToPointer(player, 60, game.input.activePointer, 500);       
    
    //tween= game.add.tween(player.body).to({x:this.mouseTargetX,y:this.mouseTargetY},duration,Phaser.Easing.Linear.None, true);
    game.physics.arcade.overlap(player,y,coreGame.out1);
    game.physics.arcade.overlap(player,x,coreGame.out);
    game.physics.arcade.collide(player,border1);
    game.physics.arcade.collide(player,border);
    game.physics.arcade.collide(player,platform,coreGame.kill);
    game.physics.arcade.overlap(player,player2,coreGame.killplayer);
    game.physics.arcade.overlap(player,player3,coreGame.killplayer);
    game.physics.arcade.overlap(player,player4,coreGame.killplayer);
    //  game.physics.arcade.collide(player1,platform,coreGame.kill);
    // game.physics.arcade.overlap(player1,player2,coreGame.killplayer1);
    // game.physics.arcade.overlap(player1,player3,coreGame.killplayer1);
    // game.physics.arcade.overlap(player1,player4,coreGame.killplayer1);

if(Math.round(player.body.position.y))
	player2.body.position.x=Math.round(player.body.position.x);
if(Math.round(player.body.position.y))
	player3.body.position.x=Math.round(player.body.position.x);
if(Math.round(player.body.position.x))
	player4.body.position.y=Math.round(player.body.position.y);

// if(Math.round(player1.body.position.y))
// 	player2.body.position.x=Math.round(player1.body.position.x);
// if(Math.round(player1.body.position.y))
// 	player3.body.position.x=Math.round(player1.body.position.x);
// if(Math.round(player1.body.position.x))
// 	player4.body.position.y=Math.round(player1.body.position.y);

   // if(keyboard.right.isDown){
   //      player.animations.play("right");
   //      player.body.velocity.x = 100;         
   //  }
   //  else if(keyboard1.isDown(Phaser.Keyboard.A)){
   //      player1.animations.play("left");
   //      player1.body.velocity.x = -100; 
   //  }       
   //   else if(keyboard.up.isDown ){
   //      player.animations.play("up");
   //      player.body.velocity.y = -100;
   //  }
   //  else if (keyboard1.isDown(Phaser.Keyboard.W)){
   //      player1.animations.play("up");
   //      player1.body.velocity.y = -100;
   //  }          
   //  else if (keyboard.left.isDown){
   //      player.animations.play("left");
   //      player.body.velocity.x = -100;        
   //  }
   //  else if (keyboard1.isDown(Phaser.Keyboard.D)){
   //      player1.animations.play("right");
   //      player1.body.velocity.x = 100;
   //  }              
   //  else if(keyboard.down.isDown  ){
   //      player.animations.play("down");
   //      player.body.velocity.y = 100;      
   //  }
   //  else if (keyboard1.isDown(Phaser.Keyboard.S)){
   //      player1.animations.play("down");
   //      player1.body.velocity.y = 100;  
   //  }
   //  else{
   //      player.animations.stop();
   //      player.body.velocity.y = 0;   
   //      player.body.velocity.x = 0; 
   //      player1.animations.stop();
   //      player1.body.velocity.y = 0;   
   //      player1.body.velocity.x = 0;   
   //          }  
            game.state.start("coreGame");         
},
moveCharacter:function(sprite,pointer,customTarget){
if (this.player.clickToMove || customTarget != null)
        {if(this.characterTween && this.characterTween.isRunning)
            {this.characterTween.stop();}
            if (customTarget == null)
            {this.character.targetX = pointer.worldX;}
            else {this.character.targetX = customTarget;}
            if(this.character.x<this.character.targetX)
            {this.character.scale.x = 1;}
            else{this.character.scale.x = -1;}
            var duration=(this.game.physics.arcade.distanceToXY(this.character,this.character.targetX,500)/this.defaultWalkingVelocity)*1000;
            this.character.animations.play('walk');
            this.characterTween=this.game.add.tween(this.character).to({x:this.character.targetX,y:500},duration,Phaser.Easing.Linear.None,true);
            this.characterTween.onComplete.add(function()
                {this.character.animations.play('walk')},this) 
    } 
}
}
