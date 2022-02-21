import React from "react";
import "./App.scss";
import Rose from "./rose.png";
import Lotus from "./lotus.png";
import Daf from "./daf.png";
import Page from "./page/page";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, name: "Pankaj", photo: Lotus },
        { id: 2, name: "Rupika", photo: Rose },
        { id: 3, name: "Avishka", photo: Daf },
        { id:4, name:"ladies", photo:Lotus}
      ],
    };
  }
  render() {                                       
    return (
      <div className="App">
        
      <h1>DATA</h1>
      <div className="datu">
        {this.state.data.map(({ id, name, photo }) => (
          <Page key={id} name={name} photo={photo}></Page>
        ))}
      </div>
      </div>
    );
  }
}

export default App;
