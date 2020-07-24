import React,{useEffect} from 'react'
import "./css/Level1.css";
export default function Level1() {
    var move=0
    function f1(e){
        if(e.target.id==="one")
        console.log("First Step Correct")
        move++
    };
    const f2=(e)=>{
        if (move >= 1 && (e.target.id === "two" || e.target.id === "three" || e.target.id === "four" || e.target.id === "five")){
            if (move === 1 && e.target.id === "two") {
                move++
                console.log("second")
            } else if (move === 2 && e.target.id === "four") {
                move++
                console.log("third")
            } else if (move === 3 && e.target.id === "three") {
                move++
                console.log("forth")
            } else if (move === 4 && e.target.id === "five") {
                move++
                console.log("fifth")
            } else {
                console.log("wrong Path")
            }
        }else{
            console.log("start form first")
        }
    }

    return (
        <div>
            <div id="myid" className="container">
                <br/><br/>
                <div className="row">
                    <div className="col-6">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                    <tr>
                                        <td className="block" onClick={f1} id="one">
                                            <div className="blink" id="blink"></div>
                                        </td>
                                        <td className="block" id="two" onClick={f2}></td>
                                    </tr>
                                    <tr>
                                        <td className="block" id="three" onClick={f2}></td>
                                        <td className="block" id="four" onClick={f2}></td>
                                    </tr>
                                    <tr>
                                        <td className="block" id="five" onClick={f2}></td>
                                        <td className="block" id="six" onClick={f2}></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <div className="container">
                                <table className="codes">
                                    <tr>
                                        <td className="code"><b>right()</b></td>
                                    </tr>
                                    <tr>
                                        <td className="code"><b>down()</b></td>
                                    </tr>
                                    <tr>
                                        <td className="code"><b>left()</b></td>
                                    </tr>
                                    <tr>
                                        <td className="code"><b>down()</b></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
           
        </div>
    )
}
