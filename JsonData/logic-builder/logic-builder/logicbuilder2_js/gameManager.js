var gameManager = function()
{
    this.level = 0;
    this.game ;
   
    this.init = function(lvl,game)
    {
        this.level = lvl;
        this.game = game;
        this.startIndex = 0;
        this.reached = false;
        this.moveCount = 0;
        this.blockArr = [];
        this.codeArr = [];
        this.grid = [];
        this.order = [];
        this.totalLevel = 58;
        this.gameOver = false;
        this.isMoving =  false;
        this.game.add.plugin(PhaserInput.Plugin);
        this.loadBlocks();
        this.addBall();
        this.addKeyevents();
        this.loadCodeText();
        
        if(this.game.currentLevel == 1){

            this.keydown = this.game.add.sprite(this.game.width * 0.424, this.game.height * 0.3,"keydown");
            this.keydown.anchor.set(0.5);

            this.keyup = this.game.add.sprite(this.game.width * 0.424,this.keydown.y - this.keydown.height * 1.1,"keyup");
            this.keyup.anchor.set(0.5);

            this.keyright = this.game.add.sprite(this.keydown.x + this.keydown.width * 1.1,this.game.height * 0.3,"keyright");
            this.keyright.anchor.set(0.5);

            this.keyleft = this.game.add.sprite(this.keydown.x - this.keydown.width * 1.1,this.game.height * 0.3,"keyleft");
            this.keyleft.anchor.set(0.5);

            this.game.add.tween(this.keyright).to({alpha: 0.2, }, 500, Phaser.Easing.Cubic.Out, true, 0, -1, true);
			this.game.add.tween(this.keyleft).to({alpha: 0.2, }, 500, Phaser.Easing.Cubic.Out, true, 0, -1, true);
			this.game.add.tween(this.keydown).to({alpha: 0.2, }, 500, Phaser.Easing.Cubic.Out, true, 0, -1, true);
			this.game.add.tween(this.keyup).to({alpha: 0.2, }, 500, Phaser.Easing.Cubic.Out, true, 0, -1, true);

        }
        this.dummy = this.game.add.sprite(0,0,"dummy");
        this.dummy.alpha = 0;
        this.game.world.setBounds(0, 0, 1920, 1080);
    }
    
    this.loadCodeText = function(){

        var startY = 300;
        var startX = this.game.width * 0.9;
        var fontsize = 125;
        if(this.game.currentLevel == 1 || this.game.currentLevel == 2)
        startY = 300
        else
        startY = 100
        
        startY = this.textStartY;
        gap = this.textGap;
        fontsize = this.fontSize;
        startX = this.textStartX;

        var ifcount = 0;
        for(var i = 0 ; i < this.codeArr.length;i++){

            var code1 = this.game.add.text(startX , startY, this.codeArr[i], { font: fontsize+"px Geometric415bt", fill: "#8f8f8f",align: "left",wordWrap: true,wordWrapWidth:500 });
            code1.anchor.set(0,0.5);
            //console.log(code1.text + ": " + code1.text.indexOf("if"))
            if(code1.text.indexOf("if") > -1 || code1.text.indexOf("while") > -1)
            {
                
                    var dot
                    if(code1.text.indexOf("else if") > - 1)
                    dot = this.game.add.sprite(this.ifBoxPos[ifcount],startY,"block");
                    else
                    dot = this.game.add.sprite(this.ifBoxPos[ifcount],startY,"block");
                    dot.anchor.set(0.5);
                    if(this.codeArr.length > 10)
                        dot.scale.set(0.15);
                    else
                        dot.scale.set(0.2);

                    
                    dot.tint = this.ifColor[ifcount];
                 
                    if(this.ifcross[ifcount]){
                        var cross = this.game.add.sprite(0,0,"cross");
                        cross.anchor.set(0.5);
                        dot.addChild(cross)
                    }
                    ifcount++;
                
            }
            startY += gap;
           
            for(var j = 0 ; j < charColor.length; j++){
                
                var no = code1.text.indexOf(charColor[j].text);
               
                if(no > -1){
                  
                    code1.addColor(charColor[j].color, no);
                }

               /*  if(this.game.currentLevel == 26 && code1.text == "       }  else  if       {"){
                    
                    var no = code1.text.indexOf("else");
                    code1.addColor("#003da2", no);
                    var no = code1.text.indexOf("{");
                    code1.addColor("#a83f3f", no);
                    var no = code1.text.indexOf("if");
                    code1.addColor("#003da2", no);
                }

                if(this.game.currentLevel == 28 && code1.text == "while       {"){
                    
                    var no = code1.text.indexOf("while");
                    code1.addColor("#b782ed", no);
                    var no = code1.text.indexOf("{");
                    code1.addColor("#a83f3f", no);
                   
                }

                if(this.game.currentLevel == 29 && code1.text == "while       {"){
                    
                    var no = code1.text.indexOf("while");
                    code1.addColor("#b782ed", no);
                    var no = code1.text.indexOf("{");
                    code1.addColor("#a83f3f", no);
                   
                } */
            }
        }
       

    }

    this.loadBlocks = function(){

        
        var leveldata = this.game.cache.getJSON('level'+this.game.currentLevel);
        var startX = leveldata.startX;
        var startY = leveldata.startY;
        var col = leveldata.col;
        var row = leveldata.row;
        var colorsArr = leveldata.blocks;   
        var sclae = leveldata.scale;
        var numbersArr = leveldata.text;
        var numbersColArr = leveldata.textcolor;
        var textsize = leveldata.textsize;
        var hint = leveldata.Hint;
        var hintcolor = leveldata.HintColor;
        this.fontSize = leveldata.fontSize;
        this.textStartY = leveldata.textStartY;
        this.textStartX = leveldata.textStartX;
        this.textGap = leveldata.textGap;
        this.ifcross = leveldata.ifcross;
        this.ifBoxPos = leveldata.ifBoxPos;

        this.ballScale = leveldata.ballScale;
        this.colorsArr = colorsArr;    
        this.ifColor = leveldata.color;    
        this.order = leveldata.order;
        this.startIndex = leveldata.start;
        this.codeArr = leveldata.code;
        this.BorderColor = leveldata.BorderColor;
        var count = 0;
        for(var i = 0 ; i < col;i++){
            var arr = [];
            startX = leveldata.startX;
            for(var j = 0 ; j < row;j++){

                var spr = this.game.add.sprite(startX,startY,"block");
                spr.anchor.set(0.5);
                spr.scale.set(sclae); 
                var stroke = this.game.add.sprite(startX,startY,"stroke");
                stroke.anchor.set(0.5);
                stroke.scale.set(sclae); 
                spr.stroke = stroke;

                spr.tint = colorsArr[count];
                spr.stroke.tint = this.BorderColor
                spr.row = i;
                spr.col = j;
                spr.stroke.visible  = false;
                startX += spr.width*1.25;
                spr.inputEnabled = true;
                spr.events.onInputDown.add(this.onTilesClick,this)
                spr.index = count;
                var colr = colorsArr[count];
                colr = colr.replace("0x", "#");
                
               
                var txt = this.game.add.text(0 , 0, numbersArr[count], { font: textsize[count]+"px Geometric415bt", fill: numbersColArr[count],align: "center",wordWrap: true,wordWrapWidth:500 });
                txt.anchor.set(0.5);
                spr.addChild(txt) 

                count++;
                this.blockArr.push(spr);
                arr.push(spr);

            }
            startY += spr.height*1.25;
            this.grid.push(arr);
        }

        var hint = this.game.add.text(this.game.width/2 , this.game.height * 0.9, hint, { font: 50+"px Geometric415bt", fill: hintcolor,align: "center",wordWrap: true,wordWrapWidth:1500 });
        hint.anchor.set(0.5);
    }

    this.onTilesClick = function(obj){

       
        if(this.gameOver) return;
        this.playFbSound("tick")
        if(this.reached) return;      
        
        
        if(this.isMoving) return;
        this.isMoving = true;

        if(this.ball.x < obj.x && this.ball.y == obj.y)
        {
            var arr = this.grid[this.ball.row];

            if (this.ball.col == 0 && obj.col == arr.length - 1) {
                this.moveBallLeft()
            } else {
                this.moveBallRight()
            }
        }
        else if(this.ball.x > obj.x && this.ball.y == obj.y)
        {
            var arr = this.grid[this.ball.row];

            if (this.ball.col == arr.length-1 && obj.col == 0) {
                this.moveBallRight()
            }else{
                this.moveBallLeft()
            }
            
        }
        else if(this.ball.x == obj.x && this.ball.y < obj.y)
        {
            var arr = this.grid.length

            if (this.ball.row == 0 && obj.row == arr - 1) {
                this.moveBallUp()
            }
            else this.moveBallDown()
        }
        else if(this.ball.x == obj.x && this.ball.y > obj.y)

           {
            var arr = this.grid.length
            
            if (this.ball.row == arr - 1 && obj.row == 0){
                this.moveBallDown()
            }else{
                this.moveBallUp()
            }
            
           }
            
        else 
           this.addWrongShake()
        
    }

    this.addBall = function(){
        
        var temp = this.blockArr[this.startIndex];
        this.ball = this.game.add.sprite(temp.x,temp.y,"square");
        this.ball.anchor.set(0.5);

        this.ball.scale.set(this.ballScale);
        this.ball.scaleVal = this.ballScale;

        this.ball.row = temp.row;
        this.ball.col = temp.col;
        this.ball.block = temp
        this.ball.stween = this.game.add.tween(this.ball.scale).to({x: this.ball.scaleVal + .2,y:this.ball.scaleVal + .2 }, 750, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
        //this.addWrongShake()
    }

    this.playFbSound = function(path){

        var music = this.game.add.audio(path);
        music.play();
    }


    this.addKeyevents = function(){

        
       
        this.left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.left.onDown.add(this.onKeyDown, this);

        this.right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.right.onDown.add(this.onKeyDown, this);

        this.up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.up.onDown.add(this.onKeyDown, this);

        this.down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.down.onDown.add(this.onKeyDown, this);

    }

    this.onKeyDown = function(evt){
        if(this.gameOver) return;
        this.playFbSound("tick")
        if(this.reached) return;

        if(this.isMoving) return;
        this.isMoving = true;

        switch(evt.keyCode){
            case 37:
            this.moveBallLeft()
            break;
            case 38:
            this.moveBallUp()
            break;
            case 39:
            this.moveBallRight()
            break;
            case 40:
            this.moveBallDown()
            break;
        }
    }

    this.moveBallLeft = function(){
        
        this.ball.stween.pause();
        var newrow = 0;        
        var arr = this.grid[this.ball.row]
        
        if(this.ball.col == 0){
            newrow = arr.length - 1;
        }else{
            newrow = this.ball.col - 1;
        }
        this.ball.col = newrow;
        //this.ball.x =  arr[this.ball.col].x;
        

        this.ball.block = arr[this.ball.col]

        if(newrow ==  arr.length - 1){
            arr[this.ball.col].stroke.visible = true;
            this.game.add.tween(this.ball).to({x: this.ball.x - arr[0].width/2 + this.ball.width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.x =  arr[this.ball.col].x
                this.game.add.tween(this.ball).from({x: arr[this.ball.col].x + arr[0].width/2 - this.ball.width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                    this.ball.stween.resume();
                    this.moveCount++;
                    this.isMoving = false;
                    if(this.game.currentLevel == 11 && this.moveCount == 1){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 34 && this.moveCount == 1){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 19){
                        var arr = [3,5,7]
                        for(var i = 0 ; i < arr.length;i++){

                            if(this.moveCount == arr[i]){
                                this.addWrongShake()
                            }
                        }
                        
                    }
                    else if(this.order[this.moveCount] == this.ball.block.index){
                    if(this.moveCount == this.order.length-1){
                        
                        this.reached = true;
                        this.finalAnimation()
                    }
                }else{
                    this.addWrongShake()
                }
                }.bind(this)); 
            }.bind(this));

        }else{
            arr[this.ball.col + 1].stroke.visible = true;
            this.game.add.tween(this.ball).to({x: arr[this.ball.col].x }, 250, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.stween.resume();
                this.moveCount++;
                this.isMoving = false;
                if(this.order[this.moveCount] == this.ball.block.index){
                    if(this.moveCount == this.order.length-1){
                        this.reached = true;
                        this.finalAnimation()
                    }
                }else{
                    this.addWrongShake()
                }
            }.bind(this));
        }

        
    }

    this.finalAnimation = function(){

       
        this.game.currentLevel++;
        localStorage.setItem("status"+(this.game.currentLevel),"visited");
        this.playFbSound("right")
        if(this.game.currentLevel > 58)
        this.game.currentLevel = -1
        var tick = this.game.add.sprite(this.ball.x,this.ball.y,"tick");
        tick.anchor.set(0.5);
        tick.scale.set(this.ball.scale.x);
         if(this.colorsArr.length > 10){
            tick.scale.set(0.6)
         }
        this.game.add.tween(this.ball).to({alpha: 0 }, 250, Phaser.Easing.Linear.none, true)
        this.game.add.tween(tick).from({alpha: 0 }, 500, Phaser.Easing.Linear.none, true).onComplete.add(function(){

            this.game.time.events.add(Phaser.Timer.SECOND * 1, function(){
                if(this.game.currentLevel != this.totalLevel)
                this.game.isFromGame = true;
                else
                this.game.isFromGame = false;
                    
                this.game.state.start("Level",true,false,1);
            }, this);
           
        }.bind(this));

        this.correctExecutionbyUser();
    }
    this.moveBallRight = function(){

        this.ball.stween.pause();
        var newrow = 0;
        
        var arr = this.grid[this.ball.row]
        
        if(this.ball.col == arr.length - 1){
            newrow = 0;
        }else{
            newrow = this.ball.col + 1;
        }
        this.ball.col = newrow;
        this.ball.block = arr[this.ball.col]
        if(newrow == 0){
            arr[this.ball.col].stroke.visible = true;
            this.game.add.tween(this.ball).to({x: this.ball.x + arr[0].width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.x = arr[this.ball.col].x;
                this.game.add.tween(this.ball).from({x: arr[this.ball.col].x - arr[0].width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                    this.ball.stween.resume();
                    this.moveCount++;
                    this.isMoving = false;
                    if(this.game.currentLevel == 11 && this.moveCount == 3){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 34 && this.moveCount == 2){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 19){
                        var arr = [1,4,8]
                        for(var i = 0 ; i < arr.length;i++){

                            if(this.moveCount == arr[i]){
                                this.addWrongShake()
                            }
                        }
                        
                    }
                    else if(this.game.currentLevel == 34 && this.moveCount == 3){
                        this.addWrongShake()
                    }
                    else if(this.order[this.moveCount] == this.ball.block.index){
                        if(this.moveCount == this.order.length-1){
                            
                            this.reached = true;
                            this.finalAnimation()
                        }
                    }else{
                        
                      this.addWrongShake()
                    }
                }.bind(this));
            }.bind(this));

        }else{
            arr[this.ball.col - 1].stroke.visible = true;
            this.game.add.tween(this.ball).to({x: arr[this.ball.col].x }, 250, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.stween.resume();
                this.moveCount++;
                this.isMoving = false;
               
                if(this.order[this.moveCount] == this.ball.block.index){
                    if(this.moveCount == this.order.length-1){
                        this.reached = true;
                        this.finalAnimation()
                    }
                }else{
                   
                  this.addWrongShake()
                }
            }.bind(this));
        }
        
        
        
    }

    this.moveBallUp = function(){

        if(this.grid.length < 2) return

        this.ball.stween.pause();
        var newrow = 0;
        var arr;
        if(this.ball.row == 0){
            arr = this.grid[this.grid.length-1]
        }else
            arr = this.grid[this.ball.row - 1]
        
        if(this.ball.row  == 0 ){
            newrow = this.grid.length-1;
        }else{
            newrow = this.ball.row -1;
        }
        this.ball.row = newrow;
        this.ball.block.stroke.visible = true;
        this.ball.block = arr[this.ball.col]
        
       
        if(newrow == this.grid.length-1){
            arr[this.ball.col].stroke.visible = true;
            this.game.add.tween(this.ball).to({y: this.ball.y - arr[0].width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.y = arr[this.ball.col].y;
                this.game.add.tween(this.ball).from({y: arr[this.ball.col].y + arr[0].width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                    this.ball.stween.resume();
                    this.moveCount++;
                    this.isMoving = false;
                    if(this.game.currentLevel == 1){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 34 && this.moveCount == 1){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 16){
                        var arr = [3,6,9,12,14]
                        for(var i = 0 ; i < arr.length;i++){

                            if(this.moveCount == arr[i]){
                                this.addWrongShake()
                            }
                        }
                        
                    }                    
                    else if(this.game.currentLevel == 6){
                       
                        var arr = [1,2,4,6]
                        for(var i = 0 ; i < arr.length;i++){

                            if(this.moveCount == arr[i]){
                                this.addWrongShake()
                            }
                        }
                        
                    }                    
                    else if(this.order[this.moveCount] == this.ball.block.index){
                        if(this.moveCount == this.order.length-1){
                            this.finalAnimation()
                            this.reached = true;
                            
                        }
                    }else{
                      this.addWrongShake()
                    }
                }.bind(this));
            }.bind(this));

        }else{
           
            this.game.add.tween(this.ball).to({y: this.ball.block.y }, 250, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.stween.resume();
                this.moveCount++;
                this.isMoving = false;
                if(this.game.currentLevel == 6 && this.moveCount == 4){
                       
                    this.addWrongShake()
                    
                } 
                else if(this.order[this.moveCount] == this.ball.block.index){
                    if(this.moveCount == this.order.length-1){
                        this.reached = true;
                        this.finalAnimation()
                    }
                }else{
                  this.addWrongShake()
                }
            }.bind(this));
        }
        
        
    }

    this.moveBallDown = function(){

        if(this.grid.length < 2) return

        this.ball.stween.pause();
        var newrow = 0;
        var arr;
        
        if(this.ball.row == this.grid.length-1){
            arr = this.grid[0]
        }else
            arr = this.grid[this.ball.row + 1]
       
        if(this.ball.row  == this.grid.length-1 ){
            newrow = 0;
        }else{
            newrow = this.ball.row + 1;
        }
        
        this.ball.row = newrow;
        this.ball.block.stroke.visible = true;
        this.ball.block = arr[this.ball.col]
       
        
         
        if(newrow == 0){
           
            this.game.add.tween(this.ball).to({y: this.ball.y + arr[0].width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.y = arr[this.ball.row].y;
                this.game.add.tween(this.ball).from({y: arr[this.ball.row].y - arr[0].width/2 }, 120, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                    this.ball.stween.resume();
                    this.isMoving = false;
                    this.moveCount++;
                   
                      if(this.game.currentLevel == 16){
                        var arr = [1,4,7,10,13,15]
                        for(var i = 0 ; i < arr.length;i++){

                            if(this.moveCount == arr[i]){
                                this.addWrongShake()
                            }
                        }
                        
                    }
                    else if(this.game.currentLevel == 37 && this.moveCount == 4){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 38 && this.moveCount == 4){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 17 && this.moveCount == 1){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 18 && this.moveCount == 4){
                        this.addWrongShake()
                    }
                    else if(this.game.currentLevel == 6 && this.moveCount == 7){
                        this.addWrongShake()
                    }
                    else if(this.order[this.moveCount] == this.ball.block.index){
                        if(this.moveCount == this.order.length-1){
                            
                            this.reached = true;
                            this.finalAnimation()
                        }
                    }else{
                      this.addWrongShake()
                    }
                }.bind(this));
            }.bind(this));

        }else{
           
            this.game.add.tween(this.ball).to({y: this.ball.block.y }, 250, Phaser.Easing.Linear.none, true).onComplete.add(function(){
                this.ball.stween.resume();
                this.isMoving = false;
                this.moveCount++;
                if(this.order[this.moveCount] == this.ball.block.index){
                    if(this.moveCount == this.order.length-1){
                        this.reached = true;
                        this.finalAnimation()
                    }
                }else{
                  this.addWrongShake()
                }
            }.bind(this));
        }
        
        
    }

    this.addWrongShake = function(){

        this.playFbSound("wrong");
        this.game.time.events.add(Phaser.Timer.SECOND * 2, this.rerloadLevel, this);
        this.ball.stween.stop();
        this.game.add.tween(this.ball).to({x:this.ball.x+10},100, Phaser.Easing.Bounce.InOut, true, 0, -1, true);
        this.game.add.tween(this.ball).to({alpha : 0},1000, Phaser.Easing.Bounce.InOut, true);
        this.dummy.alpha = 1;
        this.game.add.tween(this.dummy).to({alpha : 0},2000, Phaser.Easing.Linear.none, true);

        this.incorrctExecutionbyUser()
    }

    this.rerloadLevel = function(){

        this.game.state.start(this.game.state.current);
    }

    this.correctExecutionbyUser = function(marks, marksid)
    {
        //we will do the implementation
        console.log("------------------Successfully completed ---------------------------------------")
    }
 
    this.incorrctExecutionbyUser= function(marks, marksid)
    {
       //we will do the implementation
       console.log("------------------Level Failed---------------------------------------")
    }

    
}
