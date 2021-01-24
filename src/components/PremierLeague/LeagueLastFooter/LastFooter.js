import React from 'react';
import classes from './LastFooter.css';
import Premier from '../../../assets/images/tablePremier.png';

const lastFooter = () => (
    <div className={classes.LastFooter}>
        <p>© PREMIER LEAGUE 2021</p>
        <li style={{ listStyle: 'none' }}><a href="/">Modern Slavery Statement</a></li>
        <li><a href="/">Equality Standard</a></li>
        <li><a href="/">Terms & Conditions</a></li>
        <li><a href="/">Policies</a></li>
        <li><a href="/">Cookie Policy</a></li>
        <li><a href="/">Back To Top</a></li>
        <a href="/"><img src={Premier} alt="Here is my table logo" /></a>
    </div>
);

export default lastFooter;