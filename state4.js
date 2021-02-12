//tweens -ways to change value from one point to another
var i = 0;

demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffff00';
        addChangeStateEventListeners();
        
        a1 = game.add.sprite(50, 100, 'Umbrella_man');
        a2 = game.add.sprite(350, 100, 'Umbrella_man');
        a3 = game.add.sprite(650, 100, 'Umbrella_man');
        a4 = game.add.sprite(950, 100, 'Umbrella_man');
        a5 = game.add.sprite(1250, 100, 'Umbrella_man');
        
        //For full list of Tweens, go to github.com/photonstorm/phaser/blob/master/docs/src_tween_TweenManager.js.html
        //google easing for patterns
        game.add.tween(a1).to({y: '+400'}, 2000, 'Linear', true);
        i = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut');
        game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true);
        game.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, false, true).loop(true);
        game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true);
    },
    update: function(){}
};