const express = require("express")

// const { celebrate } = require("celebrate")
// const cadastroMiddleware = require("./middlewares/cadastro")

const connection = require("./database/connection")

const {createVaga, createTalento} = require("./controllers/cadastro")
const {vagas, single, removeVaga} = require("./controllers/vagas")
const {talentos, removeTalento} = require("./controllers/talentos")


const routes = express.Router()

routes.get("/", (req, res) => {
    res.json(200)
})
routes.get("/vagas", vagas)
routes.get("/vagas/:id", single)

routes.get("/talentos", talentos)

routes.post("/cadastro/vagas", createVaga)
routes.post("/cadastro/talentos", createTalento)

routes.delete("/vagas/:id", removeVaga)
routes.delete("/talentos/:id", removeTalento)


module.exports = routes