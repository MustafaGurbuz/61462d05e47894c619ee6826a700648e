import React from 'react';
import Premier from '../../assets/images/premierLogo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{
        height: props.height,
        marginBottom: props.marginBottom
    }}>
        <img src={Premier} alt="Here is my burger" />
    </div>
);

export default logo;