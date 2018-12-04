// Stopwatch Exercise
function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function() {
    if (running) throw new Error("Stopwatch has already started.");
    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) throw new Error("Stopwatch has not started yet.");
    running = false;

    endTime = new Date();
    duration = (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });
}

// Factory Function
// function createCircle(radious) {
//   return {
//     radious,
//     draw: function() {
//       console.log("draw");
//     }
//   };
// }
// const circle = createCircle(1);

// Constructor Function
// function Circle(radious) {
//   this.radious = radious;

//   let defaultLocation = { x: 0, y: 0 };

//   this.getDefaultLcation = function() {
//     return defaultLocation;
//   };

//   this.draw = function() {
//     console.log("draw");
//   };

//   Object.defineProperty(this, "defaultLocation", {
//     get: function() {
//       return defaultLocation;
//     },
//     set: function(value) {
//       if (!value.x || !value.y) throw new Error("Invalid location.");

//       defaultLocation = value;
//     }
//   });
// }

// const circle = new Circle(10);
// circle.draw();
// circle.defaultLocation = 1;

// for (let key in circle) {
//   if (typeof circle[key] !== "function")
//     // bracket notation
//     console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ("radious" in circle) console.log("Circle has a radious.");

// const circle = {
//   //   property holds value
//   radious: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   //   functuion define logic
//   draw: function() {
//     console.log("draw");
//   }
// };
