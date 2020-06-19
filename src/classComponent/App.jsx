import React, { Component } from "react";
import Form from "./Form";
import "./App.css";

const APP_ID = "1e6ca917";
const APP_KEY = "cdae8c5e28b9269e695c5f6ea5a37931";

class App extends Component {
  getRecipe = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = response.json();
    console.log(data);
    console.log(data.PromiseValue);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
