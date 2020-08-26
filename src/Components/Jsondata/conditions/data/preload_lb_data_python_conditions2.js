var preload = function(game){
	
}
 
preload.prototype = {
	preload: function()
	{ 
		
		var count = 70;
		randomnumber  = 118;
		this.game.load.audio('tick', '/static/logicbuilder2_static/assets/sounds/tick.mp3'); 
		this.game.load.audio('right', '/static/logicbuilder2_static/assets/sounds/right.mp3'); 
		this.game.load.audio('wrong', '/static/logicbuilder2_static/assets/sounds/wrong.mp3'); 

		this.game.load.image('bg', '/static/logicbuilder2_static/assets/bg.png?v='+randomnumber); 
		this.game.load.image('tick', '/static/logicbuilder2_static/assets/tick.png?v='+randomnumber); 
		this.game.load.image('logomain', '/static/logicbuilder2_static/assets/logo.png'); 
		this.game.load.image('level', '/static/logicbuilder2_static/assets/level.png?v='+randomnumber); 
		this.game.load.image('redlogo', '/static/logicbuilder2_static/assets/redlogo.png'); 
		this.game.load.image('block', '/static/logicbuilder2_static/assets/block.png?v='+randomnumber); 
		this.game.load.image('stroke', '/static/logicbuilder2_static/assets/stroke.png?v='+randomnumber); 
		this.game.load.image('square', '/static/logicbuilder2_static/assets/square.png?v='+randomnumber); 
		this.game.load.image('keyup', '/static/logicbuilder2_static/assets/keyup.png?v='+randomnumber); 
		this.game.load.image('keydown', '/static/logicbuilder2_static/assets/keydown.png?v='+randomnumber); 
		this.game.load.image('keyright', '/static/logicbuilder2_static/assets/keyright.png?v='+randomnumber); 
		this.game.load.image('keyleft', '/static/logicbuilder2_static/assets/keyleft.png?v='+randomnumber); 
		this.game.load.image('popup', '/static/logicbuilder2_static/assets/popup.png?v='+randomnumber); 
		this.game.load.image('resetbtn', '/static/logicbuilder2_static/assets/resetbtn.png?v='+randomnumber); 
		this.game.load.image('cancelbtn', '/static/logicbuilder2_static/assets/cancelbtn.png?v='+randomnumber); 

		this.game.load.image('dummy', '/static/logicbuilder2_static/assets/dummy.png?v='+randomnumber); 
		this.game.load.image('cross', '/static/logicbuilder2_static/assets/cross.png?v='+randomnumber); 
		this.game.load.atlas('leveltile', '/static/logicbuilder2_static/assets/leveltile.png','/static/logicbuilder2_static/assets/leveltile.json?v='+randomnumber); 
		

		this.game.load.image('title', '/static/logicbuilder2_static/assets/title.png?v='+randomnumber); 
		this.game.load.image('playBtn', '/static/logicbuilder2_static/assets/playBtn.png?v='+randomnumber); 
		this.game.load.image('pausetxt', '/static/logicbuilder2_static/assets/pausetxt.png?v='+randomnumber); 
		this.game.load.image('dummybg', '/static/logicbuilder2_static/assets/dummybg.png?v='+randomnumber); 
		this.game.load.image('back', '/static/logicbuilder2_static/assets/back.png?v='+randomnumber); 
		this.game.load.image('skip', '/static/logicbuilder2_static/assets/skip.png?v='+randomnumber); 
		this.game.load.image('jump', '/static/logicbuilder2_static/assets/jump.png?v='+randomnumber); 

		this.game.load.image('info', '/static/logicbuilder2_static/assets/ui/info.png?v='+randomnumber); 
		this.game.load.image('delete', '/static/logicbuilder2_static/assets/ui/delete.png?v='+randomnumber); 
		this.game.load.image('credit', '/static/logicbuilder2_static/assets/ui/credit.png?v='+randomnumber); 
		this.game.load.image('mute', '/static/logicbuilder2_static/assets/ui/mute.png?v='+randomnumber); 
		this.game.load.image('audio', '/static/logicbuilder2_static/assets/ui/sound.png?v='+randomnumber);  

        var totalLevel = 3; 

        for(var i = 1 ; i <= totalLevel;i++){
            this.game.load.json('level'+i, '/static/lb_data_python_conditions2/level'+i+'.json?v='+randomnumber); 
        }

		this.game.load.json('ainfo', '/static/lb_data_python_conditions2/ainfo.json?v='+randomnumber); 

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
