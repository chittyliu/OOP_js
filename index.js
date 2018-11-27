// Factory Function
function createCircle(radious) {
  return {
    radious,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(1);

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

circle.draw();
