var menu = function(game){

	}

menu.prototype = {

  	create: function(){
		
			this.isGameStarted = false;
			this.game.add.sprite(0, 0, "bg");
			

			
			this.titleSpeed = 0;
			this.logo = this.game.add.sprite(this.game.world.centerX, this.game.height * 0.2, "logomain");
			this.logo.anchor.set(0.5);

			this.title = this.game.add.sprite(this.game.world.centerX, this.game.height * 0.45, "title");
			this.title.anchor.set(0.5);
			this.game.stage.backgroundColor = '#57c7c8';

			this.playBtns = this.game.add.button(this.title.x , this.title.y + this.title.height*1.5, 'playBtn', this.playBtnCLick, this);
			align("c", this.playBtns);

			var leveldata = this.game.cache.getJSON('ainfo');
			var txt = this.game.add.text(this.game.width/2 , this.game.height * 0.9, leveldata.Hint, { font: 60+"px Geometric415bt", fill: leveldata.HintColor,align: "center",wordWrap: true,wordWrapWidth:1500 });
			txt.anchor.set(0.5);



		   
	},
	update:function()
	{
		
	},
	insPlayBtnCLick:function()
	{
		this.playTickSound();
		if(this.isGameStarted)
		{

			this.game.state.start("Level",true,false,1);
		}
		else
		{
			this.instructionGrp.visible = false;
		}
	},
	helpBtnCLick:function()
	{
		this.playTickSound();
        this.instructionGrp.visible = true;
        this.game.world.bringToTop(this.instructionGrp);
        this.game.world.bringToTop(this.audioBtn);
        this.game.world.bringToTop(this.muteBtn);
		
	},
	playBtnCLick:function()
	{
		this.isGameStarted = true;
		//this.playTickSound();
		/* this.instructionGrp.visible = true;
		this.game.world.bringToTop(this.instructionGrp);
		this.game.world.bringToTop(this.audioBtn);
		this.game.world.bringToTop(this.muteBtn); */


		this.game.state.start("Level", true, false, 1);
	},
	playTickSound: function (params) {

		var music = this.game.add.audio('tick');
		music.play();
	},
	muteBtnClick: function (params) {

		if (this.muteBtn.visible) {
			this.muteBtn.visible = false;
			this.audioBtn.visible = true;
			localStorage.setItem("audio", "on");
			this.game.sound.mute = false;
		}
		else {
			this.muteBtn.visible = true;
			this.audioBtn.visible = false;
			localStorage.setItem("audio", "off");
			this.game.sound.mute = true;
		}
	}	
}