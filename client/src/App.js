import React, { Component } from "react";
import Women from "./Women";
import axios from "axios";
import "./App.css";
import { HookForm } from "./Hooks/HookForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Data: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`).then(res => {
      console.log(res);
      this.setState({
        Data: res.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <HookForm />
        <h1>Women's World Cup</h1>
        {this.state.Data.map(newData => (
          <Women key={newData.id} {...newData} />
        ))}
      </div>
    );
  }
}

export default App;
