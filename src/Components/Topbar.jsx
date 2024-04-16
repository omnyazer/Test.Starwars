import { Box } from '@mui/system';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";

function TopBar() {
  const theme = useTheme();
  //Tout écran hormis la version mobile
  const isNotMobile = useMediaQuery(theme.breakpoints.up("sm")); 

  if (!isNotMobile) {
    return null; 
  }

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(0, 0, 0, 0.8)' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="white" sx={{ fontSize: "10px", minWidth: "130px", marginLeft: "70px", fontWeight: "bold" }}> 
            LE COTÉ LUMINEUX
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontSize: "10px", minWidth: "130px", fontWeight: "bold" }}>
            LE COTÉ OBSCUR
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontSize: "10px", minWidth: "90px", fontWeight: "bold" }}>
            L’EMPIRE
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontSize: "10px", minWidth: "120px", fontWeight: "bold" }}>
            LES DROÏDES
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontSize: "10px", minWidth: "100px", fontWeight: "bold" }}>
            LES EWOKS
          </Typography>
          <Typography variant="body2" color="white" sx={{ fontSize: "10px", minWidth: "120px", marginRight: "70px", fontWeight: "bold" }}>
            JABBA LE HUTT
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
