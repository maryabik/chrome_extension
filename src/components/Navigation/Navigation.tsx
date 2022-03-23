import React from 'react';
import {Link, NavLink } from "react-router-dom";
import './Navigation.scss';
import {Button} from "@material-ui/core";

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
                <footer className="py-5 fixed-bottom float-right">
                    <div className="container">
                        <div>
                            <Link to="/">
                                <Button>
                                    <p>Bubble Charts!!!</p>
                                    <span className="sr-only">(current)</span>
                                </Button>
                            </Link>
                        </div>
                    <Link to="/password">
                        <Button>
                            <p>Generate Passwords!!!</p>
                        </Button>
                    </Link>
                    </div>

                </footer>
            </div>
        )
    }
}
