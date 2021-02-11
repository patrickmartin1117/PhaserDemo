var demo = {}, centerX = 1500/2, centerY = 1000/2, umbrella, speed = 6;
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        //insert sprites
        //game.load.image('Umbrella_man', 'assets/sprites/Umbrella_man.png');
        //for a spritesheet instead
        game.load.spritesheet('Umbrella_man', 'assets/spritesheets/umbrellaSheet.png', 170, 235);
        game.load.image('sky', 'assets/backgrounds/sky.png');
    },
    create: function(){
        //initialize arcade physics engine
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
       /* game.input.keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(changeState, null, null, 1);
         game.input.keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(changeState, null, null, 2);
        */
        //Or instead can do this with function listed below
        addChangeStateEventListeners();
        //Add bounds
        game.world.setBounds(0, 0, 2800, 1000);
        //Game scale manager - will scale world with window change
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //create background
        var sky = game.add.sprite(0,0,'sky');
        
        //insert sprites
        //      location width, height
        umbrella = game.add.sprite(centerX, centerY, 'Umbrella_man');
        //set where sprite is
        //umbrella.anchor.x = 0.5;
        //umbrella.anchor.x = 0.5;
        //another way
        umbrella.anchor.setTo(0.5, 0.5);
        //change scale
        umbrella.scale.setTo(0.7,0.7);
        
        //Add physics to character
        game.physics.enable(umbrella);
        //have character collide with world bounds
        umbrella.body.collideWorldBounds = true;
        
        //create animation, with frame order
        umbrella.animations.add('walk', [0,1]);
        
        //set camera movement
        game.camera.follow(umbrella);
        //add deadzone so image only moves on edge of zone
        game.camera.deadzone = new Phaser.Rectangle(centerX-300, 0, 600, 1000);
        
        
    },
    update: function(){
        //move sprite
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            umbrella.x += speed;
            //change direction sprite faces
            umbrella.scale.setTo(0.7,0.7);
            //insert animations, with id, framerate, loop
            umbrella.animations.play('walk',4,true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            umbrella.x -= speed;
            //change direction sprite faces
            umbrella.scale.setTo(-0.7,0.7);
            umbrella.animations.play('walk',4,true);
        }
        else{
            umbrella.animations.stop('walk');
            umbrella.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            umbrella.y -= speed
            //Create unmovable bounds
            if(umbrella.y < 305){
                umbrella.y = 305;
            }
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