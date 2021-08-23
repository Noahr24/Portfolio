import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'white',
        textDecoration: 'none',

    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    },
    ul: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    profile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topMargin: {
        margin: '3% 0 0 0'
    },
    color: {
        color: 'white'
    }
    
})

export const Navbar = () =>{
    const classes = useStyles();
    
    return(
        <div>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Software Developer</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className={classes.nav_a}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/resume' className={classes.nav_a}>Resume</Link>
                        </li>
                        <li>
                            <Link to='/contact' className={classes.nav_a}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};