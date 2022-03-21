/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/BubbleChart/BubbleChart.BubbleChart.test.tsx
*/

import React from 'react'
// @ts-ignore
import { shallow } from 'enzyme'
import BubbleChart from './BubbleChart'

describe('<BubbleChart />', () => {
  let component

  beforeEach(() => {
    component = shallow(
          <BubbleChart bubblesData={[]} width={800} height={600} textFillColor="drakgrey" backgroundColor="#ffffff" minValue={1} maxValue={150} />
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
