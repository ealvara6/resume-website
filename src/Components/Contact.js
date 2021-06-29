import { React, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Success from './success';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = init(process.env.REACT_APP_USER_ID);

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("lg")]: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(10),
        },
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(30),
    },
    header: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    title: {
        [theme.breakpoints.down("md")]: {
            fontSize: 23,
        },
        fontWeight: theme.typography.fontWeightBold,
    },
    contact: {
        marginBottom: theme.spacing(5)
    },
    info: {
        marginBottom: theme.spacing(2),
    },
    button: {
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(3),
        },
        marginTop: theme.spacing(3),
        width: 125,
        height: 125,
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "thin",
    },
    field: {
        marginTop: theme.spacing(3),
    },
}))

export default function Contact(props){
    const classes = useStyles();
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isEmail, setIsEmail] = useState(true);
    const [showSuccess, setShowSuccess] = useState(false);
    const [viewPort, setViewPort] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleViewPort);

        return () => {
            window.removeEventListener("resize", handleViewPort);
        }
    }, []);

    const handleViewPort = () => {
        setViewPort(window.innerWidth);
    }


    const sendEmail = () => {
        if(data.email === "")
        {
            setIsEmail(false);
            return setShowSuccess(false);
        }

        if(isEmail === false)
            setIsEmail(true);

        var templateParams = {
            to_name: "Eduardo Alvarado",
            from_name: data.first_name + " " + data.last_name,
            from_email: data.email,
            message: data.message,
            subject: data.subject,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
        .then(function (res) {
            setShowSuccess(true);
        }, function (err) {
            console.log(err.text);
        });
    };

    const handleChange = (field, e) => {
        switch(field) {
            case "first_name": return setData({...data, first_name: e.target.value});
            case "last_name": return setData({...data, last_name: e.target.value});
            case "email": return setData({...data, email: e.target.value});
            case "subject": return setData({...data, subject: e.target.value});
            case "message": return setData({...data, message: e.target.value});
        };
    }

    return(
        <Box className={classes.root}>
            {console.log(viewPort)}
            <Grid container xs={12} justify="center">
                <Grid container xs={12} justify="center">
                    <Grid item xs={12} md={4}>
                            <Box className={classes.contact}>
                                <Typography variant="h4" className={classes.header}>Contact</Typography>
                                <Typography variant={viewPort < 1280 ? "body1" : "subtitle1"}>Looking forward to hearing from you</Typography>
                            </Box>
                            <Box className={classes.info}>
                                <Typography className={classes.title}>Phone</Typography>
                                <Typography variant={viewPort < 1280 ? "body1" : "subtitle1"}>832-853-5119</Typography>
                            </Box>

                            <Box className={classes.info}>
                                <Typography className={classes.title}>Email</Typography>
                                <Typography variant={viewPort < 1280 ? "body1" : "subtitle1"}>ealvara73@gmail.com</Typography>
                            </Box>

                    </Grid>

                    <Grid container xs={12} md={4} justify="flex-end">
                        {showSuccess ? <Grid item xs={12}>
                            <Box marginBottom="20px">
                                <Success message="Email Sent!" />
                            </Box>
                        </Grid> : null}
                        <Grid container>
                            <Grid item xs={12} md={6} className={classes.field}>
                                <TextField onChange={(e) => handleChange("first_name", e)} fullWidth={viewPort < 1280 ? true : false} variant="outlined" id="first-name" label="First Name" />
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.field}>
                                <TextField onChange={(e) => handleChange("last_name", e)} fullWidth={viewPort < 1280 ? true : false}  variant="outlined" id="last-name" label="Last Name" />
                            </Grid>
                            <Grid item xs={12} md={6}  className={classes.field}>
                                {isEmail ? <TextField onChange={(e) => handleChange("email", e)} fullWidth={viewPort < 1280 ? true : false}  required variant="outlined" id="email" label="Email" />
                                : <TextField onChange={(e) => handleChange("email", e)} fullWidth={viewPort < 1280 ? true : false}  error id="email-error" label="Email" defaultValue={data.email} variant="outlined" helperText="Please enter an email address." />}
                            </Grid>
                            <Grid item xs={12} md={6} className={classes.field}>
                                <TextField onChange={(e) => handleChange("subject", e)} fullWidth={viewPort < 1280 ? true : false}  variant="outlined" id="subject" label="Subject" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} md={6} >
                                <TextField className={classes.field} onChange={(e) => handleChange("message", e)} fullWidth={viewPort < 1280 ? true : false}  variant="outlined" id="message" label="Message" multiline rows={4} fullWidth />
                            </Grid>
                            <Grid container xs={12} md={6}>
                                <Box onClick={() => sendEmail()} display="flex" className={classes.button} justifyContent="center" alignItems="center" marginLeft="15px">
                                    <Typography variant="h6">Submit</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}