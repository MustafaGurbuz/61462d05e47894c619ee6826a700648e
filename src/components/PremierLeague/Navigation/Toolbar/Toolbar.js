import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import BottomPartNav from '../BottomPartNavigation/BottomPartNav';
import Aux from '../../../../hoc/Auxiliary';

const toolbar = (props) => (
    <Aux>
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo height="200%" />
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
        <BottomPartNav />
    </Aux>

);

export default toolbar;