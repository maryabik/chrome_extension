import React, {useState, useEffect, useCallback, useRef} from 'react';

import './App.css';

import {Button, Card, Input} from '@material-ui/core';
import {Link, Route, Routes, useNavigate, BrowserRouter as Router} from 'react-router-dom';
import {Types} from "./components/BubbleChart/types";

import BubbleChart from "./components/BubbleChart/BubbleChart";
import Pagination from "./components/Pagination/Pagination";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from "axios"

import Generated_password from "./components/Generated_password/Generated_password";
import Navigation from "./components/Navigation/Navigation";

function App() {

  const [data, setData] = useState([]);
  const [data1, setData1] = React.useState<Types.Data[]>(data.slice(1, 10))
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [word, setWord] = useState([]);
  const [password, setPassword] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //show components
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [id, setId] = useState("")
  let res;
  let i = 0;
  let initialState = [];

  useEffect(() => {
    const fetchPosts = async () => {
      // @ts-ignore
      res = await axios.get('https://hidden-journey-03583.herokuapp.com/getWords?number=100');
      setData(res.data);
      setPassword(initialState);
      setInputValue("");
    };
    fetchPosts();
  }, []);

  const changeData = () => {
    setData1(data1.slice(1, 100).sort(() => Math.random() - 0.5))
  }

  const setWords = () => {
    console.log(inputValue)
    console.log(password);

    let testWords =   {
      "choices": ["animals", "animals", "clothes", "animals", "animals", "animals", "animals", "sports", "games", "food", "9", "1", ":(", ":)"]
    }
    const article = { choices: word };

    let url = 'https://hidden-journey-03583.herokuapp.com/buildModel?client_id='+id;
    console.log(article);
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article)
      };
      // console.log(testWords);
      fetch(url, requestOptions)
          .then(r => check(r))
    } catch (error) {
     console.log(error)
    }

  }

  const check = (r) => {
console.log(r.status)
console.log("check")
    if (r.status == 200) {
        // setLoading(false);
      if(word.length < 14){
        alert("You have selected less than required words from the bubble clouds. You selected a total of " + word.length + " out of 14 words")
      } else {
        getPassword();
        setShow2(false)
        setShow(false)
        setShow1(true)
      }
    }
  }

  const getPassword = () => {
      axios.get('https://hidden-journey-03583.herokuapp.com/generatePassword/?n=3&client_id=' + id)
          .then(response => setPassword(response.data))
  }

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  const selectedKeyHandler = (key: string) => {

    // @ts-ignore
    setWord([...word, key])
  }

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const changePassword = () => {
    console.log("Changing password")
    i++;
    console.log(i)
    if(i < password.length){
      // @ts-ignore
      document.getElementById('pcount').value = password[i];
    }
    else if(i >= password.length - 1) {
      getPassword()
    }
  };

  const setCharts = () => {
    setShow(true)
    setShow1(false)
    setShow2(false)
    console.log(id)
  }

  const continuePassword = () => {
    setShow1(false)
    setShow(false)
    setShow2(true)
    getPassword()
    console.log(id)
  }

  // @ts-ignore
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

        <div className="input-group mb-3 id">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Participant's ID</span>
        </div>
        <input
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            value={id}
            onChange={e => setId(e.target.value)}
        />
          <button type="button" className="btn btn-dark" onClick={() => setCharts()}>Start</button>
          <br />
          <button type="button" className="btn btn-dark twoo" onClick={() => continuePassword()}>Generate Password</button>
    </div>

        {
          show?
              <><BubbleChart
                  bubblesData={currentPosts}
                  width={800}
                  height={400}
                  textFillColor="white"
                  minValue={1}
                  maxValue={150}
                  backgroundColor="white"
                  selectedCircle={selectedKeyHandler}
              />
                <div><h1 className="textP">{currentPage}/14</h1></div>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={data.length}
                  paginate={paginate}
                />
                <button type="submit" onClick={() => setWords()}>Generate Password</button>
              </>

          :null

        }

          <div className="card">
            {
              show1?
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">Password Card</h6>
              <p className="card-text">Check for interested password or reload for a new password.</p>
              <input
                  className="pcount"
                  id = "pcount"
                  type="text"
                  value={password[0]}
                  // onChange={e => setInputValue(e.target.value)}
              />
              {/*<CopyToClipboard text={inputValue} onCopy={() => setInputValue.length != 0 ? alert("Password Copied!") : null}>*/}
              {/*  <button>Copy</button>*/}
              {/*</CopyToClipboard>*/}

              <br />

              <div className="icons">
              <button  className="card-link" onClick={() => changePassword()}><i className=" icon fa fa-refresh fa-spin"></i></button>
              <button  className="card-link" onClick={() => alert("You have selected this password" + inputValue)}><i className=" icon fa fa-check"></i></button>
              </div>
            </div>
                  :null
            }
          </div>

        <div className="card">
          {
            show2?
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted">Password Card</h6>
                  <p className="card-text">Check for interested password or reload for a new password.</p>
                  <input
                      className="pcount"
                      id = "pcount"
                      type="text"
                      value={password[0]}
                      // onChange={e => setInputValue(e.target.value)}
                  />
                  {/*<CopyToClipboard text={inputValue} onCopy={() => setInputValue.length != 0 ? alert("Password Copied!") : null}>*/}
                  {/*  <button>Copy</button>*/}
                  {/*</CopyToClipboard>*/}

                  <br />

                  <div className="icons">
                    <button  className="card-link" onClick={() => changePassword()}><i className=" icon fa fa-refresh fa-spin"></i></button>
                    <button  className="card-link" onClick={() => alert("You have selected this password" + inputValue)}><i className=" icon fa fa-check"></i></button>
                  </div>
                </div>
                :null
          }
        </div>

      </header>
    </div>

  );
}

export default App;