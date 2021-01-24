import React from 'react';
import classes from './TableLogo.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const tableLogo = () => (

    <div className={classes.TableLogo}>
        <div>
            <h1>Tables</h1>
            <p>
                <Link to="tableTwo" style={{ textDecoration: 'none' }}>
                    <Button
                        color="primary">
                        First Team
                    </Button>
                </Link>
                <Link to="tableThree" style={{ textDecoration: 'none' }}>
                    <Button
                        color="primary">
                        PL2
                    </Button>
                </Link>
                <Link to="tableFour" style={{ textDecoration: 'none' }}>
                    <Button
                        color="primary">
                        U18
                    </Button>
                </Link>
            </p>
        </div>
        <Button
            variant="outlined"
            color="primary"
            style={{ marginTop: '125px' }}>
            Share
      </Button>
    </div>
);

export default tableLogo;