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
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== "function")
    // bracket notation
    console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radious" in circle) console.log("Circle has a radious.");
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

// circle.draw();
