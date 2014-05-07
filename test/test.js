/* global Ticker */

(function() {

  var $dt = document.getElementById("dt");
  var $t = document.getElementById("t");
  var $start = document.getElementById("start");
  var $pause = document.getElementById("pause");

  var ticker = new Ticker(function(dt, t) {
    $dt.innerHTML = dt;
    $t.innerHTML = t;
  });

  $start.onclick = function() {
    ticker.paused = false;
  };

  $pause.onclick = function() {
    ticker.paused = true;
  };

})();
