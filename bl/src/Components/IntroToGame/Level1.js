import React,{useEffect,useState} from 'react'
import "./css/Level1.css";
export default function Level1() {
    const [move,setMove] = useState(0)
    useEffect(() => {
    }, [move])

    
    function f1(e){
        if(e.target.id==="one" && move===0){
            setMove(move+1)
            console.log(move)
        }  
    };
    const f2=(e)=>{
        if (move >= 1 && (e.target.id === "two" || e.target.id === "three" || e.target.id === "four" || e.target.id === "five")){
            if (move === 1 && e.target.id === "two") {
                console.log("second")
                setMove(move+1)
            } else if (move === 2 && e.target.id === "four") {
        
                console.log("third")
                setMove(move+1)
            } else if (move === 3 && e.target.id === "three") {
                
                console.log("forth")
                setMove(move+1)
            } else if (move === 4 && e.target.id === "five") {
                
                console.log("fifth")
                setMove(move+1)
            } else {
                console.log("wrong Path")
            }
        }else{
            console.log("start form first")
        }
    }

    return (
        <div>
            <audio id="rightAns">
                <source src="wrong1.mp3" type="audio/ogg"/>
             </audio>
                <audio id="wrongAns">
                    <source src="right1.mp3" type="audio/ogg"/>
            </audio>
            <div id="myid" className="container">
                <br/><br/>
                <div className="row">
                    <div className="col-6">
                        <div className="blockgame">
                            <div className="container">
                                <table className="blocks">
                                <tbody>
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
                                    <tr>
                                        <td className="code"><b>Score:{move}</b></td>
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
