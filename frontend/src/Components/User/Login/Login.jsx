import React from "react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAsync } from "../slices/Loginslice";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Box } from "@mui/system";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const data = await dispatch(loginAsync(values));

      if (data.meta.requestStatus === "rejected") {
        toast.error(data.payload.message);
      }

      const token = localStorage.getItem("jwt");
      const is_admin = localStorage.getItem("is_admin");
      if (token && is_admin === "false") {
        navigate("/");
        window.location.reload("true");
        toast.success("Login successfully");
      }
      if (token && is_admin === "true") {
        navigate("/");
        window.location.reload("true");
        toast.success("Admin login successfully");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #e0f7fa, #0096c7)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <Container
          maxWidth="xs"
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "2rem",
            boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#0096c7" }}
          >
            Login
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            sx={{ color: "#6c757d", marginBottom: "1.5rem" }}
          >
            Please enter your credentials to access your account.
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="text"
                    label="Username"
                    variant="outlined"
                    name="username"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                      },
                    }}
                  />
                  <Box sx={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
                    <ErrorMessage name="username" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    type="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "5px",
                      },
                    }}
                  />
                  <Box sx={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
                    <ErrorMessage name="password" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#0096c7",
                      color: "white",
                      fontWeight: "bold",
                      padding: "12px 0",
                      fontSize: "1rem",
                      borderRadius: "5px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#3b8ad1",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Container>
      </Box>
    </>
  );
}

export default LoginForm;
