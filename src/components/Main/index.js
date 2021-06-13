import React from 'react';

function Main() {
  return (
    <main>
      <section className="landing">
        <div>
          <img src={require(`../../assets/images/Braid_fairy-logo.jpg`).default} alt="logo"></img>
        </div>
      </section>

      <div className="carousel"></div>

      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>

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