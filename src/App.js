import logo from './logo.svg';
import Axios from "axios";
import { useState } from 'react';
import './App.css';

function App() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState ("");
  const [username, setUername] = useState("");
  const [password, setPassword] = useState ("");
  const [loginStatus, setLoginStatus] = useState("");
 
  const register = () => {
    Axios.post("http://localhost:3000/register", {
      username: usernameReg,
      password: passwordReg,
     }).then((response) => {
        console.log(response);
     });
   };

   const login = () => {
      Axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
       }).then((response) => {
         if (!response.data.message) {
            setLoginStatus( response.data.message);
         } else {
            setLoginStatus (response.data[0].message);
         }
       });
     };
   
  return (
    <div className="App">
        <div className="registration">
           <h1>Registration</h1>
           <label>Username</label>
           <input type="text" onChange={(e) => { setUsernameReg(e.target.value); }}/><br/>
           <label>password</label>
           <input type="text" onChange={(e) => { setPasswordReg(e.target.value); }}/> <br />
           <button onClick={register} > Register</button>
        </div>
        
         <div class="main-background">
            <div class="form-container">
               <div style={{backgroundColor: '#fff', padding: '3rem 2rem;'}}>


               <div style={{backgroundColor: '#fff', padding: '3rem 2rem'}}>
            <div className="logo-container" style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                  <a style={{}} href="https://ibb.co/hfZGf9g">
                     <img width="190px" src="https://i.ibb.co/q5WH5jD/0-org-zoom.png" alt="0-org-zoom" border={0} />
                  </a>

                  <span style={{marginTop: '.5rem', fontWeight: 'bold', color: '#545454'}}>Bienvenido! empecemos</span>

                  <div style={{width: '100%', display: 'flex', flexDirection: 'column', marginTop: '2rem', paddingBottom: '1rem'}}>
                     <span style={{marginBottom: '.5rem', fontSize: '14px', fontWeight: 'bold', color: '#545454'}}>Email</span>
                     <input style={{padding: '.5rem 1rem', width: '100%'}} placeholder="Introduce tu email" />
                  </div>

                  <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                     <span style={{marginBottom: '.5rem', fontSize: '14px', fontWeight: 'bold', color: '#545454'}}>Contraseña</span>
                     <input placeholder="Introduce tu email" style={{padding: '.5rem 1rem', width: '100%'}} />
                  </div>

                  <div style={{marginTop: '2rem', width: '100%'}}>
                     <button style={{fontSize: '18px', fontWeight: 'border: none', width: '100%', backgroundColor: '#4066ef', color: '#fff', padding: '1rem 4rem', marginTop: '1rem'}}>Enviar</button>
                  </div>
                  <div style={{marginTop: '2rem', width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                     <div>
                        <input type="checkbox" />
                        <span>
                        Mantenme conectado
                        </span>
                     </div>
                     <div>
                        <a>Olvide mi contraseña</a>
                     </div>
                  </div>
                  <div style={{marginTop: '2rem'}}>
                     <span>
                        Nuevo Usuario?
                     </span>
                     <a>Registrate</a> </div>
                  </div>
               </div>



                  <div className="login">
                  <h1>Login</h1>
                  <input
                     type="text"
                     placeholder="Username…"
                     onChange = { (e) => {
                        setUername (e.target.value);
                     }}
                     /> <br/>
                     <input 
                        type="password"
                        placeholder="Password…"
                        onChange = { (e) => {
                           setPassword (e.target.value);
                        }}
                     />
                  <button onClick={login}>Login</button>
                  <h1> {loginStatus} </h1>
                  </div>







               </div>
            </div>
         </div>



     </div>
  );
}

export default App;
