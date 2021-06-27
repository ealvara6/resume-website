import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[200],
        paddingBottom: theme.spacing(9),
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
    },
    tags: {
        fontSize: 11,
        fontWeight: theme.typography.fontWeightLight,
    },
    divider: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.up("md")]: {
            marginLeft: theme.spacing(5),
            marginRight: theme.spacing(5),
        }
    },
    item: {
        [theme.breakpoints.down("md")]: {
            marginLeft: theme.spacing(2),
            marginBottom: theme.spacing(3),
        },
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    const mobileView = props.mobileView;

    return(
        <Box className={classes.root}>
            <Divider className={classes.divider} />
            <Grid container xs={12} justify="space-around">
                <Grid item xs={12} md={3} className={classes.item}>
                    <Typography variant={mobileView ? "h5" : "subtitle1"} className={classes.title}>Phone</Typography>
                    <Typography variant={mobileView ? "body1" : "subtitle2"}>832-853-5119</Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.item}>
                    <Typography variant={mobileView ? "h5" : "subtitle1"} className={classes.title}>Email</Typography>
                    <Typography variant={mobileView ? "body1" : "subtitle2"}>Eduardo.alvarado1234@ymail.com</Typography>
                </Grid>
                <Grid item xs={12} md={3} className={classes.item}>
                    <Typography variant={mobileView ? "h5" : "subtitle1"} className={classes.title}>Github</Typography>
                    <Typography variant={mobileView ? "body1" : "subtitle2"}>github.com/ealvara6</Typography>
                </Grid>
                <Grid item xs={12} md={1} className={classes.item}>  
                    <Typography className={classes.tags}>&copy; 2021 by Eduardo Alvarado</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}