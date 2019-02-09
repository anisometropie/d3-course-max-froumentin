const axisWidth = 400;
const axisHeight = 300;

const scaleX = d3
  .scaleLinear()
  .domain([-100, 100])
  .range([0, axisWidth]);
const axisX = d3.axisBottom(scaleX).ticks(10);

const scaleY = d3
  .scaleLinear()
  .domain([0, 100])
  .range([axisHeight, 0]);
const axisY = d3.axisLeft(scaleY).ticks(10);

const chart = d3
  .select("#chart")
  .append("g")
  .attr("transform", "translate(50,100)");

const axes = chart.append("g");
axes
  .append("g")
  .attr("transform", `translate(0,${axisHeight})`)
  .call(axisX);
axes.append("g").call(axisY);

const figures = chart
  .append("g")
  .attr("class", "figures")
  .attr("transform", `translate(0,${axisHeight})`);

figures
  .append("circle")
  .attr("cx", 40)
  .attr("cy", -40)
  .attr("r", 25)
  .on("click", function() {
    figures.select("rect").attr("fill", "blue");
  });

figures
  .append("rect")
  .attr("x", 30)
  .attr("y", -42)
  .attr("width", 40)
  .attr("height", 25);
