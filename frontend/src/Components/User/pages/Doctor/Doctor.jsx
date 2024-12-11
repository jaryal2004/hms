import React, { useState, useEffect } from "react";
import DoctorCard from "./Doctorcard";
import { Grid, Typography, Box } from "@mui/material";
import Loading from "../../Loading";
import { getdoctor } from "../../slices/getDoctor";
import { useDispatch, useSelector } from "react-redux";

const Doctor = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.doctor);
  const { doctor, isLoading, error } = datas;

  useEffect(() => {
    dispatch(getdoctor());
  }, [dispatch]);

  return (
    <>
      <Loading isloading={isLoading} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#ECF2FF", 
          padding: "1.5rem 0", // Added padding for spacing
        }}
      >
        {/* Title Section */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            marginTop: "3.5rem", // Reduced top margin
            fontSize: "2.6rem",
            fontWeight: "bold", 
            color: "#02052c", // White color for text for better contrast on dark background

          }}
        >
          Our Doctors
        </Typography>

        {/* Professionalism Line */}
        <Typography
          variant="body1"
          sx={{
            marginTop: "1rem", // Space between title and description
            fontSize: "1.25rem",
            color: "#4d4b4b", // Light gray color for better readability on dark background
            padding: "0 1rem", // Small padding for spacing
            maxWidth: "1675px", // Maximum width to keep text centered
            textAlign: "justify", // Justified alignment
          }}
        >
          At our esteemed facility, we take immense pride in our team of highly skilled and compassionate doctors, who are dedicated to providing exceptional healthcare services with professionalism and expertise. Each member of our medical team is not only well-qualified but also possesses years of valuable experience in their respective fields, ensuring that every patient receives the best possible care. Our doctors are committed to staying at the forefront of medical advancements, regularly updating their knowledge and adopting the latest techniques to deliver accurate diagnoses and effective treatments. Beyond their technical expertise, our team embodies a deep sense of empathy and understanding, creating a supportive and comforting environment for patients. 
        </Typography>

        {/* Doctor Cards Section */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            padding: "2rem 5rem", // Adjusted padding for layout
          }}
        >
          {doctor?.doctors?.map((item) => {
            return (
              <Grid
                item
                key={item._id}
                sx={{
                  padding: "5px",
                }}
                xs={12}
                sm={6}
                md={3}
              >
                <DoctorCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box> <br></br>
    </>
  );
};

export default Doctor;
