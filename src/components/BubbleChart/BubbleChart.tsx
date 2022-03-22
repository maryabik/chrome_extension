/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BubbleChart/BubbleChart.tsx
*/

import React, { RefObject } from 'react'
import './BubbleChart.css'
import * as d3 from 'd3'
import {Types} from "./types";
import {index, Simulation, SimulationNodeDatum} from "d3"; // yarn add d3 @types/d3

const  uuid = require('react-uuid')
import { Button } from '@material-ui/core'
import './BubbleChart.css'

export default class BubbleChart extends React.PureComponent<IBubbleChartProps, IBubbleChartState> {

  public forceData: Types.ForceData[]
  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined


  constructor(props: IBubbleChartProps) {
    super(props)
    this.state = {
      data: []
    }
    this.forceData = this.setForceData(props)
  }

  componentDidMount() {
    this.animateBubbles()
  }

  componentDidUpdate(prevProps: IBubbleChartProps, prevState: IBubbleChartState) {
    if (JSON.stringify(prevProps.bubblesData) !== JSON.stringify(this.props.bubblesData)) {
      this.forceData = this.setForceData(this.props)
      this.animateBubbles()
    }
  }

  setForceData = (props: IBubbleChartProps) => {
    const d = []
    for (let i = 0; i < props.bubblesData.length; i++) {
      // @ts-ignore
      d.push({'size': props.bubblesData[i].size})
    }
    return d
}

  animateBubbles = () => {
    if(this.props.bubblesData.length > 0) {
      this.simulatePositions(this.forceData)
    }
  }
  simulatePositions = (data: Types.ForceData[]) => {
    this.simulation = d3
        .forceSimulation()
        .nodes(data as SimulationNodeDatum[])
        .velocityDecay( 0.05)
        . force('x', d3.forceX().strength(0.2))
        . force('y', d3.forceY().strength(0.2))
        .force(
            'collide,',
            d3.forceCollide((d) => {
              return this.radiusScale((d as Types.ForceData).size)
            })
        )
        .on('tick', () =>{
          this.setState({data})
        })
  }
  radiusScale = (value: d3.NumberValue) => {
    const  fx = d3
        .scaleSqrt()
        .range([1, 50])
        .domain([this.props.minValue, this.props.maxValue])
    return fx(value)
  }
  renderBubbles = (data: [])=> {
    return data.map((item : Types.ForceDataComplete, index) => {
      const {props} = this
      const fontSize = this.radiusScale((item as unknown as Types.ForceData).size) / 3
      const content = props.bubblesData.length > index ? props.bubblesData[index].name : ''
      const strokeColor = props.bubblesData.length > index ? 'black' : this.props.backgroundColor
      return (
         <g
             key={`g=${uuid}`}
             transform={`translate(${this.props.width/2 + item.x - 70}, ${this.props.height/2 + item.y})`}
         >
           <circle
               style={{cursor: 'pointer'}}
               r={this.radiusScale(item.size)}
               fill={props.bubblesData[index].fillColor}
               stroke={strokeColor}
               strokeWidth="2"
               onClick={() => {
                 this.props.selectedCircle(content)
               }}
           />
           <text
               className="bubbleText"
           fill={this.props.textFillColor}
           textAnchor="middle"
           fontSize={`${fontSize}px`}
           fontWeight="normal"
           dy="10"
           >
             {content}
           </text>
         </g>
      )
    })
  }
  render() {
    return (
        <>
          <div>
            {/*<Button*/}
            {/*    className="buttonFixed"*/}
            {/*    variant="contained"*/}
            {/*    color="default"*/}
            {/*    onClick={() => {*/}
            {/*      this.animateBubbles();*/}
            {/*    }}*/}
            {/*>*/}
            {/*  Animate*/}
            {/*</Button>*/}

            <div aria-hidden="true" id="chart" style={{background: this.props.backgroundColor, cursor: 'pointer'}}>
              <svg width={this.props.width} height={this.props.height}>
                {this.renderBubbles(this.state.data as [])}
              </svg>
            </div>
          </div>
          <div className="chart" style={{background: this.props.backgroundColor, cursor: 'pointer'}}>
            <svg
                width={this.props.width}
                height={this.props.height}
            >
              {this.renderBubbles(this.state.data as [])}
            </svg>
          </div>
        </>
    )
  }
}

interface IBubbleChartProps {
  bubblesData: Types.Data[]
  width: number
  height: number
  backgroundColor: string
  textFillColor: string
  minValue: number
  maxValue: number
  selectedCircle: (content: string) => void
}

interface IBubbleChartState {
  data: Types.ForceData[]

}