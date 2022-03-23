import React from 'react';
import './Generated_password.css';

export default class Generated_password extends React.PureComponent {
    render() {
        return(
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title text-center">Password Card</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">
                            Check for interested password or
                            reload for a new password.
                        </p>
                        <input/>
                        <button  className="card-link" onClick={() => this.fetchData()}><i className=" icon1 fa fa-refresh fa-spin"></i></button>
                        <button  className="card-link" onClick={() => alert("You have selected this password")}><i className=" icon2 fa fa-check"></i></button>
                    </div>
                </div>
            </>
            )
    }

    fetchData = () => {
        return <Generated_password />
    };
}

