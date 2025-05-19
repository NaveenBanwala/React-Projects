import "./App.css";
function AddTodo(){
    return (  
    <div className="container">
    <div className="row spacing">
    <div className="col-6">
        <input class="inputCss" type='text' placeholder="Enter your goal"></input></div>
        <div className="col-4">
            <input class="inputCss"type='date' ></input></div>

        <div className="col-2">
        <button type="button" class="btn btn-success">ADD NEW</button>
        </div>
        </div>
        </div>
        );
}
export default AddTodo;