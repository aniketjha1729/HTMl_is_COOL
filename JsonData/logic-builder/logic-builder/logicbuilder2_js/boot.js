var boot = function(game){

};
  
boot.prototype = {
	preload: function(){
		
		this.game.load.image('preloaderBar', 'logicbuilder2_static/assets/preloader/preloaderBar.png'); 
		this.game.load.image('preloaderBarBg', 'logicbuilder2_static/assets/preloader/preloaderBarBg.png'); 
		this.game.load.image('logo', 'logicbuilder2_static/assets/preloader/logo.png'); 
	},
  	create: function(){
		
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;
		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.isDesktop = this.game.device.desktop;
		this.game.stage.backgroundColor = '#57c7c8';
		this.game.onPause.add(this.yourGamePausedFunc, this);
		this.game.onResume.add(this.yourGameResumedFunc, this);
		this.game.state.start("Preload");

		let fonts = ['Geometric415bt'];

        this.fontDiv = document.createElement('fonts-to-load');
        document.body.appendChild(this.fontDiv);

        for (let i = 0; i < fonts.length; i++) {
            let div = document.createElement('font-div');
            div.id = fonts[i];
            div.style.fontFamily = fonts[i];
            div.style.position = 'absolute';
            div.style.top = 0;
            div.style.left = 0;
            div.style.visibility = 'hidden';
            div.innerHTML = 'Hello world.';
            this.fontDiv.appendChild(div);
		}
	},
	yourGamePausedFunc: function () {
		this.game.input.mspointer.stop();
	}, yourGameResumedFunc: function () {
		this.game.input.mspointer.stop();
	}
}
