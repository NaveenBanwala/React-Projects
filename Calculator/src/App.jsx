import CalculatorButton from './components/CalculatorButton';
import './components/App.css';
import  CalculatorInnerDisplay from './components/CalculatorInnerDisplay';
function App() {
  const buttonsNames =[1,2,3,4,5,6,7,8,9,".",0,"C","+","-","*","/","%","sqrt"];

  return (
    <div className="App">
      <div className="CalculatorApp">
            <h1 className="calculatorName">Calculator</h1>
            <CalculatorInnerDisplay/>
            <CalculatorButton buttonsNames={buttonsNames} />
      </div>
      </div>
  );
}
export default App;