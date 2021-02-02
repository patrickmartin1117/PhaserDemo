var demo = {}, centerX = 1500/2, centerY = 1000/2, umbrella, speed = 4;
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        //insert sprites
        game.load.image('Umbrella_man', 'assets/sprites/Umbrella_man.png');
    },
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
       /* game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
         game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 2);
        */
        //Or instead can do this with function listed below
        addChangeStateEventListeners();
        //Game scale manager - will scale world with window change
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //insert sprites
        //      location width, height
        umbrella = game.add.sprite(centerX, centerY, 'Umbrella_man');
        //set where sprite is
        //umbrella.anchor.x = 0.5;
        //umbrella.anchor.x = 0.5;
        //another way
        umbrella.anchor.setTo(0.5, 0.5);
        
    },
    update: function(){
        //move sprite
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            umbrella.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            umbrella.x -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            umbrella.y -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            umbrella.y += speed;
        }
    }
};

function changeState(i,stateNum){
    console.log(i);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners(){
    addKeyCallback(Phaser.Keyboard.ONE, changeState,1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState,2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState,3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState,4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState,5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState,6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState,7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState,8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState,9);
}