/* eslint-disable */
import React,{useEffect,useState} from 'react'
import PostData from "./print/level1.json"
import "../IntroToGame/css/Level.css"
import { Link, useHistory } from 'react-router-dom'
export default function Data() {
    const { blocks,code,text,textsize, textcolor, startX,
            startY,row,col,start,scale,ballScale,
            fontSize,textStartY,textGap,textStartX,
            Hint,HintColor,BorderColor}=PostData;
    
    var textdata=0;
    const myf1=()=>{
        textdata++;   
    }

    const cevent=()=>{
        console.log("helo")
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
                                                return <td onClick={cevent} key={tablecolumnindex} style={{ backgroundColor: blockColor[textdata], width: '80px', height: "80px", borderRadius: "10px" }}>
                                                    {text[textdata]}
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
                    Click on square blocks as per instructions given on right side.
                </div>
            </div>
        </div>
    )
}
