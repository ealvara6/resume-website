import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: props => ({
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
            width: 100,
            height: 100,
        },
        [theme.breakpoints.down("xs")]: {
            width: 75,
            height: 75,
        },
        marginTop: theme.spacing(4),
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "thin",
        color: props.textColor,
        borderRadius: "50%",
        width: 125,
        height: 125,
        backgroundColor: props.color,
        justifyContent: "center",
        alignContent: "center",
    }),
    title: {
    }
}));

export default function NavButton(props) {
    const classes = useStyles(props);
    const mobileView = props.mobileView;
    const timeout = props.slide;
    const title = props.title;

    return(
        <>
            <Slide direction="up" in={true} timeout={timeout}>
                    <Grid container className={classes.root}>
                        <Grid item><Typography variant={mobileView ? "subtitle2" : "h6"}>{title}</Typography></Grid>
                    </Grid>
            </Slide>
        </>
    )
}