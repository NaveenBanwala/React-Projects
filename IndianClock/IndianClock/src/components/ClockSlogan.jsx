import { useEffect,useState } from "react";
import "../App.css";
function ClockSlogan(){

    const [initalTime , setNewTime] = useState(new Date());

    useEffect(() =>{

        const IntervalId = setInterval( ()=>{
        setNewTime(new Date());

        },1000);
        return ()=>{
            clearInterval(IntervalId);
        }
    },[])


    // let time =new Date();

    return (
        <>
        <p className="clock-slogan" >
            This is the Clock Shows the current time in Bharat.
        </p>
        <div>The Current Date is :style = {initalTime.toLocaleDateString()} - {initalTime.toLocaleTimeString()} </div> 
        </>

    );

}
export default ClockSlogan;