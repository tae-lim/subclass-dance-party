var makeCrazyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);

makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function() {
  makeCrazyDancer.prototype.step.call(this);
  this.$node.toggle();
};