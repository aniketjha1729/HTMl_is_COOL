/* eslint-disable */
import React from 'react'
import {Link } from 'react-router-dom'
import "./css/Intro.css";

export default function IntroToGame() {
    
    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                <div className="row">
                    <div className="col-6">
                        <table className="blocks">
                            <tbody>
                                <tr>
                                    <Link to="/introtogamelevel1">
                                        <td className="block" id="one">1</td>
                                    </Link>
                                    <Link to="/introtogamelevel2">
                                        <td className="block" id="two">2</td>
                                    </Link>
                                    <Link to="/introtogamelevel3">
                                        <td className="block" id="three">3</td>
                                    </Link>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div><br/><br/>
            </div>  
        </div>
    )
}
