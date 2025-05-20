import { useState } from "react";
import HeaderName from './components/HeaderName';
import InputContainer from './components/InputContainer';
import './App.css';

function App() {
  const positions = ["center", "flex-start", "flex-end"];
  const [initalAlignment, setAlignment] = useState(0);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <HeaderName />
        <InputContainer
          positions={positions}
          initalAlignment={initalAlignment}
          setAlignment={setAlignment}
        />
      </div>
    </div>
  );
}

export default App;

