Ticker
======

Ticker is a really simple (24 SLOC) wrapper around `requestAnimationFrame` that makes it just a little easier to deal with.

If you're not familiar with `requestAnimationFrame`, this might not make a whole lot of sense to you. Sorry!

usage
-----

Make a ticker and let it tick away!

```javascript
// initialize the looper
var looper = ticker(function(dt, t) {
  // dt == milliseconds since this was last called
  // t == the total time we've been running
});

// change the speed
looper.speed = 2;   // twice as fast
looper.speed = 0.5; // half as fast
looper.speed = -1;  // go backwards!
looper.speed = 1;   // normal speed

// change the function
looper.fn = function (dt, t) { /* ... */ };
```

This function doesn't polyfill `requestAnimationFrame`, so you might want to [grab one](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) if you want to support more browsers.

That's it! It's a pretty short library.

why I made this
---------------

When using `requestAnimationFrame`, I almost always find myself doing something like this:

```javascript
var lastT = 0; // we'll use this variable in a moment

function tick(t) {

  // calculate the time delta
  var dt = t - lastT;
  lastT = t;

  // ... do stuff ...

  // tick again
  requestAnimationFrame(tick);

}

// start the ticks
requestAnimationFrame(tick);
```

So I wrapped that up into a little library.
