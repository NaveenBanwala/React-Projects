
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./components/App.css";
// import AddItem from "./components/AddItem"; 
import TodoItem from "./components/TodoItems";

function App() {
  const addItems=[
    {name :"Buy Milk",
    date :"01/June/2025"
    },
    {name :"Buy Milk",
    date :"01/June/2025"
    },
    {name :"Buy Milk",
    date :"01/June/2025"
    },
  ]
  const App ={
    backgroundColor: "#FFF8DC",
    position:"relative",
    height:"100vh",
    width :"100vw",
    display:"flex",
    justifyContent:"center",
    // alignItems:"center",
  }
  const todoAppContainer = {
    position : "absolute",
    top: "10%",
    height: "80%",
    width : "60%",
  }
  return (
    <div style={App}>
    <div className="todo-app-container" style={todoAppContainer}>
      <AppName/>

      <AddTodo></AddTodo>

    <TodoItem className="todoItems" addItems={addItems}/>
    </div>
    </div>
  );
}

export default App;
