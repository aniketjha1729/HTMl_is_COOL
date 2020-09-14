var preload = function(game){
	
}
 
preload.prototype = {
	preload: function()
	{ 
		
		var count = 72;

		this.game.load.audio('tick', '/static/assets/sounds/tick.mp3'); 
		this.game.load.audio('right', '/static/assets/sounds/right.mp3'); 
		this.game.load.audio('wrong', '/static/assets/sounds/wrong.mp3'); 

		this.game.load.image('bg', '/static/assets/bg.png?v='+randomnumber); 
		this.game.load.image('tick', '/static/assets/tick.png?v='+randomnumber); 
		this.game.load.image('logomain', '/static/assets/'+subdomainname+'.png'); 
		this.game.load.image('level', '/static/assets/level.png?v='+randomnumber); 
		this.game.load.image('redlogo', '/static/assets1/'+subdomainname+'.png'); 
		this.game.load.image('block', '/static/assets/block.png?v='+randomnumber); 
		this.game.load.image('square', '/static/assets/square.png?v='+randomnumber); 
		this.game.load.image('keyup', '/static/assets/keyup.png?v='+randomnumber); 
		this.game.load.image('keydown', '/static/assets/keydown.png?v='+randomnumber); 
		this.game.load.image('keyright', '/static/assets/keyright.png?v='+randomnumber); 
		this.game.load.image('keyleft', '/static/assets/keyleft.png?v='+randomnumber); 
		this.game.load.image('popup', '/static/assets/popup.png?v='+randomnumber); 
		this.game.load.image('resetbtn', '/static/assets/resetbtn.png?v='+randomnumber); 
		this.game.load.image('cancelbtn', '/static/assets/cancelbtn.png?v='+randomnumber); 

		this.game.load.image('dummy', '/static/assets/dummy.png?v='+randomnumber); 
		this.game.load.image('cross', '/static/assets/cross.png?v='+randomnumber); 
		this.game.load.atlas('leveltile', '/static/assets/leveltile.png','/static/assets/leveltile.json?v='+randomnumber); 
		

		this.game.load.image('title', '/static/assets/title.png?v='+randomnumber); 
		this.game.load.image('playBtn', '/static/assets/playBtn.png?v='+randomnumber); 
		this.game.load.image('pausetxt', '/static/assets/pausetxt.png?v='+randomnumber); 
		this.game.load.image('dummybg', '/static/assets/dummybg.png?v='+randomnumber); 
		this.game.load.image('back', '/static/assets/back.png?v='+randomnumber); 

		this.game.load.image('info', '/static/assets/ui/info.png?v='+randomnumber); 
		this.game.load.image('delete', '/static/assets/ui/delete.png?v='+randomnumber); 
		this.game.load.image('credit', '/static/assets/ui/credit.png?v='+randomnumber); 
		this.game.load.image('mute', '/static/assets/ui/mute.png?v='+randomnumber); 
		this.game.load.image('audio', '/static/assets/ui/sound.png?v='+randomnumber);  
		
		var totalLevel = 43;

		for(var i = 1 ; i <= totalLevel;i++){
			this.game.load.json('level'+i, '/static/lb_data_python_all/level'+i+'.json?v='+randomnumber); 
		}
		
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
