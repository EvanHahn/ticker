/* global requestAnimationFrame */

(function () {

  function noop () {}

  function ticker (fn) {

    var result = {
      speed: 1,
      fn: fn || noop
    };

    var totalTime = 0;
    var lastTime = 0;

    function tick (t) {

      var dt = (t - lastTime) * result.speed;
      totalTime += dt;
      lastTime = t;

      result.fn(dt, totalTime);
      requestAnimationFrame(tick);

    }

    tick(0);

    return result;

  }

  if (typeof module !== "undefined")
    module.exports = ticker;
  else
    this.ticker = ticker;

})();
