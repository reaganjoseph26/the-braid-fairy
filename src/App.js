import React, { useState } from 'react';
import './App.css';
import Main from './components/Main'
import Services from './components/Services'
// import Carousel from './components/Carousel'


function App() {

  const [renderedComponent, setRenderedComponent] = useState("Main");

  function SelectedComponent() {
    if (renderedComponent === "Main") {
      return <Main setRenderedComponent={setRenderedComponent}></Main>;
    } else if (renderedComponent === "Services") {
      return <Services></Services>;
    // } else if (renderedComponent === "Contact") {
    //   return <Contact></Contact>;
     }
  }


  return (
    
      <SelectedComponent></SelectedComponent>
  );
}

export default App;
