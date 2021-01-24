import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import TableLogo from '../../components/PremierLeague/LeagueTableLogo/TableLogo';
import Filter from '../../components/PremierLeague/LeagueTableFilter/Filter';
import Table from '../../components/PremierLeague/LeagueTable/Table';
import Brands from '../../components/PremierLeague/LeagueBrands/LeagueBrands';
import Line from '../../components/PremierLeague/LeagueBeforeBrands/Line';
import Footer from '../../components/PremierLeague/LeagueFooter/Footer';
import TableTwo from '../../components/PremierLeague/LeagueRouteTables/LeagueTableTwo/TableTwo';
import TableThree from '../../components/PremierLeague/LeagueRouteTables/LeagueTableThree/TableThree';
import TableFour from '../../components/PremierLeague/LeagueRouteTables/LeagueTableFour/TableFour';
import LastFooter from '../../components/PremierLeague/LeagueLastFooter/LastFooter';
import { Route } from 'react-router-dom';

class PremierBuilder extends Component {

    state = {
        situation: null,
        pathName: '/'
    }

    render() {

        return (
            <Aux>
                <TableLogo />
                <Filter />
                <Route path="/tableTwo" component={TableTwo} />
                <Route path="/tableThree" component={TableThree} />
                <Route path="/tableFour" component={TableFour} />
                <Route path="/" exact component={Table} />
                <Line />
                <Brands />
                <Line marginTop="0" />
                <Footer />
                <Line marginTop="0" />
                <LastFooter />
            </Aux>
        );
    }
}

export default PremierBuilder;