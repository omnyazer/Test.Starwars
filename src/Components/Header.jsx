import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderImage from '../StarWars/images/header-bg-2x.png';
import LogoImage from '../StarWars/images/logo.png';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.scrollY); //Position du défilement pour le parallax
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ position: 'relative', height: isMobile ? '45vh' :'100vh', overflow: 'hidden',marginBottom: '-4vh'}}>
            <img
                src={HeaderImage}
                alt="headerImage"
                style={{
                    width: '100%',
                    position: 'relative',
                    top: offset * 0.4 + 'px',
                    transition: 'top 0.4s linear',
                    height: '110%' 
                }}
            />
            <img
                src={LogoImage}
                alt="logoImage"
                style={{
                    position: 'absolute',
                    top: `calc(60% - ${offset * 0.3}px)` ,
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: isMobile ?'36vh' : '80vh',
                    height: isMobile ?'25vh' : '40vh',
                    transition: 'top 0.2s linear'
                }}
            />
        </div>
    );
};

export default Header;
