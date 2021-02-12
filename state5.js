//gravity and acceleration
var accel = 400, platform, platformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){
        game.load.image('cloud', 'assets/sprites/cloud.png');
    },
    create: function(){
        game.stage.backgroundColor = '#00ffff';
        addChangeStateEventListeners();
        
        umbrella = game.add.sprite(centerX, 500, 'Umbrella_man');
        platform = game.add.sprite(0, 800, 'cloud');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'cloud');
        platformGroup.create(1300, 400, 'cloud');
        
        game.physics.enable([umbrella, platform, platformGroup]);
        
        umbrella.body.gravity.y = 500;
        umbrella.body.bounce.y = 0.3;
        umbrella.body.drag.x = 400;
        umbrella.body.collideWorldBounds = true;
        
        platform.body.immovable = true;
        
        platformGroup.setAll('body.immovable', true);
    },
    update: function(){
        game.physics.arcade.collide(umbrella, [platform, platformGroup]);
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            umbrella.body.acceleration.x = -accel;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            umbrella.body.acceleration.x = accel;
        } else {
            umbrella.body.acceleration.x = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            umbrella.body.velocity.y = -300;
        }
        
    }
};