// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();


};

  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  Dancer.prototype.lineUp = function(){

    var styleSettings = {
        top: top,
        left: 0,
      };

    this.$node.css(styleSettings);
  };



  Dancer.prototype.travel = function(){
    // this.$node.animate(this.setPosition($("body").height() * Math.random(),  $("body").width() * Math.random()));
    // this.$node.animate();
    var l = Math.floor(Math.random() * $(window).height());
    var t = Math.floor(Math.random() * $(window).width());
    this.$node.animate({left: l, top : t}, 1000, this.travel.bind(this));

    // console.log(setPosition);
    // this.$node.animate({top: newPosition[0], left: newPosition[1]}, function(){
      // this.travel();

  };




  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

