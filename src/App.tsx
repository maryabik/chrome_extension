import React from 'react';

import './App.css';
import { Button } from '@material-ui/core'
import {Types} from "./components/BubbleChart/types";
import BubbleChart from "./components/BubbleChart/BubbleChart";

function App() {

  // const d: Types.Data[] = [
  //   { id: 1, name: 'Rabbit', size: 150, fillColor: '#A8E6CE' },
  //   { id: 2, name: 'Dog', size: 150, fillColor: '#A8E6CE' },
  //   { id: 3, name: 'Hoody', size: 150, fillColor: '#FFD3B5' },
  //   { id: 4, name: 'Jeans', size: 150, fillColor: '#FFD3B5' },
  //   { id: 5, name: 'Coffee', size: 150, fillColor: '#DCEDC2' },
  //   { id: 6, name: 'Yogurt', size: 150, fillColor: '#DCEDC2' },
  //   { id: 7, name: 'Pizza', size: 150, fillColor: '#FFAAA6' },
  //   { id: 8, name: 'Pasta ', size: 150, fillColor: '#FFAAA6' },
  //   { id: 9, name: 'Swim', size: 150, fillColor: '#FF8C94' },
  //   { id: 10, name: 'Jog', size: 150, fillColor: '#FF8C94' },
  // ]

  // const d: Types.Data[] = [
  //   { id: 1, name: '0', size: 150, fillColor: '#A8E6CE' },
  //   { id: 2, name: '1', size: 150, fillColor: '#A8E6CE' },
  //   { id: 3, name: '2', size: 150, fillColor: '#FFD3B5' },
  //   { id: 4, name: '3', size: 150, fillColor: '#FFD3B5' },
  //   { id: 5, name: '4', size: 150, fillColor: '#DCEDC2' },
  //   { id: 6, name: '5', size: 150, fillColor: '#DCEDC2' },
  //   { id: 7, name: '6', size: 150, fillColor: '#FFAAA6' },
  //   { id: 8, name: '7 ', size: 150, fillColor: '#FFAAA6' },
  //   { id: 9, name: '8', size: 150, fillColor: '#FF8C94' },
  //   { id: 10, name: '9', size: 150, fillColor: '#FF8C94' },
  // ]

  const d: Types.Data[] = [
    { id: 1, name: ':o', size: 150, fillColor: '#A8E6CE' },
    { id: 2, name: ':/', size: 150, fillColor: '#A8E6CE' },
    { id: 3, name: ':D', size: 150, fillColor: '#FFD3B5' },
    { id: 4, name: ';)', size: 150, fillColor: '#FFD3B5' },
    { id: 5, name: ':)', size: 150, fillColor: '#DCEDC2' },
    { id: 6, name: ':(', size: 150, fillColor: '#DCEDC2' },
    { id: 7, name: '=)', size: 150, fillColor: '#FFAAA6' },
    { id: 8, name: ':(( ', size: 150, fillColor: '#FFAAA6' },
    { id: 9, name: '<3', size: 150, fillColor: '#FF8C94' },
    { id: 10, name: ':s', size: 150, fillColor: '#FF8C94' },
  ]

  const [data, setData] = React.useState<Types.Data[]>(d.slice(1,10))
  const words = []

  const changeData = () => {
    setData(d.sort(() => Math.random() - 0.5))
  }

  const selectedKeyHandler = (key: string) => {
    // @ts-ignore
    words.push(key)
    // eslint-disable-next-line no-alert
    // alert(words)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Button
            className="appButtonFixed"
            variant="contained"
            color="default"
            onClick={() => {
              changeData()
            }}
        >
          Change data
        </Button>

        <BubbleChart
            bubblesData={data}
            width={800}
            height ={600}
            textFillColor="white"
            minValue={1}
            maxValue={150}
            backgroundColor="white"
            selectedCircle={selectedKeyHandler}
        />

      </header>
    </div>
  );
}

export default App;
