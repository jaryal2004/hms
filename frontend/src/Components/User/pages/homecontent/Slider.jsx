import React from "react";
import { Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../assets/h1_hero.png"

const StyledSliderArea = styled("div")`
margin:0px
  position: relative;
  background-image:url(${img}) ;
  background-size: cover;
  background-position: center;
  display:flex;

  align-items:center;

  opacity:0.8;
  height:100vh;

`;
const AnimatedSpan = styled('span')`
  animation: fade-in 2s ease-in-out infinite;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const StyledSingleSlider = styled("div")`
  display: flex;
  align-items: center;
`;

const StyledHeroCaption = styled("div")`
  text-align: justify;

`;

const Screen = () => {
    const words = ["health", "recovery", "well-being"];
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);
    
      return () => {
        clearInterval(interval);
      };
    }, []);
    const currentword=words[currentIndex]
    
    
  return (
    <StyledSliderArea>
      <div className="slider-active">
       
        <StyledSingleSlider>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={9} md={8} lg={9} xl={7}>
                <StyledHeroCaption>
                <Typography
  variant="subtitle1"
  sx={{
    fontSize: "48px",
    textAlign: "justify",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "transparent",
    background: "#020024",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    textFillColor: "transparent",
    textShadow: "0 0 8px rgba(0, 255, 255, 0.7), 0 0 20px rgba(0, 255, 255, 0.7)", // Glowing effect
    marginBottom: "20px",
    fontFamily: "'Montserrat', sans-serif",
  }}
  
  
>
  HEALTH HAVEN HOSPITAL
</Typography>

              
                  <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontSize: "35px",
                    fontWeight: "bold",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
                    marginTop: "0px",
                    textAlign:"justify",
                  }}
                  >
                    We care about your {' '}
                    <strong className="cd-words-wrapper">
                      <AnimatedSpan >{currentword}</AnimatedSpan>
                    </strong>
                  </Typography>
                  <Typography
                    variant="body1"
                    data-animation="fadeInLeft"
                    data-delay="0.1s"
                    fontSize={20}
                    sx={{
                      textAlign: "justify",
                    }}
                  >
                    Efficient hospital management system streamlining
                    operations, enhancing patient care, and optimizing resource
                    allocation.Your health is our priority experience seamless care with our advanced Hospital Management System. From booking appointments to accessing medical records, we simplify healthcare for you.
                  </Typography>
                 
                </StyledHeroCaption>
              </Grid>
            </Grid>
          </Container>
        </StyledSingleSlider>
      </div>
    </StyledSliderArea>
  );
};

export default Screen;

