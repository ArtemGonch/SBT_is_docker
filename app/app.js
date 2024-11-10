const express = require("express")
const { Pool } = require("pg")

const app = express()
const port = 3000

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "testdb",
  password: "mypassword",
  port: 5432,
})

app.get("/", async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query("SELECT NOW()")
    res.send(`Current time from database is: ${result.rows[0].now}`)
    client.release()
  } catch (err) {
    console.error(err)
    res.status(500).send("Ошибка подключения к базе данных")
  }
})

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
