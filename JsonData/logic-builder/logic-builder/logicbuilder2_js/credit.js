var credit = function(game){

	}

	credit.prototype = {

  	create: function(){
		
		this.levelBtn = this.game.add.button(xPos(0.05), yPos(.05), 'level', this.levelBtnClick, this);

		var header = this.game.add.text(xPos(0.5) , 100, "Credits", { font: "50px Geometric415bt", fill: "#e83878",align: "center",wordWrap: true,wordWrapWidth:800 });
		header.anchor.set(0.5);
		this.startY =  150;
		this.addText()

		this.redlogo = this.game.add.sprite(xPos(0.05), yPos(.9),"redlogo");
		this.redlogo.anchor.set(0.5)
		this.game.world.setBounds(0, 0, 1920, 1080);
	},
	addText: function(){
		var arr = creditsArr;
		
		for(var i = 0; i < arr.length;i++){
			this.startY += 40;
			var header = this.game.add.text(xPos(0.5) , this.startY,arr[i].name, { font: "50px Geometric415bt", fill: "#94e2f8",align: "center" });
			header.anchor.set(0.5);
			var no = arr[i].pos.length;
			this.startY += 60;
			for(var k = 0; k < no;k++){
				var txt = this.game.add.text(xPos(0.5) , this.startY,arr[i].pos[k], { font: "35px Geometric415bt", fill: "#666666",align: "center" });
				txt.anchor.set(0.5);
				this.startY += 35;
			}
		}
    },
	levelBtnClick: function(){
        this.game.state.start("Level",true,false,1);
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