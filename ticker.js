/* global requestAnimationFrame */

(function() {

  function Ticker (fn) {

    var me = this;

    var lastTime = 0;
    var pausedSum = 0;

    function tick (t) {
      var dt = t - lastTime;
      if (me.paused) {
        pausedSum += dt;
      } else {
        fn(dt, t - pausedSum);
      }
      lastTime = t;
      requestAnimationFrame(tick);
    }

    tick(0, 0);

  }

  if (typeof module !== "undefined") {
    module.exports = Ticker;
  } else {
    this.Ticker = Ticker;
  }

})();
