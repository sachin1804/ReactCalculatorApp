import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  // this function sets the value of value to the button clicked
  const getValue = (e) => {
    setValue(value + e.target.value);
  };
  return (
    <div className="App">
      <div className="calculator">
        <form action="">
          <div className="calculate-value">
            {/* //display that shows calculation */}
            <input type="text" value={value} />
          </div>
          {/* All the buttons */}
          <div>
            <input
              type="button"
              value="AC"
              onClick={() => setValue("")}
              className="control-btn"
            />
            <input
              type="button"
              value="C"
              onClick={() => setValue(value.slice(0, -1))}
              className="control-btn"
            />
            <input
              type="button"
              value="%"
              onClick={getValue}
              className="control-btn"
            />
            <input
              type="button"
              value="/"
              onClick={getValue}
              className="control-btn"
            />
          </div>
          <div>
            <input type="button" value="7" onClick={getValue} />
            <input type="button" value="8" onClick={getValue} />
            <input type="button" value="9" onClick={getValue} />
            <input
              type="button"
              value="*"
              onClick={getValue}
              className="control-btn"
            />
          </div>
          <div>
            <input type="button" value="4" onClick={getValue} />
            <input type="button" value="5" onClick={getValue} />
            <input type="button" value="6" onClick={getValue} />
            <input
              type="button"
              value="-"
              onClick={getValue}
              className="control-btn"
            />
          </div>
          <div>
            <input type="button" value="1" onClick={getValue} />
            <input type="button" value="2" onClick={getValue} />
            <input type="button" value="3" onClick={getValue} />
            <input
              type="button"
              value="+"
              onClick={getValue}
              className="control-btn"
            />
          </div>
          <div>
            <input type="button" value="00" onClick={getValue} />
            <input type="button" value="0" onClick={getValue} />
            <input type="button" value="." onClick={getValue} />
            {/* // equals to button */}
            <input
              type="button"
              value="="
              onClick={() => setValue(eval(value))}
              className="control-btn"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
