import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Api
import { useLoginMutation } from "../../redux/api/auth/authApiSlice";

//UI Library
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Avatar, Box, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { setCredentials } from "../../redux/slices/auth/authSlice";

const Login = () => {
  // const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };
  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  const [showPassword, setShowPassword] = useState(false);

  // ==============================|| API CALLS ||============================== //
  // const [login] = useLoginMutation();

  // ==============================|| Handlers ||============================== //
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { accessToken, token } = await login(state).unwrap();
    // reduxDispatch(setCredentials({ accessToken, token }));
    navigate("/dash");
  };

  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <FormControl className="mx-2 my-3" fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                <OutlinedInput type="email" label="Email" placeholder="Enter email address" value={state.email} onChange={(e) => dispatch({ email: e.target.value })} />
              </FormControl>

              <FormControl className="mx-2 my-3" fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  fullWidth
                  label="password"
                  name="password"
                  value={state.password}
                  onChange={(e) => dispatch({ password: e.target.value })}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button type="submit" fullWidth variant="contained" className="mx-2 my-3">
                Log In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
