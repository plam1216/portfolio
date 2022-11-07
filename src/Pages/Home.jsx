import React from 'react'

const Home = () => {
    return (
        <div id="home">
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-md-1">
                        <section>
                            <br />
                            <p>Hi! My name is</p>

                            <h1 id="name">Peter Lam</h1>

                            <br />

                            <p>I'm a software engineer based out of NYC with a passion for finding ways to merge art and tech.
                            </p>
                        </section>
                    </div>
                    <div className="col-2 offset-md-1">
                        <img id="pfp" className="shadow-lg img-fluid" src="https://imgur.com/yd2pwMv.jpg" alt="peterlam" />
                    </div>
                </div>

                {/* <br /> */}
                {/* <br /> */}
            </div>
        </div>

    )
}

export default Home