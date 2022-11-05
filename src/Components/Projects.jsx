import React from 'react'

const Projects = () => {
  // const projects = [
  //   {
  //     proj1:
  //       ["https://imgur.com/Gx82YcS.jpg",
  //         "https://imgur.com/tZz31s5.jpg",
  //         "https://imgur.com/jU4hSfi.jpg",
  //         "https://imgur.com/oZxQxJU.jpg"]
  //   },
  //   {
  //     proj2:
  //       ["https://imgur.com/vdWwdfs.jpg",
  //         "https://imgur.com/tZz31s5.jpg",
  //         "https://imgur.com/jU4hSfi.jpg",
  //         "https://imgur.com/oZxQxJU.jpg"]
  //   },
  //   {
  //     proj3:
  //       ["https://imgur.com/Gx82YcS.jpg",
  //         "https://imgur.com/tZz31s5.jpg",
  //         "https://imgur.com/jU4hSfi.jpg",
  //         "https://imgur.com/oZxQxJU.jpg"]
  //   }
  // ]

  return (
    <div id="projects">
      <div className="container">
        <h2>Projects</h2>

        <hr />
        
        <div className="row">
          <div className="col-7 animate__animated animate__fadeIn">
            <img className="d-block w-100 project-img" src="https://imgur.com/iTZ467M.jpg" alt="project" />
          </div>

          <div className="col-5 project-desc">
            <section>
              <h3>BeatStars</h3>
              <p>
                <a href="https://github.com/plam1216/beatstore">GitHub</a> | <a href="https://beatstore-pl.herokuapp.com/">App</a>
              </p>
              <p>
                A music marketplace where users can buy and sell beats.
              </p>
              <p>
                Users are able to sign-up and upload beats which are stored using Amazon S3 buckets. They are also able to credits other users of the site who they may have collaborated with.
              </p>
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
              <h3>500px</h3>
              <p>
                <a href="https://github.com/plam1216/500px">GitHub</a> | <a href="https://peter-lam-500px.herokuapp.com/">App</a>
              </p>
              <p>
                A mobile friendly CRUD application that allows users to upload photo albums.
              </p>
              <p>
                In addition, users can leave comments under photos. Custom API routes were created using express.js and tested via Postman.
                <br />
                <br />
              </p>
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
              <h3>Spotify Search</h3>
              <p>
                <a href="https://github.com/plam1216/Spotify_Search">GitHub</a> | <a href="https://spotify-search-pl.netlify.app/">App</a>
              </p>
              <p>
                A mobile friendly site that using Spotify's API to display an artist's discography
              </p>
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