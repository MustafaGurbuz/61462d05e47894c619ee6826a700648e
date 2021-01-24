import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Premier from '../../../../assets/images/tablePremier.png';
import classes from './TableFour.css';


const TableFour = () => {
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
        },
        {
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
        },

    ];


    return (
        <div className={classes.TableFour}>
            <img src={Premier} alt="Here is my table logo" />
            <BootstrapTable
                keyField='id'
                data={rows}
                columns={columns}
            />
        </div>


    );
}

export default TableFour;

