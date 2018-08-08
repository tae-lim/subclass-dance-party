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

// crazyDancer.prototype.lineUp = function() {
//   //this.$node.toggle(300).slideUp(200);
//   //this.$node.toggle().fadeOut();
//   //this.$node.slideUp().show();
//   this.$node.animate({left: "220px"}, 1000);
// };