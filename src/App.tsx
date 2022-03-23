import React, {useState, useEffect, useCallback} from 'react';

import './App.css';
import {Button, Card} from '@material-ui/core';
import {Link, Route, Routes, useNavigate, BrowserRouter as Router} from 'react-router-dom';
import {Types} from "./components/BubbleChart/types";

import BubbleChart from "./components/BubbleChart/BubbleChart";
import Pagination from "./components/Pagination/Pagination";

import Generated_password from "./components/Generated_password/Generated_password";
import Navigation from "./components/Navigation/Navigation";


function App() {

  const d: Types.Data[] = [
    { id: 1, name: 'Rabbit', size: 150, fillColor: '#A8E6CE' },
    { id: 2, name: 'Dog', size: 150, fillColor: '#A8E6CE' },
    { id: 3, name: 'Hoody', size: 150, fillColor: '#FFD3B5' },
    { id: 4, name: 'Jeans', size: 150, fillColor: '#FFD3B5' },
    { id: 5, name: 'Coffee', size: 150, fillColor: '#DCEDC2' },
    { id: 6, name: 'Yogurt', size: 150, fillColor: '#DCEDC2' },
    { id: 7, name: 'Pizza', size: 150, fillColor: '#FFAAA6' },
    { id: 8, name: 'Pasta ', size: 150, fillColor: '#FFAAA6' },
    { id: 9, name: 'Swim', size: 150, fillColor: '#FF8C94' },
    { id: 10, name: 'Jog', size: 150, fillColor: '#FF8C94' },
      //
    { id: 11, name: 'Cat', size: 150, fillColor: '#A8E6CE' },
    { id: 12, name: 'Goat', size: 150, fillColor: '#A8E6CE' },
    { id: 13, name: 'Hoody', size: 150, fillColor: '#FFD3B5' },
    { id: 14, name: 'Jeans', size: 150, fillColor: '#FFD3B5' },
    { id: 15, name: 'Coffee', size: 150, fillColor: '#DCEDC2' },
    { id: 16, name: 'Milk', size: 150, fillColor: '#DCEDC2' },
    { id: 17, name: 'Pizza', size: 150, fillColor: '#FFAAA6' },
    { id: 18, name: 'Pasta ', size: 150, fillColor: '#FFAAA6' },
    { id: 19, name: 'Swim', size: 150, fillColor: '#FF8C94' },
    { id: 20, name: 'Jog', size: 150, fillColor: '#FF8C94' },

    { id: 21, name: 'Horse', size: 150, fillColor: '#A8E6CE' },
    { id: 22, name: 'Mice', size: 150, fillColor: '#A8E6CE' },
    { id: 23, name: 'Hoody', size: 150, fillColor: '#FFD3B5' },
    { id: 24, name: 'Jeans', size: 150, fillColor: '#FFD3B5' },
    { id: 25, name: 'Coffee', size: 150, fillColor: '#DCEDC2' },
    { id: 26, name: 'Yogurt', size: 150, fillColor: '#DCEDC2' },
    { id: 27, name: 'Sushi', size: 150, fillColor: '#FFAAA6' },
    { id: 28, name: 'Pasta ', size: 150, fillColor: '#FFAAA6' },
    { id: 29, name: 'Swim', size: 150, fillColor: '#FF8C94' },
    { id: 30, name: 'Jog', size: 150, fillColor: '#FF8C94' },

    { id: 31, name: 'Rabbit', size: 150, fillColor: '#A8E6CE' },
    { id: 32, name: 'Dog', size: 150, fillColor: '#A8E6CE' },
    { id: 33, name: 'Hoody', size: 150, fillColor: '#FFD3B5' },
    { id: 34, name: 'Jeans', size: 150, fillColor: '#FFD3B5' },
    { id: 35, name: 'Coffee', size: 150, fillColor: '#DCEDC2' },
    { id: 36, name: 'Yogurt', size: 150, fillColor: '#DCEDC2' },
    { id: 37, name: 'Pizza', size: 150, fillColor: '#FFAAA6' },
    { id: 38, name: 'Pasta ', size: 150, fillColor: '#FFAAA6' },
    { id: 39, name: 'Swim', size: 150, fillColor: '#FF8C94' },
    { id: 40, name: 'Jog', size: 150, fillColor: '#FF8C94' },

    { id: 41, name: 'Rabbit', size: 150, fillColor: '#A8E6CE' },
    { id: 42, name: 'Dog', size: 150, fillColor: '#A8E6CE' },
    { id: 43, name: 'Hoody', size: 150, fillColor: '#FFD3B5' },
    { id: 44, name: 'Jeans', size: 150, fillColor: '#FFD3B5' },
    { id: 45, name: 'Coffee', size: 150, fillColor: '#DCEDC2' },
    { id: 46, name: 'Yogurt', size: 150, fillColor: '#DCEDC2' },
    { id: 47, name: 'Pizza', size: 150, fillColor: '#FFAAA6' },
    { id: 48, name: 'Pasta ', size: 150, fillColor: '#FFAAA6' },
    { id: 49, name: 'Swim', size: 150, fillColor: '#FF8C94' },
    { id: 50, name: 'Jog', size: 150, fillColor: '#FF8C94' },

    { id: 51, name: '0', size: 150, fillColor: '#A8E6CE' },
    { id: 52, name: '1', size: 150, fillColor: '#A8E6CE' },
    { id: 53, name: '2', size: 150, fillColor: '#FFD3B5' },
    { id: 54, name: '3', size: 150, fillColor: '#FFD3B5' },
    { id: 55, name: '4', size: 150, fillColor: '#DCEDC2' },
    { id: 56, name: '5', size: 150, fillColor: '#DCEDC2' },
    { id: 57, name: '6', size: 150, fillColor: '#FFAAA6' },
    { id: 58, name: '7 ', size: 150, fillColor: '#FFAAA6' },
    { id: 59, name: '8', size: 150, fillColor: '#FF8C94' },
    { id: 60, name: '9', size: 150, fillColor: '#FF8C94' },

    { id: 61, name: ':o', size: 150, fillColor: '#A8E6CE' },
    { id: 62, name: ':/', size: 150, fillColor: '#A8E6CE' },
    { id: 63, name: ':D', size: 150, fillColor: '#FFD3B5' },
    { id: 64, name: ';)', size: 150, fillColor: '#FFD3B5' },
    { id: 65, name: ':)', size: 150, fillColor: '#DCEDC2' },
    { id: 66, name: ':(', size: 150, fillColor: '#DCEDC2' },
    { id: 67, name: '=)', size: 150, fillColor: '#FFAAA6' },
    { id: 68, name: ':(( ', size: 150, fillColor: '#FFAAA6' },
    { id: 69, name: '<3', size: 150, fillColor: '#FF8C94' },
    { id: 70, name: ':s', size: 150, fillColor: '#FF8C94' },
  ]

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // setData(res.data);
      // @ts-ignore
      setData(d)
    };
    fetchPosts();
  }, []);

// Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const [active, setActive] = useState("FirstCard")

  const words = []

  const changeData = () => {
    // @ts-ignore
    setData(d)
  }

  const selectedKeyHandler = (key: string) => {
    // @ts-ignore
    words.push(key)
    // eslint-disable-next-line no-alert
    //  alert(words)
    alert('You have selected: ' + key);
  }

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="App">
      <h1>Word Cloud</h1>
      <header className="App-header">
        <Button
            className="appButtonFixed"
            variant="contained"
            color="default"
            onClick={() => {
              changeData()
            }}
        >
          Spread Out Bubbles
        </Button>

        <BubbleChart
            bubblesData={currentPosts}
            width={800}
            height ={600}
            textFillColor="white"
            minValue={1}
            maxValue={150}
            backgroundColor="white"
            selectedCircle={selectedKeyHandler}
        />
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
        />

        {/*<a className="btn btn-primary" href="/password" role="button">Link</a>*/}
        {/*<button className="btn btn-primary" type="submit"><a href="/password"></a>Button</button>*/}

        <a href="/password">
          <input type="submit" value = "Generate Password"/>
        </a>

      </header>
    </div>
  );

}

export default App;