console.log("menu");
menuGame={
create:function() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
 game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    game.input.onDown.add(coreGame.gofull, game);

	bg=game.add.image(0,0,"anim");
	menutext=game.add.text(165,700,"Tap the button to start",{fill:'red'});
	keyboard=game.input.keyboard;
	
	buttonplay=game.add.button(215,500,'touch',coreGame.playna);
	buttonplay.inputEnabled = true;	
	music = game.add.audio('sound');
    music.play();
},
// update:function(){
// 	if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
// 		game.state.start("playGame");
// 	}		
// }
}