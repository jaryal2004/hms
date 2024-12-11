import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function DoctorCard({ item }) {
  const { expertise, name, image, _id, desc } = item;

  return (
    <Card
      sx={{
        maxWidth: 350, // Increased the width of the card
        margin: '0 30px', // Reduced the space between cards
        boxShadow: 3,
        borderRadius: '10px', // Rounded corners for the card
      }}
    >
      <CardMedia
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 200, // Fixed card media height
        }}
        image={image}
        title={name}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifyContent: 'center', // Center-align the buttong 
        }}
      >
        <Button
          size="large"
          as={Link} to={`/form/${item._id}`}
          sx={{
            backgroundColor: '#0096c7', 
            color: 'white', // White text
            fontSize: '0.9rem', // Increased font size
            fontWeight: 'bold', // Bold text
            padding: '10px 20px', // Increased padding
            borderRadius: '20px', // Rounded corners
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Shadow for depth
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition effect
            '&:hover': {
              backgroundColor: '#3b8ad1', 
              transform: 'scale(1.05)', // Slightly enlarge on hover
              textDecoration: 'underline',
            },
          }}
        >
          Appointment
        </Button>
      </CardActions>
    </Card>
  );
}

