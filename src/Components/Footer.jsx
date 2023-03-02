import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col s6 offset-md-2">
            <a href="https://www.linkedin.com/in/plam1216/">
              <img src="https://imgur.com/iNQ3ami.png" alt="linkedin" className="social-icons" />
            </a>
            <a href="https://github.com/plam1216">
              <img src="https://imgur.com/noZk2jh.png" alt="github" className="social-icons"
                style={{ backgroundColor: 'white', borderRadius: '24px' }} />
            </a>
          </div>
          <div className="col s1 offset-md-3">
            © 2023 Peter Lam
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer