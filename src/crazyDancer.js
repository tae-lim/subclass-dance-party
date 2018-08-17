var crazyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('crazy');
};

crazyDancer.prototype = Object.create(makeDancer.prototype);

crazyDancer.prototype.constructor = crazyDancer;

crazyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle().slideUp(200).fadeIn(300);
  // this.$node.slideUp().show();
};

// crazyDancer.prototype.lineUp = function() {
//   this.$node.animate({left: "220px"}, 1000);
//   //this.$node.toggle().fadeOut();
//   //this.$node.slideUp().show();
// };
