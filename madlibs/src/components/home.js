import React, { Component } from 'react';

import Header from "./header";
import Card from "./card";

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header("Tanner's Madlibs") }
        <Card />
      </div>
    );
  }
}

export default Home;