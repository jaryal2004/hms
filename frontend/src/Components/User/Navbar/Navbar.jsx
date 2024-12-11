import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Drawor from "./Drawor";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/Loginslice";
import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.login);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const item = localStorage.getItem("jwt");
  const is_admin = localStorage.getItem("is_admin");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelog = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <AppBar sx={{ background: "#16a6c8", position: "sticky", top: "0px" }}>
        <Toolbar sx={{ justifyContent: "space-between", border: "none" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="primary"
            component={Link}
            to="/"
          >
            <img
              style={{
                borderRadius: "60%",
                width: 80,
                height: 70,
              }}
              src={logo}
              alt="logo"
            />
          </IconButton>

          {isMatch ? (
            <Drawor />
          ) : (
            <>
              <List
  sx={{
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    color: "white",
  }}
>
  <ListItem>
    <ListItemButton
      component={Link}
      to="/"
      sx={{ textAlign: "center" }}
    >
      <ListItemText
        primary="Home"
        primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.2rem" }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem>
    <ListItemButton
      component={Link}
      to="/contact"
      sx={{ textAlign: "center" }}
    >
      <ListItemText
        primary="Contact"
        primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.2rem" }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem>
    <ListItemButton
      component={Link}
      to="/about"
      sx={{ textAlign: "center" }}
    >
      <ListItemText
        primary="About"
        primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.2rem" }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem>
    <ListItemButton
      component={Link}
      to="/doctor"
      sx={{ textAlign: "center" }}
    >
      <ListItemText
        primary="Doctors"
        primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.2rem" }}
      />
    </ListItemButton>
  </ListItem>
  <ListItem>
    <ListItemButton
      component={Link}
      to="/services"
      sx={{ textAlign: "center" }}
    >
      <ListItemText
        primary="Services"
        primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.2rem" }}
      />
    </ListItemButton>
  </ListItem>

  <ListItem>
    <ListItemButton
      component={Link}
      to="/ambulance-booking"
      sx={{ textAlign: "center" }}
    >
      <ListItemText
        primary="Ambulance"
        primaryTypographyProps={{ fontWeight: "bold", fontSize: "1.2rem" }}
      />
    </ListItemButton>
  </ListItem>
</List>


              <Box sx={{ marginLeft: "auto" }}>
                {item && is_admin === "false" ? (
                  <>
                    <Tooltip title={localStorage.getItem("user")}>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <Avatar />
                      </Button>
                    </Tooltip>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem as={NavLink} to="/appointment">
                        Appointment
                      </MenuItem>
                      <MenuItem as={NavLink} to="/userprofile">
                        Profile
                      </MenuItem>
                      <MenuItem onClick={handlelog}>Logout</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                      justifyContent: "space-between",
                      alignContent: "center",
                    }}
                  >
                    <div>
                    <Button
  id="basic-button"
  aria-controls={open ? "basic-menu" : undefined}
  aria-haspopup="true"
  aria-expanded={open ? "true" : undefined}
  onClick={handleClick}
  sx={{
    color: "white", 
    fontWeight: "bold", // Bold text
    border: "2px solid white",
    fontSize:"16px", // Black border
    "&:hover": { 
      backgroundColor: "#8599a6", // Hover effect
      borderColor: "white",
      color:"white", // Ensure border remains black on hover
    },
  }}
>
  Login
</Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem
                          as={NavLink}
                          to="/login"
                          onClick={handleClose}
                        >
                          Login as User
                        </MenuItem>
                       <MenuItem
                          as={NavLink}
                          to="/doctorlogin"
                          onClick={handleClose}
                        >
                          Login as Doctor
                        </MenuItem>
                      </Menu>
                    </div>
                    <Button
                      variant="outlined"
                      color="secondary"
                      sx={{ marginLeft: "20px",
                        borderColor: "white", 
                        borderWidth: "2px", // Make border more prominent
                        color: "white",
                        fontWeight:"bold", // Text color
                        fontSize:"16px",
                        "&:hover": {
                          backgroundColor: "#8599a6", // Light blue background on hover
                          borderColor: "white",
                          color:"#e9f0f4",
                        },
                       }}
                      component={Link}
                      to="/SignUp"
                    >
                      Sign Up
                    </Button>
                  </Box>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
