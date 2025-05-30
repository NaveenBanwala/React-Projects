import  { MyContext } from "../Store/TodoProvider";
import "./App.css";
import { useContext ,useEffect,useState } from "react";
function AddTodo(){

    const [name ,setName] = useState("");
    const [date ,setDate] = useState("");

    const {dispatcher}=useContext(MyContext);

        const handleByButton =(e)=>{

        e.preventDefault();

        if (name.trim() === "" || date === "") {
    return;
    }

        dispatcher({
            type : "ADD_TODO",
            payload :{
                name,
                date
            }
        });
        setName("");
        setDate("");
    }

    return (  
    <div className="container">
    <div className="row spacing">
    <div className="col-6">
        

        <input value={name} onChange={(e) => setName(e.target.value)}
            className="inputCss" type='text' placeholder="Enter your goal"></input></div>
        <div className="col-4">

            <input value={date} onChange={(e) => setDate(e.target.value)} className="inputCss" type='date' ></input></div>

        <div className="col-2">
        <button  onClick={handleByButton} type="button" className="btn btn-success">ADD NEW</button>
        </div>
        </div>
        </div>
        );
}
export default AddTodo;