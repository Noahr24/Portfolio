import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import wall from '../../assets/images/wall.jpeg';
import noah from '../../assets/images/noah.jpeg';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar'




interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
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

export const Home = ( props:Props) => {

    // New classes variable code
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/*New and Updated HTML Code */}
            <Navbar />
            <main className={classes.main}>
            <div className={`${classes.profile} ${classes.topMargin}`}>
                    <img src={noah} width="30%"/>
                </div>
                <div className={classes.profile}>
                    <h1 className={classes.color}>Noah Rosenbaum</h1>
                </div>
                <div className={classes.profile}>
                    <h3 className={classes.color}>Amazing Web Designs</h3>
                </div>
            </main>
        </div>
    )
}