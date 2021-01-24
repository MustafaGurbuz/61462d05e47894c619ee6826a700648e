import React from 'react';
import classes from './BottomPartNav.css';
import NavigationItem from './BottomSubLink/NavigationItem';

const bottomPartNav = () => (
    <nav className={classes.DesktopOnly}>
        <ul className={classes.Link}>
            <NavigationItem link="/" >Home</NavigationItem>
            <NavigationItem link="/">Fixtures</NavigationItem>
            <NavigationItem link="/">Results</NavigationItem>
            <NavigationItem link="/" active>Tables</NavigationItem>
            <NavigationItem link="/">Transfers</NavigationItem>
            <NavigationItem link="/">Broadcast</NavigationItem>
            <NavigationItem link="/">Tickets</NavigationItem>
            <NavigationItem link="/">Clubs</NavigationItem>
            <NavigationItem link="/">Players</NavigationItem>
            <NavigationItem link="/">Managers</NavigationItem>
            <NavigationItem link="/">News</NavigationItem>
            <NavigationItem link="/">Social</NavigationItem>
            <NavigationItem link="/">Youth</NavigationItem>
        </ul>
    </nav>
);

export default bottomPartNav;