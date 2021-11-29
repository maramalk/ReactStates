import React, { Component } from 'react'
import on from "./on.png"
import off from "./off.png"
import like from "./like.png"
import dislike from "./dislike.png"
class NewComp extends Component{
  constructor(props){
    super(props)
    this.state = {
      message: "Please subscribe and click on the bell!",
      button: "Subscribe",
      imageURL: off,
      likescount: 0,
      dislikescount: 0
    }
  }


  render() {
    return(
      <div className="App">
      <h3 style= {{fontWeight: 'bold'}}>{this.state.message}</h3>
      <button style = {{color: "black",fontSize: "20px", background: "red",fontweight: "bold", fontWeight: 'bold'}}>{this.state.button}</button>
      <p/>
      <img style= {{width:"100px", height:"100px"}} src= {this.state.imageURL} />
      <h3 style={{color:"darkblue"}}> {this.state.likescount} Likes &emsp; &emsp; &emsp; {this.state.dislikescount} Dislikes    </h3>
      <img style= {{margin: "30px", width:"60px", height:"60px"}} src={like}/>
      <img style= {{margin: "30px", width:"60px", height:"60px"}} src={dislike} />
      </div>
    );
  }
}

export default NewComp;
