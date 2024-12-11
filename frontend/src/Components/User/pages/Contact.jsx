import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactUsPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, message, contact };
    const response = await axios.post(
      'http://localhost:8080/patient/patientmessage',
      data
    );
    if (response.status === 200) {
      toast.success(response.data.message);
      navigate('/');
    } else {
      toast.error(response.data.message);
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [contact, setContact] = useState('');

  return (
    <Box
      py={4}
      sx={{
        background: 'linear-gradient(to right, #f9fafb, #e9effb)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left and Right Decorative Strips */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50px',
          height: '100%',
          background: '#a9ecfb',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50px',
          height: '100%',
          background: '#a9ecfb',
          zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontSize: '2.6rem',
            marginTop: '2rem',
            marginBottom: '1rem',
            textDecoration: 'none',
          }}
        >
          <b>Contact Us</b>
        </Typography>

        <Typography
          variant="body1"
          align="justify"
          gutterBottom
          sx={{
            fontSize: '1.3rem',
            marginTop: '1.4rem',
            marginBottom: '2rem',
            lineHeight: '1.8',
            color: '#4d4b4b',
            borderLeft: '4px solid #4d91f7',
            paddingLeft: '1rem',
          }}
        >
          At <b>Health Haven Hospital</b>, we prioritize your health and well-being. 
          Whether you have questions about our services, need assistance with an appointment, 
          or wish to provide feedback, we are here to help. Our dedicated team is committed to 
          addressing your concerns promptly and ensuring a seamless experience. You can reach 
          out to us via <b>phone</b>, <b>email</b>, or by visiting our facility. Alternatively, 
          use the contact form below to send us your message directly. We value your input and 
          look forward to serving you with the care and attention you deserve.
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1, fontSize: '2rem', color: '#3b8ad1' }} />
              <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>
                Email: healthhaven@gmail.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Phone sx={{ mr: 1, fontSize: '2rem', color: '#3b8ad1' }} />
              <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>
                Phone: +91-7018863328
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.8rem' }}>
            Address
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1, fontSize: '2rem', color: '#3b8ad1' }} />
                <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>
                  Rajpura
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" alignItems="center">
                <LocationOn sx={{ mr: 1, fontSize: '2rem', color: '#3b8ad1' }} />
                <Typography variant="body1" sx={{ fontSize: '1.3rem' }}>
                  Punjab
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={4}>
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.8rem' }}>
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  sx={{ fontSize: '1.2rem' }}
                  InputLabelProps={{ style: { fontSize: '1.2rem' } }}
                  InputProps={{ style: { fontSize: '1.2rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ fontSize: '1.2rem' }}
                  InputLabelProps={{ style: { fontSize: '1.2rem' } }}
                  InputProps={{ style: { fontSize: '1.2rem' } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  fullWidth
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  sx={{ fontSize: '1.2rem' }}
                  InputLabelProps={{ style: { fontSize: '1.2rem' } }}
                  InputProps={{ style: { fontSize: '1.2rem' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  sx={{ fontSize: '1.2rem' }}
                  InputLabelProps={{ style: { fontSize: '1.2rem' } }}
                  InputProps={{ style: { fontSize: '1.2rem' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    fontSize: '1rem',
                    padding: '0.5rem 1.3rem',
                    backgroundColor: '#0096c7',
                    '&:hover': { backgroundColor: '#3b8ad1',
                      transform: "scale(1.05)",
                     },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUsPage;
