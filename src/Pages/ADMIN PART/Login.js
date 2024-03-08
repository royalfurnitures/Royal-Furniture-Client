import * as React from 'react';
import { useState } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Redirect, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {LoginHandler , ClientOrigin} from "../../API/APIS";


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');
  let navigate =  useNavigate();

  const auth = (e) => {
    e.preventDefault()
    let data = {
      Email:email,
      Password:password 
      }
let options = {
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(data)
      }
let output = LoginHandler(options)
.then(res=>res.json())
   .then(response=>{
     // console.log("reaponse",response);
   
     if(response.login){     
         setEmail("");
         setPassword("");  
       // authenticate user and generate JWT token
        const token = response.token;
       const expires = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
       // set a cookie with the token and send response
         Cookies.set('mycookie', token, {expires , sameSite: 'none', secure: true });
        if(token){
         setError("");
         let urlToNavigate = `${ClientOrigin}/adminphoto`;
         window.open(urlToNavigate, '_blank', )
         }
     }
     else{
       setError(response.message);
     }
     
   })
  }

  return (
    <div className='fixed z-50 bg-white top-0 left-0 bottom-0 w-[100%]'>
    <CssVarsProvider>
      <main style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh"}}>
        <Sheet
          sx={{
            width: 400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography style={{textAlign: "center"}} level="h2" component="h1">
                <b>Royal Furnitures</b>
            </Typography>
            <Typography style={{textAlign: "center"}} level="h4" component="h1">
                <b>Welcome!</b>
            </Typography>
            <Typography level="body-sm">Sign in to continue.</Typography>
            <Typography level="body-sm" style={{color:"red"}}>{error ? error : null }</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              value={email}
              placeholder="johndoe@email.com"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={(e) => {setPassword(e.target.value)}}

            />
          </FormControl>

          <Button onClick={auth} sx={{ mt: 1 /* margin top */ }}>Log in</Button>
          
        </Sheet>
      </main>
    </CssVarsProvider>
    </div>
  );
}