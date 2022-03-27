import React from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from "react-router-dom";
import './Navigation.scss';
import {Button} from "@material-ui/core";
import App from "../../App";
import Generated_password from "../Generated_password/Generated_password";

export default class Navigation extends React.PureComponent {
    render() {
        return(
        // <div>
        //         <button className="">
        //             <Link className="" to="/">
        //                 Home
        //                 <span className="sr-only">(current)</span>
        //             </Link>
        //         </button>
        //     <Link to="/password">
        //         <Button>
        //             <p>Click Me!</p>
        //         </Button>
        //     </Link>
        // </div>
            <div className="footer">
                    <div className="container">
                        <div>
                            <Link to="">
                                <Button>
                                    <p>Bubble Charts!!!</p>
                                    <span className="sr-only">(current)</span>
                                </Button>
                            </Link>
                        </div>
                    <Link to="password">
                        <Button>
                            <p>Generate Passwords!!!</p>
                        </Button>
                    </Link>
                    </div>
            </div>
        )
    }
}
