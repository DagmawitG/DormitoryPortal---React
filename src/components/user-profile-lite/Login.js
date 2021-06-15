// import React from "react";
// import {
//   Container,
//    Row,
//     Col, 
//   Card,
//   CardHeader,
//   Button,
//   CardBody,
//   Form,
//   FormGroup,
//   FormInput
// } from "shards-react";

// const Login = () => (
//    <Container fluid className="main-content-container px-4">
//      <Row >
//       <Col sm ={{ size : 8 , order : 2 , offset: 2}} md = {{ size : 10 , order : 1 , offset:1 }}>
    
//   <Card small className="mb-4 pt-3">
//     <CardHeader className="border-bottom text-center">
//      Login page
//     </CardHeader>
//     <CardBody>

   
//     <Form>
//       <FormGroup>
//         <label htmlFor="#username">Id_Number</label>
//         <FormInput id="#username" placeholder="idNumber" />
//       </FormGroup>
//       <FormGroup>
//         <label htmlFor="#password">Password</label>
//         <FormInput type="password" id="#password" placeholder="Password" />
//       </FormGroup>
//     </Form>
//     <Button type="submit">LogIn</Button>

//     </CardBody>
//   </Card>
//   </Col>
//   </Row>
//   </Container>
// );



// export default Login;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../images/avatars/image.webp';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dormitory Portal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // filter: 'blur(3px)',
  },
  // image: {
  //   backgroundImage: 'url(https://source.unsplash.com/random)',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundColor:
  //     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root} >
      <CssBaseline />
      {/* className={classes.image} */}
      <Grid item xs={12} sm={8} md={5}  component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="Id Number"
              name="id"
              autoComplete="id"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}