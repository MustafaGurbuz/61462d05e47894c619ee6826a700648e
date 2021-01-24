import React, { Component } from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../../hoc/Auxiliary';
import Modal from '../../UI/Modal/Modal';
import GeneralSearch from '../../GeneralSearch/GeneralSearch';
import SearchIcon from '@material-ui/icons/Search';

class NavigationItems extends Component {
    state = {
        purchasing: false
    }
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCloseHandler = () => {
        this.setState({ purchasing: false });
    }
    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCloseHandler}>
                    <GeneralSearch
                        purchaseCancelled={this.purchaseCloseHandler}
                    />
                </Modal>
                <ul className={classes.NavigationItems}>
                    <NavigationItem link="/" active>Premier League</NavigationItem>
                    <NavigationItem link="/">Fantasy</NavigationItem>
                    <NavigationItem link="/">Video</NavigationItem>
                    <NavigationItem link="/">Communities</NavigationItem>
                    <NavigationItem link="/">More</NavigationItem>
                    <NavigationItem
                        link="/"
                        style={{ borderLeft: "1px dotted gray" }}>
                        No Room For Racism
                    </NavigationItem>
                    <NavigationItem link="/">Sign in</NavigationItem>
                    <NavigationItem
                        click={this.purchaseHandler}
                        style={{ borderLeft: "1px dotted gray", cursor: "pointer" }}>
                        <SearchIcon style={{ fontSize: "27px", color: 'white' }} />
                    </NavigationItem>
                </ul>
            </Aux>

        )
    }
}

export default NavigationItems;