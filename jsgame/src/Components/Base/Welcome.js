import React from 'react'
import "./css/style.css"
export default function Welcome() {
    return (
        
        <div className="container">
        <br/><br/>
            {/* <div className="row gameMenuRow">
                <div className="col-4">Intro To Games</div>
                <div className="col-4">Games:Condition</div>
                <div className="col-4">Games:Looping</div>
            </div>
            <div className="row gameMenuRow">
                <div className="col-4">Games:For Loop</div>
                <div className="col-4">Games:While Loop</div>
                <div className="col-4">Games:Looping</div>
            </div> */}
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Intro To Game</h5>
                            <p className="card-text">Simple Logical Game</p>
                            <a href="#" className="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Games:Condition</h5>
                            <p className="card-text">Control Flow Games</p>
                            <a href="#" className="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Games:Looping</h5>
                            <p className="card-text">Loops Using Games</p>
                            <a href="#" className="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-4">
                    <div className="card">
            
                        <div className="card-body">
                            <h5 className="card-title">Games:For Loop</h5>
                            <p className="card-text">Loops Using Games</p>
                            <a href="#" className="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Games:While Loop</h5>
                            <p className="card-text">Learn While Loop</p>
                            <a href="#" className="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        
                        <div className="card-body">
                            <h5 className="card-title">Games: Function</h5>
                            <p className="card-text">Learn Function using Games</p>
                            <a href="#" className="btn btn-primary">Start</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
