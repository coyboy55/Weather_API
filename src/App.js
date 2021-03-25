import React, { Component } from "react";
import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import WeatherItem, { Item1,Item2,Item3,Item4,Item5,Item6 } from "./components/WeatherItem";

import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg"
import drizzle from "../src/img/weather-icons/drizzle.svg"
import fog from "../src/img/weather-icons/fog.svg"
import clear from "../src/img/weather-icons/clear.svg"
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg"
import rain from "../src/img/weather-icons/rain.svg"
import snow from "../src/img/weather-icons/snow.svg"
import storm from "../src/img/weather-icons/storm.svg"

//import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
const API_KEY="84673748cba58c82f353b27c59a5de9a";

class App extends Component {
  state={
    
    description:undefined,
    TempMin:undefined,
    TempMax:undefined,
    humidity:undefined,
    pressure:undefined,
    error:undefined

  }
  getWeather= async (e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&cnt=8&units=metric&appid=${API_KEY}`);
   const data=await api_call.json();
   console.log(data);
   if(data.message=="city not found"){
    {
      this.setState({
        name: undefined,
      description:undefined,
      TempMin:undefined,
      TempMax:undefined,
      humidity:undefined,
      pressure:undefined,
      error:"please insert a right country and city"
      });
   }}else{
    
    
   if(data.list[0].weather[0].id<300)
   {
    document.getElementById("app_main").style.backgroundColor = "#A2B4C6"; 
    document.getElementById("Items").style.backgroundColor = "#A2B4C6"; 
    document.getElementById("app_header").style.backgroundColor="#6992CC";
    document.getElementById("imgNow").src=storm;
    
 }else if(data.list[0].weather[0].id>=300 && data.list[0].weather[0].id<=499){
  document.getElementById("app_main").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("Items").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("app_header").style.backgroundColor="#6992CC";
  document.getElementById("imgNow").src=drizzle;

 }else if(data.list[0].weather[0].id>=500 && data.list[0].weather[0].id<=599){
  document.getElementById("app_main").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("Items").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("app_header").style.backgroundColor="#6992CC";
  document.getElementById("imgNow").src=rain;
  
 }else if(data.list[0].weather[0].id>=600 && data.list[0].weather[0].id<=699){
  document.getElementById("app_main").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("Items").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("app_header").style.backgroundColor="#6992CC";
  document.getElementById("imgNow").src=snow;
 }else if(data.list[0].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  document.getElementById("app_main").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("Items").style.backgroundColor = "#A2B4C6"; 
  document.getElementById("app_header").style.backgroundColor="#6992CC";
  document.getElementById("imgNow").src=fog;
 }else if(data.list[0].weather[0].id==800){
  document.getElementById("app_main").style.backgroundColor = "#2490EF"; 
  document.getElementById("Items").style.backgroundColor = "#2490EF"; 
  document.getElementById("app_header").style.backgroundColor="#1D6CD4";
  document.getElementById("imgNow").src=clear;
 }else if(data.list[0].weather[0].id==801){
  document.getElementById("Items").style.backgroundColor = "#9CCEF4"; 
  document.getElementById("app_main").style.backgroundColor = "#9CCEF4"; 
  document.getElementById("app_header").style.backgroundColor="#6092D9";
  document.getElementById("imgNow").src=partlycloudy;
 }else if(data.list[0].weather[0].id>=802 && data.list[1].weather[0].id<=805){
  document.getElementById("Items").style.backgroundColor = "#9CCEF4";
  document.getElementById("app_main").style.backgroundColor = "#9CCEF4"; 
  document.getElementById("app_header").style.backgroundColor="#6092D9";
  document.getElementById("imgNow").src=mostlycloudy;
 }

 if(data.list[1].weather[0].id<300)
   {
    
    document.getElementById("img1").src=clear;
    
 }else if(data.list[1].weather[0].id>=300 && data.list[0].weather[0].id<=499){

  document.getElementById("img1").src=drizzle;

 }else if(data.list[1].weather[0].id>=500 && data.list[0].weather[0].id<=599){
 
  document.getElementById("img1").src=rain;
  
 }else if(data.list[1].weather[0].id>=600 && data.list[0].weather[0].id<=699){
   
  document.getElementById("img1").src=snow;
 }else if(data.list[1].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  
  document.getElementById("img1").src=fog;
 }else if(data.list[1].weather[0].id==800){
 
  document.getElementById("img1").src=clear;
 }else if(data.list[1].weather[0].id==801){
 
  document.getElementById("img1").src=partlycloudy;
 }else if(data.list[1].weather[0].id>=802 && data.list[1].weather[0].id<=805){
 
  document.getElementById("img1").src=mostlycloudy;
 }


 if(data.list[6].weather[0].id<300)
   {
    
    document.getElementById("img6").src=clear;
    
 }else if(data.list[6].weather[0].id>=300 && data.list[0].weather[0].id<=499){

  document.getElementById("img6").src=drizzle;

 }else if(data.list[6].weather[0].id>=500 && data.list[0].weather[0].id<=599){
 
  document.getElementById("img6").src=rain;
  
 }else if(data.list[6].weather[0].id>=600 && data.list[0].weather[0].id<=699){
   
  document.getElementById("img6").src=snow;
 }else if(data.list[6].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  
  document.getElementById("img6").src=fog;
 }else if(data.list[6].weather[0].id==800){
 
  document.getElementById("img6").src=clear;
 }else if(data.list[6].weather[0].id==801){
 
  document.getElementById("img6").src=partlycloudy;
 }else if(data.list[6].weather[0].id>=802 && data.list[1].weather[0].id<=805){
 
  document.getElementById("img6").src=mostlycloudy;
 }





 if(data.list[5].weather[0].id<300)
   {
    
    document.getElementById("img5").src=clear;
    
 }else if(data.list[5].weather[0].id>=300 && data.list[0].weather[0].id<=499){

  document.getElementById("img5").src=drizzle;

 }else if(data.list[5].weather[0].id>=500 && data.list[0].weather[0].id<=599){
 
  document.getElementById("img5").src=rain;
  
 }else if(data.list[5].weather[0].id>=600 && data.list[0].weather[0].id<=699){
   
  document.getElementById("img5").src=snow;
 }else if(data.list[5].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  
  document.getElementById("img5").src=fog;
 }else if(data.list[5].weather[0].id==800){
 
  document.getElementById("img5").src=clear;
 }else if(data.list[5].weather[0].id==801){
 
  document.getElementById("img5").src=partlycloudy;
 }else if(data.list[5].weather[0].id>=802 && data.list[1].weather[0].id<=805){
 
  document.getElementById("img5").src=mostlycloudy;
 }





 if(data.list[4].weather[0].id<300)
   {
    
    document.getElementById("img4").src=clear;
    
 }else if(data.list[4].weather[0].id>=300 && data.list[0].weather[0].id<=499){

  document.getElementById("img4").src=drizzle;

 }else if(data.list[4].weather[0].id>=500 && data.list[0].weather[0].id<=599){
 
  document.getElementById("img4").src=rain;
  
 }else if(data.list[4].weather[0].id>=600 && data.list[0].weather[0].id<=699){
   
  document.getElementById("img4").src=snow;
 }else if(data.list[4].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  
  document.getElementById("img4").src=fog;
 }else if(data.list[4].weather[0].id==800){
 
  document.getElementById("img4").src=clear;
 }else if(data.list[4].weather[0].id==801){
 
  document.getElementById("img4").src=partlycloudy;
 }else if(data.list[4].weather[0].id>=802 && data.list[1].weather[0].id<=805){
 
  document.getElementById("img4").src=mostlycloudy;
 }





 if(data.list[2].weather[0].id<300)
   {
    
    document.getElementById("img2").src=clear;
    
 }else if(data.list[2].weather[0].id>=300 && data.list[0].weather[0].id<=499){

  document.getElementById("img2").src=drizzle;

 }else if(data.list[2].weather[0].id>=500 && data.list[0].weather[0].id<=599){
 
  document.getElementById("img2").src=rain;
  
 }else if(data.list[2].weather[0].id>=600 && data.list[0].weather[0].id<=699){
   
  document.getElementById("img2").src=snow;
 }else if(data.list[2].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  
  document.getElementById("img2").src=fog;
 }else if(data.list[2].weather[0].id==800){
 
  document.getElementById("img2").src=clear;
 }else if(data.list[2].weather[0].id==801){
 
  document.getElementById("img2").src=partlycloudy;
 }else if(data.list[2].weather[0].id>=802 && data.list[1].weather[0].id<=805){
 
  document.getElementById("img2").src=mostlycloudy;
 }







 if(data.list[3].weather[0].id<300)
   {
    
    document.getElementById("img3").src=clear;
    
 }else if(data.list[3].weather[0].id>=300 && data.list[0].weather[0].id<=499){

  document.getElementById("img3").src=drizzle;

 }else if(data.list[3].weather[0].id>=500 && data.list[0].weather[0].id<=599){
 
  document.getElementById("img3").src=rain;
  
 }else if(data.list[3].weather[0].id>=600 && data.list[0].weather[0].id<=699){
   
  document.getElementById("img3").src=snow;
 }else if(data.list[3].weather[0].id>=700 && data.list[0].weather[0].id<=799){
  
  document.getElementById("img3").src=fog;
 }else if(data.list[3].weather[0].id==800){
 
  document.getElementById("img3").src=clear;
 }else if(data.list[3].weather[0].id===801){
 
  document.getElementById("img3").src=partlycloudy;
 }else if(data.list[3].weather[0].id>=802 && data.list[1].weather[0].id<=805){
 
  document.getElementById("img3").src=mostlycloudy;
 }




   this.setState({
     description:data.list[0].weather[0].description,
     TempMin:data.list[0].main.temp_min,
     TempMax:data.list[0].main.temp_max,
     humidity:data.list[0].main.humidity,
     pressure:data.list[0].main.pressure,
     date1:data.list[0].dt_txt.substring(11,16),
     temp1:data.list[0].main.temp,
     date2:data.list[1].dt_txt.substring(11,16),
     temp2:data.list[1].main.temp,
     date3:data.list[2].dt_txt.substring(11,16),
     temp3:data.list[2].main.temp,
     date4:data.list[3].dt_txt.substring(11,16),
     temp4:data.list[3].main.temp,
     date5:data.list[4].dt_txt.substring(11,16),
     temp5:data.list[4].main.temp,
     date6:data.list[5].dt_txt.substring(11,16),
     temp6:data.list[5].main.temp,
     error:""
    
   });
  
  }
  
} 
  
  //constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: ""
      
  //   };
  // }

  
  render() {
    return (
      <div className="app">
       
       <Search getWeather={this.getWeather} />
       <WeatherNow error={this.state.error} description={this.state.description} TempMin={this.state.TempMin} TempMax={this.state.TempMax} humidity={this.state.humidity} pressure={this.state.pressure}/>
       
        
        <div id="Items">
          <Item1 color="black" date1={this.state.date1} temp1={this.state.temp1} />
          <Item2 color="black" date2={this.state.date2} temp2={this.state.temp2}/>
          <Item3 color="black" date3={this.state.date3} temp3={this.state.temp3}/>
          <Item4 color="black" date4={this.state.date4} temp4={this.state.temp4}/>
          <Item5 color="black" date5={this.state.date5} temp5={this.state.temp5}/>
          <Item6 color="black" date6={this.state.date6} temp6={this.state.temp6}/>
           
          </div>
       
      </div>
    );
  }
}

export default App;
