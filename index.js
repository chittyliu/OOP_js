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
function Circle(radious) {
  this.radious = radious;

  let defaultLocation = { x: 0, y: 0 };

  let computeoptimumLocation = function(factor) {
    // ...
  };

  this.draw = function() {
    computeoptimumLocation(0.1);
    // defaultLocation();
    // this.radious;

    console.log("draw");
  };
}

const circle = new Circle(10);
circle.radious;
circle.draw();

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
