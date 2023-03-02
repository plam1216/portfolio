import React from 'react'

const Video = ({video}) => {
    return (
        <div className="col-7 animate__animated animate__fadeIn">
            <video
                controls
                autoPlay
                loop
                // muted
                className="d-block w-100 project-img"
            >
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Video