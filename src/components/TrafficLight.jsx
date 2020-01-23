import React from 'react';

class TrafficLight extends React.Component {

    constructor(){
        super();
          this.state = {
            redState: "off",
            yellowState: "off",
            greenState: "off"
          };
      }

    render() {
        console.log(this.State);
        return <div>
            <div id="palo"></div>
            <div id="contenedor">
            <div className= "luz roja" id= {this.state.redState} 
            onClick={()=>this.setState({redState: "on", yellowState: "off", greenState: "off"})}>
            </div>
            <div className= "luz amarilla" id= {this.state.yellowState} 
            onClick={()=>this.setState({redState: "off", yellowState: "on", greenState: "off"})}>
            </div>
            <div className= "luz verde" id= {this.state.greenState} 
            onClick={()=>this.setState({redState: "on", yellowState: "off", greenState: "on"})}>
            </div>

            </div>


        </div>;
    }

}

export default TrafficLight