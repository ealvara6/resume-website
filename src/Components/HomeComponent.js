import { React, useState } from 'react';
import NavButton from './NavButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
    container: {
        justifyContent: "center",
    },
    block: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(8),
            marginRight: theme.spacing(8),
        },
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    subtitle: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    buttons: {
        justifyContent: "space-around",
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(2),
        },
    },
}));

export default function HomeComponent(props) {
    const classes = useStyles();
    const mobileView = props.mobileView;


    const handleComponentChange = (component) => {
        props.componentChange(component);
    }

    return(
        <Box>
            <Slide direction="up" in={true} timeout={1700}>
                    <Grid container className={classes.container} xs={12} direction={mobileView ? "column-reverse" : "row"}>
                        <Grid item sm={12} lg={4} className={classes.headshot}>
                            <Box display="flex" justifyContent="center">
                                {!mobileView ? <img className={classes.headshot} src="/Images/website-headshot.png" alt="Headshot" />
                                    : <img classsName={classes.headshot} src="/Images/website-headshot-mobile.png" alt="Headshot" />}
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Box className={classes.block}>
                                <Typography className={classes.title} variant={mobileView ? "h3" : "h1"}>Hello</Typography>
                                <Typography className={classes.subtitle} variant="h5">A Bit About Me</Typography>
                                <Typography variant="subtitle1">Hi, My name is Eduardo. I am an aspiring developer currently working on personal web development projects. I graduated from the University of Houston under the C.T Bauer College of Business with a degree in Management Information Systems with magna cum laude honors.</Typography>
                                <Grid container className={classes.buttons} xs={12}>
                                    <Grid item onClick={() => handleComponentChange("resume")} >
                                        <NavButton mobileView={mobileView} color="#3f51b5"  slide={1500} title="Resume" textColor="#fff"/>
                                    </Grid>
                                    <Grid item onClick={() => handleComponentChange("projects")}>
                                        <NavButton mobileView={mobileView} color="#f50057" slide={1800} title="Projects" textColor="#fff"/>
                                    </Grid>
                                    <Grid item onClick={() => handleComponentChange("contact")}>
                                        <NavButton mobileView={mobileView} color="#f44336" slide={2100} title="Contact" textColor="#fff"/>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
            </Slide>
        </Box>
    )
} 