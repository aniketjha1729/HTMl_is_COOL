/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel1() {
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
        if (move >= 1 && (e.target.id === "five" || e.target.id === "six" || e.target.id === "nine")) {
            if (move === 1 && e.target.id === "six") {
                console.log("six")
                setMove(move + 1)
                stepActive();
            } else if ((move === 2 || move===4 )&& e.target.id === "five") {
                console.log("five")
                setMove(move + 1)
                stepActive();
                if(move===4){
                    setMove(move + 1)
                    rightActive()
                    swal("Good job!", " ", "success")
                }
            } else if (move === 3 && e.target.id === "nine") {
                console.log("nine")
                setMove(move + 1)
                stepActive();

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
                            <Link to="/conditionlevel2">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className="row ">
                        <div className="col">
                            <Link to="/">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg">Back</button>
                                </div>
                            </Link>
                        </div>
                    </div>

                }

                <div className="row">
                    <div className="col-6">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        <tr>
                                            <td className={move > 0 ? 'myblock-white' : 'block-white'} onClick={f2} id="one">
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 1 ? 'myblock' : 'block'} id="two" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block-white" id="three" onClick={f2}></td>
                                            <td className="block" id="four" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className={move > 3 ? 'myblock' : 'block'} id="five" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                                {move === 5 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className={move > 2 ? 'myblock-white' : 'block-white'} id="six" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="seven" onClick={f2}></td>
                                            <td className="block-white" id="eight" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className={move > 4 ? 'myblock-white' : 'block-white'} id="nine" onClick={f2}>
                                                {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                               
                                            </td>
                                            <td className="block" id="ten" onClick={f2}></td>
                                            <td className="block-white" id="eleven" onClick={f2}></td>
                                            <td className="block" id="twelve" onClick={f2}></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <div className="container">
                                <table className="codes">
                                    <tbody>
                                        <tr>
                                            <td className="score"><b>Score:{move === 5 ? 1 : 0}</b></td>
                                        </tr>
                                        <div className={move===0?'codec':''}>
                                            <tr>
                                                <td className="code">right()</td>
                                            </tr>
                                        </div>
                                        <div className={move===1?'codec':''}>
                                            <tr>
                                                <td className="coder">if <b className="square">&#9632;</b> &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code"> &nbsp; &nbsp; down()</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&#125;</td>
                                            </tr>
                                        </div>
                                        <div className={move === 2 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">left()</td>
                                            </tr>
                                        </div>
                                        <div className={move === 3 ? 'codec' : ''}>
                                            <tr>
                                                <td className="coder">if <b className="square">&#9632;</b> &#123;</td>
                                            </tr>
                                            <tr>
                                                <td className="code"> &nbsp; &nbsp; down()</td>
                                            </tr>
                                            <tr>
                                                <td className="coder">&#125;</td>
                                            </tr>
                                        </div>
                                        <div className={move === 4 ? 'codec' : ''}>
                                            <tr>
                                                <td className="code">up()</td>
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
