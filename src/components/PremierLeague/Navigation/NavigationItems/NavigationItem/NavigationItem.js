import React from 'react';
import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <a
            className={props.active ? classes.active : null}
            href={props.link}
            style={props.style}
            onClick={props.click}
        >{props.children}</a>
    </li>
);

export default navigationItem;