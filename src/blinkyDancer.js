var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  };


var SpideyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id','spidey');
};
SpideyDancer.prototype = Object.create(Dancer.prototype);



var KeanuDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id','keanu');
};
KeanuDancer.prototype = Object.create(Dancer.prototype);
KeanuDancer.prototype.lineUp = function(){

    var matrixStyleSettings = {
        top: top,
        left: 500
      };

    this.$node.css(matrixStyleSettings);

};





var BlinkyPuppy = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id','puppy');
};
BlinkyPuppy.prototype = Object.create(Dancer.prototype);

BlinkyPuppy.prototype.lineUp = function(){
    var puppyStyleSettings = {
        top: top,
        left: 1000
      };

    this.$node.css(puppyStyleSettings);

};

var BlinkyTinyPuppy = function(top, left, timeBetweenSteps){
  BlinkyPuppy.call(this, top, left, timeBetweenSteps);
  this.$node.attr('id','tinypuppy');
};
BlinkyTinyPuppy.prototype = Object.create(BlinkyPuppy.prototype);

BlinkyTinyPuppy.prototype.find = function() {
  if(this.$node.next('#puppy')){
    return this.$node.next('#puppy');
  }
};

BlinkyTinyPuppy.prototype.travel = function(){
  var $node = $node || $('#puppy');
  var left = $node.css("left");
  var top = $node.css("top");
  this.$node.animate({left: left, top: top}, this.travel.bind(this));
};



