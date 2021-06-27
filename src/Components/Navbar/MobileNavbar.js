import { React, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Menu from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[0],
    },
    icon: {
        '&:hover': {
            cursor: "pointer",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: 40,
        },
        fontSize: 40,
        marginRight: theme.spacing(1),
    },
    name: {
        '&:hover': {
            cursor: "pointer",
        },
        flexGrow: 1,
        marginRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightBold,
    },
    subtitle: {
        '&:hover': {
            cursor: "pointer",
        },
        flexGrow: 1,
        verticalAlign: 'bottom',
        marginTop: 5,
    },
}));


export default function MobileNavbar(props) {
    const classes = useStyles();

    const showMenuItems = () => {
        props.handleMenu(true);
    }

    const handleComponentChange = (component) => {
        props.componentChange(component);
        props.handleMenu(false, component);
    }


    return(
        <Box marginBottom="25px">
            <AppBar position="static" color="transparent" className={classes.root}>
                <Toolbar>
                    <FiberManualRecordIcon className={classes.icon} color="primary" onClick={() => handleComponentChange("home")} />
                    <Typography variant="h6" className={classes.name} onClick={() => handleComponentChange("home")}>Eduardo Alvarado</Typography>
                    {/* <Typography variant="subtitle2" className={classes.subtitle} onClick={() => handleComponentChange("home")}>Web Developer</Typography> */}

                    <Menu style={{ fontSize: 35 }} onClick={() => showMenuItems()} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}