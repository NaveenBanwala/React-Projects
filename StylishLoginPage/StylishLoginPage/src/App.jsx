import Button from "./components/Button";
import InputContainer from './components/InputContainer';
import HeaderName from './components/HeaderName';
import './App.css';

function App() {


  return (
    <>
    <div className="outer-container">
  <div className="inner-container">

    <HeaderName/>

  <InputContainer />

    <Button/>

  </div>
</div>
    </>
  )
}

export default App
