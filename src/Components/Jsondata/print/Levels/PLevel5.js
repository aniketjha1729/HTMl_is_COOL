/* eslint-disable */
import React, { useEffect, useState } from 'react'
import PostData from "../data/level5.json"
import "../css/Level.css"
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound"
import step from '../../../audio/step.mp3'
import right from '../../../audio/right1.mp3'
import wrong from '../../../audio/wrong1.mp3'
import swal from "sweetalert"

export default function PLevel1() {
    const { blocks, code, text, textsize, textcolor, startX,
        startY, order, row, col, start, scale, ballScale,
        fontSize, textStartY, textGap, textStartX,
        Hint, HintColor, BorderColor
    } = PostData;
    const [startIndex, setstartIndex] = useState(start)
    const [move, setMove] = useState(0)
    const [currentstep, setCurrentstep] = useState(1)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);

    var textdata = 0;
    const myf1 = () => {
        textdata++;
    }

    const blockColor = []
    blocks.map((blocks, index) => {
        blockColor.push(blocks.replace(/0x/, "#"))
    })

    var rows = [];
    for (var i = 0; i < row; i++) {
        rows.push(i);
    }
    var columns = [];
    for (var i = 0; i < col; i++) {
        columns.push(i)
    }

    var score = [];

    for (var i = 0; i < order.length - 1; i++) {
        score.push(i + 1)
    }
    const firststep = (e) => {
        if ((e.target.id === order[currentstep].toString() && move === 0)) {
            setCurrentstep(currentstep + 1)
            setMove(move + 1)
            console.log("score", score)
            console.log("move", move)
            stepActive();
            setstartIndex(500000);
        }
    }
    const nextstep = (e) => {
        if ((e.target.id === order[currentstep].toString())) {
            setCurrentstep(currentstep + 1)
            setMove(move + 1)
            console.log("move", move)

            // console.log(order.length)
            if ((move) === score[(score.length) - 2]) {
                rightActive();
                swal("Good job!", " ", "success")
            } else {
                stepActive()
            }
        } else {
            wrongActive();
            setstartIndex(start);
            setMove(0);
            setCurrentstep(1);
        }
    }

    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                {move === score[(score.length) - 1] ?
                    <div className="row ">
                        <div className="col">
                            <button type="button" className="btn btn-primary btn-lg btn3d">Score:{move}</button>
                            <Link to="/print/level6">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg btn3d">Next</button>
                                </div>
                            </Link>
                        </div>
                    </div> :

                    <div className="row ">
                        <div className="col">
                            <button type="button" className="btn btn-primary btn-lg btn3d">Score:{move}</button>
                            <Link to="/print/level4">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-danger btn-lg btn3d">Back</button>
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
                                        {columns.map((tablerow, tablerowindex) => {
                                            return <tr key={tablerowindex}>{rows.map((tablecolumn, tablecolumnindex) => {
                                                return <td id={textdata} onClick={textdata === order[1] ? firststep : nextstep} key={tablecolumnindex} style={{ backgroundColor: blockColor[textdata], width: '80px', height: "80px", borderRadius: "10px" }}>
                                                    {((textdata === order[move]) && textdata != order[order.length - 1]) ? <div className="blink" id="blink"></div> : ''}
                                                    {(move === order.length - 1) && (textdata === order[order.length - 1]) ? <div className="correctans"><b>&#10003;</b></div> : ''}
                                                    <div className="text"><b>{text[textdata]}</b></div>
                                                    {myf1()}
                                                </td>
                                            })}</tr>
                                        })}
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
                                        {code.map((codedata, codedataindex) => {
                                            return <tr key={codedataindex}>
                                                <td className="code">{codedata}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                <div className="footer">
                    {Hint}
                </div>
            </div>
        </div>
    )
}
