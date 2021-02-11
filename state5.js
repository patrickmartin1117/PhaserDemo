demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#00ffff';
        addChangeStateEventListeners();
    },
    update: function(){}
};