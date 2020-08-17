/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel14() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()
    function f1(e) {
        if (e.target.id === "eighteen" && move === 0) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "three" || e.target.id === "eight" || 
            e.target.id === "two" || e.target.id === "seventeen" || e.target.id === "seven" || 
            e.target.id === "one" || e.target.id === "sixteen" || e.target.id === "five" || 
            e.target.id === "four" || e.target.id === "twenty" )) {
            if ((move === 1||move==3) && e.target.id === "three") {
                console.log("three")
                setMove(move + 1)
                stepActive();
            } else if ((move === 2) && e.target.id === "eight") {
                console.log("eight")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 4||move==6||move==8) && e.target.id === "two") {
                console.log("two")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 5) && e.target.id === "seventeen") {
                console.log("seventeen")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 7) && e.target.id === "seven") {
                console.log("seven")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 9||move==11) && e.target.id === "one") {
                console.log("one")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 10) && e.target.id === "sixteen") {
                console.log("sixteen")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 12||move===14) && e.target.id === "five") {
                console.log("five")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 13) && e.target.id === "twenty") {
                console.log("five")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            }else if ((move === 15) && e.target.id === "four") {
                console.log("five")
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
                {move === 16 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel15">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel13">
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
                                            <td className={move > 10 ? 'myblock-yellow' : 'block-yellow'} id="one" onClick={f2}>
                                                {(move === 10||move===12) ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 5 ? 'myblock-white' : 'block-white'} id="two" onClick={f2}>
                                                {(move === 5||move===7||move===9) ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 0 ? 'myblock' : 'block'} id="three" onClick={f2}>
                                                {(move === 0||move===2||move==4) ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="four" onClick={f2}>
                                                {move === 16 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className={move > 13 ? 'myblock-yellow' : 'block-yellow'} id="five" onClick={f2}>
                                                {move === 13||move==15 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='block' id="six" onClick={f2}></td>
                                            <td className={move > 8 ? 'myblock-green' : 'block-green'} id="seven" onClick={f2}>
                                                {move === 8 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 3 ? 'myblock-yellow' : 'block-yellow'} id="eight" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-green' id="nine" onClick={f2}></td>
                                            <td className='block' id="ten" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className='block-white' id="eleven" onClick={f2}></td>
                                            <td className='block-yellow' id="twelve" onClick={f2}></td>
                                            <td className="block-green" id="thirteen" onClick={f2}></td>
                                            <td className="block-yellow" id="forteen" onClick={f2}></td>
                                            <td className='block-white' onClick={f2} id="fifteen"></td>
                                        </tr>
                                        <tr>
                                            <td className={move > 11 ? 'myblock-yellow' : 'block-yellow'} id="sixteen" onClick={f2}>
                                                {move === 11 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 6 ? 'myblock-white' : 'block-white'} id="seventeen" onClick={f2}>
                                                {move === 6 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 1 ? 'myblock' : 'block'} id="eighteen" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="nineteen" onClick={f2}></td>
                                            <td className={move > 14 ? 'myblock' : 'block'} id="twenty" onClick={f2}>
                                                {move === 14 ? <div className="blink" id="blink"></div> : ''}
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
                                            <td className="score"><b>Score:{move === 16 ? 1 : 0}</b></td>
                                        </tr>
                                        <div className={move >= 0 && move<=15 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">repeat (4) &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;<b>up()</b></td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;<b>down()</b></td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;if <span className="square-yellow-cross">&#10006;</span> &nbsp;&#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; down()</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; up()</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&#125;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;<b>left()</b></td>
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
