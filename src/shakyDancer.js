var shakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('shaky');

};

shakyDancer.prototype = Object.create(makeDancer.prototype);

shakyDancer.prototype.constructor = shakyDancer;

shakyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.slideUp( 350 ).delay( 600 ).fadeIn( 400 );//.animate({ 'left':'+=100px'});
};