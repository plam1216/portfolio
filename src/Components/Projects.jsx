import React from 'react'

const Projects = ({ id }) => {
  return (
    <div id="projects-section">
      <div className="container" id={id}>
        <h1>Projects</h1>

        <hr />

        <div className="row">
          <div className="col-7 animate__animated animate__fadeIn">
            <img className="d-block w-100 project-img" src="https://imgur.com/rRFYn2x.jpg" alt="sample-crate" />
          </div>

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>Sample Crate</h3>
                <p>
                  <a className="project-links" href="https://github.com/plam1216/sample-crate">GitHub</a> | <a className="project-links" href="https://sample-crate.web.app/">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A site where music producers can discover songs to sample.
                </p>
                <p>
                  Random songs are suggested for the user to sample with an easy link for MP3 download. Users can sign-in with Google Authentication to favorite songs. Option to filter songs by genere and year and to view song metadata.
                </p>
                <p>
                  Site analytics implemented to track user's site interactions via Firebase.
                </p>
              </div>

            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="firebase" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7 animate__animated animate__fadeIn">
            <img className="d-block w-100 project-img" src="https://imgur.com/ARdJjj7.jpg" alt="project" />
          </div>

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>RoundTwo</h3>

                <p>
                  <a className="project-links" href="https://github.com/plam1216/roundtwo">GitHub</a> | <a className="project-links" href="https://react-roundtwo.web.app/">App</a>
                </p>
              </div>


              <div className="project-details">
                <p>
                  An e-commerce site where users can sign in using Google oAuth to sell clothing.
                </p>
                <p>
                  Users can sign-in using their Google accounts to create listings which will automatically include the seller's contact info. Users can filter clothing by size and price.
                </p>
              </div>

            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="firebase" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7 animate__animated animate__fadeIn">
            <img className="d-block w-100 project-img" src="https://imgur.com/iTZ467M.jpg" alt="project" />
          </div>

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>BeatStars</h3>

                <p>
                  <a className="project-links" href="https://github.com/plam1216/beatstore">GitHub</a> | <a className="project-links" href="https://github.com/plam1216/beatstore">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A music marketplace where users can buy and sell beats.
                </p>
                <p>
                  Users are able to sign-up and upload beats which are stored using Amazon S3 buckets. They are also able to credits other users of the site who they may have collaborated with.
                </p>
              </div>
            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7 animate__animated animate__fadeIn">
            <img className="d-block w-100 project-img" src="https://imgur.com/5TnOZGR.jpg" alt="project" />
          </div>

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>500px</h3>

                <p>
                  <a className="project-links" href="https://github.com/plam1216/500px">GitHub</a> | <a className="project-links" href="https://peter-lam-500px.herokuapp.com/">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A mobile friendly CRUD application that allows users to upload photo albums.
                </p>
                <p>
                  In addition, users can leave comments under photos. Custom API routes were created using express.js and tested via Postman.
                  <br />
                  <br />
                </p>
              </div>

            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-7 animate__animated animate__fadeIn">
            <img className="d-block w-100 project-img" src="https://imgur.com/xy0CFkk.jpg" alt="project" />
          </div>

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>Spotify Search</h3>

                <p>
                  <a className="project-links" href="https://github.com/plam1216/Spotify_Search">GitHub</a> | <a className="project-links" href="https://spotify-search-pl.netlify.app/">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A mobile friendly site that uses Spotify's API to display an artist's discography.
                </p>
              </div>
            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects