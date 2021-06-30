import React from 'react';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: theme.shadows[0],
    },
    tool: {
        margin: theme.spacing(3)
    },
    icon: {
        '&:hover': {
            cursor: "pointer",
        },
        fontSize: 40,
        marginRight: theme.spacing(1),
    },
    name: {
        '&:hover': {
            cursor: "pointer",
        },
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
    button: {
        textTransform: 'capitalize',
    }
}));



export default function DesktopNavbar(props) {
    const classes = useStyles();

    const handleComponentChange = (component) => {
        props.componentChange(component);
    }

    return (
        <Box marginBottom="150px">
            <AppBar position="static" className={classes.root} color='transparent'>
                <ToolBar className={classes.tool}>
                        <FiberManualRecordIcon onClick={() => handleComponentChange("home")} className={classes.icon} color="primary" />
                        <Typography onClick={() => handleComponentChange("home")} className={classes.name} variant="h6">Eduardo Alvarado</Typography>
                        <Typography onClick={() => handleComponentChange("home")} className={classes.subtitle} variant="subtitle2">Web Developer</Typography>

                        <ButtonGroup size="large" variant="text">
                            <Button className={classes.button} onClick={() => handleComponentChange("resume")}>Resume</Button>
                            <Button className={classes.button} onClick={() => handleComponentChange("projects")}>Projects</Button>
                            <Button className={classes.button} onClick={() => handleComponentChange("contact")}>Contact</Button>
                        </ButtonGroup>
                </ToolBar>
            </AppBar>
        </Box>
    )
}