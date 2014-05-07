Ticker
======

Ticker is a really simple (21 SLOC) wrapper around `requestAnimationFrame` that makes it just a little easier to deal with.

If you're not familiar with `requestAnimationFrame`, this might not make a whole lot of sense to you. Sorry!

usage
-----

Instantiate a Ticker and let it tick away!

```javascript
var ticker = new Ticker(function(dt, t) {
  // dt == milliseconds since this was last called
  // t == the total time we've been running
});
```

This function doesn't polyfill `requestAnimationFrame`, so you might want to [grab one](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/) if you want to support more browsers.

If you want to pause the ticker, you can:

```javascript
ticker.paused = true;
// t stops incrementing while you're paused and restarts when you resume.
```

To resume:

```javascript
ticker.paused = false;
```

That's it! It's a pretty short library.

motivation
----------

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
