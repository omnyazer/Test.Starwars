import { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ADSImage from "../StarWars/images/ads.jpg";
import backgroundImage from '../StarWars/images/header-bg-2x.png'; 

function Section2() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY; 
    setOffsetY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      p: 7,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: `${100 + offsetY * 0.1}%`, //Effet parallax
      backgroundPosition: 'center',
    }}>
      {isDesktop ? (
        <Box sx={{ display: "flex", alignItems:"center", justifyContent: "center",color: '#fff'}}>
          <Box sx={{ flex: 1, pr: 15, ml: 15, }}>
            
          <Typography variant="body1" sx={{ fontFamily: '"Open Sans", sans-serif', lineHeight: 2 }}>
            <strong>Star Wars, The Force Awakens</strong><br /><br />
            Plus de 30 ans après la bataille d&apos;Endor, la galaxie n&apos;en a pas fini avec la tyrannie et l’oppression. Les membres de l&apos;Alliance rebelle, devenus la « Résistance », combattent les vestiges de l&apos;Empire réunis sous la bannière du « Premier Ordre ».<br /><br />
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d&apos;épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br /><br />
            Plus de 30 ans après la bataille d&apos;Endor, la galaxie n&apos;en a pas fini avec la tyrannie et l’oppression. Les membres de l&apos;Alliance rebelle, devenus la « Résistance », combattent les vestiges de l&apos;Empire réunis sous la bannière du « Premier Ordre ».<br /><br />
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d&apos;épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br /><br />
            Plus de 30 ans après la bataille d&apos;Endor, la galaxie n&apos;en a pas fini avec la tyrannie et l’oppression. Les membres de l&apos;Alliance rebelle, devenus la « Résistance », combattent les vestiges de l&apos;Empire réunis sous la bannière du « Premier Ordre ».<br /><br />
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d&apos;épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br /><br />
          </Typography>            
          </Box>
          <Box sx={{ flex: 1, pl: 2, position: 'sticky' , top: '10vh', alignSelf: 'flex-start', ml: '15vh' }}>
            <img
              src={ADSImage}
              alt="ADSImage"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body1" sx={{ fontFamily: '"Open Sans", sans-serif',color: '#fff' }}>
          <strong>Star Wars, The Force Awakens</strong><br /><br />
            Plus de 30 ans après la bataille d&apos;Endor, la galaxie n&apos;en a pas fini avec la tyrannie et l’oppression. Les membres de l&apos;Alliance rebelle, devenus la « Résistance », combattent les vestiges de l&apos;Empire réunis sous la bannière du « Premier Ordre ».<br /><br />
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d&apos;épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br /><br />
            Plus de 30 ans après la bataille d&apos;Endor, la galaxie n&apos;en a pas fini avec la tyrannie et l’oppression. Les membres de l&apos;Alliance rebelle, devenus la « Résistance », combattent les vestiges de l&apos;Empire réunis sous la bannière du « Premier Ordre ».<br /><br />
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d&apos;épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br /><br />
            Plus de 30 ans après la bataille d&apos;Endor, la galaxie n&apos;en a pas fini avec la tyrannie et l’oppression. Les membres de l&apos;Alliance rebelle, devenus la « Résistance », combattent les vestiges de l&apos;Empire réunis sous la bannière du « Premier Ordre ».<br /><br />
            Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d&apos;épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br /><br />
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Section2;
