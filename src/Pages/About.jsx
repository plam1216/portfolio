import React from 'react'

const About = () => {
  return (
      <div id="about" className="container-fluid justify-content-center align-items-center">
        <div className="row">
          <div className="col-6 offset-md-1">
            <section>
              <p>
                Hi, I'm Peter Lam, an NYC based software engineer.
              </p>

              <p>
                Prior to transitioning into software engineering I was a freelance <a className="cred-links" href="https://peterlam.beatstars.com/about">audio engineer</a> and <a className="cred-links" href="https://peterlam.beatstars.com/">music producer</a>. I had some work featured on Apple Music, Spotify, and Tidal playlists.
              </p>

              <p>My change in career paths was driven by my desire to find ways to merge art and tech to develop products that can help artists throughout their creative process.
              </p>

              <p>Here are some of the skills I've been using while coding:</p>

              <div id="skills">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="icon" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="icon" />
              </div>
            </section>
          </div>

          {/* <div className="col-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, amet. Reprehenderit consequatur eum accusantium aperiam blanditiis voluptatem sint ipsa facere nemo maxime, sed tenetur veritatis a doloribus sit dolores obcaecati.
            </p>
          </div> */}
      </div>
    </div >
  )
}

export default About