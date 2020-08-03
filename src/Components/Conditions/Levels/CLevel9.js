/* eslint-disable */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound";
import step from '../../audio/step.mp3'
import right from '../../audio/right1.mp3'
import wrong from '../../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level.css";

export default function CLevel9() {
    const [move, setMove] = useState(0)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    const history = useHistory()
    
    function f1(e) {
        if (e.target.id === "thirteen" && move === 0) {
            setMove(move + 1)
            console.log(move)
            stepActive();
        }
    };

    const f2 = (e) => {
        if (move >= 1 && (e.target.id === "forteen" || e.target.id === "nineteen" || e.target.id === "twenty" ||
            e.target.id === "twentyfive" || e.target.id === "twentyone" || e.target.id === "one")) {
            if (move === 1 && e.target.id === "forteen") {
                console.log("forteen")
                setMove(move + 1)
                stepActive();
            } else if ((move === 2) && e.target.id === "nineteen") {
                console.log("nineteen")
                setMove(move + 1)
                stepActive();
            } else if ((move === 3) && e.target.id === "twenty") {
                console.log("twenty")
                setMove(move + 1)
                stepActive();
            } else if (move === 4 && e.target.id === "twentyfive") {
                console.log("twentyfive")
                setMove(move + 1)
                stepActive();
            } else if (move === 5 && e.target.id === "twentyone") {
                console.log("twentyfive")
                setMove(move + 1)
                stepActive();
            } else if (move === 6 && e.target.id === "one") {
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
                {move === 7 ?
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel10">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :
                    <div className="row ">
                        <div className="col">
                            <Link to="/conditionlevel8">
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
                                            <td className={move > 7 ? 'myblock-white' : 'block-white'} id="one" onClick={f2}>
                                                {move === 7 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className='block-black' id="two" onClick={f2}></td>
                                            <td className='block-black' id="three" onClick={f2}></td>
                                            <td className='block-black' id="four" onClick={f1}></td>
                                            <td className='block' id="five" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className='block-white' id="six" onClick={f2}></td>
                                            <td className='block-black' id="seven" onClick={f2}></td>
                                            <td className='block-black' id="eight" onClick={f2}></td>
                                            <td className='block-black' id="nine" onClick={f2}></td>
                                            <td className="block" id="ten" onClick={f2}></td>
                                        </tr>
                                        <tr>    
                                            <td className='block-black' id="eleven" onClick={f2}></td>
                                            <td className={move > 0 ? 'myblock-black' : 'block-black'} id="twelve" onClick={f2}>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 1 ? 'myblock-black' : 'block-black'} id="thirteen" onClick={f1}>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 2 ? 'myblock-white' : 'block-white'} id="forteen" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-black' id="fifteen" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className='block-black' id="sixteen" onClick={f2}></td>
                                            <td className='block-black' id="seveteen" onClick={f2}></td>
                                            <td className='block' id="eighteen" onClick={f2}></td>
                                            <td className={move > 3 ? 'myblock-black' : 'block-black'} id="nineteen" onClick={f2}>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move > 4 ? 'myblock-black' : 'block-black'} id="twenty" onClick={f2}>
                                                {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={move > 6 ? 'myblock-black' : 'block-black'} id="twentyone" onClick={f2}>
                                                {move === 6 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className='block-white' id="twentytwo" onClick={f2}></td>
                                            <td className='block-black' id="twentythree" onClick={f2}></td>
                                            <td className='block' id="twentyfour" onClick={f2}></td>
                                            <td className={move > 5 ? 'myblock-black' : 'block-black'} id="twentyfive" onClick={f2}>
                                                {move === 5 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
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
                                            <td className="score"><b>Score:{move}</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code">right();</td>
                                        </tr>
                                        <tr>
                                            <td className="code">repeat(3) &#123;</td>
                                        </tr>
                                        <tr>
                                            <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;right()</td>
                                        </tr>
                                        <tr>
                                            <td className="coder">&nbsp; &nbsp;&nbsp; &nbsp;if <b className="square">&#9632;</b> &#123;</td>
                                        </tr>
                                        <tr>
                                            <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; repeat(2) &#123;</td>
                                        </tr>
                                        <tr>
                                            <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; left()</td>
                                        </tr>
                                        <tr>
                                            <td className="code">&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&#125;</td>
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