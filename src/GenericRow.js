import { timer } from "d3";

class GenericRow {
  constructor(
    basePlot,
    prePermutationRowNumber,
    arrayOfImagesPrePermutation,
    arrayOfImagesPostPermutation,
    timerDelay
  ) {
    this.pointGroup = basePlot.mainViz.append("g");
    this.prePermutationRowNumber = prePermutationRowNumber;
    this.arrayOfImagesPrePermutation = arrayOfImagesPrePermutation;
    this.arrayOfImagesPostPermutation = arrayOfImagesPostPermutation;
    this.xScale = basePlot.xScale;
    this.yScale = basePlot.yScale;
    this.colorScale = basePlot.colorScale;
    this.numElements = basePlot.numElements;
    this.circleRadius = basePlot.circleRadius;
    this.timerDelay = timerDelay;
  }

  makePlotData() {
    const plotData = [];
    for (let j = 0; j < this.numElements; j++) {
      const tempObject = {};
      tempObject.xPre = this.arrayOfImagesPrePermutation[j];
      tempObject.xPost = this.arrayOfImagesPostPermutation[j];
      tempObject.color = j;
      plotData.push(tempObject);
    }
    this.plotData = plotData;
    console.log(this.plotData);
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
      .duration(this.timerDelay)
      .attr("cx", (d) => this.xScale(d.xPost))
      .attr("cy", this.yScale(this.prePermutationRowNumber - 1));
  }
}

export default GenericRow;
