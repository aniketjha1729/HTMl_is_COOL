/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel6() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()
    function f1(e) {
        if (e.target.id === "two" && move === 0) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "three" || e.target.id === "four" ||e.target.id === "ten")) {
            if (move === 1 && e.target.id === "three") {
                console.log("three")
                setMove(move + 1)
                stepActive();
            } else if ((move === 2) && e.target.id === "four") {
                console.log("four")
                setMove(move + 1)
                stepActive();
            } else if (move === 3 && e.target.id === "ten") {
                console.log("ten")
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
                {move === 4 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel7">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel5">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg">Back</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                }
                <br/>
                <div className="row">
                    <div className="col-8">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        <tr>
                                            <td className={move > 0 ? 'myblock' : 'block'} id="one" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 1 ? 'myblock' : 'block'} id="two" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 2 ? 'myblock' : 'block'} id="three" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 3 ? 'myblock-white' : 'block-white'} id="four" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="five" onClick={f2}></td>
                                            <td className="block-white" id="six" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className='block' id="seven" onClick={f2}></td>
                                            <td className='block-white' id="eight" onClick={f1}></td>
                                            <td className='block' id="nine" onClick={f2}></td>
                                            <td className='block-white' id="ten" onClick={f2}>
                                                {move === 4 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className="block" id="eleven" onClick={f2}></td>
                                            <td className="block-white" id="twelve" onClick={f2}></td>
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
                                            <td className="score"><b>Score:{move === 4 ? 1 : 0}</b></td>
                                        </tr>
                                        <div className={move <= 2 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">repeat(180) &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;if <b className="square">&#9632;</b> &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; right()</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;&#125;</td>
                                            </tr>
                                            <tr>
                                                <td className="code">&#125;</td>
                                            </tr>
                                        </div>
                                        <div className={move === 3 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code"><b>down()</b></td>
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