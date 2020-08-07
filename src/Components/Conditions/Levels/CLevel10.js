/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel10() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()

    function f1(e) {
        if (e.target.id === "five" && move === 0) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "two" || e.target.id === "three")) {
            if (move === 1 && e.target.id === "two") {
                console.log("two")
                setMove(move + 1)
                stepActive();
            } else if (move === 2 && e.target.id === "three") {
                console.log("one")
                setMove(move + 1)
                rightActive()
                swal("Good job!", " ", "success")
            } else {
                console.log("wrong Path")
                wrongActive()
                setMove(0)
                swal("Wrong Path!", "Start Again!", "warning");
            }
        } else {
            console.log("start form first")
            wrongActive()
            setMove(0)
            swal("Wrong Path!", "Plaese Start From beginning!", "warning");
        }
    }
    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                {move === 3 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel11">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel9">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg">Back</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col-7">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        <tr>  
                                            <td className='block' id="one" onClick={f2}></td>
                                            <td className='block-white' id="two" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="three" onClick={f2}>
                                                {move === 3 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>  
                                        </tr>
                                        <tr>
                                            <td className='block-white' id="four" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="five" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block' id="six" onClick={f2}></td>    
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div>
                            <div className="container">
                                <table className="codes">
                                    <tbody>
                                        <tr>
                                            <td className="score"><b>Score:{move === 3 ? 1 : 0}</b></td>
                                        </tr>
                                        <div className={move === 0 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">right();</td>
                                            </tr>
                                        </div>
                                        <div className={move === 1 ? 'codec' : ''}>
                                            <tr>
                                                <td className="coder">if <span className="square-red-cross">&#10006;</span> &nbsp;&#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp; down()</td>
                                            </tr>
                                            
                                            <tr>
                                                <td className="coder">&#125;</td>
                                            </tr>
                                        </div>
                                        <div className={move === 2  ? 'codec' : ''}>
                                            <tr>
                                                <td className="code"><b>right()</b></td>
                                            </tr>
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <div className="footer">
                    Click on square blocks as per instructions given on right side.
                </div>
            </div>
        </div>
    )
}
