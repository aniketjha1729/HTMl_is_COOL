import React from 'react'
import "./css/main.css"
import { Link } from 'react-router-dom'
export default function Welcome() {
    return (
        <div className="container">
            <br />
            <br />
            <div className="row">
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Print Game</h5>
                            <p className="card-text">Print Game</p>
                            <Link to="/print">
                                <button type="button" className="btn btn-primary">Start</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Games:Condition</h5>
                            <p className="card-text">Condition Games</p>
                            <Link to="/conditions">
                                <button type="button" className="btn btn-primary">Start</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Games:Looping</h5>
                            <p className="card-text">Loops Using Games</p>
                            <a href="#" className="btn btn-primary">
                                Start
                </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Games:For Loop</h5>
                            <p className="card-text">Loops Using Games</p>
                            <a href="#" className="btn btn-primary">
                                Start
                </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Games:While Loop</h5>
                            <p className="card-text">Learn While Loop</p>
                            <a href="#" className="btn btn-primary">
                                Start
                </a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 ">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Games: Function</h5>
                            <p className="card-text">Learn Function using Games</p>
                            <a href="#" className="btn btn-primary">
                                Start
                </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
