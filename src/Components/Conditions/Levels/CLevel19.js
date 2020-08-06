/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel19() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()
    function f1(e) {
        if (e.target.id === "fifteen" && move === 0) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "nineteen" || e.target.id === "three" || e.target.id === "seven" ||
            e.target.id === "eleven")) {
            if (move === 1 && e.target.id === "nineteen") {
                console.log("nineteen")
                setMove(move + 1)
                stepActive();
            } else if ((move === 2) && e.target.id === "three") {
                console.log("three")
                setMove(move + 1)
                stepActive();
            } else if (move === 3 && e.target.id === "seven") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 4 && e.target.id === "eleven") {
                console.log("sixteen")
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
                {move === 5 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel16">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg">Back</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                }

                <div className="row">
                    <div className="col-8">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        <tr>
                                            <td className='block-white' id="one" onClick={f2}></td>
                                            <td className='block-white' id="two" onClick={f2}></td>
                                            <td className={move > 3 ? 'myblock-green' : 'block-green'} id="three" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="four" onClick={f2}></td>

                                        </tr>
                                        <tr>
                                            <td className='block-white' id="five" onClick={f2}></td>
                                            <td className='block-yellow' id="six" onClick={f2}></td>
                                            <td className={move > 4 ? 'myblock-green' : 'block-green'} id="seven" onClick={f2}>
                                                {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="eight" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className='block-white' id="nine" onClick={f2}></td>
                                            <td className='block-white' id="ten" onClick={f2}></td>
                                            <td className="block" id="eleven" onClick={f2}>
                                                {move === 5 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className='block-white' onClick={f2} id="twelve"></td>

                                        </tr>
                                        <tr>
                                            <td className='block-white' id="thirteen" onClick={f2}></td>
                                            <td className='block-green' id="forteen" onClick={f2}></td>
                                            <td className={move > 1 ? 'myblock-white' : 'block-white'} id="fifteen" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 0 ? 'myblock-yellow' : 'block-yellow'} id="sixteen" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>

                                        </tr>

                                        <tr>
                                            <td className="block-green" id="seventeen" onClick={f2}></td>
                                            <td className="block-white" id="eighteen" onClick={f2}></td>
                                            <td className={move > 2 ? 'myblock-white' : 'block-white'} id="nineteen" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block-white" id="twenty" onClick={f2}></td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div className="container">
                                <table className="codes">
                                    <tbody>
                                        <tr>
                                            <td className="score"><b>Score:{move}</b></td>
                                        </tr>
                                        <div className={move >= 0 && move <= 4 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">repeat (5) &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;if <span className="square-yellow-cross">&#10006;</span> &nbsp;&#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;down()</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;&#125; else &#123; </td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<b>left()</b></td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;&#125;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&#125;</td>
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
