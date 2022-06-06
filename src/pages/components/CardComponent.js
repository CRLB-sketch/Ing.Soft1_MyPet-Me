import React from 'react'
import { Image, Stack } from '@chakra-ui/react'
import '../../styles/search.css'

const CardComponent = ({ vet, image, setSeePopup, setSelectedVet }) => {
    const handleClick = () => {
        setSeePopup(true)
        setSelectedVet(vet)
    }

    return (
        <div className="CardCont" onClick={handleClick}>
            <Stack align="center">
                <Image
                    className="imgS"
                    borderRadius="10px"
                    boxSize="150px"
                    objectFit="cover"
                    src={image}
                    alt="Foto Veterinaria"
                />
                <a className="nombresS">
                    <b>{vet['name']}</b>
                </a>
            </Stack>
        </div>
    )
}

export default CardComponent
