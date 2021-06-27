import React from 'react';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[200],
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
    },
    icon: {
        '&:hover': {
            cursor: "pointer",
        },
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    item: {
        '&:hover': {
            cursor: "pointer",
        },
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
        '&:hover': {
            cursor: "pointer",
        },
    container: {
        minHeight: 0,
    },
}));

export default function MenuItems(props) {
    const classes = useStyles();


    const handleClose = () => {
        props.handleMenu(false, "");
    }

    const handleClick = (component) => {
        props.handleMenu(false, component);
    }



    return(
        <Fade in={true} timeout={1000}>
            <Box>
                <Slide in={true} timeout={500}>
                    <Box className={classes.root}>
                        <Grid container className={classes.container}>
                            <Grid item xs={12} className={classes.icon}>
                                <Box display="flex" justifyContent="flex-end"><CloseIcon onClick={() => handleClose()} /></Box>
                            </Grid>
                            <Grid item xs={12}>
                                    <Box display="flex" justifyContent="center"><Typography className={classes.item} variant="h6" onClick={() => handleClick("resume")}>Resume</Typography></Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center"><Typography className={classes.item} variant="h6" onClick={() => handleClick("projects")}>Projects</Typography></Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center"><Typography className={classes.item} variant="h6" onClick={() => handleClick("contact")}>Contact</Typography></Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Slide>
            </Box>
        </Fade>
    )
}