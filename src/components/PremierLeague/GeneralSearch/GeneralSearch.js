import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    resize: {
        fontSize: 30,
        fontStyle: 'italic'
    },
    textField: {
        width: "70%",
        marginLeft: 200
    },
    searchStyle: {
        fontSize: 40,
        width: 50,
        height: 50,
        borderRadius: 30,
        margin: 15,
    },
}));

const generalSearch = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                placeholder="Search Premier League"
                InputProps={{
                    classes: {
                        input: classes.resize,
                    },
                }}
                className={classes.textField}
                margin="normal"
                autoFocus={true}
                variant="outlined"
                color="secondary"
            />
            <div className={classes.searchStyle}>
                <IconButton
                    color="secondary"
                    style={{ backgroundColor: 'lightgray' }}>
                    <SearchIcon />
                </IconButton>
            </div>
        </div>

    );
}

export default generalSearch;