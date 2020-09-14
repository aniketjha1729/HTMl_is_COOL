var thegame = function(game) {

    this.currentLevel = 1;
    
}

thegame.prototype = {
   
    create: function() 
    {
        var me = this;
        
        
        this.game.stage.backgroundColor = '#f1f1f1';
        document.body.style.backgroundColor = "#f1f1f1";
        //this.dummyBg.fixedToCamera = true;
        this.game.GAME = this;
        this.levelBtn = this.game.add.button(xPos(0.05), yPos(.05), 'level', this.levelBtnClick, this);       
        this.game.isFromGame = false;
        this.redlogo = this.game.add.sprite(xPos(0.05), yPos(.9),"redlogo");
        
        this.gameManager = this.game.gameManager = new gameManager();
        this.gameManager.init(this.game.currentLevel,this.game);
        
        
    },    
    levelBtnClick: function(){
        this.game.state.start("Level",true,false,1);
    },
    muteBtnClick: function (params) {

        if (this.muteBtn.visible) 
        {
            
            this.muteBtn.visible = false;
            this.audioBtn.visible = true;
            localStorage.setItem("audio","on");
            this.game.sound.mute = false;
        }
        else
        {
            this.playTickSound();
            this.muteBtn.visible = true;
            this.audioBtn.visible = false;
            localStorage.setItem("audio", "off");
            this.game.sound.mute = true;
        }

    },
	playTickSound: function (params) {

		var music = this.game.add.audio('tick');
		music.play();	
    },
    playDropSound: function (params) {

		var music = this.game.add.audio('dropSound');
		music.play();	
    },
    playFbSound: function (str) {

        var music = this.game.add.audio(str);
        music.play();
    }
}

