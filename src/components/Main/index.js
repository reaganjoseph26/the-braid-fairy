import React from 'react';

function Main() {
  return (
    <main>
      <section className="landing">
        <div>
          <img src={require(`../../assets/images/Braid_fairy-logo.jpg`).default} alt="logo"></img>
        </div>
      </section>

      <div className="contact-info">
        <p>Location: Orlando, Florida</p>
        <p>Buisness Hours: Mon-Sun: 10:00am-7:00pm</p>
        <p>Text Line: 0000000000</p>
        <p>Booking avaiable online only</p>
      </div>

      <div className="carousel"></div>

      <div className="links-div">
          <ul className="main-links">
            <li><a href="">Book Appointment</a></li>
            <li><a href="">Tutorial</a></li>
            <li><a href="">Shop</a></li>
          </ul>
        </div>
    </main>
  );
}

export default Main;