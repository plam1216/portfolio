import React from 'react'

const Home = () => {
    return (
        <div id="home">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-md-1">
                        <section>
                            <p>Hi! My name is</p>

                            <h1>Peter Lam</h1>

                            <br/>
                            
                            <p>I'm a software engineer based out of NYC with a passion for finding ways to merge music and tech
                            </p>

                            <br/>

                            <p>Check out some of the projects I've been working on:</p>
                        </section>
                    </div>
                    <div className="col-2 offset-md-1">
                        <img id="pfp" className="shadow-lg img-fluid" src="https://imgur.com/yd2pwMv.jpg" alt="peterlam" />
                    </div>
                    {/* <div className="col-2"></div> */}
                </div>
            </div>
        </div>

    )
}

export default Home