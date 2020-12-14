import { select, selectAll } from "d3-selection";
import { scaleOrdinal, scaleLinear } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";
import { transition } from "d3-transition";
import { axisBottom, axisLeft } from "d3-axis";

const d3 = {
  select,
  selectAll,
  scaleOrdinal,
  schemeCategory10,
  scaleLinear,
  transition,
  axisBottom,
  axisLeft,
};

class BasePlot {
  constructor(numPermutations, numElements, circleRadius) {
    this.numPermutations = numPermutations;
    this.numElements = numElements;
    this.numRows = this.numPermutations + 1;

    this.circleRadius = circleRadius;

    this.margin = { top: 30, right: 50, bottom: 90, left: 120 };
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.width = 1.618 * 500 - this.margin.left - this.margin.right;

    this.svg = d3
      .select("#viz")
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom);

    this.mainViz = this.svg
      .append("g")
      .attr(
        "transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")"
      );

    this.colorScale = d3
      .scaleOrdinal(d3.schemeCategory10)
      .domain([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    this.xMin = -1;
    this.xMax = this.numElements;

    this.yMin = -1;
    this.yMax = this.numRows;

    this.xScale = d3
      .scaleLinear()
      .domain([this.xMin, this.xMax])
      .range([0, this.width]);
    this.xAxisGenerator = d3.axisBottom(this.xScale).ticks(5);

    this.xAxis = this.mainViz
      .append("g")
      .attr("transform", "translate(0," + (this.height + 20) + ")")
      .call(this.xAxisGenerator);

    this.xAxis.selectAll("text").style("font-size", "30px");

    this.yScale = d3
      .scaleLinear()
      .domain([this.yMin, this.yMax])
      .range([this.height, 0]);

    this.yAxisGenerator = d3.axisLeft(this.yScale).ticks(5).tickSize(0);

    this.yAxisGenerator.tickSize(-1 * this.width);

    this.yAxis = this.mainViz.append("g").call(this.yAxisGenerator);

    this.yAxis
      .selectAll("line")
      .style("stroke-width", 0.4)
      .style("stroke-dasharray", "3, 3");
    this.yAxis.selectAll("text").style("font-size", "30px");
    this.yAxis.select(".domain").attr("display", "none");
  }
}

export default BasePlot;
