import React from 'react'
import BeatStoreVideo from '../assets/beatstore-recording.mov'
import RoundTwoVideo from '../assets/roundtwo-recording.mov'
import FiveHundredPxVideo from '../assets/500px-recording.mov'
import SampleCrateVideo from '../assets/sample-crate-recording.mov'
import DisneyCloneVideo from '../assets/disney-clone-recording.mov'
import JobPlayVideo from '../assets/jobplay-recording.mov'
import SpotifyAnalysisVideo from '../assets/spotify-analysis-recording.mov'
import Video from './Video'

const Projects = ({ id }) => {
  return (
    <div id="projects-section">
      <div className="container" id={id}>
        <h1>Projects</h1>

        <hr />

        <div className="row">
          <Video video={SpotifyAnalysisVideo} />

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>Spotify Analysis</h3>
                <p>
                  <a className="project-links" href="https://github.com/plam1216/spotify-analysis">GitHub</a> | <a className="project-links" href="https://spotify-analysis-af539.web.app/">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A site that analyzes songs from top playlists on Spotify.
                </p>

                <p>
                  Average statistics of a Playlist's danceability, duration, energy, tempo, and loudness are calculated to help understand trends among songs within the playlist.
                </p>

                <p>
                  Data is pulled from Spotify using &nbsp;
                  <a href="https://github.com/thelinmichael/spotify-web-api-node#usage">
                    Spotify-Web-API.
                  </a>
                </p>
              </div>
            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        {/* JobPlay */}
        <div className="row">
          <div
            className="col-7 animate__animated animate__fadeIn"
            style={{ height: "392px" }}
          >
            <video
              controls
              autoPlay
              loop
              // muted
              className="d-block w-100 project-img"
              style={{ height: "100%" }}
            >
              <source src={JobPlayVideo} type="video/mp4"></source>
            </video>
          </div>

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>JobPlay</h3>
                <p>
                  <a className="project-links" href="https://github.com/luisdaniel0/Jobplay">GitHub</a> | <a className="project-links" href="https://job-play.netlify.app/">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A mobile site that gamifies the job application process.
                </p>

                <p>
                  JobPlay was developed with a team of 5 developers and 3 UX/UI designers during a 3 day hackathon. The idea was to gamify the job application process for users.
                </p>

                <p>
                  Users can track the jobs they have applied to, skills they learned, and events they attended and receive medals as they continue to add more entries.
                </p>
              </div>
            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <Video video={DisneyCloneVideo} />

          <div className="col-5 project-desc">
            <section>
              <div className="project-title">
                <h3>Disney+ Clone</h3>
                <p>
                  <a className="project-links" href="https://github.com/plam1216/disney-clone">GitHub</a> | <a className="project-links" href="https://disney-clone-e4006.web.app/">App</a>
                </p>
              </div>

              <div className="project-details">
                <p>
                  A Disney+ Clone that recommends movies based on view history.
                </p>
                <p>
                  Movies are sorted by genre and franchise and upon viewing a movie it will be removed from the recommended list.
                </p>
              </div>
            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <Video video={SampleCrateVideo} />


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
                  Random songs are suggested for the user to sample with a link for MP3 download. Users can sign-in with Google Authentication to favorite songs. Option to filter songs by genere and year and to view song metadata.
                </p>
                <p>
                  Site analytics implemented to track user's site interactions via Firebase.
                </p>
              </div>

            </section>

            <hr />

            <div className="languages">
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="icon" />
            </div>
          </div>
        </div>

        <div className="row">
          <Video video={RoundTwoVideo} />

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
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" alt="firebase" />
              <img className="tech-used" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="bootstrap" />
            </div>
          </div>
        </div>

        <div className="row">
          <Video video={BeatStoreVideo} />

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
          <Video video={FiveHundredPxVideo} />

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

        {/* <div className="row">
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
        </div> */}
      </div>
    </div>
  )
}

export default Projects