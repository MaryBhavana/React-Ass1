import React, { Component } from 'react'
// import './ass1.css';

class ClassComp extends Component {
    constructor(){
        super();
        this.state = {
            Display : false
        }
}

     handleShow  = () =>{
        this.setState({
            Display:!this.state.Display
        })
     }
  render() {
    return (
        <section>
         <button className='classb' onClick = {()=>this.handleShow()}>To see styling in Class component</button>
        {
            this.state.Display ? 
      <div className='class'>
        <h2>This is created using Class Component</h2>
                <p>This is done using external CSS</p>
                <p style = {{color:'blue'}}>This is done using inline CSS</p>
      </div>
      :
      null
  }
 
      </section>
    )
  }
}

export default ClassComp

