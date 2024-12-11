import React from "react";
import Screen from "./Slider";
import { Grid, Typography, useTheme } from "@mui/material";
import h1_hero from "../../assets/h1_hero.png";

import Image from "mui-image";
import { Box } from "@mui/system";
import Gallery from "./Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faHospital, faStar, faUserMd } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            marginBottom: "60px",
          }}
        >
          <Screen />
        </Grid>

        {/* Why Choose Us Section */}
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "60px",
            borderRadius: "40px",
            gap: "10px",
          }}
        >
          <Grid
            container
            item
            sx={{
              minHeight: "80vh",
            }}
            xs={12}
          >
            {/* Left Image Section */}
            <Grid item xs={12} md={5}>
              <Image
                src={h1_hero}
                shift="top"
                distance="2rem"
                shiftDuration={320}
                fit="cover"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>

            {/* Right Content Section */}
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 4,
                backgroundColor: "#1c4971",
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  width: "500px",
                  marginTop: "50px",
                  fontSize: "35px",
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Why Choose Us?
              </Typography>

              {/* Icons with Text */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faBed} style={{ fontSize: "40px", color: "#00b4d8" }} />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  750+ Beds Facility Across Hospitals in Punjab
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                }}
              >
                <FontAwesomeIcon
                  icon={faHospital}
                  style={{ fontSize: "40px", color: "#00b4d8" }}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  The Biggest Network of Hospitals in the Region
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faStar} style={{ fontSize: "42px", color: "#00b4d8" }} />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  38+  Super - Specialities available with equipments
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faUserMd} style={{ fontSize: "40px", color: "#00b4d8" }} />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Highly Qualified and Experienced Doctors in India
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "40px",
              fontWeight: "bold",
              color:"white",
            }}
          ><br></br>
            Gallery
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Gallery />
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </>
  );
};

export default Homepage;