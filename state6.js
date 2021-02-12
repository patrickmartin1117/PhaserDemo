//Time events and particle emitters

demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){
        game.load.image('ship', 'assets/sprites/Ship.png');
        game.load.image('redBall', 'assets/sprites/redBall.png');
        game.load.image('orangeBall', 'assets/sprites/orangeBall.png');
    },
    create: function(){
        game.stage.backgroundColor = '#ff66cc';
        addChangeStateEventListeners();
        
        var ship = game.add.sprite(centerX, 1000, 'ship');
        ship.scale.setTo(3);
        ship.anchor.setTo(0.5, 1);
        
        //location x,y, # particles
        var emitter = game.add.emitter(centerX, 500, 2000);
        emitter.makeParticles(['redBall', 'orangeBall'], 0, 5000, false, true);
        emitter.maxParticleSpeed.set(300, -300);
        emitter.minParticleSpeed.set(-300, -100);
        emitter.gravity = 300
        emitter.start(false, 5000, 20);
        
        game.time.events.add(2000, function() {
            emitter.start(false, 5000, 20);
            game.time.events.loop(500, function(){
                if (emitter.on) {
                    emitter.on = false;
                }
                else {
                    emitter.on = true;
                }
            });
        });
        
    },
    update: function(){}
};