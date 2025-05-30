
import { useContext } from "react";
import "./App.css";
import { MyContext } from "../Store/TodoProvider";

function AddItem({TodoId,TodoDate,TodoName}){

    const {dispatcher} = useContext(MyContext);

    const handleForRemove =()=>{
            dispatcher(
                {
                    type : "REMOVE_TODO",
                    payload :{
                        id :TodoId
                    }
                }
            );
        
    }
    
    return (
        <div className="container">
        <div className="row spacing">
        <div className="col-6">
        {TodoName}
        </div>
        <div className="col-4">
        {TodoDate}</div>

        <div className="col-2">
        <button  onClick={handleForRemove} type="button" class="btn btn-danger">Remove</button>
        </div>
        </div>
        </div>
    );

}
export default AddItem;