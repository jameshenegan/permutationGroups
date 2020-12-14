class GenericRow {
  constructor(
    basePlot,
    prePermutationRowNumber,
    prePermutationArray,
    postPermutationArray
  ) {
    this.pointGroup = basePlot.mainViz.append("g");
    this.prePermutationRowNumber = prePermutationRowNumber;
    this.prePermutationArray = prePermutationArray;
    this.postPermutationArray = postPermutationArray;
    this.xScale = basePlot.xScale;
    this.yScale = basePlot.yScale;
    this.colorScale = basePlot.colorScale;
    this.numElements = basePlot.numElements;
    this.circleRadius = basePlot.circleRadius;
  }

  makePlotData() {
    const plotData = [];
    for (let j = 0; j < this.numElements; j++) {
      const tempObject = {};
      tempObject.xPre = j;
      tempObject.xPost = this.postPermutationArray[j];
      tempObject.color = this.prePermutationArray[j];
      plotData.push(tempObject);
    }
    this.plotData = plotData;
  }

  initializePlot() {
    this.pointGroup
      .selectAll("circle")
      .data(this.plotData)
      .enter()
      .append("circle")
      .attr("cx", (d) => this.xScale(d.xPre))
      .attr("cy", this.yScale(this.prePermutationRowNumber))
      .attr("r", this.circleRadius)
      .attr("fill", (d) => this.colorScale(d.color))
      .attr("stroke", "black");
  }

  transitionPlot() {
    this.pointGroup
      .selectAll("circle")
      .transition()
      .duration(5000)
      .attr("cx", (d) => this.xScale(d.xPost))
      .attr("cy", this.yScale(this.prePermutationRowNumber - 1));
  }
}

export default GenericRow;
