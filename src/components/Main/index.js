import React from 'react';
// import Carousel from '../Carousel'

function Main(props) {
  return (
    <main>
      <section className="landing">
        <div>
          <img src={require(`../../assets/images/logo.jpg`).default} alt="logo"></img>
        </div>
      </section>

      <div className="contact-info">
        <p>Location: Orlando, Florida</p>
        <p>Buisness Hours: Mon-Sun: 10:00am-7:00pm</p>
        <p>Text Line: 0000000000</p>
        <p>Booking avaiable online only</p>
      </div>

      {/* <Carousel /> */}

      <div className="links-div">
          <ul className="main-links">
            <li onClick={() => {props.setRenderedComponent("Services")}}><a href="#Services">Services</a></li>
            <li><a href="">Tutorial</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </div>
    </main>
  );
}

export default Main;