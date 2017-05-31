
console.log("core");
coreGame={
  gofull:function() {
  game.scale.startFullScreen(false);
},
    taas:function(){
    if(btup){
    player.animations.play("up");
    player.body.velocity.y = -100;
    }  
    else{player.animations.stop();
        player.body.velocity.y = 0;   
        player.body.velocity.x = 0;
            } 
    },
     baba:function(){
            if(btdown){
                player.animations.play("down");
                    player.body.velocity.y = 100;
                  }  
                  else{player.animations.stop();
        player.body.velocity.y = 0;   
        player.body.velocity.x = 0;
            } 
    },
     kaliwa:function(){
            if(btleft){
                player.animations.play("left");
                    player.body.velocity.x = -100;
                  }  
                  else{ player.animations.stop();
        player.body.velocity.y = 0;   
        player.body.velocity.x = 0;  
            } 
    },
     kanan:function(){
            if(btright){
                player.animations.play("right");
                    player.body.velocity.x = 100;
                  }  
                  else{ player.animations.stop();
        player.body.velocity.y = 0;   
        player.body.velocity.x = 0;    
            } 
    },

kill:function(player,platform){
          score = score + 10;
  scoreText.text = "SCORE: "+score;
 if (platform.kill()) {
    gameText.text="YEHEY!";
      // game.state.start('playgame','basicGame',true);
   }   
        },
        killplayer:function(player,player2,player3,player4){
 if (player.kill()) {
    gameText.text="HULI KA!";
    ouch.play();
      // game.state.start('playgame','basicGame',true);
   }   
        },
        out:function(player,x){
 if (x.kill()) {
    gameText.text="Out!";
      // game.state.start('playgame','basicGame',true);
   }  
        },
           out1:function(player,y){
 if (y.kill()) {
    gameText.text="Out!";

      // game.state.start('playgame','basicGame',true);
   }  
        },
         killplayer1:function(player1,player2,player3,player4){
 if (player1.kill()) {
    gameText.text="HULI KA!";
    ouch.play();
      // game.state.start('playgame','basicGame',true);
   }   
        },
        tuloy:function(){
  if (game.paused==true) {
    game.paused=false
  }
else if(game.paused==false){
  game.paused=true;
}
},

unpause:function(){
            if(game.paused){
                if(btplay.getBounds().contains(game.input.x,game.input.y)){
            game.paused=false;
            game.pauseMenu.visible-true;
        }
    }
},
        ulit:function(){
          music.stop();
game.state.start("playGame");
        },
        playna:function(){music.stop();
          if(buttonplay)
             
game.state.start("playGame");
        },
     saveBest:function(value){
localStorage.setItem('gameStorage',value);
},
getBest:function(){
  return ((localStorage.getItem('gameStorage') == null)|| 
    (localStorage.getItem('gameStorage')==""))
  ?0:localStorage.getItem('gameStorage');
},
 audioloop:function(time){
         	setInterval(function(){
         		 music.play();
         		 console.log("x");
         	},time); 
        }
	}
    
 