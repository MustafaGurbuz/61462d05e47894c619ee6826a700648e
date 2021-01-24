import React from 'react';
import classes from './Line.css';

const line = (props) => (
    <div className={classes.Line} style={{
        marginTop: props.marginTop
    }}>
    </div>
);

export default line;