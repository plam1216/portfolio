import React from 'react'

const About = ({ id }) => {
  return (
    <div id="about-section">
      <div className="container" id={id}>
        <h1>About Me</h1>

        <hr />

        <div className="row" id="info">
          <section>
            <p>
              Prior to software engineering I was an&nbsp;
              <span class="myDIV col-8">audio engineer and music producer</span>
              <span class="hide">
                <img id="music-credits" src="https://imgur.com/4djK8Kl.jpg" alt="music-credits" />
              </span>.
            </p>

            <p>
              I had some work featured on&nbsp;
              <span class="myDIV col-8">Apple</span>
              <span class="hide">
                <img id="apple" src="https://imgur.com/48U9EvI.gif" alt="playlists" />
              </span>
              &nbsp;and&nbsp;
              <span class="myDIV col-8">Spotify</span>
              <span class="hide">
                <img id="spotify" src="https://imgur.com/bkL48Rm.gif" alt="playlists" />
              </span>
              &nbsp;playlists.
            </p>

            <p>
              My change in career paths was driven by my desire to find ways to merge art and tech to develop products that can help artists throughout their creative process.
            </p>

            <p>
              In my free time, you'll still find me in the&nbsp;
              <span class="myDIV col-8">studio</span>
              <span class="hide">
                <img id="studio-pic" src="https://imgur.com/xo2eFxA.jpg" alt="studio-pic" />
              </span>
              &nbsp;working on music or&nbsp;

              <span class="myDIV">exploring the city</span>
              <span class="hide">
                <img id="city" src="https://imgur.com/9igGxq2.jpg" alt="city" />
              </span>.
            </p>


            <br />
          </section>
        </div>

        <div className="row">

          <p>Here are some of the coding skills I've been using for my projects:</p>

          <div id="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="firebase" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default About