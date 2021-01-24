import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Premier from '../../../assets/images/tablePremier.png';
import classes from './Table.css';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Points from '@material-ui/icons/SportsSoccer';
import Check from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Button2 from '@material-ui/core/Button';

const Table = () => {
    const columns = [
        {
            text: 'Position',
            dataField: 'id',

        },
        {
            text: 'Club',
            dataField: 'club',
            width: 270,
        },
        {
            text: 'Played',
            dataField: 'played',
            width: 200,
        },
        {
            text: 'Won',
            dataField: 'won',
            sort: 'asc',
            width: 100,
        },
        {
            text: 'Drawn',
            dataField: 'drawn',
            sort: 'disabled',
            width: 150,
        },
        {
            text: 'Lost',
            dataField: 'lost',
            sort: 'disabled',
            width: 100,
        },
        {
            text: 'GF',
            dataField: 'gf',
            sort: 'disabled',
            width: 100,
        },
        {
            text: 'GA',
            dataField: 'ga',
            sort: 'disabled',
            width: 100,
        },
        {
            text: 'GD',
            dataField: 'gd',
            sort: 'disabled',
            width: 100,
        },
        {
            text: 'Points',
            dataField: 'points',
            sort: 'disabled',
            width: 100,
        },
        {
            text: 'Form',
            dataField: 'form',
            sort: 'disabled',
            width: 100,
        },
        {
            text: 'Next',
            dataField: 'next',
            sort: 'disabled',
            width: 100,
        },
    ];
    const rows = [
        {
            id: '1',
            club: 'Manchester United',
            played: '19',
            won: '12',
            drawn: '4',
            lost: '3',
            gf: '36',
            ga: '25',
            gd: '+11',
            points: '40',
            form: '4',
            next: '20'
        },
        {
            id: '2',
            club: 'Manchester City',
            played: '18',
            won: '11',
            drawn: '5',
            lost: '2',
            gf: '31',
            ga: '13',
            gd: '+18',
            points: '38',
            form: '5',
            next: '19'
        }, {
            id: '3',
            club: 'Leicester City',
            played: '19',
            won: '12',
            drawn: '2',
            lost: '5',
            gf: '35',
            ga: '21',
            gd: '+14',
            points: '38',
            form: '3',
            next: '6'
        }, {
            id: '4',
            club: 'Liverpool',
            played: '19',
            won: '9',
            drawn: '7',
            lost: '3',
            gf: '37',
            ga: '22',
            gd: '+15',
            points: '34',
            form: '0',
            next: '5'
        }, {
            id: '5',
            club: 'Tottenham Hotspur',
            played: '18',
            won: '9',
            drawn: '6',
            lost: '3',
            gf: '33',
            ga: '17',
            gd: '+16',
            points: '33',
            form: '2',
            next: '4'
        }, {
            id: '6',
            club: 'Everton',
            played: '17',
            won: '10',
            drawn: '2',
            lost: '5',
            gf: '28',
            ga: '21',
            gd: '+7',
            points: '32',
            form: '4',
            next: '3'
        }, {
            id: '7',
            club: 'West Ham United',
            played: '19',
            won: '9',
            drawn: '5',
            lost: '5',
            gf: '27',
            ga: '22',
            gd: '+5',
            points: '32',
            form: '3',
            next: '13'
        }, {
            id: '8',
            club: 'Chelsea',
            played: '19',
            won: '8',
            drawn: '5',
            lost: '6',
            gf: '33',
            ga: '23',
            gd: '+10',
            points: '29',
            form: '1',
            next: '14'
        }, {
            id: '9',
            club: 'Southampton',
            played: '18',
            won: '8',
            drawn: '5',
            lost: '5',
            gf: '26',
            ga: '21',
            gd: '+5',
            points: '29',
            form: '1',
            next: '10'
        }, {
            id: '10',
            club: 'Arsenal',
            played: '19',
            won: '8',
            drawn: '3',
            lost: '8',
            gf: '23',
            ga: '19',
            gd: '+4',
            points: '27',
            form: '4',
            next: '9'
        }, {
            id: '11',
            club: 'Aston Villa',
            played: '16',
            won: '8',
            drawn: '2',
            lost: '6',
            gf: '29',
            ga: '18',
            gd: '+11',
            points: '26',
            form: '2',
            next: '15'
        }, {
            id: '12',
            club: 'Leeds United',
            played: '18',
            won: '7',
            drawn: '2',
            lost: '9',
            gf: '30',
            ga: '34',
            gd: '-4',
            points: '23',
            form: '2',
            next: '15'
        }, {
            id: '13',
            club: 'Crystal Palace',
            played: '19',
            won: '6',
            drawn: '5',
            lost: '8',
            gf: '22',
            ga: '33',
            gd: '-11',
            points: '23',
            form: '1',
            next: '7'
        }, {
            id: '14',
            club: 'Wolwerhampton Wanderers',
            played: '19',
            won: '6',
            drawn: '4',
            lost: '9',
            gf: '21',
            ga: '29',
            gd: '-8',
            points: '22',
            form: '0',
            next: '8'
        }, {
            id: '15',
            club: 'Newcastle United',
            played: '18',
            won: '5',
            drawn: '4',
            lost: '9',
            gf: '18',
            ga: '30',
            gd: '-12',
            points: '19',
            form: '0',
            next: '11'
        }, {
            id: '16',
            club: 'Burnley',
            played: '18',
            won: '5',
            drawn: '4',
            lost: '9',
            gf: '10',
            ga: '22',
            gd: '-12',
            points: '19',
            form: '2',
            next: '11'
        }, {
            id: '17',
            club: 'Brighton and Have Albion',
            played: '19',
            won: '3',
            drawn: '3',
            lost: '8',
            gf: '22',
            ga: '29',
            gd: '-7',
            points: '17',
            form: '1',
            next: '18'
        }, {
            id: '18',
            club: 'Fulham',
            played: '18',
            won: '2',
            drawn: '6',
            lost: '10',
            gf: '15',
            ga: '27',
            gd: '-12',
            points: '12',
            form: '0',
            next: '17'
        }, {
            id: '19',
            club: 'West Bromwich Albion',
            played: '19',
            won: '2',
            drawn: '5',
            lost: '12',
            gf: '15',
            ga: '43',
            gd: '-28',
            points: '11',
            form: '1',
            next: '2'
        }, {
            id: '20',
            club: 'Sheffield United',
            played: '19',
            won: '1',
            drawn: '2',
            lost: '16',
            gf: '10',
            ga: '32',
            gd: '-22',
            points: '5',
            form: '1',
            next: '1'
        },

    ];

    const expandRow = {
        renderer: row => (
            <div className={classes.HoverDiv}>
                <h1><KeyboardArrowLeft style={{ fontSize: 50 }} />
                    {`${row.club}`}
                    <KeyboardArrowRight style={{ fontSize: 50 }} />
                    <Points style={{ fontSize: 45 }} />
                    {`${row.points}`}
                </h1>
                <p><Check style={{ fontSize: 75 }} />
                    {`${row.played} times has been played and`}
                    <KeyboardArrowUp style={{ fontSize: 100, color: 'green' }} />
                    {`${row.won} times win the game`}
                    <KeyboardArrowDown style={{ fontSize: 100, color: 'red' }} />
                    {`${row.lost} times lose the game`}
                </p>
            </div>
        ),
        showExpandColumn: true,
        expandHeaderColumnRenderer: ({ isAnyExpands }) => {
            if (isAnyExpands) {
                return <b>More</b>;
            }
            return <b>More</b>;
        },
        expandColumnRenderer: ({ expanded }) => {
            if (expanded) {
                return (
                    <Button2
                        variant="outlined"
                        color="primary"
                        style={{ backgroundColor: 'rgb(63, 5, 41)', color: 'white' }}>
                        <KeyboardArrowUp />
                    </Button2>
                );
            }
            return (
                <Button variant="outlined" color="primary">
                    <KeyboardArrowDown />
                </Button>

            );
        }
    };

    return (
        <div className={classes.Table}>
            <img src={Premier} alt="Here is my table logo" />
            <BootstrapTable
                keyField='id'
                data={rows}
                columns={columns}
                expandRow={expandRow}
            />
        </div>


    );
}

export default Table;

