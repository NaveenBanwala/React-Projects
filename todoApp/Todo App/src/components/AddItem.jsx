import "./App.css";

function AddItem({TodoName, TodoDate}){
    
    return (
        <div className="container">
        <div className="row spacing">
        <div className="col-6">
        {TodoName}
        </div>
        <div className="col-4">
        {TodoDate}</div>

        <div className="col-2">
        <button type="button" class="btn btn-danger">Remove</button>
        </div>
        </div>
        </div>
    );

}
export default AddItem;