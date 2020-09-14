var preload = function(game){
	
}
 
preload.prototype = {
	preload: function()
	{ 
		
		var count = 70;
		randomnumber  = 102
		this.game.load.audio('tick', 'logicbuilder2_static/assets/sounds/tick.mp3'); 
		this.game.load.audio('right', 'logicbuilder2_static/assets/sounds/right.mp3'); 
		this.game.load.audio('wrong', 'logicbuilder2_static/assets/sounds/wrong.mp3'); 

		this.game.load.image('bg', 'logicbuilder2_static/assets/bg.png?v='+randomnumber); 
		this.game.load.image('tick', 'logicbuilder2_static/assets/tick.png?v='+randomnumber); 
		this.game.load.image('logomain', 'logicbuilder2_static/assets/logo.png'); 
		this.game.load.image('level', 'logicbuilder2_static/assets/level.png?v='+randomnumber); 
		this.game.load.image('redlogo', 'logicbuilder2_static/assets/redlogo.png'); 
		this.game.load.image('block', 'logicbuilder2_static/assets/block.png?v='+randomnumber); 
		this.game.load.image('stroke', 'logicbuilder2_static/assets/stroke.png?v='+randomnumber); 
		this.game.load.image('square', 'logicbuilder2_static/assets/square.png?v='+randomnumber); 
		this.game.load.image('keyup', 'logicbuilder2_static/assets/keyup.png?v='+randomnumber); 
		this.game.load.image('keydown', 'logicbuilder2_static/assets/keydown.png?v='+randomnumber); 
		this.game.load.image('keyright', 'logicbuilder2_static/assets/keyright.png?v='+randomnumber); 
		this.game.load.image('keyleft', 'logicbuilder2_static/assets/keyleft.png?v='+randomnumber); 
		this.game.load.image('popup', 'logicbuilder2_static/assets/popup.png?v='+randomnumber); 
		this.game.load.image('resetbtn', 'logicbuilder2_static/assets/resetbtn.png?v='+randomnumber); 
		this.game.load.image('cancelbtn', 'logicbuilder2_static/assets/cancelbtn.png?v='+randomnumber); 

		this.game.load.image('dummy', 'logicbuilder2_static/assets/dummy.png?v='+randomnumber); 
		this.game.load.image('cross', 'logicbuilder2_static/assets/cross.png?v='+randomnumber); 
		this.game.load.atlas('leveltile', 'logicbuilder2_static/assets/leveltile.png','logicbuilder2_static/assets/leveltile.json?v='+randomnumber); 
		

		this.game.load.image('title', 'logicbuilder2_static/assets/title.png?v='+randomnumber); 
		this.game.load.image('playBtn', 'logicbuilder2_static/assets/playBtn.png?v='+randomnumber); 
		this.game.load.image('pausetxt', 'logicbuilder2_static/assets/pausetxt.png?v='+randomnumber); 
		this.game.load.image('dummybg', 'logicbuilder2_static/assets/dummybg.png?v='+randomnumber); 
		this.game.load.image('back', 'logicbuilder2_static/assets/back.png?v='+randomnumber); 
		this.game.load.image('skip', 'logicbuilder2_static/assets/skip.png?v='+randomnumber); 
		this.game.load.image('jump', 'logicbuilder2_static/assets/jump.png?v='+randomnumber); 

		this.game.load.image('info', 'logicbuilder2_static/assets/ui/info.png?v='+randomnumber); 
		this.game.load.image('delete', 'logicbuilder2_static/assets/ui/delete.png?v='+randomnumber); 
		this.game.load.image('credit', 'logicbuilder2_static/assets/ui/credit.png?v='+randomnumber); 
		this.game.load.image('mute', 'logicbuilder2_static/assets/ui/mute.png?v='+randomnumber); 
		this.game.load.image('audio', 'logicbuilder2_static/assets/ui/sound.png?v='+randomnumber);  
		
		var totalLevel = 24;

		for(var i = 1 ; i <= totalLevel;i++){
			this.game.load.json('level'+i, 'logicbuilder2_static/lb_data_python_if/level'+i+'.json?v='+randomnumber); 
		}		
		this.game.load.json('ainfo', 'logicbuilder2_static/lb_data_python_if/ainfo.json?v='+randomnumber); 

		var logo = this.game.add.sprite(this.game.width/2, this.game.height * 0.35,"logo");
		logo.anchor.set(0.5)
		var loadingBarBg = this.add.sprite(this.game.width * 0.365 , this.game.height * 0.425, "preloaderBarBg");
		loadingBarBg.anchor.setTo(0, 0.5);
		var loadingBar = this.add.sprite(this.game.width * 0.365 , this.game.height * 0.425, "preloaderBar");
		loadingBar.anchor.setTo(0, 0.5);
		this.load.setPreloadSprite(loadingBar);

	},
  	create: function(){
		if(localStorage.getItem("score") == undefined)
			localStorage.setItem("score",0);

		if (localStorage.getItem("audio") == undefined)
			localStorage.setItem("audio", "on");


			this.game.state.start("Menu");
			//this.game.state.start("GameOver", true, false, 1000);
	}
}
