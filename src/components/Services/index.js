import React from 'react';

function Services() {
    return (
        <main>
            <section className="landing">
            <div>
                <img src={require(`../../assets/images/logo.jpg`).default} alt="logo"></img>
            </div>
            </section>

            <h1 className="services">Services</h1>
            
                <div className="row">
                    <div className="col-sm">
                        <div className="card text-center" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={require(`../../assets/images/test1.jpg`).default} alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">Lace Bond-in</h5>
                                <a href="#" className="card-link">Read More</a>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">35 min</li>
                                <li className="list-group-item">$40</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Book Now</a>
                            </div>
                        </div>                 
                    </div>

                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="..." alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">Traditional Sew-In</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>                 
                    </div>

                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="..." alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">Medium Braids</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>                 
                    </div>

                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="..." alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">Medium Braids</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>                 
                    </div>

                    <div className="col-sm">
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="..." alt=""></img>
                            <div className="card-body">
                                <h5 className="card-title">Medium Braids</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                            <div className="card-body">
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>                 
                    </div>
               </div>
        </main>
    );
}
  
export default Services;