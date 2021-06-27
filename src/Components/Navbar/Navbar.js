import React from 'react';
import Box from '@material-ui/core/Box';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';


export default function Navbar(props) {
    const mobileView = props.mobileView;
    console.log(mobileView);

    const handleComponentChange = (component) => {
        props.componentChange(component);
    }

    return (
        <Box>
            {mobileView ? <MobileNavbar /> : <DesktopNavbar componentChange={handleComponentChange} />}
        </Box>
    )
}