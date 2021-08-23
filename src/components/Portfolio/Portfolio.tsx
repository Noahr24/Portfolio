import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import wall from '../../assets/images/wall.jpeg';
import { Navbar } from '../Navbar';

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
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${wall});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
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


export const Portfolio = () => {

    const classes = useStyles();

    return (
        <div>
            <main className={classes.main}>
            <Navbar />
            <h1 className={classes.color}>Portfolio</h1>
            </main>
        </div>
    )
}