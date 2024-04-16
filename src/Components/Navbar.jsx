import { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, ButtonBase, useTheme, useMediaQuery } from '@mui/material';
import backgroundImage from '../StarWars/images/header-bg-2x.png';
import menuImage from '../StarWars/images/menu.png';
import closeImage from '../StarWars/images/close.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme(); 
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
      <img
        src={closeImage}
        alt="Close"
        onClick={handleDrawerToggle}
        style={{ cursor: 'pointer', position: 'absolute', top: 20, left: 20, width: '30px', height: '30px' }}
      />
      <List style={{ marginTop: '40px' }}>
        {['LE COTÉ LUMINEUX', 'LE COTÉ OBSCUR', 'L’EMPIRE', 'LES DROÏDES', 'LES EWOKS', 'JABBA LE HUTT'].map((text) => (
          <ListItem key={text}>
            <ButtonBase component="div" style={{ width: '100%' }}>
              <ListItemText 
                primary={text} 
                primaryTypographyProps={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  variant: 'h6',
                  style: { fontFamily: 'sans-serif', fontSize: '1.2rem', marginTop: '30px' }
                }}
              />
            </ButtonBase>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {!isDesktop && !mobileOpen && (
        <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 9999 }}>
          <img
            src={menuImage}
            alt="Menu"
            onClick={handleDrawerToggle}
          />
        </div>
      )}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: '100%', height: '100%' } }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Navbar;
