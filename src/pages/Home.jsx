import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon  from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import "../styles/Home.css";


function Home() {
    return (
      <>
        <div className='home'>
            <div className="about">
                <h2>Hi, I am Manisha Mandal</h2>
                <div className="prompt">
                    <p>A Front-end Developer with a passion for learning and creating☺</p>
                    <EmailIcon onClick={() => window.open('mailto:manishamandal511@gmail.com', '_blank')} />
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/manisha-mandal-53b442219/', '_blank')} />
                    <GithubIcon onClick={() => window.open('https://github.com/ManishaMandal123', '_blank')} />
                </div>
                <div className='prompt'>
                    <ArrowDownwardIcon />
                </div>
            </div>
            <div className='image' >
            <img src="../src/assets/fro.png" alt="" />
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className='list'>
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>
                            ReactJs, HTML, CSS, StyledComponents, Redux-Toolkit, Redux
                        </span>
                    </li>
                   
                    <li className="item">
                        <h2>Programming Language</h2>
                        <span>
                            JavaScript, Java
                        </span>
                    </li>
                    <li className="item">
                        <h2>Tools</h2>
                        <span>
                            Git, GitHub, Visual Studio Code, NPM
                        </span>
                    </li>
                </ol>
            </div>
        </div>
        </>
    )
}

export default Home