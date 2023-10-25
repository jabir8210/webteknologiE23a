//Width og height til SVG-elementet
const w = 500;
const h = 500;

const dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];

//SVG-elementet
const svg = d3
.select("body")
.append("svg")
.attr("width", w)
.attr("height", h);

//Scatter plot
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  //'d' et element i 'dataset',
  //som selv er et array med x, y koordinater
  .attr("cx", function (d) {
    // Første værdi i indre array (x)
    return d[0];
  })
  .attr("cy", function (d) {
    // Anden værdi i indre array (y)
    return d[1];
  })
  // Radius er en funktion af d[1]
  .attr("r", function (d) {
    return d[1] / 2;
  })
  // Cirklerne får en farve af rød, hvor nuancen ændres baseret på d[0]
  .attr("fill", function (d) {
    // Beregn nuancen af rød baseret på d[0]
    var redNuance = (d[1] / dataset.length) * 100;
    return "rgb(" + redNuance + ", 0, 0)";
  });

const scale = d3.scaleLinear()
.domain([0, 1000]) // det du får ind
.range([0, 300]); // det du får ud på browseren

console.log("Scale mapping of 1000: " + scale(1000));
console.log("Scale mapping of 500: " + scale(500));
console.log("Scale mapping of 50: " + scale(50));

