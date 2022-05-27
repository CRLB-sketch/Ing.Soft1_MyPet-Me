import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import { Heading, Button } from '@chakra-ui/react'
import '../styles/register.css'

let user_type = 'vet'

const Register = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [user, setUser] = useState('')
    const [correo, setCorreo] = useState('')
    const [contra1, setContra1] = useState('')
    const [contra2, setContra2] = useState('')

    const handleAddUser = (user_name, email, password, type_user) => {
        fetch('http://127.0.0.1:8000/add_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_name: user_name,
                correo: email,
                password: password,
                type_user: type_user,
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    alert('Se agrego el user')
                } else {
                    alert('Error con la solicitud')
                }
            })
            .catch((error) => {
                alert('Ocurrio un error inesperado: ' + error)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (contra1 === contra2) {
            handleAddUser(user, correo, contra1, user_type)
        } else {
            alert('no coinciden las contraseñas, vuelva a intentarlo')
        }
    }

    const getNombre = (name) => {
        setNombre(name)
    }

    const getApellido = (apellido) => {
        setApellido(apellido)
    }
    const getUser = (user) => {
        setUser(user)
    }
    const getCorreo = (correo) => {
        setCorreo(correo)
    }
    const getContra = (contra) => {
        setContra1(contra)
    }
    const getContras = (contras) => {
        setContra2(contras)
    }

    return (
        <div className="provisionalBackgorund">
            <div className="outerContainer container">
                <div className="infoContainer">
                    <div className="titleContainer">
                        <Heading className="title">Registro</Heading>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputComponent
                            getter={getNombre}
                            title="Nombre"
                            message="Ingresa tu nombre"
                        />
                        <InputComponent
                            getter={getApellido}
                            title="Apellidos"
                            message="Ingresa tus apellidos"
                        />
                        <InputComponent
                            getter={getUser}
                            title="Nombre de usuario"
                            message="Ingresa tu nombre de usuario"
                        />
                        <InputComponent
                            getter={getCorreo}
                            title="Correo"
                            message="Ingresa tu correo"
                        />
                        <InputComponent
                            getter={getContra}
                            title="Contraseña"
                            message="Ingresa tu contraseña"
                        />
                        <InputComponent
                            getter={getContras}
                            title="Cofirmar contraseña"
                            message="Confirma tu contraseña"
                        />
                        <Button
                            backgroundColor="#ea9a64"
                            _hover="rgb(174 213 142)"
                            _active={{
                                bg: 'rgb(174 213 142)',
                                borderColor: 'rgb(174, 213, 142)',
                            }}
                            color="#fff"
                            type="submit"
                            width="100%"
                            marginTop="10px"
                        >
                            Aceptar
                        </Button>
                    </form>

                    <p className="questionCont">
                        ¿Ya tienes cuenta?{' '}
                        <a href="./Login">
                            {' '}
                            <b className="highlight">Iniciar sesión</b>
                        </a>
                    </p>
                </div>

                <div className="innerContainer"></div>
            </div>
        </div>
    )
}

export default Register
