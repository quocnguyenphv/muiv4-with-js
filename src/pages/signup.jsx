import React from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const signUpSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(3).max(20),
    email: Yup.string().email().required("Email is required"),
    dob: Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is not valid"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords not match."),
  });
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6" component="h1" align="center">
        Sign up
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          dob: "",
          gender: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Box
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <FormControl
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  width: "50%",
                }}
              >
                {/* Name input*/}
                <Typography variant="body1">Name</Typography>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  type="text"
                  variant="outlined"
                />
                {errors.name && touched.name && errors.name}

                {/* Date of birth and gender input*/}
                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box>
                    <Typography variant="body1">Date of birth</Typography>
                    <TextField
                      name="dob"
                      type="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dob}
                      variant="outlined"
                    />
                    {errors.dob && touched.dob && errors.dob}
                  </Box>
                  <Box>
                    <Typography variant="body1">Gender</Typography>
                    <Select
                      name="gender"
                      value={values.gender}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"None"}>None</MenuItem>
                    </Select>
                    {errors.gender && touched.gender && errors.gender}
                  </Box>
                </Box>

                {/* Phone input */}
                <Typography variant="body1">Phone</Typography>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  name="phone"
                  variant="outlined"
                />
                {errors.phone && touched.phone && errors.phone}

                {/* Email address input */}
                <Typography variant="body1">Email</Typography>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  type="email"
                  variant="outlined"
                />
                {errors.email && touched.email && errors.email}
              </FormControl>

              <FormControl
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  flex: 1,
                }}
              >
                {/* Password input*/}
                <Typography variant="body1">Password</Typography>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  type="password"
                  variant="outlined"
                />
                {errors.password && touched.password && errors.password}

                <Typography variant="body1">Confirm password</Typography>
                <TextField
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  type="password"
                  variant="outlined"
                />
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </FormControl>
            </Box>

            <Button
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default SignUp;
