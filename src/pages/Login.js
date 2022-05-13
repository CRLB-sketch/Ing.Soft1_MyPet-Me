import React, { useState, useEffect } from 'react';
import InputComponent from './components/InputComponent'
import { Heading, Button} from '@chakra-ui/react';
import '../styles/register.css'
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'


const Login = () => {

    const cliente = "198690251047-sc69gvi8vqqt04c6oojqmj1kj5vght8m.apps.googleusercontent.com"
    const [showloginButton, setShowloginButton] = useState(true);
    
    const loginHandleSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);

    }
    
    const loginHandleFail = (res) => {
        console.log('Login failed:', res);
        setShowloginButton(false);

    }

    useEffect(() => {
        function start() {
            gapi.client.init({
                cliente: cliente,
                scope: ""
            })
        };
        gapi.load('client:auth2', start)
    });
    //var accessToken = gapi.auth.getToken().access_token;

    const [correo, setCorreo] = useState('')
    const [contra1, setContra1] = useState('')
    

    const getCorreo = (correo) => {
        setCorreo(correo)
    }
    const getContra = (contra) => {
        setContra1(contra)
    }

    

    const handleVerify = (email, password) => {
        fetch("http://127.0.0.1:8000/verify", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
            
        })
        .then(response => response.json())
        .then(result => {
            if(result.success){
                
                console.log(result.exist)
                console.log(result.data)
                if(result.exist === 0){
                    alert("USuario o contraseña no valido")
                    console.log('yes')
                }else{
                    alert("Bienvenido")
                    console.log('no')


                }
            }else{
                alert("Error con la solicitud")
            }
        })
        .catch(error => {
            alert("Ocurrio un error inesperado: " + error)
        })
    }

    const handleVerifyVet = (email, password) => {
        fetch("http://127.0.0.1:8000/verify_vet", {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
            
        })
        .then(response => response.json())
        .then(result => {
            if(result.success){
                
                console.log(result.exist)
                console.log(result.data)
                if(result.exist === 0){
                    //alert("USuario o contraseña no valido")
                    console.log('yes1')
                }else{
                    //alert("Bienvenido")
                    console.log('no1')


                }
            }else{
                alert("Error con la solicitud")
            }
        })
        .catch(error => {
            alert("Ocurrio un error inesperado: " + error)
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        handleVerify(correo, contra1);
        /*handleVerifyVet(correo, contra1);

        if(handleVerify.exist === 0 && handleVerifyVet.exist === 0){
            alert("USuario o contraseña no valido")
        }else if (handleVerify.exist === 0 && handleVerifyVet.exist != 0){
            alert('bienvenido Vet: ' + correo )
        }else if(handleVerifyVet.exist === 0 && handleVerify.exist != 0){
            alert('bienvenido User: ' + correo )
        }*/
      };

  return (
    <div className='provisionalBackgorund'>
            <div className='outerContainer container' >
                <div className='infoContainer'>
                    <div className='titleContainer'>
                        <Heading className='title'>Iniciar Sesión</Heading>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <InputComponent getter = {getCorreo} title='Correo'  message='Ingresa tu correo' />
                    <InputComponent getter = {getContra} title='Contraseña'  message='Ingresa tu contraseña' />
                    <Button
                            backgroundColor='#ea9a64'
                            _hover='rgb(174 213 142)'
                            _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
                            color='#fff'
                            type='submit' 
                            width='100%'
                            marginTop='10px' 
                             
                        >
                            Aceptar
                    </Button>
                    </form>

                    <p className='questionCont2'>or</p>
                    <div className='g-signin'>
                        <GoogleLogin
                            clientId={cliente}
                            buttonText="Login with Google"
                            onSuccess={loginHandleSuccess}
                            onFailure = {loginHandleFail}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                        />

                    </div>
                    <p className='questionCont'>¿No tienes cuenta? <a href='/register'><b className='highlight'>¡Registrate!</b></a></p>
                </div>
                <div className='innerContainer'>
                        
                    </div>
            </div>
        </div>
  )
}

export default Login
