/* class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  onChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Hello React ES6 Class Component!</h1>
        <input value={this.state.value} type="text" onChange={this.onChange} />
      </div>
    );
  }
} */

import { useState } from "react";

const App = ({ label }) => {
  const [state, setState] = useState({
    value: "",
  });

  const onChange = (e) => {
    setState({ value: e.target.value });
  };

  return (
    <div>
      <h1>Hello React ES6 Class Component!</h1>
      <input value={state.value} type="text" onChange={onChange} />
      <button>{label}</button>
    </div>
  );
};

export default App;
