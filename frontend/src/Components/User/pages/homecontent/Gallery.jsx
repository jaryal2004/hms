import React from "react";
import Grid from "@mui/material/Grid";

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227_640.jpg",
    title: "Bed",
  },
  {
    img: "https://cdn.pixabay.com/photo/2013/02/09/04/19/surgery-79584_640.jpg",
    title: "Books",
  },
  {
    img: "https://cdn.pixabay.com/photo/2016/11/08/05/29/operation-1807543_640.jpg",
    title: "Sink",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_640.jpg",
    title: "Kitchen",
  },
  {
    img: "https://cdn.pixabay.com/photo/2013/02/24/01/17/surgery-85574_640.jpg",
    title: "Blinds",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/06/28/14/03/dental-2450751_640.jpg",
    title: "Chairs",
  },
  {
    img: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_640.jpg",
    title: "Laptop",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/04/19/20/10/test-tube-5065426_640.jpg",
    title: "Doors",
  },
];

export default function UniformCollage() {
  return (
    <Grid container spacing={2} sx={{ width: "100vw", justifyContent: "center", margin: 0, padding: 0 }}>
      {itemData.map((item, index) => (
        <Grid
          item
          key={index}
          sx={{
            width: "calc(25% - 16px)", // Adjust this to control how many images per row (calc accounts for the spacing)
            height: "400px", // Fixed height for each image
            overflow: "hidden",
            display: "flex", // Ensures images stay centered
            justifyContent: "center",
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Ensures image fits properly
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
