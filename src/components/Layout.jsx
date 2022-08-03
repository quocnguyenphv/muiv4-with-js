import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="h1">
            Hello
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "1rem",
              gap: "1rem",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/sign-up">Sign up</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Container style={{ minHeight: "85vh" }}>{children}</Container>
      <footer>
        <Box>
          <Typography variant="body2" style={{ textAlign: "center" }}>
            Hello 2022
          </Typography>
        </Box>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
