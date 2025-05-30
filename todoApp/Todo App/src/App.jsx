import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./components/App.css";
import TodoItem from "./components/TodoItems";
import TodoProvider from "./Store/TodoProvider";
import Container from "./components/Container";

function App() {
  const appStyle = {
    backgroundColor: "#FFF8DC",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start", // top aligned
    paddingTop: "50px", // spacing from top
  };

  return (
    <div style={appStyle}>
      <TodoProvider>
        <Container>
          <AppName />
          <AddTodo />
          <TodoItem className="todoItems" />
        </Container>
      </TodoProvider>
    </div>
  );
}

export default App;
