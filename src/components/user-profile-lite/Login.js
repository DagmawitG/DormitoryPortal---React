import React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/avatars/AddisAbaba.jpg';
import axios from '../../axios';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import {Form, FormInput  } from "shards-react";
import { Form, Input, Button, Checkbox } from 'antd';


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
    backgroundImage: `url(${ Image })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // filter: 'blur(3px)',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  width: {
    margin: theme.spacing(0,45),
    
  },
}));

export default function Login() {
  const classes = useStyles();
  
    // const [ values, setValues ] = useState({
    //   user_id: '',
    //   user_password: ''
    // });
    const history = useHistory();
  
    const handleLogin = (values) => {
      console.log("login attempted");

      //values.preventDefault();
      console.log(values.user_id)
  
      axios
        .post('login', {
          user_id: values.user_id,
          user_password: values.user_password
        })
        .then(res =>
        {
          console.log(res.data[1])
          console.log(res.data[0].token)
          // document.cookie = `token=${res.data.token};`
          localStorage.setItem('REACT_TOKEN_AUTH', res.data[0].token);

          if (res.data[1].role === 'student') {
            // localStorage.setItem('user_id', res.data.user_id);
            localStorage.setItem('role', 'student');
            
  
            history.push('/blog-posts');
          } else {
            // localStorage.setItem('user_id', res.data.user_id);
  
            localStorage.setItem('role', 'admin');
            
            history.push('/Sent_request');
          }
        })
        .catch(error => {
          console.log(error);
          
        });
    };

  return (
    <>
      {/* <img src={window.location.origin + '/wave.png'}/>      */}
    <Card>
    <Grid component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={2} sm={3} md={4} className={classes.width} component={Paper} spacing={5} elevation={6} square>
      {/* <div class="img">
      <img src={window.location.origin + '../../images/avatars/Addis-Ababa-University.jpg'}/>     

         
      </div> */}
      <div className={classes.paper} >
      <Typography component="h1" variant="h5">
            Welcome To Addis Ababa University
          </Typography>
          <Avatar className={classes.avatar} >
            <img
                style={{ maxWidth: "35px" }}
                src={require("../../images/avatars/Addis-Ababa-University.jpg")}
                alt="Addis Ababa University"
              />
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
        <form className={classes.form}>
          
              <Form initialValues={{}} onFinish={handleLogin}>
              <Form.Item
                name="user_id"
                rules={[{ required: true, message: "Please input your i" }]}
              >
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
              </Form.Item>

              <Form.Item
                name="user_password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
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
              </Form.Item>

              <Form.Item >
              <input type="submit" class="btn" value="Login"/>
              </Form.Item>
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
            </Form>
              </form>
          </div>
          </Grid>
      </Grid>
      </Card>
    

    </>
  );
}