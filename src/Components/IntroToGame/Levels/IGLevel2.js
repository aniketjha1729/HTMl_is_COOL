/* eslint-disable */
import React, {useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Level.css"
import useSound from "use-sound";
import right from '../audio/right1.mp3'
import wrong from '../audio/wrong1.mp3'
import swal from "sweetalert";  

export default function IGLevel2() {
    const [move, setMove] = useState(0)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    
    const f1=(e)=>{
        if (e.target.id === "forteen" && (move===0||move===2||move===4)) {
            setMove(move + 1)
            console.log(move)
            rightActive()
        }
    }

    const f2=(e)=>{
        if (move >= 1 &&
            (e.target.id === "two" || e.target.id === "three" || e.target.id === "eight" || e.target.id === "thirteen" || e.target.id ==="twenty")) {
            if ((move === 1 || move === 3) && e.target.id === "thirteen") {
                console.log("thirteen")
                setMove(move + 1)
                rightActive();
            } else if (move === 1 && e.target.id === "twenty") {
                console.log("twenty")
                setMove(move + 1)
                rightActive();
            } else if (move === 5 && e.target.id === "eight") {
                console.log("eight")
                setMove(move + 1)
                rightActive();
            } else if (move === 6 && e.target.id === "two") {
                console.log("two")
                setMove(move + 1)
                rightActive();
            } else if (move === 7 && e.target.id === "three") {
                console.log("three")
                setMove(move + 1)
                rightActive();
                swal("Good job!", " ", "success");
                
            }else {
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
                {move === 8 ?
                    <Link to="/introtogamelevel3">
                        <div className="row ">
                            <div className="col">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </div>
                        </div>
                    </Link> :
                    <Link to="/introtogamelevel1">
                        <div className="row ">
                            <div className="col">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg">Back</button>
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
                                            <td className='block' id="one" onClick={f2}></td>
                                            <td className={move>7?'myblock':'block'} id="two" onClick={f2}>
                                                {move === 7? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move>8?'myblock':'block'} id="three" onClick={f2}>
                                                {move === 8 ? <div className="correctans" id="blink"><b>&#10003;</b></div> : ''}
                                            </td>
                                            <td className="block" id="four" onClick={f2}></td>
                                            <td className="block" id="five" onClick={f2}></td>
                                            <td className="block" id="six" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="seven" onClick={f2}></td>
                                            <td className={move>6?'myblock':'block'} id="eight" onClick={f2}>
                                                {move === 6 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="nine" onClick={f2}></td>
                                            <td className="block" id="ten" onClick={f2}></td>
                                            <td className="block" id="eleven" onClick={f2}></td>
                                            <td className="block" id="twelve" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className={move>0?'myblock':'block'} id="thirteen" onClick={f2}>
                                                {move === 0||move===4 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className={move>1?'myblock':'block'} id="forteen" onClick={f1}>
                                                {move === 1||move===3||move===5? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="fifteen" onClick={f2}></td>
                                            <td className="block" id="sixteen" onClick={f2}></td>
                                            <td className="block" id="seventeen" onClick={f2}></td>
                                            <td className="block" id="eighteen" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="nineteen" onClick={f2}></td>
                                            <td className={move>2?'myblock':'block'} id="twenty" onClick={f2}>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="twentyone" onClick={f2}></td>
                                            <td className="block" id="twentytwo" onClick={f2}></td>
                                            <td className="block" id="twentythree" onClick={f2}></td>
                                            <td className="block" id="twentyfour" onClick={f2}></td>
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
                                            {move === 1? <td className="codec"><b>down()</b></td> : <td className="code"><b>down()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 2 ? <td className="codec"><b>up()</b></td> : <td className="code"><b>up()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 3 ? <td className="codec"><b>left()</b></td> : <td className="code"><b>left()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 4 ? <td className="codec"><b>right()</b></td> : <td className="code"><b>right()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 5 ? <td className="codec"><b>up()</b></td> : <td className="code"><b>up()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 6 ? <td className="codec"><b>up()</b></td> : <td className="code"><b>up()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 7 ? <td className="codec"><b>left()</b></td> : <td className="code"><b>left()</b></td>}
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
