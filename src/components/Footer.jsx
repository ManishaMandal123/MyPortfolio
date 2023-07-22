import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        
            <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/manisha-mandal-53b442219/', '_blank')} />
       
            <GitHubIcon onClick={() => window.open('https://github.com/ManishaMandal123', '_blank')} />
        </div>
        <p> @copywrite{new Date().getFullYear()}: Manisha Mandal </p>
    </div>
  )
}

export default Footer