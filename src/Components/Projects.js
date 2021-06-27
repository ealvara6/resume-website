import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("lg")]: {
            marginLeft: theme.spacing(2),
        },
        marginTop: theme.spacing(10),
    },
    container: {
        [theme.breakpoints.down("lg")]: {
            justify: "flext-start",
        },
        justifyContent: "center",
    },
    header: {
        [theme.breakpoints.up("lg")]: {
            // marginLeft: theme.spacing(30),
            marginBottom: theme.spacing(10),
        },
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(3),
    },
    title: {
        // [theme.breakpoints.down("lg")]: {
            fontSize: 25,
        // },
        fontWeight: theme.typography.fontWeightBold,
    },
    body: {
        // [theme.breakpoints.down("lg")]: {
            fontSize: 16,
        // },
        lineHeight: "1.7",
    },
    project: {
        marginBottom: theme.spacing(10)
    },
    img: {
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center",
            marginBottom: theme.spacing(10),
        },
        display: 'flex',
        justifyContent: "flex-end"
    }
}));

export default function Projects(props){
    const classes = useStyles();
    const mobileView = props.mobileView;

    return(
        <Box className={classes.root}>
            <Grid container xs={12} lg={12} className={classes.container}>
                <Grid container xs={12} lg={12} justify="center">
                    <Grid item xs={12} lg={9}>
                        <Typography variant="h4" className={classes.header}>Projects</Typography>
                    </Grid>
                </Grid>

                    {/* <Box display="flex" className={classes.project}> */}
                    <Grid container className={classes.container}>
                        <Grid item xs={12} lg={3} className={classes.project}>
                            <Box marginBottom="15px">
                                <Typography variant="h6" className={classes.title}>Wallpaper Engine</Typography>
                                <Typography variant={mobileView ? "body1" : "caption"}> <a href="https://wallpaperengine.live" target="_blank">wallpaperengine.live</a></Typography>
                            </Box>

                            <Typography variant="body2" className={classes.body}>
                                I am currently working on a website that allows you to download and save images that can be used as wallpapers for your desktop and/or mobile devices. <br />
                                The technologies I am currently using are: <br />
                                <ul>
                                    <li>Front-end: React.js</li>
                                    <li>Middleware: Node.js</li>
                                    <li>Database: MongoDB</li>
                                </ul> <br />
                                The features I have currently implemented are: <br />
                                <ul>
                                    <li>User creation with authentication token (JWT)</li>
                                    <li>Favoriting system</li>
                                    <li>restful API functions</li>
                                    <li>Image downloading</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className={classes.img}>
                                
                                {mobileView ? <img src="/Images/wallpaper-engine-mobile.png" /> : <img src="/Images/wallpaper-engine.png" alt="" />}
                            </Box>
                        </Grid>
                    </Grid>
                    {/* </Box> */}

                    <Grid container className={classes.container}>
                    {/* <Box display="flex" className={classes.project}> */}
                        <Grid item xs={12} lg={3} className={classes.project}>
                            <Typography variant="h6" className={classes.title}>Resume Website</Typography>
                            <Typography variant="body2" className={classes.body}>I created this website to display my resume and skills and to also show that if given a website design, I can implement it using html/css/javascript. This website is based on <a href="https://www.wix.com/website-template/view/html/2846?siteId=9dabe0d0-1603-4a04-9bd6-7d9d9ca9e9cb&metaSiteId=3e8b1a18-1c30-41cf-87ac-e18816787ea8&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button" target="_blank">this</a> design and utilizes the React framework. </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className={classes.img}>
                                {mobileView ? <img src="/Images/website-design-mobile.png" /> : <img src="/Images/website-design.png" alt="" />}
                            </Box>
                        </Grid>
                    </Grid>
                    {/* </Box> */}
                {/* </Grid> */}
            </Grid>
        </Box>
    )
}