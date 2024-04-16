import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "../StarWars/images/r2d2_c3p0-2x.jpg"; 

function Section4() {
  const theme = useTheme();
  //Pour écran mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <Box sx={{ mt: '7vh',textAlign: 'center'}}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          A long time ago, in a galaxy far, far away…      
        </Typography >
        <img
          src={Image}
          alt="R2D2-C3P0"
          style={{ maxWidth: "100%", height: "auto", marginBottom: '20px', alignContent:'center' }}
        />
        <Typography variant="body1" sx={{p:5 , textAlign: 'left' }}>
        <strong><i>La Guerre des étoiles</i></strong> (titre original <strong><i>Star Wars</i></strong>, soit littéralement Guerres Stellaires) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. A long time ago, in a galaxy far, far away…Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l&apos;Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. Sans prétendre expliquer le succès du premier film (s&apos;il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus)&apos;:	
        </Typography>
      </Box>
    );
    }else if (!isMobile) { 
    return (
        <Box sx={{ p: 15,  display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4 , fontWeight: 'bold', textAlign: 'center' }}>
            A long time ago, in a galaxy far, far away…
          </Typography>
          <Box sx={{display: 'block', maxWidth: '80%',margin: 'auto'}}>
            <img
              src={Image}
              alt="R2D2-C3P0"
              style={{ paddingRight:'2vh', width: '300px', maxHeight: '300px', objectFit: 'contain', float: 'left' }} 
            />
        <Typography variant="body1" style={{ textAlign: 'justify', lineHeight: '1.7',textShadow: '1px 1px 2px gray' }}>
              <strong><i>La Guerre des étoiles</i></strong> (titre original <strong><i>Star Wars</i></strong>, soit littéralement Guerres Stellaires) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. A long time ago, in a galaxy far, far away…
              Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l&apos;Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. Sans prétendre expliquer le succès du premier film (s&apos;il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus):<br></br>
              - Il fait appel à des références connues et appréciées des jeunes de l&apos;époque&apos;: films de cape et d&apos;épée, westerns, péplums, contes de fées et même le Seigneur des Anneaux de J.R.R. Tolkien&apos;; cette œuvre n&apos;apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.
              <br></br>- Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de John Dykstra (qui a également participé au premier film de Star Trek), qui avait développé une nouvelle manière d&apos;animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
              <br></br>- Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d&apos;une ambiance que l&apos;action proprement dite.
              <br></br>- La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence).
            </Typography>
          </Box>
        </Box>
      );
    }
  }

  export default Section4;
