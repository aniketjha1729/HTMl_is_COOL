/* eslint-disable */
import React,{useEffect,useState} from 'react'
import PostData from "./print/level15.json"
import "../IntroToGame/css/Level.css"
import { Link, useHistory } from 'react-router-dom'
import useSound from "use-sound"
import step from '../audio/step.mp3'
import right from '../audio/right1.mp3'
import wrong from '../audio/wrong1.mp3'
import swal from "sweetalert"

export default function Data() {
    const { blocks,code,text,textsize, textcolor, startX,
            startY,order,row,col,start,scale,ballScale,
            fontSize,textStartY,textGap,textStartX,
            Hint,HintColor,BorderColor
        }=PostData;
    
    const [move, setMove] = useState(0)
    const [currentstep, setCurrentstep] = useState(1)
    const [stepActive] = useSound(step)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);

    var textdata=0;
    const myf1=()=>{
        textdata++;    
    }

    const blockColor=[]
    blocks.map((blocks,index)=>{
        blockColor.push(blocks.replace(/0x/,"#"))
    })
    
    var rows = [];
    for(var i=0;i<row;i++){
        rows.push(i);
    }
    var columns=[];
    for(var i=0;i<col;i++){
        columns.push(i)
    }

    var score=[];
    for(var i=0;i<order.length-1;i++){
        score.push(i)
    }
    const firststep=(e)=>{
        if ((e.target.id === order[currentstep].toString() && move===0)){
            setCurrentstep(currentstep+1)
            setMove(move+1)
            console.log(score)
            stepActive();  
        }
    }
    const nextstep=(e)=>{
        if ((e.target.id === order[currentstep].toString())) {
            setCurrentstep(currentstep + 1)
            setMove(move + 1)
            stepActive();
        }else{
            wrongActive();
        }
    }
    
    return (
        <div>
            <div id="myid" className="container">
                <br /><br />
                <div className="row ">
                    <div className="col">
                        <Link to="/">
                            <div className="nextGame">
                                <button type="button" className="btn btn-success btn-lg">Next</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tbody>
                                        {columns.map((tablerow, tablerowindex) => {
                                            return <tr key={tablerowindex}>{rows.map((tablecolumn, tablecolumnindex) => {
                                                return <td id={textdata}  onClick={textdata===order[1] ? firststep : nextstep} key={tablecolumnindex} style={{ backgroundColor: blockColor[textdata], width: '80px', height: "80px", borderRadius: "10px" }}>
                                                    {textdata === start? <div className="blink" id="blink"></div> : ''}
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
                                        <tr>Score:{move}</tr>
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
                    Click on square blocks as per instructions given on right side.
                </div>
            </div>
        </div>
    )
}
