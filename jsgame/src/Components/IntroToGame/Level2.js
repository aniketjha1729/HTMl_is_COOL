import React, { useEffect, useState } from 'react'
import "./css/Level2.css";

export default function Level2() {
    const [move, setMove] = useState(0)
    
    useEffect(() => {
    }, [move])

    const f1=(e)=>{
        if (e.target.id === "thirteen" && (move===0||move===4)) {
            setMove(move + 1)
            console.log(move)
        }
    }
    const f2=(e)=>{
        if (move >= 1 &&
            (e.target.id === "two" || e.target.id === "three" || e.target.id === "eight" || e.target.id === "forteen" || e.target.id ==="twenty")) {
            if ((move === 1||move===3||move==5) && e.target.id === "forteen") {
                console.log("forteen")
                setMove(move + 1)
            } else if (move === 2 && e.target.id === "twenty") {
                console.log("twenty")
                setMove(move + 1)
            } else if (move === 6 && e.target.id === "eight") {

                console.log("eight")
                setMove(move + 1)
            } else if (move === 7 && e.target.id === "two") {

                console.log("two")
                setMove(move + 1)
            } else if (move === 8 && e.target.id === "three") {

                console.log("three")
                setMove(move + 1)
            }else {
                console.log("wrong Path")
            }
        } else {
            console.log("start form first")
        }
    }
    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                <div className="row">
                    <div className="col-8">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        <tr>
                                            <td className="block" id="one" onClick={f2}></td>
                                            <td className="blockb" id="two" onClick={f2}></td>
                                            <td className="blockb" id="three" onClick={f2}></td>
                                            <td className="block" id="four" onClick={f2}></td>
                                            <td className="block" id="five" onClick={f2}></td>
                                            <td className="block" id="six" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="seven" onClick={f2}></td>
                                            <td className="blockb" id="eight" onClick={f2}></td>
                                            <td className="block" id="nine" onClick={f2}></td>
                                            <td className="block" id="ten" onClick={f2}></td>
                                            <td className="block" id="eleven" onClick={f2}></td>
                                            <td className="block" id="twelve" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className="blockb" id="thirteen" onClick={f1}>
                                                {move == 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="blockb" id="forteen" onClick={f2}>
                                                {move == 1 ? <div className="blink" id="blink"></div>:''}
                                            </td>
                                            <td className="block" id="fifteen" onClick={f2}></td>
                                            <td className="block" id="sixteen" onClick={f2}></td>
                                            <td className="block" id="seventeen" onClick={f2}></td>
                                            <td className="block" id="eighteen" onClick={f2}></td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="nineteen" onClick={f2}></td>
                                            <td className="blockb" id="twenty" onClick={f2}></td>
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
                                            <td className="code"><b>right()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>down()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>up()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>left()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>right()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>up()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>up()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>left()</b></td>
                                        </tr>
                                        <tr>
                                            <td className="code"><b>Score:{move}</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br/>
                <div className="footer">
                    Click on square blocks as per instructions given on right side.
                 </div>
            </div>
        </div>
    )
}
