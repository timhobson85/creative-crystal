
const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

const layers = [];


function setup() {
  createCanvas(550, 550, SVG); // height, width, and export type
  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152) //blue
  ]
  noLoop(); // only one render
  angleMode(DEGREES); // makes the correct rotate value
  rectMode(CENTER); // sets co-ordinates from centre, not from top left.
}

function draw() {
  // let picker = random(1);
  // if (picker > 0.3) {
  //   layers.push(new OutlineShape());
  // };
  
  // picker = random(1);
  // if (picker > 0.3) {
  //   layers.push(new SimpleLines());
  // };
  
  // picker = random(1);
  // if (picker > 0.3) {
  //   layers.push(new Circles());
  // };

  // layers.forEach(layer => {
  //   layer.render();
  // });

  // const dottedLines = new DottedLines();
  // dottedLines.render();
  // const centeredShape = new CenteredShape();
  // centeredShape.render();
  // const ringOfShapes = new RingOfShapes();
  // ringOfShapes.render();
  const steppedHexagon = new SteppedHexagon();
  steppedHexagon.render();

};
