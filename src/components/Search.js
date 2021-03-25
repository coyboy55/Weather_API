import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <form  class="app__header" onSubmit={this.props.getWeather}>
        <div id="app_header">
        <input class="box"
          type="text"
          
          name="city"
         required
        />
          <input class="box"
          type="text"
          
          name="country"
         required
        />
        <button class="box box1">
          FIND WEATHER
        </button>
        </div>
      </form>
    );
  }
}
export default Search;
