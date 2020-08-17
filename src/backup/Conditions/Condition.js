import React from 'react'
import { Link } from 'react-router-dom'
import "./css/Condition.css";
export default function Condition() {
    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                <div className="row">
                    <div className="col">
                        <table className="levelblocks">
                            
                                <tr>
                                    <Link to="/conditionlevel1">
                                        <td className="levelblock">1</td>
                                    </Link>
                                    <Link to="/conditionlevel2">
                                        <td className="levelblock">2</td>
                                    </Link>
                                    <Link to="/conditionlevel3">
                                        <td className="levelblock">3</td>
                                    </Link>
                                    <Link to="/conditionlevel4">
                                        <td className="levelblock">4</td>
                                    </Link>
                                    <Link to="/conditionlevel5">
                                        <td className="levelblock">5</td>
                                    </Link>
                                    <Link to="/conditionlevel6">
                                        <td className="levelblock">6</td>
                                    </Link>
                                    <Link to="/conditionlevel7">
                                        <td className="levelblock" id="one">7</td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link to="/condtion">
                                        <td className="levelblock-hidden"></td>
                                    </Link>
                                    <Link to="/condtion">
                                        <td className="levelblock-hidden"></td>
                                    </Link>
                                    <Link to="/condtion">
                                        <td className="levelblock-hidden"></td>
                                    </Link>
                                    <Link to="/condtion">
                                        <td className="levelblock-hidden"></td>
                                    </Link>
                                    <Link to="/condtion">
                                        <td className="levelblock-hidden"></td>
                                    </Link>
                                    <Link to="/condtion">
                                        <td className="levelblock-hidden"></td>
                                    </Link> 
                                    <Link to="/conditionlevel8">
                                        <td className="levelblock" id="one">8</td>
                                    </Link>
                                </tr>
                            
                        </table>
                    </div>
                </div><br /><br />
            </div>  
        </div>
    )
}
