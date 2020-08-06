/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel5() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()
    function f1(e) {
        if (e.target.id === "one" && move === 0) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "two" || e.target.id === "three" || e.target.id === "seven" ||
            e.target.id === "eight" || e.target.id === "nine" || e.target.id === "ten" ||
             e.target.id === "twelve"||e.target.id === "forteen" ||e.target.id === "fifteen" ||
            e.target.id === "sixteen" || e.target.id === "twenty")) {
            if (move === 1 && e.target.id === "two") {
                console.log("two")
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
            } else if (move === 4 && e.target.id === "eight") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 5 && e.target.id === "twelve") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 6 && e.target.id === "nine") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 7 && e.target.id === "ten") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 8 && e.target.id === "forteen") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 9 && e.target.id === "fifteen") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 10 && e.target.id === "sixteen") {
                console.log("seven")
                setMove(move + 1)
                stepActive()
            } else if (move === 11 && e.target.id === "twenty") {
                console.log("seven")
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
                {move === 12 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel6">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel4">
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
                                            <td className={move > 1 ? 'myblock-yellow' : 'block-yellow'} id="one" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 2 ? 'myblock-yellow' : 'block-yellow'} id="two" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 3 ? 'myblock-yellow' : 'block-yellow'} id="three" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block-yellow" id="four" onClick={f2}></td>
                                            
                                        </tr>
                                        <tr>
                                            <td className={move > 0 ? 'myblock-green' : 'block-green'}  id="five" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block-yellow" id="six" onClick={f2}>
                                                
                                            </td>
                                            <td className={move > 4 ? 'myblock-yellow' : 'block-yellow'} id="seven" onClick={f2}>
                                                {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 5 ? 'myblock-green' : 'block-green'} id="eight" onClick={f2}>
                                                {move === 5 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={move > 7 ? 'myblock-yellow' : 'block-yellow'} id="nine" onClick={f2}>
                                                {move === 7 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 8 ? 'myblock-yellow' : 'block-yellow'} id="ten" onClick={f2}>
                                                {move === 8 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block-yellow" id="eleven" onClick={f2}>

                                            </td>
                                            <td className={move > 6 ? 'myblock-green' : 'block-green'} onClick={f2} id="twelve">
                                                {move === 6 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="block-yellow" id="thirteen" onClick={f2}></td>
                                            <td className={move > 9 ? 'myblock-yellow' : 'block-yellow'} id="forteen" onClick={f2}>
                                                {move === 9 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 10 ? 'myblock-yellow' : 'block-yellow'} id="fifteen" onClick={f2}>
                                                {move === 10 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 11 ? 'myblock-yellow' : 'block-yellow'} id="sixteen" onClick={f2}>
                                                {move === 11 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            
                                        </tr>

                                        <tr>
                                            <td className="block-green" id="seventeen" onClick={f2}></td>
                                            <td className="block-yellow" id="eighteen" onClick={f2}></td>
                                            <td className="block-yellow" id="nineteen" onClick={f2}></td>
                                            <td className="block-yellow" id="twenty" onClick={f2}>
                                                {move === 12 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            
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
                                        <div className={move === 0 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">up()</td>
                                            </tr>
                                        </div>
                                        <div className={move >=1 && move<=12 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">repeat (4) &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;right()</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;if <b className="square-yellow">&#9632;</b> &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; right()</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;&#125;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;<b>down()</b></td>
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
