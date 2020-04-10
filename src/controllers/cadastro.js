const connection = require("../database/connection")
const crypto = require("crypto")
const moment = require("moment")

module.exports = {
    async createVaga(req, res) {
        try {
            const { empresa, uf, cidade, vaga, resumo, link, contato, descricao } = req.body;
            const id = crypto.randomBytes(3).toString("HEX")
            let time = moment().format("YYYYMMDDhhmms")
            await connection("vagas").insert({id, time, empresa, uf, cidade, vaga, resumo, link, contato, descricao})
        } catch (err) {
            alert("erro")
        }
            res.json(res.status)
    },
    async createTalento(req, res) {
        try {
            const {nome, cidade, telefone, email} = req.body;
            await connection("talentos").insert({
                nome,
                cidade,
                telefone,
                email
            })
            res.json("Ok")
        } catch (err) {
            res.json(res.status)
        }
    }
}