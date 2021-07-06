import {React, useState, useEffect } from 'react';
import DesktopView from './Components/views/DesktopView';
import Box from '@material-ui/core/Box';
import MenuItems from './Components/Navbar/MenuItems';


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuItems, setMenuItems] = useState(false);
  const [component, setComponent] = useState("home");

  useEffect(() => {
    checkSize();
    window.addEventListener('resize', checkSize);

    return() => {
      window.removeEventListener('reize', checkSize);
    }
  })

  const checkSize = () => {
    if(window.innerWidth < 660)
      return setIsMobile(true);
    return setIsMobile(false);
  }

  const handleMenu = (showMenu, component) => {
    if(showMenu)
      return setMenuItems(true);
    setMenuItems(false);
    if(component !== "")
      setComponent(component);
  }

  return (
    <Box>
      {menuItems ? <MenuItems handleMenu={handleMenu} /> : <DesktopView mobileView={isMobile} handleMenu={handleMenu} component={component} />}
    </Box>
  );
}

export default App;
