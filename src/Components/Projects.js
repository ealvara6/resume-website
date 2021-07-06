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
    noticeInfo: {
        borderStyle: "solid",
        borderRadius: 8,
        borderColor: theme.palette.info.main,
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
    },
    container: {
        [theme.breakpoints.down("lg")]: {
            justify: "flext-start",
        },
        justifyContent: "center",
    },
    header: {
        [theme.breakpoints.up("lg")]: {
            marginBottom: theme.spacing(10),
        },
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(3),
    },
    title: {
            fontSize: 25,
        fontWeight: theme.typography.fontWeightBold,
    },
    body: {
            fontSize: 16,
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

                <Grid container className={classes.container}>
                        <Grid item xs={12} lg={3} className={classes.project}>
                            <Box marginBottom="15px">
                                <Typography variant="h6" className={classes.title}>Top Headline News</Typography>
                                <Typography variant={mobileView ? "body1" : "caption"}> <a href="https://news-website-py895.ondigitalocean.app/" target="_blank" rel="noreferrer">news-website-py895.ondigitalocean.app</a></Typography>
                            </Box>

                            <Typography variant="body2" className={classes.body}>
                            I recently created a single page application using React.js for the front-end and Node.js for the back-end which makes API calls to the <a href="https://newsapi.org/">News API</a>. It receives top news headlines from multiple news sources across the world and separates them by categories from which you can filter.
                            </Typography>
                            <Grid container style={{justifyContent: "center"}}>
                                <Grid item xs={11} className={classes.noticeInfo}>
                                        <Typography variant="h6">Important Note: </Typography>
                                        <Typography variant="subtitle2">The API that I use for this project does not allow the free developer plan to make requests for a production build. therefore, the website will only show you pre-defined data from the US, and the "change location" feature will not produce new articles. If you would like to see the full features of this website, please visit the Github repo for instructions on how to do so.</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className={classes.img}>
                                {mobileView ? <img src="/Images/news-website-mobile.png" alt="News-Website" /> : <img src="/Images/news-website.png" alt="News-Website" />}
                            </Box>
                        </Grid>
                    </Grid>



                    <Grid container className={classes.container}>
                        <Grid item xs={12} lg={3} className={classes.project}>
                            <Box marginBottom="15px">
                                <Typography variant="h6" className={classes.title}>Wallpaper Engine</Typography>
                                <Typography variant={mobileView ? "body1" : "caption"}> <a href="https://wallpaperengine.live" target="_blank" rel="noreferrer">wallpaperengine.live</a></Typography>
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
                                
                                {mobileView ? <img src="/Images/wallpaper-engine-mobile.png" alt="Wallpaper-Engine" /> : <img src="/Images/wallpaper-engine.png" alt="Wallpaper-Engine" />}
                            </Box>
                        </Grid>
                    </Grid>



                    <Grid container className={classes.container}>
                    {/* <Box display="flex" className={classes.project}> */}
                        <Grid item xs={12} lg={3} className={classes.project}>
                            <Typography variant="h6" className={classes.title}>Resume Website</Typography>
                            <Typography variant="body2" className={classes.body}>I created this website to display my resume and skills and to also show that if given a website design, I can implement it using html/css/javascript. This website is based on <a href="https://www.wix.com/website-template/view/html/2846?siteId=9dabe0d0-1603-4a04-9bd6-7d9d9ca9e9cb&metaSiteId=3e8b1a18-1c30-41cf-87ac-e18816787ea8&originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv&tpClick=view_button" target="_blank" rel="noreferrer">this</a> design and utilizes the React framework. </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Box className={classes.img}>
                                {mobileView ? <img src="/Images/website-design-mobile.png" alt="website-design" /> : <img src="/Images/website-design.png" alt="website-design" />}
                            </Box>
                        </Grid>
                    </Grid>
            </Grid>
        </Box>
    )
}