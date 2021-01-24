import React from 'react';
import classes from './Filter.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
        color: 'black',
        fontWeight: 'bold'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const filter = () => {
    const classs = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <div className={classes.Filter}>
            <FormControl variant="outlined" className={classs.formControl}>
                <InputLabel
                    htmlFor="outlined-age-native-simple"
                    style={{ fontStyle: 'italic' }}
                >Filter by Competiton</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Filter by Competiton"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >

                    <option value={10}>Premier League</option>
                    <option value={20}>FA Cup</option>
                    <option value={30}>EFL Cup</option>
                    <option value={40}>UEFA Champions League</option>
                    <option value={50}>UEFA Europa League</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classs.formControl}>
                <InputLabel
                    htmlFor="outlined-age-native-simple"
                    style={{ fontStyle: 'italic' }}
                >Filter by Season</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Filter by Season"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >

                    <option value={1}>2020/2021</option>
                    <option value={0}>All Seasons</option>
                    <option value={2}>2019/2020</option>
                    <option value={3}>2018/2019</option>
                    <option value={4}>2017/2018</option>
                    <option value={5}>2016/2017</option>
                    <option value={6}>2015/2016</option>
                    <option value={7}>2014/2015</option>
                    <option value={8}>2013/2014</option>
                    <option value={9}>2012/2013</option>
                    <option value={100}>2011/2012</option>
                    <option value={11}>2010/2011</option>
                    <option value={12}>2009/2010</option>
                    <option value={13}>2008/2009</option>
                    <option value={14}>2007/2008</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classs.formControl}>
                <InputLabel
                    htmlFor="outlined-age-native-simple"
                    style={{ fontStyle: 'italic' }}
                >Filter by Matchweek</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Filter by Matchweek"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >

                    <option value={1000}>All Matchweeks</option>
                    <option value={1001}>1</option>
                    <option value={1002}>2</option>
                    <option value={1003}>3</option>
                    <option value={1004}>4</option>
                    <option value={1005}>5</option>
                    <option value={1006}>6</option>
                    <option value={1007}>7</option>
                    <option value={1008}>8</option>
                    <option value={1009}>9</option>
                    <option value={1010}>10</option>
                    <option value={1011}>11</option>
                    <option value={1012}>12</option>
                    <option value={1013}>13</option>
                    <option value={1014}>14</option>
                    <option value={1015}>15</option>
                    <option value={1016}>16</option>
                    <option value={1017}>17</option>
                    <option value={1018}>18</option>
                    <option value={1019}>19</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classs.formControl}>
                <InputLabel
                    htmlFor="outlined-age-native-simple"
                    style={{ fontStyle: 'italic' }}
                >Filter by Home or Away</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Filter by Home or Away"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >

                    <option value={200}>All Matches</option>
                    <option value={300}>Home</option>
                    <option value={400}>Away</option>
                </Select>
            </FormControl>
            <a href="/"><RefreshIcon />Reset Filters</a>
        </div>
    );
};

export default filter;