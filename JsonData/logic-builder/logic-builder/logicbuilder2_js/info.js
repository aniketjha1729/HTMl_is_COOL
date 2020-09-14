var info = function(game){

	}

	info.prototype = {

  	create: function(){
		
		this.levelBtn = this.game.add.button(xPos(0.05), yPos(.05), 'back', this.levelBtnClick, this);
		this.levelBtn.fixedToCamera = true;

		var header = this.game.add.text(xPos(0.1) , 100, "About Logic Builder", { font: "50px Geometric415bt", fill: "#e83878",align: "left",wordWrap: true,wordWrapWidth:800 });
		header.anchor.set(0,0.5);
		this.startY =  150;
		this.addText();

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
		this.game.world.setBounds(0, 0, 1920, 1080 * 2);
	},
	levelBtnClick: function(){
		this.game.state.start("Level",true,false,1);
	},
	addText: function(){
		var arr = infoArr;
		
		for(var i = 0; i < arr.length;i++){
			this.startY += 100;
			var header = this.game.add.text(xPos(0.1) , this.startY,arr[i].name, { font: "50px Geometric415bt", fill: "#94e2f8",align: "left",wordWrap: true,wordWrapWidth:800 });
			header.anchor.set(0,0.5);
			var no = arr[i].pos.length;
			this.startY += 100;
			for(var k = 0; k < no;k++){
				var txt = this.game.add.text(xPos(0.1) , this.startY,arr[i].pos[k], { font: "35px Geometric415bt", fill: "#666666",align: "left",wordWrap: true,wordWrapWidth:1600 });
				
				this.startY += (txt.height + 20);
			}
		}
    }
	
}