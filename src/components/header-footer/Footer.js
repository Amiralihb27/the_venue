import React from 'react';
import { Fade } from "react-awesome-reveal";

const Footer = () =>{
    return (
       <footer className='bck_footer_color'>

       {/* <Fade triggerOnce ></Fade> */}
       {/* the animation happens only once . at the first trigger */}

       {/* <Fade delay={1000}></Fade> */}
       {/* it gives some delay to the fade animation */}
        <Fade>
        <div className='font_righteous footer_logo_venue'>The Venue</div>
        <div className='footer_copyright'>The venue 2024 all rights reserved</div>
        </Fade>
       </footer>

    )
}

export default Footer;