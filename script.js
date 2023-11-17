// create svg element:
var svg = d3.select("#circle")
  .append("svg")
    .attr("width", 200)
    .attr("height", 200)

// Add the path using this helper function
svg.append('circle')
  .attr("id", "circleCustomTooltip")
  .attr('cx', 123)
  .attr('cy', 100)
  .attr('r', 33)
  .attr('stroke', 'black')
  .attr('fill', '#69a3b2');

var tooltip2 = d3.select("#circle")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

d3.select("#circleCustomTooltip")
    .on("mouseover", function(){return tooltip2.style("opacity", 1)
    .html("I'm a tooltip")
    .style("left", (d3.event.pageX-25) + "px")
    .style("top", (d3.event.pageY-75) + "px") })
    .on("mousemove", function(){return tooltip2.style("top", (event.pageY-2390)+"px").style("left",(event.pageX-800)+"px");})
    .on("mouseout", function(){return tooltip2.style("opacity", 0);});