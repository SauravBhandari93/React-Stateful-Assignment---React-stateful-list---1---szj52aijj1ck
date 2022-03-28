import React, { useState } from "react";

import "../styles/App.css";

const data = {
  2018: ["Avengers 1", "Now you see me", "Fast and Furious 7"],
  2019: ["Avengers 2", "Now you see me 2", "Fast and Furious 8"],
  2020: [
    "Final Avengers Movie(Iron man dies)",
    "Now you finally used Lenskart",
    "Covid Came",
  ],
  2021: ["Covid Returns"],
  2022: ["Adventures of Saiman", "Adventures of Shaktiman"],
};
const App = () => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div id="main">
      <select onChange={handleChange}>
        <option value={null}></option>
        {Object.keys(data).map((item) => (
          <>
            <option value={item} key={item}>
              {item}
            </option>
          </>
        ))}
      </select>
      <div>
        {value === "" ? (
          <div id="selected-year">No year selected</div>
        ) : (
          <div id="selected-year">Selected year-{value}</div>
        )}
      </div>
      {/* {console.log(data[value])} */}
      {value === "" ? (
        ""
      ) : (
        <ul>
          {data[value].map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
