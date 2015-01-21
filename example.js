(function() {
  var dataSet = [
      "BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BK","BG","BG","BG",
      "BK","BR","BK","BK","BL","BL","BL","BL","BK","BK","BK","BK","BK","BK","BK","BK"
  ];

  function getRgbColor(colorType)
  {
      var colorHash = {
          //"BK":"#000000", // black
          "BK":"#dcaa6b", // black
          "WH":"#FFFFFF", // white
          "BG":"#FFCCCC", // beige
          "BR":"#800000", // brown
          "RD":"#FF0000", // red
          "YL":"#FFFF00", // yellow
          "GN":"#00FF00", // green
          "WT":"#00FFFF", // water
          "BL":"#0000FF", // blue
          "PR":"#800080"  // purple
      };
      return colorHash[colorType];
  }

  // Matter module aliases
  var Engine = Matter.Engine,
      World = Matter.World,
      Body = Matter.Body,
      Bodies = Matter.Bodies,
      Constraint = Matter.Constraint,
      Composites = Matter.Composites,
      MouseConstraint = Matter.MouseConstraint;

  // create a Matter.js engine
  var engine = Engine.create(document.body, {
    render: {
      options: {
        showAngleIndicator: false,
        wireframes: false
      }
    }
  });

  // Uncomment this to be able to drag and drop the items
  //
  // var mouseConstraint = MouseConstraint.create(engine);
  // World.add(engine.world, mouseConstraint);

  var DOT_SIZE = 20;
  var X_START_POS = 100;
  var Y_START_POS = 300;

  var i = 0;
  var stack = Composites.stack(X_START_POS, Y_START_POS, 8, 8, 0, 0, function(x, y, column, row) {
      var color = dataSet[i++];
      var style = getRgbColor(color);
      return Bodies.rectangle(x, y, DOT_SIZE, DOT_SIZE, { render: {fillStyle:style }});
  });

  // create the ground the stack will sit on
  //                             x   y    width height
  var ground = Bodies.rectangle(200, 400, 500, 10, { isStatic: true });

  // create the wrecking ball
  var ball = Bodies.circle(-100, 60, 20, { density: 1, frictionAir: 1.001});

  // create the rope the ball will swing on
  var ballRope = Constraint.create({
    pointA: { x: 40, y: 60 },
    bodyB: ball
  });

  // add all of the bodies to the world
  World.add(engine.world, [stack, ball, ballRope, ground]);

  // run the engine
  Engine.run(engine);
})();
