import React, { useState } from 'react'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'

const icon = new Icon({
    iconUrl: '/icons8-marker-a-48.png',
    iconSize: [48, 48],
})

const centerPosition = [14.6050635, -90.4893286]

const MapComponent = ({ vets, setSelectedVet }) => {
    const AddVet = ({ vet }) => {
        const positions = [vet['long'], vet['lat']]

        const handle = () => {
            setSelectedVet(vet)
        }

        return (
            <div onClick={handle}>
                <Marker position={positions} icon={icon}>
                    <Popup>
                        {vet['name']} <br />{' '}
                        <button onClick={handle} className="btn-marker">
                            VER MAS
                        </button>
                    </Popup>
                </Marker>
            </div>
        )
    }

    return (
        <>
            <MapContainer
                center={centerPosition}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {vets.map((vet) => (
                    <AddVet vet={vet} />
                ))}
            </MapContainer>
        </>
    )
}

export default MapComponent
