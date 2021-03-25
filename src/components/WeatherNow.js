import React, { Component } from "react";

import cloudy from "../img/weather-icons/cloudy.svg";



class WeatherNow extends React.Component{
    render(){
        return(
            
       <div class="app__main" id="app_main">

       <img id="imgNow" src={cloudy} alt="cloudy" width="250" height="400"/>
       <p id="description">   {this.props.description}</p>
       <p id="temp"><strong><h3>temperature:</h3></strong> <span>{this.props.TempMin}°  </span> to <span> {this.props.TempMax}℃ </span></p>
       <p id="hum"><b>humidity:</b> <span>{this.props.humidity}  </span><b> pressure: </b><span> {this.props.pressure} </span></p>
      <p id="error">{this.props.error}</p> 
      </div>
        );
    }
}
 
export default WeatherNow;