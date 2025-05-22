import { useState } from "react";
import InputContainer from './components/InputContainer';
import './App.css';

function App() {
  const positions = ["center", "flex-start", "flex-end"];

  const [Location , setLocation]=useState(true); // For login and Sinup page.
  const [initalAlignment, setAlignment] = useState(0);


  const moveToRight = ()=>{
    setLocation(!Location);

  }

  return (
    <div className="outer-container">
      <div className="inner-container">
        { Location ? (
          <>
      <div className="login-page" >
        <InputContainer
          positions={positions}
          initalAlignment={initalAlignment}
          setAlignment={setAlignment}
        />
      </div>
      <div className="sinup-page" >
        <p>Create a New Account </p>
        <button onClick={moveToRight}>Sin Up</button>
      </div> 
      </>
        ) 
      : 
      (
        <>
      <div className="login-page">
        <InputContainer
          positions={positions}
          initalAlignment={initalAlignment}
          setAlignment={setAlignment}
        />
      </div>
      <div className="sinup-page" >
        <p>Already have an account </p>
        <button onClick={moveToRight}>Log In</button>
      </div>
      </>
      )}
      </div>
    </div>
  );
}

export default App;

