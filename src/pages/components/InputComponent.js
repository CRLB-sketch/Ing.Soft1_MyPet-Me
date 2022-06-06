import React from 'react'
import { Input, FormLabel } from '@chakra-ui/react'
import '../../styles/register.css'

const InputComponent = ({ getter, title, message }) => {
    const handleChange = (event) => {
        getter(event.target.value)
    }

    const colors = {
        fondo: 'rgb(223 225 225)',
        verde: 'rgb(174 213 142)',
        white: 'rgb(181 142 213)',
        naranja: 'rgb(37, 150, 190)',
        verde2: '#97db75',
        verde3: '#ace291',
        verde4: '#b6e69e',
    }

    return (
        <div className="outerContainer2">
            <FormLabel>{title}</FormLabel>
            <Input
                onChange={handleChange}
                focusBorderColor={colors.verde}
                placeholder={message}
            />
        </div>
    )
}

export default InputComponent
