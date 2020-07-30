/* eslint-disable */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import useSound from "use-sound";
import right from '../audio/right1.mp3'
import wrong from '../audio/wrong1.mp3'
import swal from "sweetalert";
import "../css/Level1.css";
export default function IGLevel1() {
    const [move,setMove] = useState(0)
    const [rightActive] = useSound(right);
    const [wrongActive] = useSound(wrong);

    function f1(e){
        if(e.target.id==="two" && move===0){
            setMove(move+1)
            console.log(move)
            rightActive()
        }  
    };

    const f2=(e)=>{
        if (move >= 1 && (e.target.id === "three" || e.target.id === "four" || e.target.id === "five")){
            if (move === 1 && e.target.id === "four") {
                console.log("four")
                setMove(move+1)
                rightActive()
            } else if (move === 2 && e.target.id === "three") {
                console.log("three")
                setMove(move+1)
                rightActive()
            } else if (move === 3 && e.target.id === "five") {
                console.log("five")
                setMove(move+1)
                rightActive()
                swal("Good job!", " ", "success");
            } else {
                console.log("wrong Path")
                wrongActive()
                setMove(0)
                swal("Wrong Path!", "Start Again!", "warning");
            }
        }else{
            console.log("start form first")
            wrongActive()
            setMove(0)
            swal("Wrong Path!", "Plaese Start From beginning!", "warning");
        }
    }

    return (
        <div>
            <div id="myid" className="container">
                <br/><br/>
                {move === 4 ? 
                    <Link to="/introtogamelevel2">
                        <div className="row ">
                            <div className="col">
                                <div className="nextGame">
                                    <button type="button" className="btn btn-success btn-lg">Next</button>
                                </div>
                            </div>
                        </div>  
                    </Link> : ''
                }
                <div className="row">
                    <div className="col-6">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                <tbody>
                                    <tr>
                                        <td className="block" onClick={f2} id="one">
                                            {move === 0 ? <div className="blink" id="blink"></div> : ''}
                                        </td>
                                        <td className="block" id="two" onClick={f1}>
                                            {move === 1 ? <div className="blink" id="blink"></div> : ''}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="block" id="three" onClick={f2}>
                                            {move === 3 ? <div className="blink" id="blink"></div> : ''}
                                        </td>
                                        <td className="block" id="four" onClick={f2}>
                                            {move === 2 ? <div className="blink" id="blink"></div> : ''}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="block" id="five" onClick={f2}>
                                            {move === 4 ? <div className="blink" id="blink"></div> : ''}
                                        </td>
                                        <td className="block" id="six" onClick={f2}></td>
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
                                            <td className="score"><b>Score:{move}</b></td>
                                        </tr>
                                        <tr>
                                            {move === 0 ? <td className="codec"><b>right()</b></td> : <td className="code"><b>right()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 1 ? <td className="codec"><b>down()</b></td> : <td className="code"><b>down()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 2 ? <td className="codec"><b>left()</b></td> : <td className="code"><b>up()</b></td>}
                                        </tr>
                                        <tr>
                                            {move === 3 ? <td className="codec"><b>down()</b></td> : <td className="code"><b>left()</b></td>}
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </div>  
        </div>
    )
}
