import React from 'react';
import "./App.css";
import NewComp from "./Components/NewComp"
class App extends React.Component{
  styles={
    color: "grey",
    margin: "50px 0px 0px 0px",
    fontSize: "70px",
    fontFamily: "monospace"
  };
  render(){
    return(
      <div className="App">
        <h1 style={this.styles}> React States </h1>
        <NewComp/>
      </div>
  );
}
}
export default App;
