/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BubbleChart/types.ts
*/

export namespace Types {
  export type Data = {
    id: number
    name: string
    size: number
    fillColor: string
  }

  export type ForceData = {
    size: number
  }

  export type ForceDataComplete = {
    size: number
    x: number
    y: number
    v: number
  }
}
