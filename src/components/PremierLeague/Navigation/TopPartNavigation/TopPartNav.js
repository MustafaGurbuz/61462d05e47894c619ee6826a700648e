import React from 'react';
import classes from './TopPartNav.css';
import arsenal from '../../../../assets/images/ars.png';
import aston from '../../../../assets/images/aston.jpg';
import brighton from '../../../../assets/images/brighton.png';
import burnley from '../../../../assets/images/burnley.jpg';
import chelsea from '../../../../assets/images/chelsea.png';
import crstalpc from '../../../../assets/images/crstalpc.png';
import everton from '../../../../assets/images/everton.jpg';
import fulham from '../../../../assets/images/fulham.jpg';
import leeds from '../../../../assets/images/leeds.png';
import leicester from '../../../../assets/images/leicester.png';
import liverpool from '../../../../assets/images/liv.png';
import manc from '../../../../assets/images/manc.png';
import manu from '../../../../assets/images/manu.png';
import newcastle from '../../../../assets/images/newcastle.jpg';
import southam from '../../../../assets/images/souhham.png';
import sheffield from '../../../../assets/images/sheffield.png';
import tottenham from '../../../../assets/images/tottenham.jpg';
import westbrom from '../../../../assets/images/westbrom.png';
import westham from '../../../../assets/images/westham.png';
import wolver from '../../../../assets/images/wolver.png';

const topPartNav = () => (
    <div className={classes.Link}>
        <p>CLUB SITES</p>
        <nav className={classes.DesktopOnly}>
            <ul>
                <li><a href="/" >
                    <img src={arsenal} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={aston} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={brighton} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={burnley} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={chelsea} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={crstalpc} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={everton} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={fulham} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={leeds} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={leicester} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={liverpool} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={manc} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={manu} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={newcastle} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={sheffield} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={southam} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={tottenham} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={westbrom} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={westham} alt="Here is my team" />
                </a>
                </li>
                <li><a href="/" >
                    <img src={wolver} alt="Here is my team" />
                </a>
                </li>
            </ul>
        </nav>
    </div>
);

export default topPartNav;