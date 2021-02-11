demo.state1 = function(){};

var cursors, vel = 500, islands, waves;

demo.state1.prototype = {
    preload: function(){
        //load tilemap
        game.load.tilemap('ocean', 'assets/tilemaps/ocean.json', null, Phaser.Tilemap.TILED_JSON);
        //note: first part has to be same name as tileset in tiled
        game.load.image('oceanTiles', 'assets/tilemaps/oceanTiles.png');
        game.load.image('island', 'assets/tilemaps/island.png');
        //add character
        game.load.image('Umbrella_man', 'assets/sprites/Umbrella_man.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#00FFFF';
        addChangeStateEventListeners();
        
        //tilemap
        var map = game.add.tilemap('ocean');
        //note: first part has to be same name as tileset in tiled
        map.addTilesetImage('oceanTiles');
        map.addTilesetImage('island');
        //add layers
        waves = map.createLayer('waves');
        islands = map.createLayer('islands');
        
        //collision, where the first two numbers represent values from json file of tile set to collide with, true for collision, and the tile layer
        map.setCollisionBetween(3,11,true,'islands');
        map.setCollisionBetween(1,true,'waves');
        
        umbrella = game.add.sprite(200, 200, 'Umbrella_man');
        umbrella.scale.setTo(0.2,0.2);
        game.physics.enable(umbrella);
        
        //movement
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        game.physics.arcade.collide(umbrella, islands, function(){console.log('Hitting islands!')});
        game.physics.arcade.collide(umbrella, waves, function(){console.log('Hitting waves!')});
        
        if(cursors.up.isDown){
            umbrella.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            umbrella.body.velocity.y = vel;
        }
        else{
            umbrella.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            umbrella.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            umbrella.body.velocity.x = vel;
        }
        else{
            umbrella.body.velocity.x = 0;
        }
    }
};