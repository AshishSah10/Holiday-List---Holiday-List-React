import React, { Component, useState } from "react";
// import "../styles/App.css";

// import React from "react";
// import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "India"
    };
  }
  vacationPlace = [
    { country: "India", city: "Goa" },
    { country: "Netherlands", city: "Amsterdam" },
    { country: "USA", city: "New York" },
    { country: "India", city: "Darjeeling" },
    { country: "Japan", city: "Tokyo" },
    { country: "India", city: "Lonavala" }
  ];
  //const [topList, setTopList] = React.useState(vacationPlace);

  tempList = this.vacationPlace.filter((place) => place.country === "India");
  //setTopList(tempList);
  render() {
    return (
      <div className="App">
        <h1>Holiday List India</h1>
        <ol>
          {this.tempList.map((place, index) => (
            <li key={`location$(index + 1)`}>{place.city}</li>
          ))}
        </ol>
      </div>
    );
  }
}
export default App;
