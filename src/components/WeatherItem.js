import React, { Component } from "react";
import { render } from "react-dom";

import storm from "../img/weather-icons/storm.svg"
import drizzle from "../img/weather-icons/drizzle.svg"
import fog from "../img/weather-icons/fog.svg"

import partlycloudy from "../img/weather-icons/partlycloudy.svg"

import snow from "../img/weather-icons/snow.svg"




export default class WeatherItem extends Component {
  
  

  render() {
    return (
    <div>
    <Item1/>
    <Item2/>
    <Item3/>
    <Item4/>
    <Item5/>
    <Item6/>
    </div>
    )
  }
}

export class Item1 extends Component {
  render() {
    return (
      <div class="imgs">
        <p class="img_p1">  {this.props.date1}</p>
       <img src={snow} id="img1" alt="cloudy" width="150" height="150"/>
        <p class="img_p2"> {this.props.temp1}℃</p>

      </div>
    );
  }
}

export class Item2 extends Component {
  render() {
    return (
      <div class="imgs">
        <p class="img_p1"> {this.props.date2}</p>
       <img src={partlycloudy} id="img2" alt="cloudy" width="150" height="150"/>

        <p class="img_p2"> {this.props.temp2}℃</p>

      </div>
    );
  }
}


export class Item3 extends Component {
  render() {
    return (
      <div class="imgs">
     <p class="img_p1">  {this.props.date3}</p>
     <img src={drizzle} id="img3" alt="cloudy" width="150" height="150"/>

     <p class="img_p2"> {this.props.temp3}℃</p>

      </div>
    );
  }
}


export class Item4 extends Component {
  render() {
    return (
      <div class="imgs">
                 <p class="img_p1">  {this.props.date4}</p>
       <img src={drizzle} id="img4" alt="cloudy" width="150" height="150"/>

                 <p class="img_p2"> {this.props.temp4}℃</p>

      </div>
    );
  }
}



export class Item5 extends Component {
  render() {
    return (
      <div class="imgs">
                <p class="img_p1">  {this.props.date5}</p>
       <img src={fog} id="img5" alt="cloudy" width="150" height="150"/>

                <p class="img_p2"> {this.props.temp5}℃</p>

      </div>
    );
  }
}


export class Item6 extends Component {
  render() {
    return (
      <div  class="imgs">
                 <p class="img_p1">  {this.props.date6}</p>
       <img src={partlycloudy} id="img6" alt="cloudy" width="150" height="150"/>

                 <p class="img_p2"> {this.props.temp6}℃</p>

      </div>
    );
  }
}











































































































































// import React, { Component } from "react";
// import { render } from "react-dom";


// export class Item1 extends Component {
//   render() {
//     return (
//       <div id="items">
//         <p> {this.props.name} </p>
//         <p>{this.props.name}</p>
//         <p>{this.props.name}</p>

//         <p>{this.props.name}</p>

//         <p>{this.props.name}</p>

//         <p>{this.props.name}</p>

//       </div>
//     );
//   }
// }
