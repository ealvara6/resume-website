import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("lg")]: {
            marginTop: theme.spacing(10),
        },
        marginLeft: theme.spacing(2),
    },
    body: {
        [theme.breakpoints.down("lg")]: {
            fontSize: 15,
        },
        lineHeight: 1.8,
        letterSpacing: 1,
        wordSpacing: 3,
        fontSize: 12,
    },
    header: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(5),
    },
    title: {
        [theme.breakpoints.down("lg")]: {
            marginBottom: theme.spacing(4),
        },
        fontWeight: theme.typography.fontWeightBold,
    },
    subtitle: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    divider: {
    [theme.breakpoints.up("lg")]: {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
    },
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    },
    list: {
        marginBottom: theme.spacing(1),
    },
}));


export default function Resume(props) {
    const classes = useStyles();
    const mobileView = props.mobileView;

    return(
            <Box className={classes.root}>
                    <Grid container justify xs={12} justify="center">
                        <Grid item xs={12} lg={8}>
                            <Typography variant="h4" className={classes.header}>Resume</Typography>
                        </Grid>
                    </Grid>


                        <Grid container className={classes.container} justify="center" xs={12}>
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h5" className={classes.title}>Work <br /> Experience</Typography>
                            </Grid>
                            <Grid container xs={12} lg={4}>
                                <Grid item xs={12} lg={3}>
                                    <Typography variant={mobileView ? "body2" : "caption"}>April 2021 - June 2021</Typography>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Typography variant={mobileView ? "h6" : "subtitle2"} className={classes.subtitle}>Web Developer Intern</Typography>
                                    <Typography className={classes.body}>I recently completed a web developer internship at a start-up called Conceptia. During my time there, I worked on creating functional react components as well as creating and implementing API methods. The project utilized React for the front end, Node.js/Express for the backend, and mySQL for the database. I was able to gain valuable experience working with other like minded-developers. I gained experience creating API methods with SQL statements using restful operations and implementing them to the frontend.</Typography>
                                </Grid>
                            </Grid>

                        <Grid item xs={12} className={classes.divider}><Divider /></Grid>

                        <Grid container justify="center">
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h5" className={classes.title}>Education</Typography>
                            </Grid>
                            <Grid container xs={12} lg={4}>
                                <Grid item xs={12} lg={3}>
                                    <Typography variant={mobileView ? "body2" : "caption"}>August 2016 - December 2020</Typography>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <Typography variant={mobileView ? "h6" : "subtitle2"} className={classes.subtitle}>C.T Bauer College of Business | <br /> Bachelor's Degree</Typography>
                                    <Typography className={classes.body}>During my time in the College of Business, I took an MIS intro course where the curriculum covered excel and its features. I discovered that I enjoyed thinking logically and creating functions that improved efficiency in the workflow. I then decided to take additional courses related to programming such as Intro into Object-Oriented Programming. During this course, I discovered how much I enjoyed programming and logical thinking which drove me to major in MIS. My electives consisted of more technical courses such as Intro Into Web Development, Intro Into LAMP stack, Advanced Database Management systems, and Advanced Transaction Processing Systems.</Typography>
                                </Grid>
                            </Grid>

                        <Grid item xs={12} className={classes.divider}><Divider /></Grid>

                        <Grid container justify="center">
                            <Grid item xs={12} lg={4}>
                                <Typography variant="h5" className={classes.subtitle}>Skills <br /> & Expertise</Typography>
                            </Grid>
                            <Grid container xs={12} lg={4}>
                                <Grid item xs={12} lg={3}></Grid>
                                <Grid item xs={12} lg={6}>
                                    <ul>
                                        <li className={classes.list}><Typography className={classes.body}>SQL – 2 years educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>MongoDB – 2 months educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>Nodejs/Express – 3 months work experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>React – 3 months work experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>Postman – 3 months work experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>HTML – 2 years educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>CSS – 2 years educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>Javascript – 2 years educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>Bootstrap Framework – ½ years educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>Git – ½ years educational experience</Typography></li>
                                        <li className={classes.list}><Typography className={classes.body}>Object-oriented Programming – 2 years educational experience</Typography></li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
            </Box>
    )
}