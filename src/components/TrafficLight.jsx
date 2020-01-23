import React from 'react';

class TrafficLight extends React.Component {

    constructor(){
        super();
          this.state = {
            estadoRoja: "off",
            estadoAmarilla: "off",
            estadoVerde: "off"
          };
      }

    render() {
        console.log(this.State);
        return <div>
            <div id="palo"></div>
            <div id="contenedor">
            <div className= "luz roja" id= {this.state.estadoRoja} 
            onClick={()=>this.setState({estadoRoja: "on", estadoAmarilla: "off", estadoVerde: "off"})}>
            </div>
            <div className= "luz amarilla" id= {this.state.estadoAmarilla} 
            onClick={()=>this.setState({estadoRoja: "off", estadoAmarilla: "on", estadoVerde: "off"})}>
            </div>
            <div className= "luz verde" id= {this.state.estadoVerde} 
            onClick={()=>this.setState({estadoRoja: "on", estadoAmarilla: "off", estadoVerde: "on"})}>
            </div>

            </div>


        </div>;
    }

}

export default TrafficLight