import React from 'react';
import './Bg.css';

function bg()
{
    return(
        <video id="ocScreencapVideo" autoplay="autoplay" muted="muted" loop="loop" playsinline="playsinline" preload="metadata" data-aos="fade-up">
        <source src="../videos/video-1.mp4    "
                type="video/mp4"/>
          Your browser does not support MP4 Format videos or HTML5 Video.
      </video>
    )
}
export default bg