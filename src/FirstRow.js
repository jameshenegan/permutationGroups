class FirstRow {
  constructor(basePlot) {
    this.pointGroup = basePlot.mainViz.append("g");
    this.plotData = [];
    this.numElements = basePlot.numElements;
    this.numPermutations = basePlot.numPermutations;
    this.xScale = basePlot.xScale;
    this.yScale = basePlot.yScale;
    this.colorScale = basePlot.colorScale;
    this.circleRadius = basePlot.circleRadius;
  }

  makePlotData() {
    const plotData = [];
    for (let j = 0; j < this.numElements; j++) {
      plotData.push(j);
    }
    this.plotData = plotData;
  }

  makePlot() {
    this.pointGroup
      .selectAll("circle")
      .data(this.plotData)
      .enter()
      .append("circle")
      .attr("cx", (d) => this.xScale(d))
      .attr("cy", this.yScale(this.numPermutations))
      .attr("r", this.circleRadius)
      .attr("fill", (d) => this.colorScale(d))
      .attr("stroke", "black");
  }
}

export default FirstRow;
