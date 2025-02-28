import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { Typography, TextField, Box, Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignIn = ({ setSignIn, signInWithGoogle }) => {
  return auth.currentUser ? (
    <Navigate to="/shop" />
  ) : (
    <Box>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Login
      </Typography>
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{ mt: 2, mb: 0 }}
      >
        Email Address
      </Typography>
      <TextField
        variant="standard"
        placeholder="Email Id"
        sx={{ width: "45ch" }}
      />
      <Typography
        variant="h6"
        component="div"
        gutterBottom
        sx={{ mt: 2, mb: 0 }}
      >
        Password
      </Typography>
      <TextField
        variant="standard"
        type="password"
        placeholder="password"
        sx={{ width: "45ch" }}
      />
      <br />
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#03045e",
          width: "25rem",
        }}
      >
        Login
      </Button>
      <Typography sx={{ mt: 2, mb: 2, textAlign: "center" }}>OR</Typography>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        sx={{
          width: "25rem",
        }}
        onClick={signInWithGoogle}
      >
        Login with Google
      </Button>
      <Divider sx={{ mt: 6, mb: 4 }} />
      <Typography gutterBottom>
        Do you want to Register?
        <Button sx={{ color: "#03045e" }} onClick={() => setSignIn(false)}>
          Click here
        </Button>
      </Typography>
    </Box>
  );
};

export default SignIn;
