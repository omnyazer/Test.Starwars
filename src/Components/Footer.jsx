import { Stack, Box, Typography, useMediaQuery } from '@mui/material';
import imageTop from '../StarWars/images/stormtroopers-2x.jpg';
import imageBottom from '../StarWars/images/darthvader_2x.jpg';
import FbImage from '../StarWars/images/icon_facebook.png';
import InstaImage from '../StarWars/images/icon_instagram.png';
import TwitterImage from '../StarWars/images/icon_twitter.png';

function Footer() {
  //Mode bureau
  const isDesktop = useMediaQuery('(min-width:900px)');

  return (
    <Box component="footer" sx={{ width: '100%', mt: 4 }}>
      <Stack direction="column" alignItems="center">
        <img src={imageTop} alt="Top Image" style={{ maxWidth: '100%' }} />

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: isDesktop ? '320px' : '240px', 
            backgroundImage: `url(${imageBottom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {isDesktop && (
            <Typography
              sx={{
                position: 'absolute',
                top: 20,
                left: 0,
                right: 0,
                mt:5,
                textAlign: 'center',
                color: '#fff',
                fontSize: '20px',
                opacity: 0.5
              }}
            >
              <span style={{ fontWeight: 'bold' }}>TM Lucasfilm</span> Ltd. All Rights Reserved.
            </Typography>
          )}

          <Box
            sx={{
              position: 'absolute',
              top: isDesktop ? '20%' : '0',
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              justifyContent: isDesktop ? 'center' : 'space-between',
              alignItems: 'center',
              px: 6,
              color: '#fff',
            }}
          >
            <Stack
              direction="column"
              alignItems="flex-start"
              sx={{
                mb: '5vh',whiteSpace: 'nowrap',marginRight: isDesktop ? '20%' : 0}}
            >
              <Typography sx={{ fontSize: '10px', opacity: 0.5,lineHeight: 2 }}>Terms of Use</Typography>
              <Typography sx={{ fontSize: '10px', opacity: 0.5,lineHeight: 2}}>Legal Notices</Typography>
              <Typography sx={{ fontSize: '10px', opacity: 0.5,lineHeight: 2 }}>Privacy Policy</Typography>
            </Stack>

            <Stack
              direction="column"
              alignItems={isDesktop ? 'center' : 'flex-end'}
              sx={{ mb: '5vh', whiteSpace: 'nowrap', marginRight: isDesktop ? '30%' : 0}}
            >
              <Typography sx={{ fontSize: '10px', opacity: 0.5,lineHeight: 2 }}>Your California Privacy Rights</Typography>
              <Typography sx={{ fontSize: '10px', opacity: 0.5 ,lineHeight: 2}}>Star Wars at Disney Store</Typography>
              <Typography sx={{ fontSize: '10px', opacity: 0.5 ,lineHeight: 2}}>Privacy Policy</Typography>
            </Stack>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: isDesktop ? '35%' : '20px',
              left: isDesktop ? '60%' : '0',
              right: 0,
              display: 'flex',
              flexDirection: isDesktop ? 'column' : 'row',
              justifyContent: isDesktop ? 'flex-end' : 'space-between',
              alignItems: 'center',
              px: 5,
              color: '#fff',
              marginBottom: '1vh',
              whiteSpace: 'nowrap',
            }}
          >
            <Typography variant="body1" sx={{ fontSize: '10px', opacity: 0.5, mr: '3%' }}>
              FOLLOW STAR WARS
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, height: '30px', mt: '10px' }}>
              <img src={FbImage} alt="Facebook" />
              <img src={InstaImage} alt="Instagram" />
              <img src={TwitterImage} alt="Twitter" />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
