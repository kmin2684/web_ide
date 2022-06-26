import { useState, useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";

const initialCode = `
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);
`;

const CodeCell = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState(initialCode);

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  useEffect(() => {
    onClick();
  }, []);

  return (
    <div>
      <CodeEditor
        initialValue={initialCode}
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
