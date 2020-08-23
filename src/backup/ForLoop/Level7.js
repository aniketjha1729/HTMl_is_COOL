/* eslint-disable */
import React, { useState } from 'react'
import "./css/Level.css";
import useSound from "use-sound";
import right from "../../Components/audio/right1.mp3"
import wrong from "../../Components/audio/wrong1.mp3"
import swal from "sweetalert";

export default function Level2() {
    const [move, setMove] = useState(0)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);
    
    const f1 = (e) => {
        if (e.target.id === "five" && (move === 0)) {
            setMove(move + 1)
            console.log(move)
            rightActive()
        }
    }
    const f2 = (e) => {
        if (move >= 1 &&
            (e.target.id === "two" || e.target.id === "three" || e.target.id === "six")) {
            if ((move === 1 ) && e.target.id === "two") {
                console.log("two")
                setMove(move + 1)
                rightActive();
            } else if (move === 2 && e.target.id === "three") {
                console.log("three")
                setMove(move + 1)
                rightActive();
            } else if (move === 3 && e.target.id === "six") {
                console.log("six")
                setMove(move + 1)
                rightActive();
                swal("Good job!", " ", "success");
            } else {
                console.log("wrong Path")
                wrongActive()
                setMove(0)
                swal("Wrong Path!", "Start Again!", "warning");
            }
        } else {
            console.log("start form first")
            setMove(0)
            wrongActive();
            swal("Wrong Path!", "Plaese Start From beginning!", "warning");
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
                                            <td className="block" id="one" onClick={f2}>
                                                <div className="text"><b>300</b></div>
                                            </td>
                                            <td className="block" id="two" onClick={f2}>
                                                <div className="text"><b>150</b></div>
                                                {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="three" onClick={f2}>
                                                <div className="text"><b>200</b></div>
                                                {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="four" onClick={f2}>
                                                <div className="text"><b>50</b></div>
                                                {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="five" onClick={f1}>
                                                <div className="text"><b>100</b></div>
                                                {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                            <td className="block" id="six" onClick={f2}>
                                                <div className="text"><b>250</b></div>
                                                {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="block" id="seven" onClick={f2}>
                                                <div className="text"><b>155</b></div>
                                            </td>
                                            <td className="block" id="eight" onClick={f2}>
                                                <div className="text"><b>85</b></div>
                                            </td>
                                            <td className="block" id="nine" onClick={f2}>
                                                <div className="text"><b>135</b></div>
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
                                        <tr>
                                            <td>
                                            
                                                for <i> &#40;start i=50;i&#60;=
                                                <br /> 
                                                250;increase by 50&#41;</i> &#123;
                                                <br/>
                                                print&#40;i&#41;
                                                <br/>
                                                &#125;
                                            </td>
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
