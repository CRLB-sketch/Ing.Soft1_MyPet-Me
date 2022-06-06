/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Backend
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

require('dotenv').config()

const express = require('express')
const app = express()
const { Client } = require('pg') // npm install pg
const bodyParser = require('body-parser')
const cors = require('cors') // npm install cors

app.use(bodyParser.json())
app.use(cors())

const db = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  port: process.env.PORT,
  password: process.env.DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
})
db.connect()

app.post('/start_search', (req, res) => {
  const sql = `
        SELECT * FROM vet
        WHERE emergency = ${req.body.emergency};        
    `
  db.query(sql, (err, row) => {
    res.json(row.rows)
  })
})

app.post('/apply_changues', (req, res) => {
  let sql = `
        SELECT * FROM vet v
    `
  if (req.body.selected_service !== '') {
    console.log('Seleccionar Servicios')
    sql += `
            INNER JOIN vet_services vs ON v.id = vs.vet_id
            INNER JOIN services s ON s.id = vs.service_id             
        `
  }
  sql += `WHERE emergency = ${req.body.emergency}`
  // Aplicar filtro de tipo de veterinarias
  if (req.body.vet_type !== 'Nada') {
    sql += `\nAND vet_type = '${req.body.vet_type}'`
  }
  // Aplicar filtro para mostrar servicios en específico
  if (req.body.selected_service !== '') {
    sql += `\nAND s.name = '${req.body.selected_service}'`
  }
  // Aplicar filtro para mostrar horarios disponibles
  if (req.body.time.length !== 0) {
    sql += `\nAND '${req.body.time}' >= v.open_time AND '${req.body.time}' <= v.close_time`
  }

  sql += `;`
  console.log('VET: ' + sql)
  db.query(sql, (err, row) => {
    res.json(row.rows)
  })
})

app.post('/name_filter', (req, res) => {
  // Hoy sí digo yo jaja
  console.log('FILTRO')
  const sql = `
        SELECT * FROM vet v
        WHERE (name ILIKE '%${req.body.search_vet}%' 
        OR vet_type ILIKE '%${req.body.search_vet}%');
    `
  console.log(sql)
  db.query(sql, (err, row) => {
    row
      ? res.json({ success: true, data: row.rows })
      : res.json({ success: false })
  })
})

app.post('/add_user', (req, res) => {
  console.log('AGREGAR USER')

  const sql = `
        INSERT INTO users(user_name, email, password, type_user, failed_temps)
        VALUES('${req.body.user_name}', '${req.body.correo}', '${req.body.password}','${req.body.type_user}', 0);
    `
  db.query(sql, (err, row) => {
    row ? res.json({ success: true }) : res.json({ success: false })
  })
})

app.post('/verify', (req, res) => {
  console.log('verificar usuarios')
  const sql = `
        SELECT email, password FROM users
        WHERE email = '${req.body.email}' AND password = '${req.body.password}' LIMIT 1;              
    `
  console.log(sql)
  db.query(sql, (err, row) => {
    row
      ? res.json({
          success: true,
          data: row.rows,
          exist: row.rows.length,
        })
      : res.json({ success: false })
  })
})

app.post('/verify_vet', (req, res) => {
  console.log('verificar veterinarios')
  const sql = `
        SELECT email, password FROM users
        WHERE email ILIKE '${req.body.email}' AND password ILIKE '${req.body.password}'AND type_user LIKE 'vet' AND email IS NOT NULL AND password IS NOT NULL;              
    `
  console.log(sql)
  db.query(sql, (err, row) => {
    row
      ? res.json({
          success: true,
          data: row.rows,
          exist: row.rows.length,
        })
      : res.json({ success: false })
  })
})

app.get('/get_vets', (req, res) => {
  console.log('Obtener todos los veterinarios')

  const sql = 'SELECT * FROM vet v INNER JOIN location l ON v.id = l.vet_id;'
  db.query(sql, (err, row) => {
    row
      ? res.json({ success: true, data: row.rows })
      : res.json({ success: false, data: err })
    console.log(row + ' - ' + err)
  })
})

app.listen(8000, () => {
  console.log('Starting MY PET AND ME in the port 8000')
})
