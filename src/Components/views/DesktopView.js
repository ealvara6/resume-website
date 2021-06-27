import {React, useState } from 'react';
import HomeComponent from '../HomeComponent';
import Resume from '../Resume';
import Projects from '../Projects';
import Contact from '../Contact';
import Box from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade'
import DesktopNavbar from '../Navbar/DesktopNavbar';
import MobileNavbar from '../Navbar/MobileNavbar';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[200],
    },
}));

export default function DesktopView(props) {
    const classes = useStyles();
    const mobileView = props.mobileView;
    const [show, setShow] = useState(true);
    const [menuShow, setMenuShow] = useState(false);
    const [showComponent, setShowComponent] = useState(props.component);

    const handleComponentChange = (component) => {
        if(showComponent !== component){
        setShow(false);
        setTimeout(() => {
            setShow(true);
            setShowComponent(component);
        }, 1000);
        }
    }

    const handleMenu = (showMenu, component) => {
        props.handleMenu(showMenu, component)
        if(showMenu)
            return setMenuShow(true);
        setMenuShow(false);
    };

    return(
        <>
                <Box className={classes.root}>
                    {mobileView ? <MobileNavbar handleMenu={handleMenu} componentChange={handleComponentChange} /> : <DesktopNavbar componentChange={handleComponentChange} /> }
                        <Fade in={show} timeout={show ? 2000 : 1000}>
                        <Box>
                            {showComponent === "home" ?<HomeComponent componentChange={handleComponentChange} mobileView={mobileView} />: null}
                            {showComponent === "resume" ? <Resume mobileView={mobileView} /> : null}
                            {showComponent === "projects" ? <Projects mobileView={mobileView} /> : null}
                            {showComponent === "contact" ? <Contact mobileView={mobileView} /> : null}
                        </Box>
                        </Fade>
                    <Footer mobileView={mobileView} />
                </Box>
        </>
    )
}