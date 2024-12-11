import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";

const AppointmentForm = () => {
  const [doctor, setDoctor] = useState(null);
  const { id } = useParams();
  const Navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  const doctorDetails = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:8080/public/doctor/${id}`, {
        headers: {
          authorization: token,
        },
      });
      setDoctor(data.data);
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch doctor details");
    }
  };

  React.useEffect(() => {
    doctorDetails(id);
  }, [id]);

  const [appointmentData, setAppointmentData] = useState({
    doctor: id,
    disease: "",
    date: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submithandler = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/patient/appointment",
        appointmentData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      toast.success(res.data.message);
      setAppointmentData({
        doctor: id,
        disease: "",
        date: null,
      });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Appointment submission failed");
    }
  };

  // const handlejoin = () => {
  //   Navigate(`/room/${doctor?.roomid}`);
  // };

  return (
    <>
      {doctor && (
        <>
          <Grid container sx={{ mt: "20px", display: "flex", justifyContent: "space-evenly" }}>
            {/* Doctor Image */}
            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: "400px",
                  height: "500px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={doctor?.image}
                  alt={doctor?.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            </Grid>

            {/* Doctor Details */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">Name: {doctor?.name}</Typography>
              <Divider />
              <Typography variant="h6">{doctor?.desc}</Typography>
              <Divider />
              <Typography variant="h6">Email: {doctor?.email}</Typography>
              <Divider />
              <Typography variant="h6">Phone: {doctor?.contact}</Typography>
              <Divider />
              <Typography variant="h6">Fee: {doctor?.ammount}</Typography>
              <Typography variant="h6" sx={{ pt: "30px" }}>
                Expertise
              </Typography>
              <List>
                {doctor?.expertise?.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
              <Typography variant="h6">Available Time</Typography>
              <List>
                {doctor?.date?.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </List>
            </Grid>
          </Grid>

          {/* Appointment Form */}
          <Grid
            container
            sx={{
              mt: "50px",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Grid item xs={12} md={5} spacing={2}>
              <Typography
                variant="h4"
                sx={{
                  mb: "30px",
                  textAlign: "center",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Appointment Now
              </Typography>
              <TextField
                name="disease"
                label="Disease"
                value={appointmentData.disease}
                onChange={handleChange}
                fullWidth
                required
              />
              <DatePicker
                className="form-control"
                selected={appointmentData.date}
                onChange={(date) => setAppointmentData({ ...appointmentData, date })}
                placeholderText="Select a date"
                minDate={new Date()}
                required
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                onClick={submithandler}
                sx={{ mt: "20px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default AppointmentForm;
