import React from 'react';
import classes from './LeagueBrands.css';
import eaSport from '../../../assets/images/eaSport.jpg';
import barclays from '../../../assets/images/barc.jpg';
import budweiser from '../../../assets/images/budweiser.png';
import coca from '../../../assets/images/coca.png';
import hublot from '../../../assets/images/hublot.jpg';
import nike from '../../../assets/images/nike.png';
import avery from '../../../assets/images/avery.png';
import panini from '../../../assets/images/panini.png';

const brands = () => (
    <div className={classes.Brands}>
        <a href="/">
            <img src={eaSport} alt="Here is my brands" />
            <p style={{ marginLeft: '-3px' }}>Lead Partner</p>
        </a>
        <a href="/">
            <img src={barclays} alt="Here is my brands" />
            <p style={{ marginLeft: '40px' }}>Official Bank</p>
        </a>
        <a href="/">
            <img src={budweiser} alt="Here is my brands" />
            <p style={{ marginLeft: '10px' }}>Official Beer</p>
        </a>
        <a href="/">
            <img src={coca} alt="Here is my brands" />
            <p>Official Soft Drink</p>
        </a>
        <a href="/">
            <img src={hublot} alt="Here is my brands" />
            <p>Official Timekeeper</p>
        </a>
        <a href="/">
            <img src={nike} alt="Here is my brands" />
            <p style={{ marginLeft: '25px' }}>Official Ball</p>
        </a>
        <a href="/">
            <img src={avery} alt="Here is my brands" />
            <p>Official Licensee</p>
        </a>
        <a href="/">
            <img src={panini} alt="Here is my brands" />
            <p style={{ marginLeft: '20px' }}>Official Licensee</p>
        </a>
    </div>
);

export default brands;