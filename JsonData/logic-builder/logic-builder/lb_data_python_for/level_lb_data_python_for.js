var level = function(game){

	}

level.prototype = {

  	create: function(){
		

		this.game.stage.backgroundColor = '#f1f1f1';
		document.body.style.backgroundColor = "#f1f1f1";

		var startX = 450;
		var startY = this.game.height  * 0.1
		this.sprArr = [];
		var count = 0;
		var rowCount = 0;
		var diff = 151;
		var side = false;
		for(var j = 0 ; j < 5 ; j ++){
			startX = 450;
			rowCount++;
		for(var i = 0 ; i < 7;i++){
			
			if(rowCount%2 == 0 && i < 6){
				
				if(j == 3 || j == 7 || j == 11 || j == 15 || j == 19){

					
				}
				else
				startX += this.sprArr[0].width * 1.3;

			}else{

				if((j == 2 )&& i == 0)
				{
					diff = - 151;
					startX = 1627.7999999999997;
				}else if(j == 4 && i == 0){
					diff =  151;
					startX = 450;
				}else if(j == 6 && i == 0){
					diff = - 151;
					startX = 1627.7999999999997;
				}else if(j == 8 && i == 0){
					diff =  151;
					startX = 450;
				}else if(j == 10 && i == 0){
					diff = - 151;
					startX = 1627.7999999999997;
				}else if(j == 12 && i == 0){
					diff =  151;
					startX = 450;
				}else if(j == 14 && i == 0){
					diff = - 151;
					startX = 1627.7999999999997;
				}else if(j == 16 && i == 0){
					diff =  151;
					startX = 450;
				}
				count++;
				
				var spr = this.game.add.sprite(startX , startY, "leveltile");
				spr.anchor.set(0.5);
				spr.scale.set(1);
				
				var status = localStorage.getItem("status"+(count));
				if(!status){

					if(count != 1)
					localStorage.setItem("status"+(count),"locked");
				}

				var statusNew = localStorage.getItem("status"+(count));
				
				startX += diff * 1.3;
				
				spr.index = count;
				var no = this.game.add.text(0, 0, (count), { font: "55px Geometric415bt", fill: "#ffffff",align: "center",wordWrap: true,wordWrapWidth:500 });
				no.anchor.set(0.5);
				spr.addChild(no);
				
				if(statusNew == "locked"){
					spr.frame = 2;
					no.visible = false;
				}else if(statusNew == "unclocked"){
					spr.frame = 1;
					
				}else{
					spr.frame = 0;
				}

				if((count) == this.game.currentLevel){
					spr.frame = 1;
					no.visible = true;
				}
				if(spr.frame == 2)
				spr.inputEnabled = false;
				else
				spr.inputEnabled = true;
				spr.events.onInputDown.add(this.onLevelSelect,this);
				this.sprArr.push(spr);

				if(count > 22)
				spr.visible = false;
				
				if(this.game.currentLevel > 22)
					window.location = windowlocation;
			}
		}
			startY += this.sprArr[0].height * 1.2;
		}
		
		this.redlogo = this.game.add.sprite(xPos(0.05), yPos(.9),"redlogo");
		this.redlogo.anchor.set(0.5)
		this.redlogo.fixedToCamera = true;
		

		this.game.kineticScrolling = this.game.plugins.add(Phaser.Plugin.KineticScrolling);
		this.game.kineticScrolling.configure({
			kineticMovement: true,
			timeConstantScroll: 600, //really mimic iOS
			horizontalScroll: false,
			verticalScroll: true,
			horizontalWheel: false,
			verticalWheel: true,
			deltaWheel: 40,
			onUpdate: null //A function to get the delta values if it's required (deltaX, deltaY)
		});
		this.game.kineticScrolling.start();

		this.game.world.setBounds(0, 0, 1920, 1080 * 3);

		this.delete = this.game.add.sprite(xPos(0.05), yPos(.8),"delete");
		this.delete.fixedToCamera = true;
		this.delete.anchor.set(0.5)

		this.audio = this.game.add.sprite(xPos(0.05), yPos(.73),"audio");
		this.audio.fixedToCamera = true;
		this.audio.anchor.set(0.5)

		this.mute = this.game.add.sprite(xPos(0.05), yPos(.73),"mute");
		this.mute.fixedToCamera = true;
		this.mute.visible = false;
		this.mute.anchor.set(0.5);
		this.muteBtn = this.mute;
		this.audioBtn = this.audio;

		this.credit = this.game.add.sprite(xPos(0.05), yPos(.66),"credit");
		this.credit.fixedToCamera = true;
		this.credit.anchor.set(0.5);
		
	    this.jump = this.game.add.sprite(xPos(0.4), yPos(.95),"jump"); 
	   	this.jump.fixedToCamera = true; 
	   	this.jump.anchor.set(0.5); 
  
	   	this.skip = this.game.add.sprite(xPos(0.6), yPos(.95),"skip"); 
	   	this.skip.fixedToCamera = true; 
	   	this.skip.anchor.set(0.5); 

		this.info = this.game.add.sprite(xPos(0.05), yPos(.59),"info");
		this.info.fixedToCamera = true;
		this.info.anchor.set(0.5);

		this.dummybg = this.game.add.sprite(0, 0,"dummybg");
		this.dummybg.fixedToCamera = true;
		this.dummybg.inputEnabled = true;
		this.dummybg.visible = false;

		this.info.inputEnabled = true;
		this.audio.inputEnabled = true;
		this.mute.inputEnabled = true;
		this.credit.inputEnabled = true;
		this.delete.inputEnabled = true;
		this.skip.inputEnabled = true; 
	    this.jump.inputEnabled = true; 
		this.jump.visible = false; 

		this.delete.events.onInputDown.add(this.onDeleteClick,this);
		this.credit.events.onInputDown.add(this.onCreditClick,this);
		this.info.events.onInputDown.add(this.onInfoClick,this);
		this.skip.events.onInputDown.add(this.onSkipClick,this); 
		this.jump.events.onInputDown.add(this.onJumpCLick,this); 


		if (localStorage.getItem("audio") == "on") {
			this.muteBtn.visible = false;
			this.audioBtn.visible = true;
			this.game.sound.mute = false;
		}
		else {

			this.muteBtn.visible = true;
			this.audioBtn.visible = false;
			this.game.sound.mute = true;
		}

		this.muteBtn.inputEnabled = true;
		this.audioBtn.inputEnabled = true;
		this.audioBtn.events.onInputDown.add(this.muteBtnClick,this);
		this.muteBtn.events.onInputDown.add(this.muteBtnClick,this);

		if(this.game.currentLevel > 20){
			//this.game.camera.y +=  this.sprArr[this.game.currentLevel-1].y/1.5;
			
			this.game.add.tween(this.game.camera).to({y:this.sprArr[this.game.currentLevel-1].y/1.5},1000,Phaser.Easing.Linear.none,true).onComplete.add(function(){

				if(this.game.isFromGame && this.game.currentLevel > -1){
					this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){
					this.onLevelSelect(this.sprArr[this.game.currentLevel-1])
					}.bind(this));
				}	

			},this)
		}else{
			if(this.game.isFromGame && this.game.currentLevel > -1){
				this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){
				this.onLevelSelect(this.sprArr[this.game.currentLevel-1])
				}.bind(this));
			}	
		}
		
		//this.game.camera.follow(this.sprArr[this.game.currentLevel-1]);
	},
	onSkipClick:function(){ 
	    console.log("-------------------Skip CLicked---------------------------") 
		window.location = windowlocation; 
	}, 
	onJumpCLick:function(){ 
	    console.log("-------------------Jump CLicked---------------------------") 
	},
	onInfoClick:function(){
		this.game.state.start("Info");
	},
	onCreditClick:function(){
		this.game.state.start("Credit");
	},
	onDeleteClick:function(obj)
	{
		this.dummybg.visible = true;
		this.popup = this.game.add.sprite(xPos(0.50),yPos(0.25),"popup");
		this.popup.anchor.set(0.5);
		
		this.resetbtn = this.game.add.sprite(100,50,"resetbtn");
		this.resetbtn.anchor.set(0.5);
		this.resetbtn.inputEnabled = true;
		this.resetbtn.events.onInputDown.add(this.resetbtnClick,this);
		this.popup.addChild(this.resetbtn);

		this.cancelbtn = this.game.add.sprite(-100,50,"cancelbtn");
		this.cancelbtn.anchor.set(0.5);
		this.cancelbtn.inputEnabled = true;
		this.cancelbtn.events.onInputDown.add(this.cancelbtnClick,this);
		this.popup.addChild(this.cancelbtn);

	},
	resetbtnClick:function(obj)
	{
		this.game.currentLevel = 1;
		window.localStorage.clear();
		this.game.state.start(this.game.state.current);
	},
	cancelbtnClick:function(obj)
	{
		this.dummybg.visible = false;
		this.popup.destroy()
	},
	onLevelSelect:function(obj)
	{
		this.game.currentLevel = obj.index;
		
		this.game.state.start("TheGame");
	},
	backBtnCLick:function()
	{
		this.game.state.start("Menu");
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
