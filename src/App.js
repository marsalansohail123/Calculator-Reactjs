import { useRef, useState } from 'react';
import './App.css';

function App() {

  // .... calculator using REF() ..... //

  const inpRef = useRef();
  const addValue = value => inpRef.current.value += value;
  const calculateVal = () => inpRef.current.value = eval(inpRef.current.value);
  const clearVal = () => inpRef.current.value = '';
  const backVal = () => inpRef.current.value = inpRef.current.value.slice(0, -1);

  // calculator using state

  // const [Inp, setInp] = useState('')

  // const inpHandler = (newVal) => {
  //   setInp(preVal => preVal + newVal)
  // }

  return (
    <>
      {/* // .... calculator using REF() ..... // */}


      <div className="container">
        <div className="calculator">
          <input ref={inpRef} type="text" disabled placeholder="0" id="output-ascreen" />
          <button onClick={clearVal} className="clearbutton">CL</button>
          <button onClick={backVal} className="delbutton">DEL</button>
          <button onClick={e => addValue(e.target.textContent)}>%</button>
          <button onClick={e => addValue(e.target.textContent)}>/</button>
          <button onClick={e => addValue(e.target.textContent)}>7</button>
          <button onClick={e => addValue(e.target.textContent)}>8</button>
          <button onClick={e => addValue(e.target.textContent)}>9</button>
          <button onClick={e => addValue(e.target.textContent)}>*</button>
          <button onClick={e => addValue(e.target.textContent)}>4</button>
          <button onClick={e => addValue(e.target.textContent)}>5</button>
          <button onClick={e => addValue(e.target.textContent)}>6</button>
          <button onClick={e => addValue(e.target.textContent)}>-</button>
          <button onClick={e => addValue(e.target.textContent)}>1</button>
          <button onClick={e => addValue(e.target.textContent)}>2</button>
          <button onClick={e => addValue(e.target.textContent)}>3</button>
          <button onClick={e => addValue(e.target.textContent)}>+</button>
          <button onClick={e => addValue(e.target.textContent)}>0</button>
          <button onClick={calculateVal} className="equal">=</button>
          <button onClick={e => addValue(e.target.textContent)} className="dot">.</button>
        </div>
      </div>


      {/* // .... calculator using useState() ..... // */}


      {/* <div>
        <input value={Inp} disabled placeholder='...........HELLO' />
      </div>
      <div>
        <button onClick={(e) => inpHandler(e.target.textContent)}>
          1
        </button>
        <button onClick={(e) => inpHandler(e.target.textContent)}>
          2
        </button>
        <button onClick={(e) => inpHandler(e.target.textContent)}>
          3
        </button>
        <button onClick={(e) => inpHandler(e.target.textContent)}>
          4
        </button>
        <button onClick={(e) => inpHandler(e.target.textContent)}>
          5
        </button>
      </div> */}




    </>
  );
}


export default App;
