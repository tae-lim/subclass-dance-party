var shakyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

shakyDancer.prototype = Object.create(makeDancer.prototype);

shakyDancer.prototype.constructor = shakyDancer;

shakyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};