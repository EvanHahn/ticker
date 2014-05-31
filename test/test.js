/* global ticker */

(function () {

  var $dt = document.getElementById("dt");
  var $t = document.getElementById("t");
  var $speed = document.getElementById("speed");
  var $speedValue = document.getElementById("speed-value");

  var loop = ticker();

  loop.fn = function (dt, t) {

    $dt.innerHTML = dt | 0;
    $t.innerHTML = t | 0;

    var speed = parseFloat($speed.value);
    loop.speed = speed;
    $speedValue.innerHTML = speed;

  };

})();
