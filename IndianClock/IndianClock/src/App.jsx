import ClockSlogan from "./components/ClockSlogan";
import "./App.css";

function App(){
  return (
      <div className="outer-container">
        <div className="inner-container"> 
          <h1 className ="IndianClock" >  Indian Clock  </h1>
          <ClockSlogan/>
        </div>
      </div>
  )
}
export default App;