/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Search: Para buscar las veterinarias que el usuario solicita
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 import React, { useState, useEffect, Component, useMemo } from 'react';
 import OptionComponent from './OptionComponent'
 import CardComponent from './CardComponent'
 import { Heading, Button, 
        Input, 
        FormControl, 
        Select, 
        Slider, 
        RangeSlider, 
        RangeSliderFilledTrack, 
        RangeSliderTrack, 
        RangeSliderThumb, 
        SliderTrack, 
        SliderFilledTrack, 
        SliderThumb, 
        Box, 
        SliderMark, 
        Switch,
        Stack,
        RangeSliderMark,  
        Checkbox} from '@chakra-ui/react';
 import './search.css'
import InputComponent from './InputComponent';


 
 function Search({onCurrentPage}) {

  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');

  
  const [emergency, setEmergency] = useState(false);
  

  const getName = (name) => {
    setName(name)
  }

  useEffect(() => {
    getDataName();
  }, [])

  const getData = (setPosts) => {
    fetch('http://127.0.0.1:8000/start_search')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
      })
  }
  

  const getDataName= () => {
    fetch("http://127.0.0.1:8000/start_search", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: name,
            emergency: emergency
        })
    })
    .then(response => response.json())
    .then(data => {
      setPosts(data)
    })
  } 

  const getFilteredData= () => {
    fetch("http://127.0.0.1:8000/apply_filters", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            emergency: emergency
        })
    })
    .then(response => response.json())
    .then(data => {
      setPosts(data)
    })
  } 

  






  const [Cercania, setCercania] = useState('')
  const [Emergencia, setEmergencia] = useState('')
  const [Tarifas, setTarifas] = useState('')
  const [Rating, setRating] = useState('')
  const [Cantidad, setCantidad] = useState('')
  const [nombre, setNombre] = useState('')

  
  
 







    const target = event => {
      //alert(`Cercania: ${Cercania} & Especialidad: ${Emergencia} & Tarifas: ${Tarifas} 
      //& Rating: ${Rating} & Cantidad: ${Cantidad} `);
      alert(`name: ${emergency}`)
      event.preventDefault();
    }
   
     return (
      <div className='SearchBackgorund'>
        <div className='SearchOuterContainer container'>
          <div className='SearchInfoContainer'>
            <div className='titleContainer'>
              <Heading className='title'>Filtros</Heading>
            </div>
            
            <form onClick={event => getDataName()}>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Cercania</label>
                <Slider min={0} max = {45}  defaultValue = {0} step = {15} onChangeEnd = {(val) => console.log(val)}>
                  <SliderMark value={1} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1 km
                  </SliderMark>
                  <SliderMark value={15} mt = '1' ml = '-2.5' fontSize='smaller'>
                    2 km
                  </SliderMark>
                  <SliderMark value={30} mt = '1' ml = '-2.5' fontSize='smaller'>
                    4 km
                  </SliderMark>
                  <SliderMark value={45} mt = '1' ml = '-2.5' fontSize='smaller'>
                    5+ km
                  </SliderMark>
                  <SliderTrack>
                    <Box position='relative' right={10}/>
                    <SliderFilledTrack bg= 'orange'/>
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                  
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Emergencia</label>
                <Select placeholder='-Representa una emergencia' focusBorderColor={'rgb(174 213 142)'} onChange ={event => setEmergency(event.currentTarget.value)}>
                    <option value='true'>{'Si'}</option>
                    <option value='false'  >{'No'}</option>
                  </Select>
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Tarifas</label>
                <RangeSlider aria-label={['min', 'max']}  defaultValue = {[0, 10]} step = {25} onChangeEnd = {(val) => console.log(val)}>
                  <RangeSliderMark value={25} mt = '1' ml = '-2.5' fontSize='smaller'>
                    -Q.1k
                  </RangeSliderMark>
                  <RangeSliderMark value={50} mt = '1' ml = '-2.5' fontSize='smaller'>
                    Q2.4k
                  </RangeSliderMark>
                  <RangeSliderMark value={75} mt = '1' ml = '-2.5' fontSize='smaller'>
                    Q3.9k
                  </RangeSliderMark>
                  <RangeSliderMark value={100} mt = '1' ml = '-2.5' fontSize='smaller'>
                    Q.4k+
                  </RangeSliderMark>
                  <RangeSliderTrack>
                    <Box position='relative' right={10}/>
                    <RangeSliderFilledTrack bg= 'orange'/>
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0}/>
                  <RangeSliderThumb index={1}/>
                </RangeSlider>
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Cant. de veterinarios</label>
                <Slider min={0} max = {50}  defaultValue = {[0]} step = {10} onChangeEnd = {(val) => console.log(val)}>
                  <SliderMark value={12} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1 
                  </SliderMark>
                  <SliderMark value={20} mt = '1' ml = '-2.5' fontSize='smaller'>
                    1-2 
                  </SliderMark>
                  <SliderMark value={30} mt = '1' ml = '-2.5' fontSize='smaller'>
                    2-4 
                  </SliderMark>
                  <SliderMark value={40} mt = '1' ml = '-2.5' fontSize='smaller'>
                    5-7 
                  </SliderMark>
                  <SliderMark value={50} mt = '1' ml = '-2.5' fontSize='smaller'>
                    7+
                  </SliderMark>
                  
                  <SliderTrack>
                    <Box position='relative' right={10}/>
                    <SliderFilledTrack bg= 'orange'/>
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormControl>
            </div>

            <div className='SearchOuterContainer2'>
              <FormControl>
                <label>Servicios ofrecidos</label>
                <Stack pl={6} mt={1} spacing={1}>
                  <Checkbox>
                    Rayox X
                  </Checkbox>
                  <Checkbox>
                    Hospedaje
                  </Checkbox>
                  <Checkbox>
                    Grooming
                  </Checkbox>
                  <Checkbox>
                    Vacunación
                  </Checkbox>
                  <Checkbox>
                    Desparacitación
                  </Checkbox>
                  <Checkbox>
                    Castración
                  </Checkbox>
                  <Checkbox>
                    Operación
                  </Checkbox>
                  <Checkbox>
                    Emergencia
                  </Checkbox>
                </Stack>
              </FormControl>
            </div>

          
          
            <Button type='submit' 
              backgroundColor='#ea9a64'
              _hover='rgb(174 213 142)'
              _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
              color='#fff'
              width='100%'
              marginTop='10px'   
            >Aplicar Filtros</Button>
          

            </form>
          </div>
        </div>

        <div className='SearchOuterContainer3 container'>
          <div className='SearchInfoContainer'>
            <div className='titleContainer'>
              <Heading className='title'>Busqueda de veterinarias</Heading>
            </div>
          </div>
          <div className='SearchGridContainer'>
            
            <Input onChange={event => setName(event.currentTarget.value)} className='inputS' focusBorderColor='rgb(174 213 142)' placeholder='Ingrese el nombre de una veterinaria'/>
            <Button onClick={event => getDataName()} className='buttonS'
              backgroundColor='#ea9a64'
              _hover='rgb(174 213 142)'
              _active={{bg:'rgb(174 213 142)', borderColor:'rgb(174, 213, 142)'}}
              color='#fff'
              grid-column='8'
              grid-row='1'
            >	&#x1F50D; </Button>
          </div>

          <div className='CardsContainer'>
            {
              
              posts.map(post => {
                return(
                  <div key={post.id}>
                    <CardComponent title={post.name} link='./Popup' image='https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg'/>
                  </div>
                )
              })
            }
          </div>

        </div>




      </div>
     );
   }
   
 export default Search;
   

