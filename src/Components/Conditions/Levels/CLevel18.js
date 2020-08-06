/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel18() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()
    function f1(e) {
        if (e.target.id === "ten" && (move === 0||move===8)) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "six" ||e.target.id === "eleven" || e.target.id === "twelve" || 
        e.target.id === "seventeen" ||e.target.id === "sixteen" || e.target.id === "one" || 
            e.target.id === "five" || e.target.id === "nine")) {
            if ((move === 1) && e.target.id === "six") {
                console.log("six")
                setMove(move + 1)
                stepActive();
            } else if ((move === 2) && e.target.id === "eleven") {
                console.log("eleven")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 3) && e.target.id === "twelve") {
                console.log("twelve")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 4) && e.target.id === "seventeen") {
                console.log("seventeen")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 5) && e.target.id === "sixteen") {
                console.log("sixteen")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 6) && e.target.id === "one") {
                console.log("one")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 7) && e.target.id === "five") {
                console.log("five")
                setMove(move + 1)
                setMove(move + 1)
                stepActive();
            } else if ((move === 9) && e.target.id === "nine") {
                console.log("nine")
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
                {move === 10 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel19">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel17">
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
                                            <td className={move > 7 ? 'myblock-white' : 'block-white'} id="one" onClick={f2}>
                                                {move === 7 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block' id="two" onClick={f2}></td>
                                            <td className='block-white' id="three" onClick={f2}></td>
                                            <td className='block-white' id="four" onClick={f2}></td>
                                            <td className={move > 8 ? 'myblock' : 'block'} id="five" onClick={f2}>
                                                {move === 8 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={move > 2 ? 'myblock' : 'block'} id="six" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block' id="seven" onClick={f2}></td>
                                            <td className='block-green' id="eight" onClick={f2}></td>
                                            <td className={move > 0 ? 'myblock-yellow' : 'block-yellow'} id="nine" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                                {move === 10 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className={move > 1 ? 'myblock-yellow' : 'block-yellow'} id="ten" onClick={f1}>
                                                {move === 1||move===9 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={move > 3 ? 'myblock-yellow' : 'block-yellow'} id="eleven" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 4 ? 'myblock-blue' : 'block-blue'} id="twelve" onClick={f2}>
                                                {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block-green" id="thirteen" onClick={f2}></td>
                                            <td className="block-yellow" id="forteen" onClick={f2}></td>
                                            <td className='block-blue' onClick={f2} id="fifteen"></td>
                                        </tr>
                                        <tr>
                                            <td className={move > 6 ? 'myblock-green' : 'block-green'} id="sixteen" onClick={f2}>
                                                {move === 6 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 5 ? 'myblock-white' : 'block-white'} id="seventeen" onClick={f2}>
                                                {move === 5 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="eighteen" onClick={f2}></td>
                                            <td className='block-white' id="nineteen" onClick={f2}></td>
                                            <td className='block-blue' id="twenty" onClick={f2}>
                                                
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
                                                <td className="code">right()</td>
                                            </tr>
                                        </div>
                                        <div className={move >=1 && move<=8 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">repeat (4) &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;if <b className="square-yellow">&#9632;</b> &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<b>right()</b></td>
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
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;down()</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&#125;</td>
                                            </tr>
                                        </div>
                                        <div className={move === 9 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">left()</td>
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
