import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [generated, setGenerated] = useState(false);
  const [password, setPassword] = useState("");

  
  const generatePsw = () => {
    axios
      .get(
        "https://makemeapassword.ligos.net/api/v1/passphrase/json?pc=1&wc=2&sp=F&nums=4&whenNum=Anywhere"
      )
      .then((res) => {
        setPassword(res.data.pws[0]);
      })
      .catch((err) => console.log(err));
      setGenerated(true);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Random Password Generator</h1>
        <button onClick={generatePsw} className="btn">Generate</button>
        {generated && <h4>{password}</h4>}
      </div>
    </div>
  );
};

export default App;
