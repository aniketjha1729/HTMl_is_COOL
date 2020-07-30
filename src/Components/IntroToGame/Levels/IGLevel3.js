/* eslint-disable */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Level.css"
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert"; 

export default function IGLevel3() {
    const [move, setMove] = useState(0)
    const [stepActive]=useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);

    const f1 = (e) => {
        if (e.target.id === "two" && (move === 0 )) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    }

    const f2 = (e) => {
        if (move >= 1 &&
            (e.target.id === "eight" || e.target.id === "seven" || e.target.id === "one")) {
            if ((move === 1 ) && e.target.id === "eight") {
                console.log("eight")
                setMove(move + 1)
                stepActive();
            } else if (move === 2 && e.target.id === "seven") {
                console.log("seven")
                setMove(move + 1)
                stepActive();
            } else if (move === 3 && e.target.id === "one") {
                console.log("one")
                setMove(move + 1)
                rightActive();
                swal("Good job!", " ", "success");
            }  else {
                console.log("wrong Path")
                wrongActive()
                setMove(0)
                swal("Wrong Path!", "Start Again!", "warning");
            }
        } else {
            console.log("start form first")
            wrongActive();
            setMove(0)
            swal("Wrong Path!", "Plaese Start From beginning!", "warning");
        }
    }
    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                {move === 4 ?
                    <Link to="/">
                        <div className="row ">
                            <div className="col">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </div>
                        </div>
                    </Link> :
                    <Link to="/introtogamelevel2">
                        <div className="row ">
                            <div className="col">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg">Black</button>
                                </div>
                            </div>
                        </div>
                    </Link> 
                }
                <div className="row">
                    <div className="col-8">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        <tr>
                                            <td className={move>0?'myblock':'block'} id="one" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                                {move === 4 ? <div className="correctans" id="blink"><b>&#10003;</b></div>:''}
                                            </td>
                                            <td className={move>1?'myblock':'block'} id="two" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="three" onClick={f2}></td>
                                            <td className="block" id="four" onClick={f2}></td>
                                            <td className="block" id="five" onClick={f2}></td>
                                            <td className="block" id="six" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className={move>3?'myblock':'block'} id="seven" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move>2?'myblock':'block'} id="eight" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="nine" onClick={f2}></td>
                                            <td className="block" id="ten" onClick={f2}></td>
                                            <td className="block" id="eleven" onClick={f2}></td>
                                            <td className="block" id="twelve" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="thirteen" onClick={f2}></td>
                                            <td className="block" id="forteen" onClick={f2}></td>
                                            <td className="block" id="fifteen" onClick={f2}></td>
                                            <td className="block" id="sixteen" onClick={f2}></td>
                                            <td className="block" id="seventeen" onClick={f2}></td>
                                            <td className="block" id="eighteen" onClick={f2}></td>
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
                                        <tr>
                                            {move === 0 ? <td className="codec"><b>right()</b></td> : <td className="code"><b>right()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 1 ? <td className="codec"><b>down()</b></td> : <td className="code"><b>down()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 2 ? <td className="codec"><b>left()</b></td> : <td className="code"><b>up()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 3 ? <td className="codec"><b>up()</b></td> : <td className="code"><b>left()</b></td>}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    Click on square blocks as per instructions given on right side.
                </div>
            </div>
        </div>
    )
}
